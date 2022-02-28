import { NextPageContext } from "next"
import Layout from "../../components/layout/layout"
import NewsComponent from "../../components/news/news-component";
import PaginatedNewsElement from "../../components/news/paginated-news-element";
import { fetchNewsPage, parsePageParam } from "../../lib/get-news";
import { News } from "../../types/News";
import { Page } from "../../types/page";

export async function getServerSideProps(context: NextPageContext) {
  const page = parsePageParam({pageParam: context.query.page as string, defaultValue: 0});
  const pageSize = 25;
  const newsPage: Page<News> = await fetchNewsPage({page, pageSize});

  return {
    props: {newsPage: newsPage}
  }
}

const PaginatedNews = ({newsPage}: {newsPage: Page<News>}) => {
  const newsComponents = newsPage.data.map(news => {
    return (
      <PaginatedNewsElement key={`news-${news.id}`} news={news}/>
    )
  })

  return (
    <Layout>
      {newsComponents}
    </Layout>
  )
}

export default PaginatedNews