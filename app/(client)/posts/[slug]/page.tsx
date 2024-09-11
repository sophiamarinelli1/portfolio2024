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
import ArrowRight from "../../components/Icons/ArrowRight";

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
			<div className="fixed top-6 left-6 z-[50]">
				<ButtonSmall href="/" title="Back"></ButtonSmall>
			</div>
			<div className="flex sm:flex-col md:flex-row lg:flex-row">
				{post?.gallery && post.gallery.images?.length > 0 && (
					<Carousel post={post} />
				)}
				<div className="sm:w-full md:w-full lg:w-1/2 m-auto">
					<div className={richTextStyles}>
						<div className="flex sm:flex-row md:flex-row flex-row gap-4 justify-between sm:w-full md:w-full lg:w-3/4">
							<h1 className="text-center">{post?.title}</h1>
							<p className="">{new Date(post?.date).getFullYear()}</p>
						</div>

						<div className="sm:w-full md:w-full lg:w-3/4">
							<PortableText value={post.body} />
						</div>
						<div className="sm:w-full md:w-full lg:w-3/4">
							<div className="flex sm:flex-col md:flex-row lg:flex-row flex-1 w-full gap-12">
								<p className="">With:</p>
								<div className="flex flex-col gap-1 w-full">
									{post.collaborators.map((collaborator, index) => (
										<div
											className="flex flex-row border-b border-black"
											key={collaborator._key || index}>
											<Link
												className="w-full hover:text-white hover:mix-blend-difference"
												href={collaborator.collaboratorUrl}
												target="_blank"
												rel="noopener noreferrer">
												{collaborator.collaboratorName}
											</Link>
											<ArrowRight />
										</div>
									))}
								</div>
							</div>
						</div>
						<div className="sm:w-full md:w-full lg:w-3/4">
							<Tag post={post}></Tag>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col gap-6">
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
// <Image
// 	src={urlFor(post?.poster).url()}
// 	alt={post?.title}
// 	width={1000}
// 	height={1000}
// 	className="w-1/2 h-screen absolute t-0 r-0 z-[-50] object-cover"
// />;

const richTextStyles = `
p-6
w-full
h-full
text-justify
prose-heading:text-2xl
flex
flex-col
items-center
gap-12
`;
