import React from "react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

export interface PostPageProps {
  post: any;
}

export function PostDetailPage({ post }: PostPageProps) {
  if (!post) return null;
  return (
    <>
      <div>{post.id}</div>
      <div>{post.title}</div>
      <div>{post.description}</div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    "https://js-post-api.herokuapp.com/api/posts?_page=1"
  );
  console.log(getStaticPaths);
  const data = await response.json();
  return {
    paths: data.data.map((post) => ({ params: { postId: post.id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async (
  context: GetStaticPropsContext
) => {
  const postId = context.params.postId;
  console.log(getStaticProps, postId);
  if (!postId) return { notFound: true };
  const response = await fetch(
    `https://js-post-api.herokuapp.com/api/posts/${postId}`
  );

  const data = await response.json();
  return {
    props: {
      post: data,
    },
  };
};

export default PostDetailPage;
