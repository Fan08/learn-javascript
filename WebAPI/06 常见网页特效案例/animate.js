/*
 * @Descripttion: 
 * @version: 
 * @Author: 唐帆
 * @Date: 2020-04-03 13:15:06
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-18 00:16:17
 */

function animate(obj, target, callback) {
    // 先清除原有的定时器
    clearInterval(obj.timer);
    // 给不同的元素指定不同定时器
    obj.timer = setInterval(function () {
        // obj.style.left = obj.offsetLeft + 1 + 'px';
        // 将原来的直接加一变为一个缓慢变小的值
        // （目标值 - 现在的位置） / 10
        let step = (target - obj.offsetLeft) / 30;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            // 清除定时器
            clearInterval(obj.timer);

            // 在此处将回调函数放到定时器结束时执行
            if (callback) {
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}