// ==UserScript==
// @name         Auto-redirect for browser Slack users
// @namespace    https://github.com/felipelousantos/userscript-slack-auto-redirect
// @version      0.1
// @description  If you are a Slack browser user, this userscript will allow you to auto-redirect without Slack asking if you want to open on the desktop app.
// @author       felipelousantos
// @match        https://*.slack.com/archives/*
// @icon         https://www.google.com/s2/favicons?domain=slack.com
// @grant        none
// ==/UserScript==

(function() {
    if (document.getElementsByClassName('p-ssb_redirect')[0] =! null){
        const currentLink = window.location.href;
        const browserLink = currentLink.replace("archives", "messages");
        document.getElementsByClassName('p-ssb_redirect')[0].innerHTML = "";
        location.replace(browserLink);
    }
})();