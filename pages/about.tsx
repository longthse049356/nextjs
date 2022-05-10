import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Header from "@/component/common/Header";
// const Header = dynamic(() => import("@/component/common/Header"), {
//   ssr: false,
// });

export interface AboutPageProps {}

export default function About(props: AboutPageProps) {
  const router = useRouter();
  console.log("Render About");
  return <Header />;
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
