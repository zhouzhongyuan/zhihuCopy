// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + ' red!');
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="red";' +
    'document.addEventListener("copy", function(e){' +
    'var m = window.getSelection().toString();' +
    'if ("object" === typeof e.clipboardData) {' +
    'var m = window.getSelection().toString();' +
    'e.clipboardData.setData(\'text/plain\', m);'+
    'console.log(m);e.preventDefault();' +
    'return;}});'
  });
});
