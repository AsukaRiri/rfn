// jQuery plugins
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        factory(window.jQuery);
    }
}(function ($) {
  $.fn.extend({
    rClick:function(fn) {
      return this.each(function() {
        if (window.addEventListener) {
          this.addEventListener(rfn.config.mouseEvent, function(e) {
            if (rfn.dragging)
              return;
            fn.call(this, e)
          });
        } else {
          this.attachEvent('on' + rfn.config.mouseEvent, function(e) {
            if (rfn.dragging)
              return;
            fn.call(this, e)
          });
        }
      });
    },
  })
}))

// r-function
rfn = {}

rfn.dragging = false;

rfn.config = {
  browser: {
    versions:function() {
      var u = navigator.userAgent;
      return {
        trident: u.indexOf('Trident') > -1, //IE
        presto: u.indexOf('Presto') > -1, //opera
        webKit: u.indexOf('AppleWebKit') > -1, //safari、chrome
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//firefox
        safari: (u.indexOf('Safari') > -1 && u.indexOf('Chrome') == -1), //Safari
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //mobile
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios
        android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android
        iPhone: u.indexOf('iPhone') > -1 , //iPhone/QQHD
        iPad: u.indexOf('iPad') > -1, //iPad
        webApp: u.indexOf('Safari') == -1, //webApp
        weixin: u.indexOf('MicroMessenger') > -1, //weixin
        qq: u.match(/\sQQ/i) == " qq" //QQ
      };
    }(),
    trident:function() {
      return {
        lte_IE6:typeof window.addEventListener == "undefined" && typeof document.documentElement.style.maxHeight == "undefined",
        lte_IE7:typeof window.addEventListener == "undefined" && typeof document.querySelectorAll == "undefined",
        lte_IE8:typeof window.addEventListener == "undefined" && typeof document.getElementsByClassName == "undefined",
        lte_IE9:document.uniqueID && typeof window.matchMedia == "undefined",
        gte_IE10:document.uniqueID && window.matchMedia ,
        eq_IE8:document.uniqueID && document.documentMode === 8,
        eq_IE9:document.uniqueID && document.documentMode === 9,
        eq_IE10:document.uniqueID && document.documentMode === 10,
        eq_IE11:document.uniqueID && document.documentMode === 11,
        Trident:document.uniqueID
      }
    }(),
    appVersion:navigator.appVersion,
    language:(navigator.browserLanguage || navigator.language).toLowerCase(),
    cookie:navigator.cookieEnabled,
  },
  mouseEvent:function() {
    return (!!navigator.userAgent.match(/AppleWebKit.*Mobile.*/))?'touchend':'click'
  }()
}

// call befoe DOM is ready
rfn.init = function() {
  if (this.config.browser.versions.mobile) {
    window.addEventListener('touchmove', function() {
      rfn.dragging = true;
    })
    window.addEventListener('touchstart', function() {
      rfn.dragging = false;
    })
  }
  if (window.addEventListener) {
    window.addEventListener('wheel', function() {
      $('html, body').stop();
    })
  } else {
    window.attachEvent('onwheel', function() {
      $('html, body').stop();
    })
  }
}

// call on DOM is ready
rfn.pageInit = function() {
  window.userdata = {
    language: ''
  }
}

rfn.loadCss = function(url) {
  // .appendChild(requireTag);
  var head = document.getElementsByTagName('head')[0],
      link = document.createElement('link');

  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = url;

  head.appendChild(link);
}

rfn.smoothScroll = function(options) {
  var defaults = {
    selector: '[data-scroll]',
    speed: 500, //'slow','fast'
    easing: 'swing', //'swing','linear'
    offset: 0,
    callback: function () {}
  };

  var settings = $.extend( {}, defaults, options);

  $(settings.selector).on(rfn.config.mouseEvent, function(e) {
    if (rfn.dragging)
      return;

    e.preventDefault();

    var hash = this.getAttribute('data-scroll');

    var el = document.getElementById(this.getAttribute('data-scroll'));

    if(el)
      $('html, body').stop().animate({
        scrollTop: $(el).offset().top + settings.offset
      }, settings.speed, settings.easing, function(){
        window.location.hash = hash;
      });
  })
}

rfn.setCookie = function(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

rfn.getCookie = function(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

rfn.getQueryString = function() {
  var query_string = {};
  var query = window.location.search.substring(1);
  if (!query || query == '') {
    var hash = location.hash.slice(1);
    if (hash.indexOf('?') > 0) {
      query = hash.substr(hash.indexOf('?')+1);
    }
  }
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  } 
  return query_string;
};
