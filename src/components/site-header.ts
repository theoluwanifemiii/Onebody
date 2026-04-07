import { renderLucideIcons } from '../utils/icons';
import { FEATURED_VIDEO_URL } from '../utils/site-data';

type PageKey = 'home' | 'about' | 'services' | 'sermons' | 'academy' | 'charity' | 'giving' | 'blog';

type NavLink = {
  key: PageKey;
  href: string;
  label: string;
};

const NAV_LINKS: NavLink[] = [
  { key: 'about', href: './about.html', label: 'About' },
  { key: 'sermons', href: './sermons.html', label: 'Sermons' },
  { key: 'academy', href: './academy.html', label: 'LOVA' },
  { key: 'charity', href: './charity.html', label: 'Charity' }
];

class SiteHeader extends HTMLElement {
  private expanded = false;

  private readonly handleEscape = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') {
      this.setExpanded(false);
    }
  };

  static get observedAttributes(): string[] {
    return ['current', 'visit-href'];
  }

  connectedCallback(): void {
    document.addEventListener('keydown', this.handleEscape);
    this.render();
  }

  disconnectedCallback(): void {
    document.removeEventListener('keydown', this.handleEscape);
    document.body.classList.remove('mobile-nav-open');
  }

  attributeChangedCallback(
    _name: string,
    _oldValue: string | null,
    _newValue: string | null
  ): void {
    if (this.isConnected) {
      this.render();
    }
  }

  private setExpanded(nextValue: boolean): void {
    this.expanded = nextValue;
    document.body.classList.toggle('mobile-nav-open', nextValue);
    this.render();
  }

  private render(): void {
    const current = (this.getAttribute('current') as PageKey) || 'home';
    const visitHref = this.getAttribute('visit-href') || './services.html#visit';

    const linksMarkup = NAV_LINKS.map((link) => {
      const linkClass =
        link.key === current
          ? 'text-sm text-stone-900'
          : 'text-sm transition-colors hover:text-stone-900';
      const ariaCurrent = link.key === current ? ' aria-current="page"' : '';

      return `<a href="${link.href}" class="${linkClass}"${ariaCurrent}>${link.label}</a>`;
    }).join('');

    const mobileLinksMarkup = NAV_LINKS.map((link) => {
      const linkClass =
        link.key === current
          ? 'rounded-2xl bg-brand-50 px-4 py-3 text-base font-medium text-stone-900'
          : 'rounded-2xl px-4 py-3 text-base text-stone-700 transition-colors hover:bg-stone-50 hover:text-stone-900';
      const ariaCurrent = link.key === current ? ' aria-current="page"' : '';

      return `<a href="${link.href}" class="${linkClass}" data-nav-close${ariaCurrent}>${link.label}</a>`;
    }).join('');

    const overlayClass = this.expanded
      ? 'pointer-events-auto fixed inset-0 bg-stone-950/20 opacity-100 transition-opacity duration-300 md:hidden'
      : 'pointer-events-none fixed inset-0 bg-stone-950/20 opacity-0 transition-opacity duration-300 md:hidden';

    const panelClass = this.expanded
      ? 'pointer-events-auto visible translate-y-0 opacity-100'
      : 'pointer-events-none invisible -translate-y-3 opacity-0';

    this.innerHTML = `
      <nav class="fixed top-0 z-50 w-full px-6 py-4">
        <div
          class="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-stone-200/60 bg-white/80 px-6 py-3 shadow-sm backdrop-blur-md"
        >
          <a href="./index.html" class="flex items-center">
            <img
              src="/onebody-logo.png"
              alt="Onebody Church logo"
              class="h-8 w-auto rounded-md object-contain"
            />
          </a>

          <div class="hidden items-center gap-6 text-stone-600 md:flex">
            ${linksMarkup}
          </div>

          <div class="hidden items-center gap-3 md:flex">
            <a
              href="./giving.html"
              class="rounded-full bg-brand-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-700"
            >
              Give
            </a>
            <a
              href="${visitHref}"
              class="group flex items-center gap-2 rounded-full bg-stone-900 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-stone-800 hover:pl-4 hover:pr-6"
            >
              Plan a Visit
              <i
                data-lucide="arrow-right"
                class="h-4 w-4 transition-transform group-hover:translate-x-1"
                stroke-width="1.5"
              ></i>
            </a>
          </div>

          <button
            type="button"
            class="flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 text-stone-900 md:hidden"
            aria-expanded="${this.expanded}"
            aria-controls="mobile-site-nav"
            data-nav-toggle
          >
            <i data-lucide="${this.expanded ? 'x' : 'menu'}" class="h-5 w-5" stroke-width="1.5"></i>
          </button>
        </div>

        <div class="${overlayClass}" data-mobile-backdrop></div>

        <div
          id="mobile-site-nav"
          class="${panelClass} fixed inset-x-6 top-24 rounded-[2rem] border border-stone-200 bg-white p-5 shadow-2xl shadow-stone-900/10 transition-all duration-300 md:hidden"
        >
          <div class="mb-5 flex items-center justify-between border-b border-stone-100 pb-4">
            <div>
              <p class="text-xs font-medium uppercase tracking-[0.24em] text-brand-600">Onebody Church</p>
              <p class="mt-1 text-sm text-stone-500">Find your next step.</p>
            </div>
            <a
              href="${visitHref}"
              class="rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white"
              data-nav-close
            >
              Visit
            </a>
          </div>

          <div class="flex flex-col gap-2">
            ${mobileLinksMarkup}
          </div>

          <div class="mt-6 grid grid-cols-2 gap-3 border-t border-stone-100 pt-5">
            <a
              href="./giving.html"
              class="flex items-center justify-center gap-2 rounded-2xl bg-brand-600 px-4 py-3 text-sm font-medium text-white"
              data-nav-close
            >
              <i data-lucide="heart" class="h-4 w-4" stroke-width="1.5"></i>
              Give
            </a>
            <a
              href="mailto:hello@onebodychurch.org"
              class="flex items-center justify-center gap-2 rounded-2xl border border-stone-200 px-4 py-3 text-sm font-medium text-stone-800"
              data-nav-close
            >
              <i data-lucide="mail" class="h-4 w-4" stroke-width="1.5"></i>
              Contact
            </a>
          </div>
        </div>
      </nav>
    `;

    renderLucideIcons();

    this.querySelector<HTMLElement>('[data-nav-toggle]')?.addEventListener('click', () => {
      this.setExpanded(!this.expanded);
    });

    this.querySelector<HTMLElement>('[data-mobile-backdrop]')?.addEventListener('click', () => {
      this.setExpanded(false);
    });

    this.querySelectorAll<HTMLElement>('[data-nav-close]').forEach((element) => {
      element.addEventListener('click', () => {
        this.setExpanded(false);
      });
    });
  }
}

if (!customElements.get('site-header')) {
  customElements.define('site-header', SiteHeader);
}
