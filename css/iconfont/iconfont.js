;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-msnui-find-bold" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M941.245 820.546l-183.82-183.822c36.356-58.124 57.391-126.813 57.391-200.423 0-209.045-169.462-378.507-378.507-378.508-209.044 0-378.507 169.464-378.507 378.507 0 209.044 169.463 378.508 378.507 378.508 73.621 0 142.317-21.042 200.449-57.405l183.853 183.854c33.272 33.272 87.359 33.272 120.634 0 33.272-33.351 33.272-87.364 0.001-120.709zM436.309 663.404c-125.428 0-227.103-101.679-227.103-227.104s101.678-227.103 227.103-227.102c125.427 0 227.103 101.678 227.103 227.103-0.001 125.425-101.679 227.103-227.103 227.103z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M767.707334 519.450692 308.065819 71.476915 256.054235 122.209366 663.627884 519.419993 256.085958 916.629597 308.060703 967.363072Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gouwuche" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M854.704223 536.419156c58.959833 0 106.755396-47.794539 106.756419-106.754373L961.460642 271.530207c0-23.584138-19.117406-42.703591-42.702568-42.703591L384.979048 228.826616c-23.584138 0-42.702568 19.120476-42.702568 42.703591 0 23.582091 19.11843 42.702568 42.702568 42.702568L876.05653 314.232774l0 96.081289c0 23.582091-19.119453 42.700521-42.702568 42.700521l-80.46052 8.800433c0.051165 0.163729 0.096191 0.330528 0.148379 0.493234L382.863874 506.419911c-7.429203 0.144286-14.673188 1.045819-21.656229 2.632967-2.667759 0.449231-5.236258 1.149173-7.694239 2.055822-5.493108 1.692548-10.796904 3.817955-15.872502 6.333242L234.262418 136.364761c-3.365654-20.2236-20.932752-35.644825-42.111097-35.644825l-85.404112 0c-23.584138 0-42.703591 19.120476-42.703591 42.703591 0 23.582091 19.119453 42.702568 42.703591 42.702568l52.523237 0 120.109542 442.759009c7.609305 51.496861 51.986001 91.020016 105.598037 91.020016L918.759097 719.90512c23.584138 0 42.702568-19.11843 42.702568-42.702568s-19.117406-42.702568-42.702568-42.702568L384.979048 634.499985c-7.915273 0-14.818497-4.310166-18.506493-10.708899-0.049119-0.194428-0.088004-0.387833-0.140193-0.582261l-2.701528-9.958816c0-0.034792-0.00307-0.067538-0.00307-0.102331 0-11.792581 9.558703-21.351284 21.350261-21.351284l101.418854-11.342326 0.339738 0.381693c-0.079818-0.251733-0.149403-0.508583-0.231267-0.759293l366.564653-43.679825C853.614401 536.406876 854.157777 536.419156 854.704223 536.419156zM374.303918 805.309232c-29.481452 0-53.377698 23.89727-53.377698 53.378721 0 29.478382 23.89727 53.376675 53.377698 53.376675 29.479405 0 53.376675-23.898293 53.376675-53.376675C427.681616 829.206502 403.783323 805.309232 374.303918 805.309232zM865.381399 805.309232c-29.481452 0-53.378721 23.89727-53.378721 53.378721 0 29.478382 23.898293 53.376675 53.378721 53.376675 29.479405 0 53.376675-23.898293 53.376675-53.376675C918.759097 829.206502 894.860804 805.309232 865.381399 805.309232z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-chevron-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M249.344 534.43l479.122 479.157c13.943 13.907 36.48 13.907 50.422 0 13.943-13.943 13.943-36.515 0-50.458l-455.73-455.765 448.205-448.241c13.551-13.516 13.551-35.446 0-48.961-13.515-13.586-35.446-13.586-48.995 0l-465.5 465.464c-1.819 1.819-2.71 4.030-4.030 6.133-1.105 0.82-2.461 1.248-3.495 2.282-13.907 13.907-13.907 36.48 0 50.387z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-chevron-copy-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M774.656 489.57l-479.122-479.157c-13.943-13.907-36.48-13.907-50.422 0-13.943 13.943-13.943 36.515 0 50.458l455.73 455.765-448.205 448.241c-13.551 13.516-13.551 35.446 0 48.961 13.515 13.586 35.446 13.586 48.995 0l465.5-465.464c1.819-1.819 2.71-4.030 4.030-6.133 1.105-0.82 2.461-1.248 3.495-2.282 13.907-13.907 13.907-36.48 0-50.387z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)