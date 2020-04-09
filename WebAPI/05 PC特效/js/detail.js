// load事件用于在页面全部加载完后再执行
// load事件是必须的
// 还需要引入js文件
window.addEventListener('load', function () {
    const preview_img = document.querySelector('.preview_img');
    const mask = document.querySelector('.mask');
    const big = document.querySelector('.big');
    const raw_img = document.querySelector('#raw_img');
    let raw_img_width = 0;
    let raw_img_height = 0;
    let change_size = true;
    // 1 鼠标经过或离开preview_img就显示或隐藏mask和big
    preview_img.addEventListener('mouseover', function () {
        mask.style.display = 'block';
        big.style.display = 'block';
        if (change_size){
            raw_img.style.width = (mask.offsetWidth / preview_img.offsetWidth) * raw_img.offsetWidth + 'px';
            change_size = false;
        }
        raw_img_width = raw_img.offsetWidth;
        raw_img_height = raw_img.offsetHeight;
    });
    preview_img.addEventListener('mouseout', function () {
        mask.style.display = 'none';
        big.style.display = 'none';
    });

    // 2 首先获得鼠标在盒子的坐标
    //   之后把数值给遮挡层作为left和top值
    preview_img.addEventListener('mousemove', function (e) {
        const x = e.pageX - this.offsetLeft;
        const y = e.pageY - this.offsetTop;
        // console.log(x, y);
        // 使鼠标位于盒子的中间
        let maskX = x - mask.offsetWidth / 2;
        let maskY = y - mask.offsetHeight / 2;
        // 遮挡层最大移动距离
        const maskXMax = preview_img.offsetWidth - mask.offsetWidth;
        const maskYMax = preview_img.offsetHeight - mask.offsetHeight;
        // 如果x小于等于零，x归零
        // 将mask的范围控制在小盒子里面
        if(maskX <= 0){
            maskX = 0;
        } else if (maskX >= maskXMax) {
            maskX = maskXMax;
        }
        if(maskY <= 0){
            maskY = 0;
        } else if (maskY >= maskYMax) {
            maskY = maskYMax;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        const bigXMax = raw_img_width - big.offsetWidth;
        const bigYMax = raw_img_height - big.offsetHeight;
        // 大图移动距离
        const bigX = maskX * bigXMax / maskXMax;
        const bigY = maskY * bigYMax / maskYMax;
        raw_img.style.left = - bigX + 'px';
        raw_img.style.top = - bigY + 'px';
    });
});