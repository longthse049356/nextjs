import React from 'react';
import {useRouter} from "next/router";

export interface AboutPageProps {
}

export default function About(props: AboutPageProps) {
    const router = useRouter();
    console.log("query", router.query);

    const handleClick = () => {
        console.log('Hello world');
    }

    return (
        <>
            <h1>
                This is about you
            </h1>
            <button onClick={handleClick}>
                Click mee!!
            </button>
        </>
    );
};

export async function getServerSideProps() {
    return {
        props: {

        }
    }
}