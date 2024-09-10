document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery-image');
    images.forEach(img => {
        img.addEventListener('click', function() {
            this.classList.toggle('fullscreen');
        });
    });

    // 点击全屏图片外的区域关闭全屏
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('fullscreen')) {
            event.target.classList.remove('fullscreen');
        }
    });

    // 防止点击图片时触发上面的事件
    document.querySelectorAll('.gallery-image').forEach(img => {
        img.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });
});