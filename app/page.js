import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            A News Site For Next Generation.
            <span className="sm:block"> Hero News </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            NextNews aims to provide you with the latest news in a concise and
            unbiased manner. We strive to deliver the news in a way that is easy
            to understand and to the point. We want to keep you informed without
            overwhelming you with unnecessary information.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="/news"
            >
              Get Started
            </Link>

            <Link
              className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="/archive"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
