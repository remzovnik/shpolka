import ProgressBar from './progress-bar';

let progressBar = null;

export default {
  name: 'progress-bar',
  directive: {
    bind(el) {
      progressBar = new ProgressBar(el);
    },
    unbind() {
      progressBar.destroy();
    },
  },
};
