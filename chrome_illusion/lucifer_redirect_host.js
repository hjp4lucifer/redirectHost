var lcf = {
	redirectHost: {
		checkImages: function(){
			var _host = "http://img.lucifer.cn:19830/";
			var _http = "http://";
			var _http_length = _http.length;
			var imgs = document.getElementsByTagName("img");
			var img, imgP, nextSibling, src;
			for (var i = 0, len = imgs.length; i < len; i++) {
				img = imgs[i];
				
				imgP = img.parentElement;
				nextSibling = img.nextSibling;
				
				img.remove();
				src = img.getAttribute("src");
				if (src.indexOf(_http) === 0) {
					img.setAttribute("src", _host + src.substring(_http_length));
				}
				imgP.insertBefore(img, nextSibling);
			}
			
			imgs = null;
		}
	}
};

lcf.redirectHost.checkImages();
