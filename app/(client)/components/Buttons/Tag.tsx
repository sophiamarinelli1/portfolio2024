import React from "react";
import { Post } from "../../utils/interface";

interface Props {
	post: Post;
}

const Tag = ({ post }: Props) => {
	return (
		<div className="flex flex-wrap gap-2 w-full justify-end">
			{post?.tags?.map((tag) => (
				<div
					className=" inline-block text-note uppercase hover:bg-black hover:text-white"
					key={tag?._id}>
					{tag?.name}
				</div>
			))}
		</div>
	);
};

export default Tag;
