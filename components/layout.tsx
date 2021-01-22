import Link from "next/link";
import Head from "next/head";

const name = "WXY";
export default function Layout({ children, home }) {
  return (
    <div className="py-0 px-4 max-w-xl mt-12 mb-24 ml-auto mr-auto">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
      </Head>

      <header className="flex flex-col items-center">
        <img className="h-32 w-32 rounded-full" src="/images/profile.jpg" alt={name} />
        <h1 className="font-extrabold my-4 mx-0 text-5xl leading-tight-s">{name}</h1>
      </header>

      <main>{children}</main>

      {!home && (
        <div className="mt-12 mr-0 mb-0">
          <Link href="/">
            <a style={{ color: '#0070f3' }}>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
