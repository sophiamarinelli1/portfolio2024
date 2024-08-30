import Link from "next/link";
import React from "react";
import { Post } from "../utils/interface";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface Props {
	post: Post;
}

const PostComponent = ({ post }: Props) => {
	return (
		<div className="">
			<Link href={`/posts/${post?.slug?.current}`}>
				<Image
					src={urlFor(post?.poster).url()}
					alt={post?.title}
					width={1000}
					height={1000}
				/>
				<h2>{post?.title}</h2>
				<p>{post?.date}</p>
				<p>{post?.excerpt}</p>
			</Link>
			<div>
				{post?.tags?.map((tag) => <span key={tag?._id}>{tag?.name}</span>)}
			</div>
		</div>
	);
};

export default PostComponent;
