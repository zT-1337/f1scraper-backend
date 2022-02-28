import { News } from "../../types/News";
import NewsComponent from "./news-component";

const PaginatedNewsElement = ({news}: {news: News}) => {
  return (
    <div className="border-b mb-4 py-4">
      <NewsComponent news={news}/>
    </div>
  )
}

export default PaginatedNewsElement;