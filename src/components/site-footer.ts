import { renderLucideIcons } from '../utils/icons';
import {
  CHURCH_ADDRESS_LINES,
  CHURCH_EMAIL,
  CHURCH_MAPS_URL,
  FEATURED_VIDEO_URL,
  SERVICE_SCHEDULE
} from '../utils/site-data';

class SiteFooter extends HTMLElement {
  connectedCallback(): void {
    this.render();
  }

  private render(): void {
    const serviceMarkup = SERVICE_SCHEDULE.map((service) => {
      return `
        <div class="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3">
          <p class="text-sm font-medium text-stone-900">${service.name}</p>
          <p class="mt-1 text-sm text-stone-500">${service.day} · ${service.time}</p>
        </div>
      `;
    }).join('');

    this.innerHTML = `
      <footer class="border-t border-stone-200 bg-white px-6 py-16">
        <div class="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.9fr_0.9fr_0.9fr_1.1fr]">
          <div>
            <div class="mb-6 flex items-center">
              <img
                src="/onebody-logo.png"
                alt="Onebody Church logo"
                class="h-7 w-auto rounded-md object-contain"
              />
            </div>
            <p class="max-w-sm text-lg text-stone-500">
              Jesus at the center. A church in Yaba helping people know Christ, grow in discipleship, and love the city well.
            </p>
            <div class="mt-6 flex flex-wrap gap-3">
              <a
                href="./services.html#visit"
                class="rounded-full bg-stone-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-stone-800"
              >
                Plan a Visit
              </a>
              <a
                href="mailto:${CHURCH_EMAIL}"
                class="rounded-full border border-stone-200 px-5 py-2 text-sm font-medium text-stone-800 transition-colors hover:border-stone-300"
              >
                Email Us
              </a>
            </div>
          </div>

          <div class="flex flex-col gap-4 text-sm">
            <span class="font-medium text-stone-900">Explore</span>
            <a href="./index.html" class="text-stone-500 hover:text-stone-900">Home</a>
            <a href="./about.html" class="text-stone-500 hover:text-stone-900">Our Story</a>
            <a href="./services.html" class="text-stone-500 hover:text-stone-900">Visit & Services</a>
            <a href="./sermons.html" class="text-stone-500 hover:text-stone-900">Messages</a>
            <a href="./academy.html" class="text-stone-500 hover:text-stone-900">The Love Vision Academy</a>
          </div>

          <div class="flex flex-col gap-4 text-sm">
            <span class="font-medium text-stone-900">Resources</span>
            <a href="./lords-table.html" class="text-stone-500 hover:text-stone-900">The Lord's Table</a>
            <a href="./blog.html" class="text-stone-500 hover:text-stone-900">Blog</a>
          </div>

          <div class="flex flex-col gap-4 text-sm">
            <span class="font-medium text-stone-900">Contact</span>
            <a href="mailto:${CHURCH_EMAIL}" class="text-stone-500 hover:text-stone-900">${CHURCH_EMAIL}</a>
            <a href="${CHURCH_MAPS_URL}" class="text-stone-500 hover:text-stone-900" target="_blank" rel="noreferrer">
              ${CHURCH_ADDRESS_LINES.join(', ')}
            </a>
            <a href="${FEATURED_VIDEO_URL}" class="text-stone-500 hover:text-stone-900" target="_blank" rel="noreferrer">
              Watch a Featured Message
            </a>
          </div>

          <div>
            <span class="text-sm font-medium text-stone-900">Gather</span>
            <div class="mt-4 space-y-3">
              ${serviceMarkup}
            </div>
          </div>
        </div>
        <div
          class="mx-auto mt-16 flex max-w-7xl flex-col gap-3 border-t border-stone-100 pt-8 text-sm text-stone-400 md:flex-row md:items-center md:justify-between"
        >
          <span>&copy; 2026 Onebody Church Media.</span>
          <span>Changing hearts, lighting eyes, moving hands.</span>
        </div>
      </footer>
    `;

    renderLucideIcons();
  }
}

if (!customElements.get('site-footer')) {
  customElements.define('site-footer', SiteFooter);
}
