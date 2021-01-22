import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import { getStoredPostsData } from "../lib/posts";

export const siteTitle = "Next.js Sample Website";

export async function getStaticProps() {
  const allPostsData = getStoredPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="text-xl-s leading-normal">
        <p className="leading-normal text-xl-s mt-6">
          Hey,from china,what's up man!
        </p>
        <p className="leading-normal text-xl-s mt-6">
          (This is a sample website - you’ll be building a site like this on{" "}
          <a>our Next.js tutorial</a>.)
        </p>
      </section>

      <section style={{ paddingTop: '1px'}} className="text-xl-s leading-normal">
        <p className="text-2xl leading-snug my-4 mx-0 font-bold">Blog</p>
        <ul className="">
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className='mt-0 mr-0 mb-5'>
              <Link href={`/posts/${id}`}>
                <a style={{ color: '#0070f3' }}>{title}</a>
              </Link>
              <br />
              {id}
              <br />
              <small style={{ color: '#666' }}>
                {date}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
