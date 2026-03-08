import { renderLucideIcons } from '../utils/icons';

const ITEM_COUNT = 7;

class MarqueeStrip extends HTMLElement {
  connectedCallback(): void {
    this.render();
  }

  private render(): void {
    const itemsMarkup = Array.from({ length: ITEM_COUNT })
      .map(
        () => `
          <span class="text-xl font-medium uppercase tracking-tight">Onebody Church</span>
          <i data-lucide="asterisk" class="h-6 w-6 text-red-500"></i>
        `
      )
      .join('');

    this.innerHTML = `
      <div class="w-full overflow-hidden border-y border-stone-800 bg-stone-900 py-4 text-stone-300">
        <div class="animate-marquee flex items-center gap-8 whitespace-nowrap">
          ${itemsMarkup}
        </div>
      </div>
    `;

    renderLucideIcons();
  }
}

if (!customElements.get('marquee-strip')) {
  customElements.define('marquee-strip', MarqueeStrip);
}
