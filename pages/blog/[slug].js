import fs from "fs"
import path from "path"
import matter from "gray-matter"
import marked from "marked"
import Link from "next/link"
import Image from "next/image"

import Layout from "@/components/Layout"
import CategoryLabel from "@/components/CategoryLabel"

export default function PostPage({
  frontmatter: { title, category, date, cover_image, author },
  content,
  slug,
}) {
  return (
    <Layout title={title}>
      <Link href="/blog">Go Back</Link>
      <div className="w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6">
        <div className="flex justify-between items-center mt-4">
          <h1 className="text-5xl mb-7">{title}</h1>
          <CategoryLabel>{category}</CategoryLabel>
        </div>

        <img src={cover_image} alt={title} className="w-full rounded" />

        <div className="flex justify-between items-center bg-gray-100 p-2 my-8">
          <div className="flex items-center">
            <Image
              src="/images/andrew-smith.jpg"
              width={40}
              height={40}
              alt={author}
              className="object-cover rounded-full hidden sm:block"
            />
            <h4 className="ml-4">{author}</h4>
          </div>
          <div className="mr-4">{date}</div>
        </div>

        <div className="blog-text mt-2">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </Layout>
  )
}

// Next.js data fetching functions
export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownContent = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  )

  const { data: frontmatter, content } = matter(markdownContent)

  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  }
}
