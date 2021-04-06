// canvas.toDataURL type support
// http://www.w3.org/TR/html5/the-canvas-element.html#dom-canvas-todataurl

// This test is asynchronous. Watch out.

((() => {

    if (!Modernizr.canvas) {
        return false;
    }

    var image = new Image(),
        canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d');

    image.onload = () => {
        ctx.drawImage(image, 0, 0);

        Modernizr.addTest('todataurljpeg', () => canvas.toDataURL('image/jpeg').indexOf('data:image/jpeg') === 0);
        Modernizr.addTest('todataurlwebp', () => canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0);
    };

    image.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==';
})());
