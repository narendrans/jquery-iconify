jquery-iconify
==============

This plugin will create an icon for your links using jquery, fontawesome

[jsFiddle Demo](http://jsfiddle.net/2U2Wg/2/)

You can install the plugin using bower!

```bower install jquery_iconfiy```

HTML `<a href = "http://facebook.com" id="facebook"></a>`

jQuery `$('#facebook').iconify();`

That's all!

By default the plugin will use the id attribute to generate icon.

Check out [fontawesome](http://fontawesome.io/icons/) for list of supported icons. Just use the string after fa- to use in plugin.

Some more examples:

```javascript
<a href="#" id="twitter"></a>
  $('#twitter').iconify();
<a href="#" id="linkedin"></a>
  $('#linkedin').iconify();
<a href="#" id="google-plus"></a>
  $('#google-plus').iconify();
<a href="#" id="github"></a>
  $('#github').iconify();
```
***
Advanced configuration:


```javascript
$('#id').iconify({
    color: "purple", // default: "red"
    hoverColor: "red", // default: "blue"
    size: "32", // default: "28"
    animate: true, // default: true
    animateMultiplier: 1.5 // default: 1.5
});
