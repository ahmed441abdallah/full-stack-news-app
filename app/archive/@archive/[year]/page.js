import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";

const page = async ({ params }) => {
  const { year } = params;
  const news = await getNewsForYear(year);
  console.log(news);

  return (
    <div>
      <h1 className=" text-2xl font-medium mt-2">All News For Year "{year}"</h1>
      <NewsList news={news} />
    </div>
  );
};

export default page;
