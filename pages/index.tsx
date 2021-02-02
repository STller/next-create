import Head from "next/head";

export const siteTitle = "三两首页";

export default function Home() {
  return (
    <Head>
      <title>{siteTitle}</title>
    </Head>
  );
}
