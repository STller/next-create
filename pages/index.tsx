import Head from "next/head";
import Layout from "../components/layout";
import { RecoilRoot } from 'recoil';

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
    <RecoilRoot>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        Index
      </Layout>
    </RecoilRoot>
  );
}
