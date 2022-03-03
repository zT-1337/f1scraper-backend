import type { NextPageContext } from 'next'
import Layout from '../components/layout/layout'
import NewsComponent from '../components/news/news-component';
import { fetchNewsPage } from '../lib/get-news'
import { News } from '../types/News';
import { Page } from '../types/page';

export async function getServerSideProps(context: NextPageContext) {
  const page = 0;
  const pageSize = 1;
  const newsPage: Page<News> = await fetchNewsPage({page, pageSize, newsStatus: undefined});

  return {
    props: { newest: newsPage.data[0] }
  }
}

const Home = ({newest}: {newest: News}) => {
  return (
    <Layout>
      <NewsComponent news={newest} />
    </Layout>
  )
}

export default Home
