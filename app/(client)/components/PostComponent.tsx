import div from "next/link";
import React from "react";
import { Post } from "../utils/interface";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Carousel from "./Carousel";
import ButtonLarge from "./Buttons/ButtonLarge";
import Link from "next/link";
import ButtonSmall from "./Buttons/ButtonSmall";
import Tag from "./Buttons/Tag";

interface Props {
	post: Post;
}

const PostComponent = ({ post }: Props) => {
	return (
		<div className="w-full relative text-note uppercase">
			<Link className=" w-full h-screen" href={`/posts/${post?.slug?.current}`}>
				<Image
					src={urlFor(post?.poster).url()}
					alt={post?.title}
					width={1000}
					height={1000}
					className="w-full h-screen object-cover"
				/>
			</Link>
			<div className="absolute bottom-0 flex w-full justify-between text-note uppercase bg-white">
				<div className="flex flex-1 w-1/3 gap-2 pl-6 ">
					<p>{post?.title}</p>
				</div>
				<p className="flex-1 w-1/3 text-right pr-6">
					{new Date(post?.date).getFullYear()}
				</p>
			</div>

			{/* {post?.gallery && post.gallery.images?.length > 0 && (
				<Carousel post={post} />
			)} */}
		</div>
	);
};

export default PostComponent;
