// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function click(e) {
    if(e.target.id == 'yes'){
        chrome.tabs.executeScript(null, {file: "content-yes.js"});
        chrome.browserAction.setIcon({
            path : "icon-yes.png"
        });
    }else if(e.target.id == 'no'){
         chrome.tabs.executeScript(null, {file: "content-no.js"});
        chrome.browserAction.setIcon({
            path : "icon-no.png"
        });
        
    }
    console.log(e.target);
    // Also correct

    
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});
