(function () {
  function injectCSS (id, css) {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.id = id;
    if (style.styleSheet) style.styleSheet.cssText = css;
    else style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  }
  function onDomContentLoaded () {
    // style
    var css = 'body { margin: 0; padding: 0; }' +
    '#kti-overlay {' +
      'width: 100%;' +
      'height: 100%;' +
      'margin: 0; padding: 0;' +
      'overflow: hidden;' +
      'position: absolute;' +
      'top: 0px;' +
      'z-index: 999999999;' +
    '}' +
    '#kti-page {' +
      'background-color: white;' +
    '}' +
    '.kti-body {' +
      'margin: 0 auto;' +
      'max-width: 600px;' +
      'padding: 20px 10px 10px 10px;' +
      'bottom: 0;' +
      'height: 100%;' +
      'font-family: courier;' +
      'font-size: 110%;' +
    '}' +
    '.kti-loading {' +
      'position: relative;' +
      'display: inline-block;' +
      'margin-left: 25%;' +
      'font-weight: bold;' +
      'text-align: center;' +
    '}' +
    'ul { margin-top: 1.5em; }' +
    'ul > li { margin-bottom: 1.25em; }';
    injectCSS('_btn_css', css)
    // html
    var html = '<div id="kti-overlay">' +
      '<div id="kti-page">' +
        '<div class="kti-body">' +
          '<p class="kti-loading">Loading website</p><span class="kti-loading-dots"></span>' +
          '<h3 style="margin-top:40px">Dear Visitor,</h3>' +
          '<p>' +
            'America\'s Internet, and <a href="https://blog.united.vote/2017/12/06/net-neutrality-is-a-freedom-of-speech-issue-period/">freedom of speech</a>, are <a href="https://www.battleforthenet.com/breaktheinternet/">under attack by mega-ISPs</a>.' +
          '</p>' +
          '<p>This is a <a href="https://twitter.com/arcalinea/status/938912665820209152">fundamental threat</a>.</p>' +
          '<p>Americans don\'t give up freedom without a fight.</p>' +
          '<ul>' +
            '<li>' +
              '<b><a href="https://twitter.com/vanschewick/status/938824374441992194">Arm</a> <a href="https://twitter.com/taoeffect/status/938899540261744640">yourself</a> <a href="https://lobste.rs/s/dgki9h/net_neutrality_is_freedom_speech_issue#c_70cccr">with</a> <a href="https://twitter.com/taoeffect/status/938916525288726528">knowledge</a>.</b>' +
            '</li>' +
            '<li>' +
              '<b>Break your website.</b>' +
              '<br><br>' +
              'It <a href="https://duckduckgo.com/?q=napoleon+russians+scorched+earth">worked for the Russians</a>.' +
              '<br><br>' +
              'Use <b><a href="https://github.com/taoeffect/break-the-net">our code</a></b> or <b><a href="https://github.com/fightforthefuture/battleforthenet-widget">theirs</a></b>.' +
            '</li>' +
            '<li>' +
              '<b>Create city/community ISPs!</b>' +
              '<br><br>' +
              'How power-crazed are the ISPs?' +
              '<br><br>This crazy: <a href="https://arstechnica.com/tech-policy/2017/01/virginia-broadband-deployment-act-would-kill-municipal-broadband-deployment/">they\'ve already begun efforts</a> to dictate how your <i>local community</i> chooses to connect to the Internet.' +
              '<br><br>' +
              'Force them to compete with a <i>public option</i> — your local city-run or community-run ISP.' +
              '<br><br>' +
            '</li>' +
          '</ul>' +
          '<p class="kti-loading">Loading website</p><span class="kti-loading-dots"></span>' +
        '</div>' +
      '</div>' +
    '</div>';
    var wrapper = document.createElement('div');
    wrapper.innerHTML = html
    document.body.appendChild(wrapper)
    // script
    var loadingEls = document.getElementsByClassName('kti-loading-dots')
    var overlayEl = document.getElementById('kti-overlay')
    var pageEl = document.getElementById('kti-page')
    var loading = ['.', '..', '...']
    var loadingIdx = 0
    var baseHeight = overlayEl.scrollHeight
    var moveBy = 0
    function move () {
      var height = Math.max(baseHeight, window.innerHeight)
      if (moveBy > height) moveBy = height
      overlayEl.style.top = moveBy + 'px'
      pageEl.style.marginTop = -moveBy + 'px'
      pageEl.style.height = (height + moveBy) + 'px'
      overlayEl.style.height = (height - moveBy) + 'px'
    }
    window.onresize = move
    var loadingFn = function () {
      var dots = loading[loadingIdx++ % loading.length]
      for (var loadingEl of loadingEls) {
        loadingEl.innerText = dots
      }
      moveBy += parseInt(Math.random() * 3)
      move()
      setTimeout(loadingFn, 1000)
    }
    loadingFn()
  }
  switch(document.readyState) {
    case 'complete':
    case 'loaded':
    case 'interactive':
      onDomContentLoaded();
      break;
    default:
      if (typeof document.addEventListener === 'function') {
        document.addEventListener('DOMContentLoaded', onDomContentLoaded, false);
      }
  }
})();
