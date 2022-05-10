import React from "react";

function Params(props) {
  return <div>Page Params</div>;
}

export async function getServerSideProps() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    props: {},
  };
}
export default Params;
