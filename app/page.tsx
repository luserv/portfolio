import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <picture className='flex flex-row justify-center align-middle mb-8'>
      <Image
        src="/images/profile.jpeg"
        alt="Profile photo"
        width={150}
        height={150}
        className='rounded-full object-cover'
      />
      </picture>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter text-center">
        Luser
      </h1>
      <p className="mb-4">
        {`Soy un usuario entusiasta de Debian linux ya que al usarlo con xcfe4 no llega a usar mas de un giga`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
