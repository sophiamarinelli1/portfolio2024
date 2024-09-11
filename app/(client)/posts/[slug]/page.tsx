import React from "react";
import Header from "../../components/Header";
import { client } from "@/sanity/lib/client";
import { Post } from "../../utils/interface";
import Link from "next/link";
import { PortableText } from "next-sanity";
import Carousel from "../../components/Carousel";
import VideoPlayer from "../../components/VideoPlayer";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import ButtonSmall from "../../components/Buttons/ButtonSmall";
import Tag from "../../components/Buttons/Tag";
import ButtonLarge from "../../components/Buttons/ButtonLarge";

interface Params {
	params: {
		slug: string;
	};
}

async function getPost(slug: string) {
	const query = `*[_type == "post" && slug.current == "${slug}"][0] {
		title,
		poster,
		slug,
		date,
		collaborators[]{
    		collaboratorName,
    		collaboratorUrl
  },
		_id,
		excerpt,
		body,
		tags[] -> {
			_id,
			slug,
			name
		},
		gallery {
			images[] {
				asset->{
					_ref,
					url
				}
			}
		},
		"videoBlogPost": videoBlogPost {
    	video {
      	asset->{
        playbackId,
        assetId,
        filename,
        url
      }
    }
  }
	}`;
	const post = await client.fetch(query);
	return post;
}

const page = async ({ params }: Params) => {
	const post: Post = await getPost(params?.slug);
	console.log(post, "posts on page");
	return (
		<div className="mx-auto w-full h-screen">
			<Image
				src={urlFor(post?.poster).url()}
				alt={post?.title}
				width={1000}
				height={1000}
				className="w-full h-screen absolute top-0 left-0 z-[-50] object-cover"
			/>
			<div className="fixed top-6 left-6">
				<ButtonSmall href="/" title="Back"></ButtonSmall>
			</div>

			<div className="h-screen w-full text-black flex gap-1 flex-col justify-center text-center text-7xl">
				<h1 className="">{post?.title}</h1>

				<div className="absolute bottom-0 flex  w-full justify-between text-note uppercase bg-white">
					<div className="flex sm:flex-col md:flex-row lg:flex-row flex-1 w-1/3 sm:gap-0 md:gap-2 lg:gap-2 pl-6 ">
						<p>With:</p>
						{post.collaborators.map((collaborator, index) => (
							<div className="" key={collaborator._key || index}>
								<Link
									className="w-full hover:text-white hover:mix-blend-difference"
									href={collaborator.collaboratorUrl}
									target="_blank"
									rel="noopener noreferrer">
									{collaborator.collaboratorName}
								</Link>
							</div>
						))}
					</div>
					<p className="flex-1 w-1/3 text-center">
						{new Date(post?.date).getFullYear()}
					</p>
					<div className="flex-1 w-1/3 pr-6">
						<Tag post={post}></Tag>
					</div>
				</div>
			</div>
			<PortableText value={post.body} />

			{/* {post?.gallery && post.gallery.images?.length > 0 && (
				<Carousel post={post} />
			)} */}

			<div className="flex flex-col gap-6">
				<div className="w-full"></div>
				<p>{post?.excerpt}</p>

				{post?.videoBlogPost?.video?.asset?.playbackId && (
					<VideoPlayer
						playbackId={post.videoBlogPost.video.asset.playbackId}
						title={post.videoBlogPost.video.asset.filename}
					/>
				)}
			</div>
		</div>
	);
};

export default page;

/* <div>
				{post?.tags?.map((tag) => (
					<Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
						<span>{tag.name}</span>
					</Link>
				))}
			</div> */
