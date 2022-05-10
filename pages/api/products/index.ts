import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data:
    | {
        id: string;
        title: string;
        author: string;
        description: string;
        createdAt: number;
        updatedAt: number;
        imageUrl: string;
      }
    | { name: string };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "GET") {
    return res.status(200).json({ data: { name: "Not Support Method" } });
  }
  const response = await fetch(
    "https://js-post-api.herokuapp.com/api/posts?_page=1&_limit=10"
  );
  res.status(200).json({ data: { name: "John Doe" } });
}
