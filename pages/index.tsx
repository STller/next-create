import Head from "next/head";
import Layout from "../components/layout";
import { RecoilRoot } from 'recoil';
import Content from '../components/content';

export const siteTitle = "三两首页";

export default function Home() {

  return (
    <RecoilRoot>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <Content />
      </Layout>
    </RecoilRoot>
  );
}
