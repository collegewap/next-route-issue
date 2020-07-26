import React from "react";
import Link from "next/link";

const Slug = ({ slug }) => {
  return (
    <div>
      <Link as="/page1" href="[slug]">
        <a>Page1</a>
      </Link>
      <br />
      <Link as="/page2" href="[slug]">
        <a>Page2</a>
      </Link>
      <br />
      Im in {slug}
    </div>
  );
};

export const getStaticPaths = async () => {
  let paths;
  const defaultValues = {
    paths: [],
    fallback: false,
  };

  try {
    const allSlugs = ["page1", "page2"];

    paths = allSlugs.map((slug) => "/" + slug);
  } catch (e) {
    console.log(e);
    return defaultValues;
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  return {
    props: {
      slug,
    },
    unstable_revalidate: 1,
  };
};

export default Slug;
