import { useLoaderData } from "@remix-run/react";

export let loader = ({params}) => {
  return params.slug;
};


export default function () {

  const slug = useLoaderData();

  return (
    <>
      <h1>{slug}</h1>
    </>
  );
}