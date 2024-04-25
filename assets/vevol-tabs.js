const template = document.createElement('template');
template.innerHTML = `<slot name="vevol-tabs"></slot>`;

class VevolTabs extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const clone = template.content.cloneNode(true);

    this.tabTitleElements = this.querySelectorAll('[data-title-tab]');
    this.tabContentElements = this.querySelectorAll('[data-content-tab]');

    this.tabTitleElements.forEach(tab => {
      tab.addEventListener('click', (event) => this.switchActiveTab(event.target.dataset.titleTab));
    });

    shadowRoot.append(clone);
  }

  switchActiveTab(tabIndex) {
    this.tabTitleElements.forEach(tab => tab.dataset.titleTab !== tabIndex
      ? tab.classList.remove('active')
      : tab.classList.add('active')
    );

    this.tabContentElements.forEach(tab => tab.dataset.contentTab !== tabIndex
      ? tab.classList.remove('active')
      : tab.classList.add('active')
    );
  }
}

window.customElements.define('vevol-tabs', VevolTabs);
