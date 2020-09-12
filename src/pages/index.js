import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO />
      <div className="px-12 py-8 lg:px-24 lg:my-8 xl:my-24">
        <h1 className="pb-8 text-5xl font-black leading-none text-center md:text-6xl">
          Hey, I am{" "}
          <Link to="/about" className="text-primary">
            {data.site.siteMetadata.author}
          </Link>
          .
        </h1>
        <h1 className="text-5xl font-black leading-none text-center md:text-6xl">
          I am a Front-End Engineer from{" "}
          <span className="transition-colors duration-300 hover:text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-red-500 via-white">
            Italy
          </span>
          .
        </h1>
      </div>
    </Layout>
  );
};

export default IndexPage;
