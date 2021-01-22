import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticPaths() {
  // return a list of possible value for id
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  // fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export default function Post({ postData }) {
  return (
    <Layout home={false}>
      <article>
        <h1 className='text-2rem leading-1.3 font-extrabold my-4'>
          {postData.title}
        </h1>
        <div style={{ color: '#666'}}>
          <time className='text-lg leading-1.6'>
            {postData.date}
          </time>
        </div>
        <br/>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      </article>
    </Layout>
  )
}
