import React from "react";
import { Post } from "../../utils/interface";

interface Props {
	post: Post;
}

const Tag = ({ post }: Props) => {
	return (
		<div className="flex flex-row gap-4">
			{post?.tags?.map((tag) => (
				<div className="text-xl border-4 border-gray px-2" key={tag?._id}>
					{tag?.name}
				</div>
			))}
		</div>
	);
};

export default Tag;
