import React from "react";
import { graphql, useStaticQuery } from "gatsby";

// Icons
import GitHub from "../icons/github";
import Instagram from "../icons/instagram";
import Link from "../icons/link";
import LinkedIn from "../icons/linkedin";
import Mail from "../icons/mail";
import Twitter from "../icons/twitter";

const getIconForSocial = (socialName, props) => {
  switch (socialName) {
    case "twitter":
      return <Twitter {...props} />;
    case "github":
      return <GitHub {...props} />;
    case "instagram":
      return <Instagram {...props} />;
    case "linkedin":
      return <LinkedIn {...props} />;
    case "mail":
      return <Mail {...props} />;
    default:
      return <Link {...props} />;
  }
};

const SocialRow = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              twitter
              github
              linkedin
              instagram
              mail
            }
          }
        }
      }
    `
  );

  return (
    <div className="space-x-4">
      {Object.entries(data.site.siteMetadata.social).map(([name, uri]) => (
        <a
          key={name}
          href={uri}
          alt={`Link to ${uri}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-3 py-2 font-bold transition-colors duration-300 rounded hover:text-secondary"
        >
          {getIconForSocial(name, {
            className: "w-8 h-8 fill-current",
          })}
        </a>
      ))}
    </div>
  );
};

export default SocialRow;
