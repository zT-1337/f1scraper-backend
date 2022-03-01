import { NextPageContext } from "next"
import Layout from "../../components/layout/layout"
import PaginatedNews from "../../components/news/paginated-news";
import { fetchNewsPage, parsePageParam } from "../../lib/get-news";
import { News, NewsStatus } from "../../types/News";
import { Page } from "../../types/page";

export async function getServerSideProps(context: NextPageContext) {
  let page = parsePageParam({pageParam: context.query.page as string, defaultValue: 1}) - 1;
  const pageSize = 25;
  const newsStatus: NewsStatus = 'BOOKMARKED';
  let newsPage: Page<News> = await fetchNewsPage({page, pageSize, newsStatus});

  return {
    props: {newsPage: newsPage}
  }
}

const BookMarkedNews = ({newsPage}: {newsPage: Page<News>}) => {
  return (
    <Layout>
      <PaginatedNews newsPage={newsPage} href='/old'/>
    </Layout>
  )
}

export default BookMarkedNews