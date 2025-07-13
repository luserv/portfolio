import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
