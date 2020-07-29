import SELECTORS from './constants';

export default class ProgressBar {
  constructor(el) {
    this.el = el;
    this.progressBar = el.querySelector(SELECTORS.progressBarElem);

    this.changeProgressBarValue = this.changeProgressBarValue.bind(this);

    this.init();
  }

  init() {
    document.addEventListener('scroll', this.changeProgressBarValue);
  }

  changeProgressBarValue() {
    this.progressBar.style.transform = `scaleX(${document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)})`;
  }

  destroy() {
    document.removeEventListener('scroll', this.changeProgressBarValue);
  }
}
