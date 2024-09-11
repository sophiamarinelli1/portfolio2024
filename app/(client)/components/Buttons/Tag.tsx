import React from "react";
import { Post } from "../../utils/interface";

interface Props {
	post: Post;
}

const Tag = ({ post }: Props) => {
	return (
		<div className="flex flex-wrap gap-2 ">
			{post?.tags?.map((tag) => (
				<div className="  text-note uppercase" key={tag?._id}>
					{tag?.name}
				</div>
			))}
		</div>
	);
};

export default Tag;
