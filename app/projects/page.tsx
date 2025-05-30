import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Projects',
  description: 'Some info about my skills.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Projects</h1>
      <BlogPosts />
    </section>
  )
}
