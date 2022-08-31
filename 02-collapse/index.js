const collapsibleButton = document.querySelector('.collapsible__button');
const collapsibleContent = document.querySelector('.collapsible__content');
const collapsibleActionHidden = document.querySelector('.collapsible__action--hidden');
const collapsibleActionVisible = document.querySelector('.collapsible__action--visible');

const contentEmergence = [
  { visibility: 'visible' },
  { position: 'static' },
];
const contentHiding = [
  { visibility: 'hidden' },
  { position: 'absolute', top: '-100%'},
];

const collapsAnimationTiming = { fill: 'forwards' }


function showContent() {
  collapsibleContent.animate(
    contentHiding,
    collapsAnimationTiming,
  )
  collapsibleActionVisible.animate(
    contentHiding,
    collapsAnimationTiming,
  )
  collapsibleActionHidden.animate(
    contentEmergence,
    collapsAnimationTiming,
  )
}

function hideContent() {
  collapsibleContent.animate(
    contentEmergence,
    collapsAnimationTiming,
  )
  collapsibleActionVisible.animate(
    contentEmergence,
    collapsAnimationTiming,
  )
  collapsibleActionHidden.animate(
    contentHiding,
    collapsAnimationTiming,
  )
}

collapsibleActionHidden.animate(
  contentHiding,
  collapsAnimationTiming,
)

collapsibleButton.addEventListener('click', (event) => {
  const eventClassName = event.target.className;
  const isHideButton = eventClassName.includes('collapsible__action--visible');
  isHideButton ? showContent() : hideContent()
})



