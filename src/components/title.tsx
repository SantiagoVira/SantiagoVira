import Head from "next/head";

const Title: React.FC<{ page?: string }> = ({ page = "" }) => {
  return (
    <Head>
      <title>{page && `${page} | `}Santiago Vira</title>
      <meta property="og:title" content="Santiago Vira" />
      <meta property="og:site_name" content="Santiago" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://santiagovira.netlify.app" />
      <meta content="summary_large_image" property="twitter:card" />
      <meta content="/cover.png" property="og:image" />
      <meta
        property="og:description"
        content="Rising highschool junior and frontend designer with a broken sleep schedule and a computer."
      />
      <meta name="theme-color" content="#D53F8C" />
    </Head>
  );
};

export default Title;
