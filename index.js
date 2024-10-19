// ==UserScript==
// @name         Autopass Cloudflare Turnstile(CAPTCHA)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automatically simulate mouse events to pass Cloudflare Turnstile challenge
// @author       liuweiqing(github.com @14790897)
// @match        *://*/*
// @grant        MIT
// @run-at       document-end
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cloudflare.com
// ==/UserScript==

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let xc = 1234,
      yc = 567;

    Object.defineProperty(MouseEvent.prototype, "screenX", { value: xc });
    Object.defineProperty(MouseEvent.prototype, "screenY", { value: yc });

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (
              node.nodeName === "INPUT" &&
              node.name === "cf-turnstile-response"
            ) {
              const turnstileItem = document.querySelector(
                'input[name="cf-turnstile-response"]'
              );
              if (turnstileItem) {
                const rect =
                  turnstileItem.parentElement.getBoundingClientRect();
                xc = getRandomInt(rect.left, rect.right);
                yc = getRandomInt(rect.top, rect.bottom);

                const event = new MouseEvent("mousemove", {
                  screenX: xc,
                  screenY: yc,
                });
                turnstileItem.dispatchEvent(event);

                Object.defineProperty(MouseEvent.prototype, "screenX", {
                  value: xc,
                });
                Object.defineProperty(MouseEvent.prototype, "screenY", {
                  value: yc,
                });
              }
            }
          });
        }
      });
    });

    const target = document.body;
    const config = { childList: true, subtree: true };

    observer.observe(target, config);
  });
})();
