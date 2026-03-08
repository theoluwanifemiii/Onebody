interface Post {
  title: string;
  slug: string;
  author?: string;
  date?: string;
  category?: string;
}

export async function setupPostFeatures(): Promise<void> {
  if (!window.location.pathname.includes('/posts/')) return;

  // Derive slug from URL path
  const parts = window.location.pathname.split('/');
  const filename = (parts[parts.length - 1] || parts[parts.length - 2]).replace('.html', '');
  const currentSlug = `posts/${filename}.html`;

  // Fetch post list for prev/next
  let posts: Post[] = [];
  try {
    const res = await fetch('/data/posts.json');
    posts = await res.json();
  } catch {
    return;
  }

  const idx = posts.findIndex(p => p.slug === currentSlug);
  if (idx === -1) return;

  const prev = idx > 0 ? posts[idx - 1] : null;
  const next = idx < posts.length - 1 ? posts[idx + 1] : null;

  // Increment and fetch view count
  let viewCount: number | null = null;
  try {
    const r = await fetch(`https://api.countapi.xyz/hit/onebody-church/${filename}`);
    if (r.ok) viewCount = (await r.json()).value;
  } catch { /* silently skip */ }

  const currentUrl = window.location.href;
  const postTitle = document.querySelector('h1')?.textContent?.trim() || document.title;

  // ── Share row ─────────────────────────────────────────────────────────────
  const shareRow = document.createElement('div');
  shareRow.className = 'flex flex-wrap items-center justify-between gap-4 mt-12 mb-2';
  const iconLink = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 0 0-5.656 0l-4 4a4 4 0 1 0 5.656 5.656l1.102-1.101m-.758-4.899a4 4 0 0 0 5.656 0l4-4a4 4 0 0 0-5.656-5.656l-1.1 1.1"/></svg>`;
  const iconX = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`;
  const iconWhatsApp = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>`;

  shareRow.innerHTML = `
    <div class="flex items-center gap-3">
      <span class="text-xs font-medium text-stone-400 uppercase tracking-widest">Share</span>
      <button id="post-copy-link" title="Copy link" class="flex items-center justify-center w-9 h-9 rounded-full border border-stone-200 text-stone-500 hover:border-stone-400 hover:text-stone-900 transition-colors">
        ${iconLink}
      </button>
      <a
        href="https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(postTitle)}"
        target="_blank" rel="noopener" title="Share on X"
        class="flex items-center justify-center w-9 h-9 rounded-full border border-stone-200 text-stone-500 hover:border-stone-400 hover:text-stone-900 transition-colors"
      >${iconX}</a>
      <a
        href="https://wa.me/?text=${encodeURIComponent(postTitle + ' — ' + currentUrl)}"
        target="_blank" rel="noopener" title="Share on WhatsApp"
        class="flex items-center justify-center w-9 h-9 rounded-full border border-stone-200 text-stone-500 hover:border-[#25D366] hover:text-[#25D366] transition-colors"
      >${iconWhatsApp}</a>
    </div>
    ${viewCount !== null
      ? `<span class="text-xs text-stone-400">${viewCount.toLocaleString()} views</span>`
      : ''}
  `;

  // ── Prev / Next nav ───────────────────────────────────────────────────────
  const navRow = document.createElement('div');
  navRow.className = 'flex items-start justify-between gap-6 py-8 border-t border-b border-stone-100 mb-8';
  navRow.innerHTML = `
    ${prev
      ? `<a href="../${prev.slug}" class="group flex flex-col gap-1 max-w-[45%]">
           <span class="text-xs text-stone-400 uppercase tracking-widest">← Previous</span>
           <span class="text-sm font-medium text-stone-900 leading-snug group-hover:text-red-600 transition-colors">${prev.title}</span>
         </a>`
      : '<div></div>'}
    ${next
      ? `<a href="../${next.slug}" class="group flex flex-col gap-1 text-right max-w-[45%] ml-auto">
           <span class="text-xs text-stone-400 uppercase tracking-widest">Next →</span>
           <span class="text-sm font-medium text-stone-900 leading-snug group-hover:text-red-600 transition-colors">${next.title}</span>
         </a>`
      : '<div></div>'}
  `;

  // Insert before the last .ob-divider (the one above "Back to Blog")
  const articleEl = document.querySelector<HTMLElement>('.mx-auto.w-full.max-w-2xl');
  if (!articleEl) return;

  const dividers = articleEl.querySelectorAll('.ob-divider');
  const lastDivider = dividers[dividers.length - 1];

  if (lastDivider) {
    articleEl.insertBefore(navRow, lastDivider);
    articleEl.insertBefore(shareRow, navRow);
  } else {
    articleEl.appendChild(shareRow);
    articleEl.appendChild(navRow);
  }

  // Copy link handler
  const checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="m5 13 4 4L19 7"/></svg>`;
  document.getElementById('post-copy-link')?.addEventListener('click', async () => {
    const btn = document.getElementById('post-copy-link') as HTMLButtonElement;
    try {
      await navigator.clipboard.writeText(currentUrl);
      btn.innerHTML = checkIcon;
      btn.classList.add('border-green-400', 'text-green-600');
    } catch { /* fallback */ }
    setTimeout(() => {
      btn.innerHTML = iconLink;
      btn.classList.remove('border-green-400', 'text-green-600');
    }, 2000);
  });
}
