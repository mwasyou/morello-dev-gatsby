import React from "react";
import cn from "classnames";
import Image from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

const Avatar = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          fixed(width: 64, height: 64) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <Image
      alt={data.site.siteMetadata.author}
      fixed={data.avatarImage.childImageSharp.fixed}
      className={cn(["rounded-full border-2"], className)}
    />
  );
};

export default Avatar;
