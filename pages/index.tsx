import type { NextPageContext } from 'next'
import Layout from '../components/layout/layout'
import { fetchNewsPage } from '../lib/get-news'
import { News } from '../types/News';
import { Page } from '../types/page';

export async function getServerSideProps(context: NextPageContext) {
  const page = 0;
  const pageSize = 1;
  const newsPage = await fetchNewsPage({page, pageSize});

  return {
    props: { newsPage }
  }
}

const Home = ({newsPage}: {newsPage: Page<News>}) => {
  const newsComponents = newsPage.data.map(news => {
    return (
      <li key={`news-${news.id}`}>
        <div className='border-b'>
          <h2 className='text-2xl'>{news.title}</h2>
          <p>{`${news.author} from ${news.publishedAt} at ${news.sourceUrl}`}</p>
          <p>{news.body}</p>
        </div>
      </li>
    )
  })

  return (
    <Layout>
      <ul>{newsComponents}</ul>
    </Layout>
  )
}

export default Home
