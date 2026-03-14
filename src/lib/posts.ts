export type Post = {
  title: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  slug: string;
  featured: boolean;
};

// Slug is stored as "posts/foo.html" in JSON; we derive the clean slug from it
export function getCleanSlug(post: Post): string {
  return post.slug.replace('posts/', '').replace('.html', '');
}

export function getAllPosts(): Post[] {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  return require('../../public/data/posts.json') as Post[];
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((p) => getCleanSlug(p) === slug);
}
