<h1>MakeSticky</h1>
<h2>A jQuery plugin that makes an element stick when scrolling</h2>
<p>This jQuery plugin makes it easy to stick an element below another fixed element when scrolling. You call the plugin, stating
<ol>
	<li><u>what element</u> needs to stick;</li>
	<li><u>what other element</u> (if any) you want it to stick to;</li>
	<li>activate the stickiness on scrolling <u>up</u> or <u>up and down</u>;</li>
	<li>and even if you want a <u>shadow</u> below the sticky element.</li>
</ol></p>
<p>This page features an example: the login form below is stuck below the navbar and is shown both when scrolling up and down.</p>
<h3>See it in action: <a href="https://rayhyde.github.io/makesticky/">rayhyde.github.io/makesticky</a></h3>
<h2>How to use this plugin</h2>
<h3>1. Link the files you need</h3>
<p>Include the jQuery script at the bottom of your page, e.g. through a CDN:</p>
<p><code>	&lt;script src="//code.jquery.com/jquery-2.1.3.min.js"&gt;&lt;/script&gt;</code></p>
<p>Then include the minimized version of the script:</p>
<p><code>&lt;script src="[path to your script]/jquery-makesticky.min.js"&gt;&lt;/script&gt;</code></p>
<p>Change [path to your script] to where it resides, eg "js".</p>
<h3>2. Call the plugin</h3>
<p>Then initialize the plugin at the bottom of the page, telling it which element needs to be made sticky:</p>
<pre>
&lt;script&gt;
$(&lt;id or class of the element here, e.g. "#myLoginForm"&gt;).makeSticky();
&lt;/script&gt;</pre>
<p>If you do nothing else, then your #myLoginForm sticks to the top of the page when you scroll up or down, and it has a shadow. However, you can tell the plugin if it needs to stick under something else, e.g. on this page it sticks below the navigation menu:</p>
<pre>
&lt;script&gt;
	$(&lt;id or class of the element here, e.g. "#myLoginForm"&gt;).makeSticky({
		stickBelow: $('.navbar'),
		oneWay: true,
		shadow: false
	});
&lt;/script&gt;</pre>
<p>In the previous example we have also told it to stick only on scroll up and to do away with the shadow.</p>
<h3>4. The CSS</h3>
<p>There is no CSS necessary for this plugin to work. But please keep in mind that your sticky element might look different when it is fixed at the top of your page e.g. because it sits no longer in the flow of your layout.</p>
<p>To help you, &lt;body&gt; gets the class name "<strong>make-sticky-active</strong>" when the stickyness is activated, so you can adjust your CSS accordingly:</p>
<pre>
.make-sticky-active #myLoginForm {
	width: 980px;
	margin: 0 auto;
}</pre>

<p>This project is part of my Playground - a collection of fun (and dare I say it: clever) stuff I made in the past, from jQuery games and plugins to CSS animation tricks.</p>
<p>Please drop in on my portfolio site<br><a href="http://www.rayhyde.nl">www.rayhyde.nl</a></p>
