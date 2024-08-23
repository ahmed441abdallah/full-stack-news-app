import express from "express";
import sqlite from "better-sqlite3";
import cors from "cors";

export const DUMMY_NEWS = [
  {
    id: "n1",
    slug: "will-ai-replace-humans",
    title: "Will AI Replace Humans?",
    image:
      "https://th.bing.com/th/id/OIP.EqNo_Xwatr-16VSx7iOlcQAAAA?rs=1&pid=ImgDetMain",
    date: "2021-07-01",
    content:
      "Since late 2022 AI is on the rise and therefore many people worry whether AI will replace humans. The answer is not that simple. AI is a tool that can be used to automate tasks, but it can also be used to augment human capabilities. The future is not set in stone, but it is clear that AI will play a big role in the future. The question is how we will use it.",
  },
  {
    id: "n2",
    slug: "beaver-plague",
    title: "A Plague of Beavers",
    image:
      "https://th.bing.com/th/id/OIP.b-N0F_MqzMrwJo6wBp-1XgAAAA?rs=1&pid=ImgDetMain",
    date: "2022-05-01",
    content:
      "Beavers are taking over the world. They are building dams everywhere and flooding entire cities. What can we do to stop them?",
  },
  {
    id: "n3",
    slug: "couple-cooking",
    title: "Spend more time together!",
    image:
      "https://th.bing.com/th/id/R.688f5e7845ce6f136fa65cca6828ecac?rik=URtZHj7Xj1JWOQ&pid=ImgRaw&r=0",
    date: "2024-03-01",
    content:
      "Cooking together is a great way to spend more time with your partner. It is fun and you get to eat something delicious afterwards. What are you waiting for? Get cooking!",
  },
  {
    id: "n4",
    slug: "hiking",
    title: "Hiking is the best!",
    image:
      "https://th.bing.com/th/id/OIP.xHTne-n-D7bu6SJYpSH40gHaE8?rs=1&pid=ImgDetMain",
    date: "2024-01-01",
    content:
      "Hiking is a great way to get some exercise and enjoy the great outdoors. It is also a great way to clear your mind and reduce stress. So what are you waiting for? Get out there and start hiking!",
  },
  {
    id: "n5",
    slug: "landscape",
    title: "The beauty of landscape",
    image: "https://img.freepik.com/premium-photo/land-scape_1104772-176.jpg",
    date: "2022-07-01",
    content:
      "Landscape photography is a great way to capture the beauty of nature. It is also a great way to get outside and enjoy the great outdoors. So what are you waiting for? Get out there and start taking some pictures!",
  },
  {
    id: "n6",
    slug: "mountains",
    title: "The majesty of mountains",
    image:
      "https://th.bing.com/th/id/OIP.chs4Qi7hWHYi1WGIBa-sHAHaE8?rs=1&pid=ImgDetMain",
    date: "2023-04-01",
    content:
      "Mountains are some of the most majestic and awe-inspiring places on earth. They are also a great place to go hiking and enjoy the great outdoors. So what are you waiting for? Get out there and start exploring!",
  },
  {
    id: "n7",
    slug: "sunset",
    title: "The beauty of a sunset",
    image:
      "https://th.bing.com/th/id/R.7cb7b49f5374b6721023e1e9857111e4?rik=jSvClg5MtwcpvQ&pid=ImgRaw&r=0",
    date: "2023-02-01",
    content:
      "Sunsets are some of the most beautiful and awe-inspiring sights on earth. They are also a great way to relax and unwind after a long day. So what are you waiting for? Get outside and enjoy the beauty of a sunset!",
  },
  {
    id: "n8",
    slug: "waterfall",
    title: "The power of a waterfall",
    image:
      "https://th.bing.com/th/id/OIP.Mke-8UMQxBnigWzTrYJBAAHaE8?rs=1&pid=ImgDetMain",
    date: "2022-09-01",
    content:
      "Waterfalls are some of the most powerful and awe-inspiring sights on earth. They are also a great place to go hiking and enjoy the great outdoors. So what are you waiting for? Get out there and start exploring!",
  },
  {
    id: "n9",
    slug: "wildlife",
    title: "The wonder of wildlife",
    image:
      "https://th.bing.com/th/id/R.001da1b872cf182fe23d2e6b0ce6ecd3?rik=Dl8AekYK5OLSHw&pid=ImgRaw&r=0",
    date: "2023-06-01",
    content:
      "Wildlife is some of the most amazing and awe-inspiring sights on earth. It is also a great way to get outside and enjoy the great outdoors. So what are you waiting for? Get out there and start exploring!",
  },
];

const db = sqlite("data.db");

function initDb() {
  db.prepare(
    "CREATE TABLE IF NOT EXISTS news (id INTEGER PRIMARY KEY, slug TEXT UNIQUE, title TEXT, content TEXT, date TEXT, image TEXT)"
  ).run();

  const { count } = db.prepare("SELECT COUNT(*) as count FROM news").get();

  if (count === 0) {
    const insert = db.prepare(
      "INSERT INTO news (slug, title, content, date, image) VALUES (?, ?, ?, ?, ?)"
    );

    DUMMY_NEWS.forEach((news) => {
      insert.run(news.slug, news.title, news.content, news.date, news.image);
    });
  }
}

const app = express();

app.use(cors());

app.get("/news", (req, res) => {
  const news = db.prepare("SELECT * FROM news").all();
  res.json(news);
});
initDb();
app.listen(8081);
