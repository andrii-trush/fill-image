# Fill image
This plugin makes it possible to fill the image height and width in proportion to the size of the parent container.

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