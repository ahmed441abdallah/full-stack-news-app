import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";
const NewsPage = async () => {
  const news = await getAllNews();
  return (
    <div className="p-4 sm:px-24">
      <h1 className=" mt-4 text-3xl font-medium"> News Page</h1>
      <NewsList news={news} />;
    </div>
  );
};

export default NewsPage;
