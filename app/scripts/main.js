$(document).ready(function () {
  $('#fullpage').fullpage({
    anchors: ['welcome', 'intro', 'task', 'proc', 'eval', 'con', 'ref', 'teacher'],
    verticalCentered: false,
    slidesNavigation: true,
    menu: '#menu',
    animateAnchor: true,
    scrollOverflow: true
  });
});
