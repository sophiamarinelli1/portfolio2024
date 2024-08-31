import div from "next/link";
import React from "react";
import { Post } from "../utils/interface";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Carousel from "./Carousel";
import ButtonLarge from "./Buttons/ButtonLarge";
import Link from "next/link";
import ButtonSmall from "./Buttons/ButtonSmall";

interface Props {
	post: Post;
}

const PostComponent = ({ post }: Props) => {
	return (
		<div className="w-full">
			<div className="flex flex-initial justify-between border-black border-b-4 py-1 text-2xl h-full w-full">
				{/* <Image
					src={urlFor(post?.poster).url()}
					alt={post?.title}
					width={1000}
					height={1000}
					className="w-1/2 h-1/2 object-contain"
				/> */}
				<h2 className="flex-1">{post?.title}</h2>
				<p className="flex-1 text-center">{post?.date}</p>
				{/* <p>{post?.excerpt}</p> */}
				{/* <p className="flex-1">{post?.collaborators}</p> */}
				{/* <div className="flex-1 px-2 text-right">
					{post?.tags?.map((tag) => <span key={tag?._id}>{tag?.name} </span>)}
				</div> */}
				<Link className="flex-1" href={`/posts/${post?.slug?.current}`}>
					<ButtonSmall title="View" />
				</Link>
			</div>
			{post?.gallery && post.gallery.images?.length > 0 && (
				<Carousel post={post} />
			)}
		</div>
	);
};

export default PostComponent;
