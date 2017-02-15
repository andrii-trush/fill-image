# Stretch image
This plugin makes it possible to fill the image height and width in proportion to the size of the parent container.

## Initialize the plugin.

###jQuery
```html
<script>
    $(selector).stretchImg()
</script>
```
###Without jQuery
```html
<script>
    var stretch = new StretchImg();
    stretch.init(selector);
</script>
```

### Html class `StretchImage`
```html
<img src="image-src" class="StretchImage" 
```

### Html data attribute `data-image="stretch"`
```html
<img src="image-src" data-image="stretch" 
```

##Destroy image stretch

###jQuery
```html
<script>
    $(selector).stretchImg.destroy()
</script>
```
###Without jQuery
```html
<script>
    stretch.destroy(selector);
</script>
```