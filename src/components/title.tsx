import Head from "next/head";

const Title: React.FC<{ page?: string }> = ({ page = "" }) => {
  const title = `${page && `${page} | `}Santiago Vira`;
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content="Santiago Vira" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://santiagovira.vercel.app" />
      <meta content="summary_large_image" property="twitter:card" />
      <meta content="/cover.png" property="og:image" />
      <meta
        property="og:description"
        content="Rising highschool junior and frontend designer with a broken sleep schedule and a computer."
      />
      <meta name="theme-color" content="#114CAB" />
    </Head>
  );
};

export default Title;
