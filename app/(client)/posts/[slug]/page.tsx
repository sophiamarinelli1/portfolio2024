import React from "react";
import Header from "../../components/Header";
import { client } from "@/sanity/lib/client";
import { Post } from "../../utils/interface";
import Link from "next/link";
import { PortableText } from "next-sanity";
import Carousel from "../../components/Carousel";
import VideoPlayer from "../../components/VideoPlayer";

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
		<div>
			<Header title={post?.title}></Header>
			<div>
				<span>{new Date(post?.date).toDateString()}</span>
			</div>
			<div>
				{post?.tags?.map((tag) => (
					<Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
						<span>{tag.name}</span>
					</Link>
				))}
			</div>
			<PortableText value={post.body} />
			{post?.gallery && post.gallery.images?.length > 0 && (
				<Carousel post={post} />
			)}
			{post?.videoBlogPost?.video?.asset?.playbackId && (
				<VideoPlayer
					playbackId={post.videoBlogPost.video.asset.playbackId}
					title={post.videoBlogPost.video.asset.filename}
				/>
			)}
		</div>
	);
};

export default page;
