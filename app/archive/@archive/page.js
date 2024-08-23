import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

const page = async () => {
  const years = await getAvailableNewsYears();
  return (
    <div className="p-2">
      <h1 className=" text-3xl font-medium text-gray-400">
        List of Available Years
      </h1>
      <ul className=" flex gap-6 mt-2">
        {years.map((year) => (
          <li key={year} className="text-2xl mb-4">
            <Link href={`/archive/${year}`}>{year}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
