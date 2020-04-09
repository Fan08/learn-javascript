<!--
 * @Descripttion: 
 * @version: 
 * @Author: 唐帆
 * @Date: 2020-04-04 21:45:54
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-04 21:50:14
 -->

### 1.1 offset概述
- offset：偏移量，可以动态得到该元素的位置（偏移）、大小等；
- offsetLeft、offsetTop：获取元素举例带有定位父元素的位置；
- offsetWidth、offsetHeight：获取元素自身的大小（宽度高度）；
- offsetParent：返回带定位的父亲，如没有一个父亲带定位，则返回body；
- parentNode：返回任意父亲，没有定位也会返回；
- 注意：返回值都不带单位；
- padding和boder都会撑大盒子；

### 1.2 offset和style的区别
- offset：
    - 可以得到任意样式表中的样式值；
    - 获得的值没有单位；
    - offsetWidth包含padding+border+width；
    - offsetWidth等是只读属性；
    - 因此用offset获取元素大小位置更加合适；
        >
- style：
    - style只能得到行样式表中的样式值（无法获取css文件中的值）；
    - style.width获得的是带有单位的字符串；
    - style.width的值不包含padding和border；
    - style.width是可读写属性，可以获取也可以赋值；
    - 所以想要给元素更改值，则需要用style；

### 鼠标事件对象
#### e.pageX和e.pageY
- e.pageX 相对于文档页面的X坐标
- e.pageY 相对于文档页面的Y坐标

#### e.clientX和e.clientY
- e.clientX 相对于浏览器可视区的X坐标
- e.clientY 相对于浏览器可视区的Y坐标

#### e.screenX和e.screenY
- e.screenX 相对于屏幕边框的X坐标
- e.screenY 相对于屏幕边框的Y坐标