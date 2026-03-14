import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { getPostBySlug, getAllPosts, getCleanSlug } from '@/lib/posts';
import { getPostContent } from '@/lib/post-content';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: getCleanSlug(post),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Onebody Blog`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { intro, body } = getPostContent(slug);

  return (
    <>
      {/* HERO */}
      <section
        className="ob-section ob-section-dark flex flex-col justify-end relative overflow-hidden"
        style={{ minHeight: '70vh', paddingTop: '9rem' }}
      >
        <div className="absolute inset-0 -z-0">
          <img
            src={post.image}
            alt=""
            className="w-full h-full object-cover opacity-20"
            loading="eager"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-[#111111]/40"></div>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-4xl">
          <div className="flex items-center gap-3 mb-6" data-gsap-hero-reveal>
            <a href="/blog" className="ob-kicker hover:opacity-70 transition-opacity">
              ← Blog
            </a>
            <span className="text-white/20">·</span>
            <span className="ob-kicker text-white/40">{post.category}</span>
            <span className="text-white/20">·</span>
            <span className="ob-kicker text-white/40">{post.date}</span>
          </div>
          <h1 className="ob-display text-white" data-gsap-hero-words>
            {post.title}
          </h1>
          <p className="ob-body-dark mt-6" data-gsap-hero-reveal>
            By {post.author}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section
        className="ob-section ob-section-light"
        style={{ minHeight: 'auto', paddingTop: '5rem', paddingBottom: '7rem' }}
      >
        <div className="mx-auto w-full max-w-2xl">
          {intro && (
            <p className="text-base text-stone-400 italic mb-10">{intro}</p>
          )}
          {intro && <div className="ob-divider mb-10"></div>}
          <div
            className="space-y-7 text-stone-700 text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: body }}
          />
          <div className="ob-divider mt-14 mb-10"></div>
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 hover:text-red-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} /> Back to Blog
          </a>
        </div>
      </section>
    </>
  );
}
