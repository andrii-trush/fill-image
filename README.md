# Fill image [![npm](https://img.shields.io/badge/npm-v1.0.5-blue.svg)](https://www.npmjs.com/package/fill-image)
This plugin makes it possible to fill the image height and width in proportion to the size of the parent container.

### Browser support 
[![Chrome](https://img.shields.io/badge/Chrome-8.0-yellowgreen.svg)]() 
[![Firefox (Gecko)](https://img.shields.io/badge/Firefox(Gecko)-3.6(1.9.2)-orange.svg)]()
[![Chrome](https://img.shields.io/badge/Safari(WebKit)-5.1-blue.svg)]()
[![Opera](https://img.shields.io/badge/Opera-11.50-red.svg)]()
[![Internet Explorer](https://img.shields.io/badge/IE-10-lightgrey.svg)]()


## Initialize the plugin.

###jQuery
```html
<script>
    $(selector).fillImage()
</script>
```
###Without jQuery
```html
<script>
    var fill = new FillImage();
    fill.init(selector);
</script>
```

### Html class `FillImage`
```html
<img src="image-src" class="FillImage" 
```

### Html data attribute `data-image="fill"`
```html
<img src="image-src" data-image="fill" 
```

##Destroy fill image

###jQuery
```html
<script>
    $(selector).fillImage.destroy()
</script>
```
###Without jQuery
```html
<script>
    fill.destroy(selector);
</script>
```