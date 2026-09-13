// Want this removed or tweaked? DM mountain658 on GitHub or open an issue.
// Goal: Help users find unblocked/updated sites. Let's work together.

//WARNING: DELETING THIS FILE FROM ITS CDN COULD CAUSE DISASTERS IN THE FUTURE
//Just don't delete it, it does no harm and only helps the user :)
//I will put updates here for out-of-date sites

//DO NOT DELETE
// Multiple CDN tags can exist on old forks. Only let the first successful copy run.
if (!window.__mountain658UiUpdatesLoaded) {
window.__mountain658UiUpdatesLoaded = true;

// Cloudflare Web Analytics (privacy-friendly pageview counter, no cookies).
// Skipped on pages that already carry the beacon in their own HTML.
(function() {
  if (document.querySelector('script[src*="cloudflareinsights.com/beacon"]')) return;
  var s = document.createElement('script');
  s.defer = true;
  s.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  s.setAttribute('data-cf-beacon', '{"token":"05bdd150336340f39ba71823a436ecb8"}');
  (document.head || document.documentElement).appendChild(s);
})();

(function() {
  const NEW_CHAT_URL = "https://escaping.work/chat/";

  function replaceIframe(iframe) {
    if (iframe && iframe.src.includes("ccc.html")) iframe.src = NEW_CHAT_URL;
  }
  document.querySelectorAll("iframe[src*='ccc.html']").forEach(replaceIframe);
  const observer = new MutationObserver(m => {
    m.forEach(x => x.addedNodes.forEach(n => {
      if (n.tagName === "IFRAME") replaceIframe(n);
      else if (n.querySelectorAll) n.querySelectorAll("iframe[src*='ccc.html']").forEach(replaceIframe);
    }));
  });
  const startObs = () => observer.observe(document.body, { childList: true, subtree: true });
  if (document.body) startObs(); else document.addEventListener("DOMContentLoaded", startObs);

  function injectLiveChat() {
    if (document.querySelector("#livechat iframe[src*='escaping.work/chat']")) return;
    const searchInput = document.getElementById('searchQuery');
    if (!searchInput) return;
    const liveChat = document.createElement('div');
    liveChat.id = 'livechat';
    liveChat.className = 'chat';
    liveChat.innerHTML = `
      <h3>Live Chat</h3>
      <button class="niceButton" type="button">Full Page</button>
      <p>Chat with everyone on the site!</p>
      <div id="chat"></div>`;
    searchInput.parentElement.before(liveChat);
    const iframe = document.createElement('iframe');
    iframe.id = 'thechat';
    iframe.width = '99%';
    iframe.height = '350';
    iframe.src = NEW_CHAT_URL;
    iframe.loading = 'lazy';
    iframe.style.border = 'none';
    iframe.style.borderRadius = '8px';
    liveChat.querySelector('#chat').appendChild(iframe);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", injectLiveChat); else injectLiveChat();
})();

(function() {
  if (window.__modalScriptInjected) return;
  window.__modalScriptInjected = true;

  if (window.localStorage && localStorage.getItem('cornerModalChoice') === 'never') return;
  if (window.sessionStorage && sessionStorage.getItem('cornerModalChoice') === 'later') return;

  function createModal() {
    var modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.bottom = '16px';
    modal.style.left = '16px';
    modal.style.background = '#fefefe';
    modal.style.border = '1px solid #ccc';
    modal.style.borderRadius = '8px';
    modal.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';
    modal.style.padding = '12px 16px';
    modal.style.right = '16px';
    modal.style.maxWidth = 'calc(100vw - 32px)';
    modal.style.boxSizing = 'border-box';
    modal.style.fontFamily = 'sans-serif';
    modal.style.fontSize = '14px';
    modal.style.zIndex = '99999';
    modal.style.color = 'black';

    modal.innerHTML = ''
      + '<div style="margin-bottom: 8px;">Maintenance 🔧 by mountain658 :)</div>'
      + '<div style="margin-bottom: 8px;">Is this site old, broken, or blocked at school?</div>'
      + '<div style="margin-bottom: 8px;">I\'ll give you a new link!</div>'
      + '<div style="margin-bottom: 8px;">Email me, at: <a href="mailto:mountaingames658@zohomail.com">mountaingames658@zohomail.com</a></div>'
      + '<button id="hideModalBtn" style="margin-right: 8px;">Hide</button>'
      + '<button id="laterModalBtn" style="margin-right: 8px;">Remind Me Later</button>'
      + '<button id="neverModalBtn">Never Show Again</button>';

    document.body.appendChild(modal);

    document.getElementById('hideModalBtn').onclick = function() {
      modal.parentNode.removeChild(modal);
    };

    document.getElementById('laterModalBtn').onclick = function() {
      if (window.sessionStorage) {
        sessionStorage.setItem('cornerModalChoice', 'later');
      }
      modal.parentNode.removeChild(modal);
    };

    document.getElementById('neverModalBtn').onclick = function() {
      if (window.localStorage) {
        localStorage.setItem('cornerModalChoice', 'never');
      }
      modal.parentNode.removeChild(modal);
    };
  }

  if (document.body) {
    createModal();
  } else {
    if (document.addEventListener) {
      document.addEventListener('DOMContentLoaded', createModal, false);
    } else {
      // For really old browsers
      window.attachEvent('onload', createModal);
    }
  }
})();
}
