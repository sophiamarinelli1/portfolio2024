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
		</div>
	);
};

export default PostComponent;
