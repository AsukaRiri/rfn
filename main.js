rfn.init();

routes.menu = ['#menu'];
routes.exclude = '.langBtn';

routes.callback = function() {
  // Fire when hash change, after page loaded
}
route('/', 'home.html', function () {
  // Fire in specific page, after page loaded
});

$(document).ready(function() {
  if (rfn.config.browser.versions.mobile) {
    // iPhone, iPad, Android, Non-desktop Device
  }
  if (rfn.config.browser.versions.iPhone) {
    // iPhone
  }
  if (rfn.config.browser.versions.iPad) {
    // iPad
  }
  if (rfn.config.browser.versions.android) {
    // Android Device
  }
});
