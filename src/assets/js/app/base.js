var viewPort = $(window).width();

function visibleElInViewPort(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height) > window.pageYOffset &&
    (left + width) > window.pageXOffset
  );
}

var init = {
  canUseWebP: function() {
    var elem = document.createElement('canvas');

    if (!!(elem.getContext && elem.getContext('2d'))) {
        // was able or not to get WebP representation
        return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }

    // very old browser like IE 8, canvas not supported
    return false;
  },
  dataBg: function() {
    $('section[data-bg], div[data-bg], span[data-bg]').each(function(i){
      var imgWrp = $(this)[0];
      var bg = imgWrp.dataset.bg;
      var webpBg = imgWrp.dataset.webp;
      var mobileBg = imgWrp.dataset.mobilebg;
      var webpMobileBg = imgWrp.dataset.mobilewebp;
      var webpSupport = init.canUseWebP();
      var viewportWidth = $(window).width();
      if(webpSupport){
        if(viewportWidth > 580){
          $(imgWrp).css("background-image", 'url(' +webpBg+ ')');
        } else {
          $(imgWrp).css("background-image", 'url(' +webpMobileBg+ ')');
        }
      } else {
        if(viewportWidth > 580){
          $(imgWrp).css("background-image", 'url(' +bg+ ')');
        } else {
          $(imgWrp).css("background-image", 'url(' +mobileBg+ ')');
        }
      }
    });
  },
}

init.dataBg();

var rtl_status = $('html').attr('dir');
var rtl = false;
  if (rtl_status == 'rtl') {
    rtl = true;
  }
 
