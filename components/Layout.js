import Head from "next/head"
import Header from "./Header"

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container mx-auto my-7">{children}</main>
    </div>
  )
}

Layout.defaultProps = {
  title: "Welcome to Bodhi Code",
  keywords:
    "development, coding, programming, spirituality, nonduality, JavaScript, React, Vue, Node, Buddhism, bodhisattva",
  description:
    "Insights about spiritual awakening, the realization of one's true nature, living from awareness as a human being, raising a family, and making a living as a professional software developer.",
}
