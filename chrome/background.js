// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Simple extension to replace lolcat images from
// http://icanhascheezburger.com/ with loldog images instead.

var _host = "http://img.lucifer.cn:19830/";
var _http = "http://";
var _http_length = _http.length;

chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
	if(info.url.indexOf(_http) === 0){
		if(info.url.indexOf(_host) != 0){
		    return {redirectUrl: _host + info.url.substring(_http_length)};
		}
	}
  },
  // filters
  {
	urls: [
      "http://*/*"
    ],
    types: ["image"]
  },
  // extraInfoSpec
  ["blocking"]);
