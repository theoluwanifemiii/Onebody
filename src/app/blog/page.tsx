import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { getAllPosts, getCleanSlug } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Onebody Church | Blog',
  description:
    'Sermons, thoughts, and stories from our community — written to help you grow deeper in your faith and love for Jesus.',
};

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featuredPost = allPosts.find((p) => p.featured) ?? allPosts[0];
  const gridPosts = allPosts.filter((p) => p !== featuredPost);

  return (
    <>
      {/* 1. HERO */}
      <section
        className="ob-section ob-section-dark flex flex-col justify-end"
        style={{ paddingTop: '9rem' }}
      >
        <div className="mx-auto w-full max-w-7xl">
          <p className="ob-kicker mb-6" data-gsap-hero-reveal>
            Words &amp; Reflections
          </p>
          <h1 className="ob-display text-white" data-gsap-hero-words>
            The Onebody Blog
          </h1>
          <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-10 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl ob-body-dark" data-gsap-hero-reveal>
              Sermons, thoughts, and stories from our community — written to help you
              grow deeper in your faith and love for Jesus.
            </p>
            <span className="ob-kicker-dim hidden md:block" data-gsap-hero-reveal>
              Scroll ↓
            </span>
          </div>
        </div>
      </section>

      {/* 2. FEATURED POST */}
      {featuredPost && (
        <section
          id="blog-featured"
          className="ob-section ob-section-light"
          style={{ minHeight: 'auto', paddingTop: '5rem', paddingBottom: '5rem' }}
        >
          <div className="mx-auto w-full max-w-7xl">
            <p className="ob-kicker mb-10">Featured</p>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              <div className="overflow-hidden rounded-2xl bg-stone-100 aspect-[4/3]">
                <img
                  src={featuredPost.image}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="ob-kicker text-stone-400">{featuredPost.category}</span>
                  <span className="text-stone-300">·</span>
                  <span className="text-xs text-stone-400 tracking-wide">{featuredPost.date}</span>
                </div>
                <h2 className="font-body text-4xl md:text-5xl font-bold leading-tight tracking-tighter text-stone-900 mb-6">
                  {featuredPost.title}
                </h2>
                <p className="ob-body mb-8">{featuredPost.excerpt}</p>
                <a
                  href={`/posts/${getCleanSlug(featuredPost)}`}
                  className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-700"
                >
                  Read Article
                  <ArrowRight className="h-4 w-4 ml-1" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. POST GRID */}
      <section
        className="ob-section ob-section-stone"
        style={{ minHeight: 'auto', paddingTop: '5rem', paddingBottom: '7rem' }}
      >
        <div className="mx-auto w-full max-w-7xl">
          <p className="ob-kicker mb-12">Recent Posts</p>
          <div id="blog-grid" className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {gridPosts.map((post, i) => (
              <article key={i} className="group flex flex-col" data-gsap-reveal>
                <a
                  href={`/posts/${getCleanSlug(post)}`}
                  className="overflow-hidden rounded-xl bg-stone-100 aspect-[4/3] mb-5 block"
                >
                  <img
                    src={post.image}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </a>
                <div className="flex items-center gap-2 mb-3">
                  <span className="ob-kicker">{post.category}</span>
                  <span className="text-stone-300 text-xs">·</span>
                  <span className="text-xs text-stone-400">{post.date}</span>
                </div>
                <h3 className="text-xl font-medium tracking-tight text-stone-900 mb-3 leading-snug group-hover:text-brand-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed mb-5 flex-1">{post.excerpt}</p>
                <a
                  href={`/posts/${getCleanSlug(post)}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-900 hover:text-brand-600 transition-colors"
                >
                  Read more{' '}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" /></svg>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NEWSLETTER */}
      <section
        className="ob-section ob-section-dark"
        style={{ minHeight: 'auto', paddingTop: '6rem', paddingBottom: '6rem' }}
      >
        <div className="mx-auto w-full max-w-3xl text-center">
          <p className="ob-kicker mb-6" data-gsap-reveal>
            Stay Connected
          </p>
          <h2 className="ob-display text-white mb-8" data-gsap-words>
            Get new posts in your inbox
          </h2>
          <p className="ob-body-dark mb-10 max-w-lg mx-auto" data-gsap-reveal>
            We write when we have something worth saying. No noise — just honest words
            from our community to yours.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 transition"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-700 shrink-0"
            >
              Subscribe
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
