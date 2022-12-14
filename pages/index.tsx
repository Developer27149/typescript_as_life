import Container from "@/components/container";
import { HOMEPAGE_TITLE } from "@/lib/constants";
import Head from "next/head";
import Header from "@/components/Header";
import HeroPost from "@/components/hero-post";
import Layout from "@/components/Layout";
import MoreStories from "@/components/MoreStories";
import Post from "@/interfaces/post";
import { ToastContainer } from "react-toastify";
import { getAllPosts } from "@/lib/api";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>{HOMEPAGE_TITLE}</title>
        </Head>
        <Container>
          <Header />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
        <ToastContainer />
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
