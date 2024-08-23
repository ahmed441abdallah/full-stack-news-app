import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";
import React from "react";

const page = async () => {
  const news = await getLatestNews();

  return (
    <div>
      <h1 className=" text-3xl font-medium text-gray-400 mt-2">Latest News</h1>
      <NewsList news={news} />
    </div>
  );
};

export default page;
