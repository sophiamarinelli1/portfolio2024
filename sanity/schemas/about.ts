import { Rule } from "sanity";

export const about = {
	name: "about",
	title: "About",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "bio",
			title: "Bio",
			type: "text",
		},
		{
			name: "former",
			title: "Former Employers",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{
							name: "employerName",
							title: "Employer Name",
							type: "string",
						},
						{
							name: "employerUrl",
							title: "Employer URL",
							type: "url",
						},
					],
				},
			],
		},
		{
			name: "current",
			title: "Current Employer",
			type: "object",
			fields: [
				{
					name: "employerName",
					title: "Employer Name",
					type: "string",
				},
				{
					name: "employerUrl",
					title: "Employer URL",
					type: "url",
					validation: (Rule: Rule) =>
						Rule.uri({
							allowRelative: true,
							scheme: ["http", "https"],
						}).optional(),
				},
			],
		},
		{
			name: "other",
			title: "Other",
			type: "text",
		},
	],
};
