const TAB_GROUP_SELECTOR = '[data-tab-group]';
const EMAIL_FORM_SELECTOR = 'form[data-email-form]';
const ACCORDION_GROUP_SELECTOR = '[data-accordion-group]';

const toMailto = (recipient: string, subject: string, body: string): string => {
  const params = new URLSearchParams({
    subject,
    body
  });

  return `mailto:${recipient}?${params.toString()}`;
};

const setupTabs = (): void => {
  const tabGroups = Array.from(document.querySelectorAll<HTMLElement>(TAB_GROUP_SELECTOR));
  tabGroups.forEach((group) => {
    const triggers = Array.from(group.querySelectorAll<HTMLButtonElement>('[data-tab-trigger]'));
    const panels = Array.from(group.querySelectorAll<HTMLElement>('[data-tab-panel]'));
    if (triggers.length === 0 || panels.length === 0) {
      return;
    }

    const activate = (targetId: string): void => {
      triggers.forEach((trigger) => {
        const isActive = trigger.dataset.tabTarget === targetId;
        trigger.classList.toggle('is-active', isActive);
        trigger.setAttribute('aria-selected', String(isActive));
        trigger.tabIndex = isActive ? 0 : -1;
      });

      panels.forEach((panel) => {
        const isActive = panel.dataset.tabPanel === targetId;
        panel.hidden = !isActive;
      });
    };

    triggers.forEach((trigger) => {
      trigger.addEventListener('click', () => {
        const targetId = trigger.dataset.tabTarget;
        if (!targetId) {
          return;
        }

        activate(targetId);
      });
    });

    const initialTarget =
      triggers.find((trigger) => trigger.classList.contains('is-active'))?.dataset.tabTarget ||
      triggers[0]?.dataset.tabTarget;

    if (initialTarget) {
      activate(initialTarget);
    }
  });
};

const setupEmailForms = (): void => {
  const forms = Array.from(document.querySelectorAll<HTMLFormElement>(EMAIL_FORM_SELECTOR));
  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!form.reportValidity()) {
        return;
      }

      const recipient = form.dataset.recipient || 'hello@onebodychurch.org';
      const subjectPrefix = form.dataset.subject || 'Website enquiry';
      const formData = new FormData(form);
      const fieldPairs: string[] = [];

      formData.forEach((value, key) => {
        const normalizedValue = String(value).trim();
        if (!normalizedValue) {
          return;
        }

        const field = form.elements.namedItem(key);
        const label =
          field instanceof HTMLElement && field.dataset.label
            ? field.dataset.label
            : key.replace(/[-_]/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());

        fieldPairs.push(`${label}: ${normalizedValue}`);
      });

      const primaryValue =
        String(formData.get('name') || '').trim() ||
        String(formData.get('email') || '').trim() ||
        'New enquiry';

      const body = [
        'Hello Onebody team,',
        '',
        ...fieldPairs,
        '',
        'Sent from the website.'
      ].join('\n');

      window.location.href = toMailto(recipient, `${subjectPrefix}: ${primaryValue}`, body);
    });
  });
};

const setupAccordions = (): void => {
  const accordionGroups = Array.from(document.querySelectorAll<HTMLElement>(ACCORDION_GROUP_SELECTOR));
  accordionGroups.forEach((group) => {
    const items = Array.from(group.querySelectorAll<HTMLDetailsElement>('details'));
    items.forEach((item) => {
      item.addEventListener('toggle', () => {
        if (!item.open) {
          return;
        }

        items.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.open = false;
          }
        });
      });
    });
  });
};

export const setupSiteInteractions = (): void => {
  setupTabs();
  setupEmailForms();
  setupAccordions();
};
