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
			type: "string",
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
					name: "images",
					type: "array",
					title: "Images",
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
					],
					options: {
						layout: "grid",
					},
				},
				{
					name: "display",
					type: "string",
					title: "Display as",
					description: "How should we display these images?",
					options: {
						list: [
							{ title: "Stacked on top of eachother", value: "stacked" },
							{ title: "In-line", value: "inline" },
							{ title: "Carousel", value: "carousel" },
						],
						layout: "radio", // <-- defaults to 'dropdown'
					},
				},
				{
					name: "zoom",
					type: "boolean",
					title: "Zoom enabled",
					description: "Should we enable zooming of images?",
				},
			],
			preview: {
				select: {
					images: "images",
					image: "images.0",
				},
				prepare(selection: any) {
					const { images, image } = selection;

					return {
						title: `Gallery block of ${Object.keys(images).length} images`,
						subtitle: `Alt text: ${image.alt}`,
						media: image,
					};
				},
			},
		},
	],
};
