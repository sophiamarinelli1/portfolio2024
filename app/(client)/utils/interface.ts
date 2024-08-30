export interface Post {
	title: string;
	poster: string;
	slug: { current: string };
	date: string;
	excerpt: string;
	body: any;
	tags: Array<Tag>;
	_id: string;
	gallery?: {
		images: Array<{
			asset: {
				_ref: string;
				url: string;
			};
		}>;
	};
}

export interface Tag {
	name: string;
	slug: { current: string };
	_id: string;
}
