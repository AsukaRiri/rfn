rfn.init();

routes.menu = ['#menu'];
routes.exclude = '.langBtn';

routes.callback = function() {
}

route('/', 'home.html', function () {});

$(document).ready(function() {
  if (rfn.config.browser.versions.mobile) {
    // iPhone or Android Phone but not iPad
  }
  if (rfn.config.browser.versions.iPad) {
    // iPad
  }
  if (rfn.config.browser.versions.mobile || rfn.config.browser.versions.android || rfn.config.browser.versions.iPad) {
    // all non desktop device 
  }
});
