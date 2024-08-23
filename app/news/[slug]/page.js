import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

const NewsDetails = async ({ params }) => {
  const { slug } = params;
  const newsItem = await getNewsItem(slug);
  if (!newsItem) {
    notFound();
  }
  return (
    <div className=" p-6  sm:px-24">
      <h1 className="text-3xl font-medium m-4"> News Details</h1>
      <div>
        <h2 className=" mb-2 font-medium text-xl">{newsItem.title}</h2>
        <img
          src={`${newsItem.image}`}
          alt={newsItem.title}
          width={300}
          height={200}
        />
        <p className=" m-2 text-gray-500"> {newsItem.date}</p>
        <p className="w-full sm:w-1/2 m-2 leading-8">{newsItem.content}</p>
      </div>
    </div>
  );
};

export default NewsDetails;
