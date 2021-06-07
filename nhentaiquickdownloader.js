// ==UserScript==
// @name         Nhentai quick downloader
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  downlaod doujinshi without opening it in a new tab
// @author       Valete_
// @match        https://nhentai.net/*
// @icon         https://www.google.com/s2/favicons?domain=nhentai.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var display = document.getElementsByClassName("gallery");
    var cover = document.getElementsByClassName("cover");
    var i = 0
    var link = document.createElement('style');
    link.innerHTML = ".quickdownlaod {border-radius: 7px;height: 28px;background-color: #00a30b;position: absolute;z-index: 9999;bottom: 10px;left: 34%;display: none}.gallery:hover .quickdownlaod {display: block;}"
    document.getElementsByTagName('head')[0].appendChild(link);

    while (display.length > i) {
        var button = document.createElement("button")
        button.innerHTML = "Download"
        button.className = "quickdownlaod"
        button.setAttribute('onclick', `window.open('${cover[i].href}download', '_blank');browser.downloads.open()`)
        display[i].appendChild(button);
        i++
    }
})();