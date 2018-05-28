Title:       A Sample Metadata Document  
Subtitle:    A Subtitle
Project:     Fake Disney App
Author:      Hilton Lipschitz  
Date:        June 18, 2012 
Comment:     This is a comment intended to demonstrate  
             metadata that spans multiple lines, yet  
             is treated as a single value.  
CSS:         http://example.com/standard.css


------


# Error 404

The page could not be found. 

# Singularity

Singularity is a simple, flat file CMS which marks up HTML using Markdown. It's short and concise, taking nothing but less than 40 lines of PHP code and an htaccess file.

## Customization

The content directory, file type, and Bootstrap theme can be easily customized by simply editing the PHP variables provided:

	define('CONTENT_DIR', ROOT_DIR .'content/'); //change this to change which folder you want your content to be stored in
	$bootswatch_theme = "cerulean"; //choose any bootstrap theme included in strapdown.js!
	$file_format = ".txt"; //change this to choose a file type, be sure to include the period

## URLs

A file at content/index.html can be accessed at /.  
A file at content/text.txt can be accessed at /text.  
A file at content/sub/index.txt can be accessed at index.txt.  
A file at content/sub/text.txt can be accessed at /sub/text.  
If a file does not exist or cannot be found, content/404.txt will be used in its place. The content directory and other aspects of how Singularity handles URLs can be easily edited.  
The script can also handle different filetypes (just modify one line of PHP).

## Markdown

Singularity uses [strapdown.js](#credits) to mark up HTML. Strapdown.js also works with various [Bootstrap](#credits) themes. You can easily add your own HTML and CSS styles, headers, and footers. It's as easy as editing a flat HTML file.

## Credits
Copyright (c) 2012 Christopher J. Su  
Inspired by Pico and Stacey.
Uses [strapdown.js](http://strapdownjs.com/), which in turn, uses [marked](https://github.com/chjj/marked/) and [Bootstrap](http://twitter.github.com/bootstrap/).

---

# Example

This is an example markdown file for testing Singularity.

## A header
### Another header
#### More headers!

> "Look! A wild quote appeared!"

	<body>
	<p>some code for you</p>
	</body>

We can also *style* **some** text if you want.

 * Maybe
 * even
 * make
 * some
 	* lists
 	* or
 	* sub-lists
 	
 	# Highlight.js

Highlight.js is a syntax highlighter written in JavaScript. It works in
the browser as well as on the server. It works with pretty much any
markup, doesn’t depend on any framework and has automatic language
detection.

## Getting Started

The bare minimum for using highlight.js on a web page is linking to the
library along with one of the styles and calling
[`initHighlightingOnLoad`][1]:

```html
<link rel="stylesheet" href="/path/to/styles/default.css">
<script src="/path/to/highlight.pack.js"></script>
<script>hljs.initHighlightingOnLoad();</script>
```

This will find and highlight code inside of `<pre><code>` tags; it tries
to detect the language automatically. If automatic detection doesn’t
work for you, you can specify the language in the `class` attribute:

```html
<pre><code class="html">...</code></pre>
```

The list of supported language classes is available in the [class
reference][2].  Classes can also be prefixed with either `language-` or
`lang-`.

To disable highlighting altogether use the `nohighlight` class:

```html
<pre><code class="nohighlight">...</code></pre>
```

## Custom Initialization

When you need a bit more control over the initialization of
highlight.js, you can use the [`highlightBlock`][3] and [`configure`][4]
functions. This allows you to control *what* to highlight and *when*.

Here’s an equivalent way to calling [`initHighlightingOnLoad`][1] using
jQuery:

```javascript
$(document).ready(function() {
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
});
```

You can use any tags instead of `<pre><code>` to mark up your code. If
you don't use a container that preserve line breaks you will need to
configure highlight.js to use the `<br>` tag:

```javascript
hljs.configure({useBR: true});

$('div.code').each(function(i, block) {
  hljs.highlightBlock(block);
});
```

For other options refer to the documentation for [`configure`][4].


## Web Workers

You can run highlighting inside a web worker to avoid freezing the browser
window while dealing with very big chunks of code.

In your main script:

```javascript
addEventListener('load', function() {
  var code = document.querySelector('#code');
  var worker = new Worker('worker.js');
  worker.onmessage = function(event) { code.innerHTML = event.data; }
  worker.postMessage(code.textContent);
})
```

In worker.js:

```javascript
onmessage = function(event) {
  importScripts('<path>/highlight.pack.js');
  var result = self.hljs.highlightAuto(event.data);
  postMessage(result.value);
}
```


## Getting the Library

You can get highlight.js as a hosted, or custom-build, browser script or
as a server module. Right out of the box the browser script supports
both AMD and CommonJS, so if you wish you can use RequireJS or
Browserify without having to build from source. The server module also
works perfectly fine with Browserify, but there is the option to use a
build specific to browsers rather than something meant for a server.
Head over to the [download page][5] for all the options.

**Don't link to GitHub directly.** The library is not supposed to work straight
from the source, it requires building. If none of the pre-packaged options
work for you refer to the [building documentation][6].

**The CDN-hosted package doesn't have all the languages.** Otherwise it'd be
too big. If you don't see the language you need in the ["Common" section][5],
it can be added manually:

```html
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.4.0/languages/go.min.js"></script>
```

**On Almond.** You need to use the optimizer to give the module a name. For
example:

```
r.js -o name=hljs paths.hljs=/path/to/highlight out=highlight.js
```


## License

Highlight.js is released under the BSD License. See [LICENSE][7] file
for details.

## Links

The official site for the library is at <https://highlightjs.org/>.

Further in-depth documentation for the API and other topics is at
<http://highlightjs.readthedocs.io/>.

Authors and contributors are listed in the [AUTHORS.en.txt][8] file.

[1]: http://highlightjs.readthedocs.io/en/latest/api.html#inithighlightingonload
[2]: http://highlightjs.readthedocs.io/en/latest/css-classes-reference.html
[3]: http://highlightjs.readthedocs.io/en/latest/api.html#highlightblock-block
[4]: http://highlightjs.readthedocs.io/en/latest/api.html#configure-options
[5]: https://highlightjs.org/download/
[6]: http://highlightjs.readthedocs.io/en/latest/building-testing.html
[7]: https://github.com/isagalaev/highlight.js/blob/master/LICENSE
[8]: https://github.com/isagalaev/highlight.js/blob/master/AUTHORS.en.txt

Markdown Test
=============

hello world

<http://example.com>

This fails in markdown.pl and upskirt:

* hello
  > world
[hi]

[HI]: /url
> hello
> [1]: hello

* * *

> hello
[2]: hello


* hello
* [3]: hello


* hello
[4]: hello


> foo
> bar
[1]: foo
> bar
<p>Already linked: <a href="http://example.com/">http://example.com/</a>.</p>

Already linked: [http://example.com/](http://example.com/).

Already linked: <a href="http://example.com/">**http://example.com/**</a>.
\>
Look at the
pretty line
breaks.
## foo

1. bar:

    > - one
        - two
            - three
            - four
            - five

1. foo:

    ```
    line 1
    line 2
    ```

1. foo:

    1. foo `bar` bar:

        ``` erb
        some code here
        ```

    2. foo `bar` bar:

        ``` erb
        foo
        ---
        bar
        ---
        foo
        bar
        ```

    3. foo `bar` bar:

        ``` html
        ---
        foo
        foo
        ---
        bar
        ```

    4. foo `bar` bar:

            foo
            ---
            bar

    5. foo
``` js
var a = 'hello';
console.log(a + ' world');
```

~~~bash
echo "hello, ${WORLD}"
~~~

```````longfence
Q: What do you call a tall person who sells stolen goods?
```````

~~~~~~~~~~  ManyTildes
A longfence!
~~~~~~~~~~

How about an empty code block?

```js
```

How about a code block with only an empty line?

```js

```
hello ~~hi~~ world
These words should_not_be_emphasized.

#header

# header1

#  header2
#header

# header1

#  header2

# h1
## h2
### h3
#### h4
##### h5
###### h6

h1
===

h2
---

This should be a link: http://example.com/hello-world.

| Heading 1 | Heading 2
| --------- | ---------
| Cell 1    | Cell 2
| Cell 3    | Cell 4

| Header 1 | Header 2 | Header 3 | Header 4 |
| :------: | -------: | :------- | -------- |
| Cell 1   | Cell 2   | Cell 3   | Cell 4   |
| Cell 5   | Cell 6   | Cell 7   | Cell 8   |

    Test code

Header 1 | Header 2
-------- | --------
Cell 1   | Cell 2
Cell 3   | Cell 4

Header 1|Header 2|Header 3|Header 4
:-------|:------:|-------:|--------
Cell 1  |Cell 2  |Cell 3  |Cell 4
*Cell 5*|Cell 6  |Cell 7  |Cell 8
* hello
world
* how
are
* * *
you today?
> hi there
bud
  * item1

    * item2

  text
* hello
  world

  how
  are
* you



better behavior:

* hello
  * world
    how

    are
    you

  * today
* hi



* hello

* world
* hi



* hello
* world

* hi



* hello
* world

  how
* hi



* hello
* world
* how

  are



* hello
* world

* how

  are
[test]: http://google.com/ "Google"

# A heading

Just a note, I've found that I can't test my markdown parser vs others.
For example, both markdown.js and showdown code blocks in lists wrong. They're
also completely [inconsistent][test] with regards to paragraphs in list items.

A link. Not anymore.

<aside>This will make me fail the test because
markdown.js doesnt acknowledge arbitrary html blocks =/</aside>

* List Item 1

* List Item 2
  * New List Item 1
    Hi, this is a list item.
  * New List Item 2
    Another item
        Code goes here.
        Lots of it...
  * New List Item 3
    The last item

* List Item 3
The final item.

* List Item 4
The real final item.

Paragraph.

> * bq Item 1
> * bq Item 2
>   * New bq Item 1
>   * New bq Item 2
>   Text here

* * *

> Another blockquote!
> I really need to get
> more creative with
> mockup text..
> markdown.js breaks here again

Another Heading
-------------

Hello *world*. Here is a [link](//hello).
And an image ![alt](src).

    Code goes here.
    Lots of it...
````` hi ther `` ok ``` `````
*test **test** test*

_test __test__ test_
[the `]` character](/url)
\[test](not a link)
[hi]

[hi]: /url (there)
* test
+ test
- test
Hello world 'how' "are" you -- today...

"It's a more 'challenging' smartypants test..."

'And,' as a bonus -- "one
multiline" test!
hello world
    how are you
    how are you

hello world
```
how are you
```

hello world
* * *

hello world
# how are you

hello world
how are you
===========

hello world
> how are you

hello world
* how are you

hello world
<div>how are you</div>

hello world
<span>how are you</span>

hello [world][how]
[how]: /are/you

<div>hello</div>

<span>hello</span>
**hello** _world_

* hello world

**hello** _world_

* hello world

**hello** _world_

* Hello world

**hello** _world_

* hello world
