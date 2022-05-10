import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  access_token?: string;
  expiredAt?: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "GET") {
    return res.status(200).json({});
  }
  const response = await fetch(
    "https://js-post-api.herokuapp.com/api/posts?_page=1&_limit=10"
  );
  res.status(200).json({});
}
