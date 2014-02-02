redirectHost
============

重定向到指定域名，并使用nginx做缓存

<ul><b>项目说明</b>
	<li>chrome：使用chrome插件，通过background将所有img的请求进行重定向，但该项目没有达到期望，因为这样会导致chrome的高效加载失效，且不能针对指定类型的页面进行调用（严格说，是不能针对范围，如js声明的file:///*文件类型中的img才进行redirect，这样写会导致全部都被redirect）。</li>
	<li>chrome_illusion：针对chrome的非合理替代设想，通过remove达到取消img标签的请求，并通过动态替换src链接完成处理。但若src指向的是一个可变（服务端redirect），则无能为力。</li>
	<li>nginx：对nginx的本地缓存代理服务配置。</li>
</ul>