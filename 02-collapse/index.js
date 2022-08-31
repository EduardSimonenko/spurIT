const collapsibleButton = document.querySelector('.collapsible__button');
const collapsibleContent = document.querySelector('.collapsible__content');
const showContentButton = document.querySelector('.collapsible__action--hidden');
const hideContentButton = document.querySelector('.collapsible__action--visible');

const contentAnimationEmergence = [
  { visibility: 'visible' },
  { position: 'static' },
];

const contentAnimationHiding = [
  { visibility: 'hidden' },
  { position: 'absolute', top: '-100%'},
];

const collapsAnimationTiming = { fill: 'forwards' };

function showElement(el) {
  el.animate(contentAnimationEmergence, collapsAnimationTiming);
}

function hideElement(el) {
  el.animate(contentAnimationHiding, collapsAnimationTiming);
}

function hideContent() {
  hideElement(collapsibleContent);
  hideElement(hideContentButton);
  showElement(showContentButton);
}

function showContent() {
  showElement(collapsibleContent);
  showElement(hideContentButton);
  hideElement(showContentButton);
}

hideElement(hideContentButton);
hideElement(collapsibleContent);

collapsibleButton.addEventListener('click', (event) => {
  const isShowContentButton = (event.target === showContentButton);
  isShowContentButton ? showContent() : hideContent();
})



