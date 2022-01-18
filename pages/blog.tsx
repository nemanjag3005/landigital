import type { NextPage } from "next";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import AboutHero from "../components/About/AboutHero/AboutHero";
import BlogSection from "../components/Blog/BlogSection/BlogSection";
import BlogHero from "../components/Blog/BlogHero/BlogHero";
import { timeStamp } from "console";

const {BLOG_URL, CONTENT_API_KEY} = process.env 

type Post = {
  title: string;
  slug: string;
  custom_excerpt: string;
  feature_image: string;
};

async function getPosts() {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt,reading_time,published_at,feature_image,`
  ).then((res) => res.json());

  const posts = res.posts;
  return posts;
}

export const getStaticProps = async ({ params }) => {
  const posts = await getPosts();
  return {
    props: { posts },
  };
};

const Blog: NextPage<{ posts: Post[] }> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const { posts } = props;
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <BlogHero toggle={toggle} />
      <BlogSection posts={posts} />

      <Footer />
    </>
  );
};

export default Blog;

