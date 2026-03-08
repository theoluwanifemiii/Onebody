import './styles.css';
import './components/site-header';
import './components/site-footer';
import './components/marquee-strip';
import { renderLucideIcons } from './utils/icons';
import { setupHomePageEffects } from './effects/home-page-effects';
import { setupScrollReveal } from './effects/scroll-reveal';
import { setupAboutPageEffects } from './effects/about-page-effects';
import { setupSiteInteractions } from './utils/site-interactions';
import { setupGsapEffects } from './effects/page-gsap-effects';
import { setupPageTransitions } from './transitions/page-transitions';
import { setupFlashAd } from './components/flash-ad';

window.addEventListener('DOMContentLoaded', () => {
  // Page transitions run first so the entry animation fires immediately
  setupPageTransitions();
  setupFlashAd();
  renderLucideIcons();
  setupSiteInteractions();
  setupHomePageEffects();
  setupScrollReveal();
  setupAboutPageEffects();
  setupGsapEffects();
});
