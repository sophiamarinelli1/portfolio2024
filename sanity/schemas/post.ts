import { Rule } from "sanity";

export const post = {
	name: "post",
	title: "Post",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			title: "Poster",
			name: "poster",
			type: "image",
			options: {
				hotspot: true, // <-- Defaults to false
			},
			fields: [
				{
					name: "caption",
					type: "string",
					title: "Caption",
				},
				{
					name: "attribution",
					type: "string",
					title: "Attribution",
				},
			],
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
			},
			validation: (Rule: Rule) => Rule.required().error("required"),
		},
		{
			name: "date",
			title: "Date",
			type: "datetime",
			initialValue: () => new Date().toISOString(),
		},
		{
			name: "collaborators",
			title: "Collaborators",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{
							name: "collaboratorName",
							title: "Collaborator Name",
							type: "string",
						},
						{
							name: "collaboratorUrl",
							title: "Collaborator URL",
							type: "url",
						},
					],
				},
			],
		},
		{
			name: "excerpt",
			title: "Excerpt",
			type: "text",
			validation: (Rule: Rule) => Rule.max(200).error("Max 200 characters"),
		},
		{
			name: "body",
			title: "Body",
			type: "array",
			of: [
				{
					type: "block",
				},
				{
					type: "image",
					fields: [{ type: "text", name: "alt", title: "alt" }],
				},
			],
		},
		{
			name: "tags",
			title: "Tags",
			type: "array",
			of: [
				{
					type: "reference",
					to: [
						{
							type: "tag",
						},
					],
				},
			],
		},
		{
			name: "videoBlogPost",
			title: "Video blog post",
			type: "object",
			fields: [
				{
					title: "Video file",
					name: "video",
					type: "mux.video",
				},
			],
		},

		{
			name: "gallery",
			type: "object",
			title: "Gallery",
			fields: [
				{
					name: "media",
					type: "array",
					title: "Images/Videos",
					of: [
						{
							name: "image",
							type: "image",
							title: "Image",
							options: {
								hotspot: true,
							},
							fields: [
								{
									name: "alt",
									type: "string",
									title: "Alternative text",
								},
							],
						},
						{
							name: "video",
							type: "object",
							title: "Video",
							fields: [
								{
									name: "vimeoUrl",
									type: "url",
									title: "Vimeo URL",
								},
								{
									name: "caption",
									type: "string",
									title: "Video caption",
									description: "Optional caption for the video",
								},
							],
							preview: {
								select: {
									title: "caption",
									media: "vimeoUrl",
								},
								prepare(selection: { title?: string; media?: string }) {
									const { title, media } = selection;
									return {
										title: title || "Vimeo Video",
										subtitle: media ? `URL: ${media}` : "No video URL",
									};
								},
							},
						},
					],
				},
			],
		},
	],
};
