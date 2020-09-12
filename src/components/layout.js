import React from "react";
import { graphql, useStaticQuery } from "gatsby";

// Components
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="flex flex-col min-h-screen px-8 bg-black lg:px-16 xl:px-24">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="container flex-grow mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
