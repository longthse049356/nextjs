import React from 'react';
import {GetStaticProps, GetStaticPropsContext} from "next";

export interface PostListPageProps {
    posts: any[]
}

export default function PostListPage({posts}: PostListPageProps) {
    return (
        <>
            <div>Post List Page</div>
            <ul>{posts.map((post) => <li key={post.id}>{post.title}</li>)}</ul>
        </>
    );
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async (context: GetStaticPropsContext) => {
    
    const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
    const data = await response.json();

    return {
        props: {
            posts: data.data.map(x => ({id: x.id, title: x.title}))
        }
    }
}