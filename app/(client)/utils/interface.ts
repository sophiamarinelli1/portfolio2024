export interface Post {
	title: string;
	poster: string;
	slug: { current: string };
	date: string;
	excerpt: string;
	collaborators: string;
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
		display: string;
		zoom: boolean;
	};
	videoBlogPost?: {
		video?: {
			asset: {
				playbackId?: string;
				assetId?: string;
				filename?: string;
				url?: string;
			};
		};
	};
}

export interface Tag {
	name: string;
	slug: { current: string };
	_id: string;
}

export interface About {
	title: string;
	bio: string;
	former: Array<{
		employerName: string;
		employerUrl: string;
		_key?: string;
	}>;
	current: {
		employerName: string;
		employerUrl: string;
	};
	other: string;
	_id: string;
}
