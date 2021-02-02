import Head from "next/head";
import Layout from "../components/layout";

export const siteTitle = "三两首页";

export async function getStaticProps() {
  const allPostsData = [];
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
  );
}
