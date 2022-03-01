import { News } from "../../types/News"
import { Page } from "../../types/page"
import PaginationSelector from "../pagination/pagination-selector"
import PaginatedNewsElement from "./paginated-news-element"

const PaginatedNews = ({newsPage, href}: {newsPage: Page<News>, href: string}) => {
  const newsComponents = newsPage.data.map(news => {
    return (
      <PaginatedNewsElement key={`news-${news.id}`} news={news}/>
    )
  })

  return (
    <div>
      <div className="flex justify-center items-center">
        <PaginationSelector activePage={newsPage.page+1} totalPage={newsPage.pageCount} href={href}/>
      </div>
      {newsComponents}
      <div className="flex justify-center items-center">
        <PaginationSelector activePage={newsPage.page+1} totalPage={newsPage.pageCount} href={href}/>
      </div>
    </div>
  )
}

export default PaginatedNews