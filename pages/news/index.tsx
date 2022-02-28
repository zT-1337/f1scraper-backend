import { NextPageContext } from "next"
import Layout from "../../components/layout/layout"
import PaginatedNewsElement from "../../components/news/paginated-news-element";
import PaginationSelector from "../../components/pagination/pagination-selector";
import { fetchNewsPage, parsePageParam } from "../../lib/get-news";
import { News } from "../../types/News";
import { Page } from "../../types/page";

export async function getServerSideProps(context: NextPageContext) {
  let page = parsePageParam({pageParam: context.query.page as string, defaultValue: 1}) - 1;
  const pageSize = 25;
  let newsPage: Page<News> = await fetchNewsPage({page, pageSize});

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
      <div>
        <div className="flex justify-center items-center">
          <PaginationSelector activePage={newsPage.page+1} totalPage={newsPage.pageCount} href='/news'/>
        </div>
        {newsComponents}
        <div className="flex justify-center items-center">
          <PaginationSelector activePage={newsPage.page+1} totalPage={newsPage.pageCount} href='/news'/>
        </div>
      </div>
    </Layout>
  )
}

export default PaginatedNews