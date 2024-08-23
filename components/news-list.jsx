import Link from "next/link";
const NewsList = ({ news }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3">
      {news?.map((newsItem) => (
        <Link
          href={`/news/${newsItem.slug}`}
          key={newsItem.id}
          className="m-4 p-4 border border-gray-200 rounded-md "
        >
          <h2 className="text-lg font-semibold">{newsItem.title}</h2>
          <img
            className="w-full h-52 object-cover mt-2 hover:scale-105 transition duration-300 transform"
            src={newsItem.image}
            alt={newsItem.title}
          />
          <p className="mt-2 text-sm text-gray-500">{newsItem.date}</p>
        </Link>
      ))}
    </div>
  );
};

export default NewsList;
