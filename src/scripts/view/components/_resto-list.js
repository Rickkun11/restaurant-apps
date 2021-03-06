import {createElement} from '../../helper';

class RestoList extends HTMLElement {
  connectedCallback() {
    this._renderSkeleton();
  }

  set restoList(restoList) {
    this._renderRestoList(restoList);
  }

  _renderSkeleton() {
    const numberItemSkeleton = 6;
    for (let index = 0; index < numberItemSkeleton; index++) {
      const restoItemElement = createElement('resto-item');
      restoItemElement.renderSkeleton();
      this.appendChild(restoItemElement.firstElementChild);
    }
  }

  _renderRestoList(restoList) {
    this.innerHTML = '';
    restoList.forEach((resto) => {
      const restoItemElement = createElement('resto-item');
      restoItemElement.restoData = resto;
      this.appendChild(restoItemElement.firstElementChild);
    });
  }
}

customElements.define('resto-list', RestoList);
