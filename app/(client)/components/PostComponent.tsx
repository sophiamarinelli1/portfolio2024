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
import ArrowRight from "./Icons/ArrowRight";

interface Props {
	post: Post;
}

const PostComponent = ({ post }: Props) => {
	return (
		<div className="h-[128px] mx-4 my-2 rounded text-pink flex overflow-hidden text-6xl">
			<Link
				className="flex p-4 flex-col gap-2 relative w-full h-full items-center justify-center "
				href={`/posts/${post?.slug?.current}`}>
				<div className="flex flex-row items-center h-full w-full justify-between ">
					<h1 className=" w-full">{post?.title}</h1>
					<p className="">{new Date(post?.date).getFullYear()}</p>
				</div>
				<Image
					src={urlFor(post?.poster).url()}
					alt={post?.title}
					width={700}
					height={700}
					className="object-cover w-full h-full absolute top-0 z-[-50] mix-blend-multiply"
				/>
			</Link>
		</div>
	);
};

export default PostComponent;
