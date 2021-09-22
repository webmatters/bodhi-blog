import Link from "next/link"
import Image from "next/image"

export default function Post({ frontmatter, slug }) {
  return (
    <div className="w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6">
      <Image
        src={frontmatter.cover_image}
        alt={frontmatter.title}
        height={420}
        width={600}
        className="mb-4 rounded"
      />

      <div className="flex justify-between items-center">
        <span className="font-light text-gray-600">{frontmatter.date}</span>
        <div>{frontmatter.category}</div>
      </div>

      <div className="mt-2">
        <Link href={`/blog/${slug}`}>
          <a className="text-2xl text-gray-700 font-bold hover:underline">
            {frontmatter.title}
          </a>
        </Link>

        <p className="mt-2 text-gray-600">{frontmatter.excerpt}</p>
      </div>

      <div className="flex justify-between items-center mt-6">
        <Link href={`/blog/${slug}`}>
          <a className="text-gray-900 hover:text-blue-600">Read More</a>
        </Link>
        <div className="flex items-center">
          <Image
            src="/images/andrew-smith.jpg"
            width={40}
            height={40}
            alt={frontmatter.author}
            className="object-cover rounded-full hidden sm:block"
          />
          <h3 className="ml-4 text-gray-700 font-bold">{frontmatter.author}</h3>
        </div>
      </div>
    </div>
  )
}
