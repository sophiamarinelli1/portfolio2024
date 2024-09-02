import { client } from "@/sanity/lib/client";
import Header from "./components/Header";
import { About, Post } from "./utils/interface";
import PostComponent from "./components/PostComponent";
import AboutComponent from "./components/AboutComponent";

async function getAbout() {
	const query = `*[_type == "about"]{
  title,
  bio,
  former[]{
    employerName,
    employerUrl
  },
  current{
    employerName,
    employerUrl
  },
  other,
  _id
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
			<div className="">
				<AboutComponent about={aboutData} />
			</div>
			{/* <div className=" px-6 py-6 h-full">
				<Header title="Projects"></Header>
				<div className="h-full">
					{posts?.length > 0 &&
						posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
				</div>
			</div> */}
		</div>
	);
}
