import { client } from "@/sanity/lib/client";
import Header from "./components/Header";
import { About, Post } from "./utils/interface";
import PostComponent from "./components/PostComponent";
import AboutComponent from "./components/AboutComponent";
import Button from "./components/Buttons/ButtonLarge";
import ImageFlash from "./components/ImageFlash";

async function getAbout() {
	const query = `*[_type == "about"]{
	bio,
	former,
	current,
	_id,
			gallery {
			images[] {
				asset->{
					_ref,
					url
				}
			}
		},
	}`;
	const data = await client.fetch(query);
	return data;
}

async function getPosts() {
	const query = `*[_type == "post"] {
  	title,
	poster,
  	slug,
  	date,
	collaborators,
  	_id,
  	excerpt,
	gallery {
			images[] {
				asset->{
					_ref,
					url
				}
			}
		},
	tags[] -> {
	_id,
	slug,
	name
	}
	}`;
	const data = await client.fetch(query);
	return data;
}

export const revalidate = 60;

export default async function Home() {
	const about: About[] = await getAbout();
	const posts: Post[] = await getPosts();
	console.log(posts, "posts");
	const aboutData = about[0] || { bio: "", former: "", current: "", _id: "" };
	return (
		<div className="">
			{/* <div className="h-full">
				{aboutData?.gallery && aboutData.gallery.images?.length > 0 && (
					<ImageFlash about={aboutData} />
				)}
			</div> */}
			<div className="">
				<AboutComponent about={aboutData} />
				<div className="px-6">
					<Button title="Click Here for Inquiries" />
				</div>
			</div>
			<div className=" px-6 py-6 h-full bg-white">
				<Header title="Projects"></Header>
				<div className="h-full">
					{posts?.length > 0 &&
						posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
				</div>
			</div>
		</div>
	);
}
