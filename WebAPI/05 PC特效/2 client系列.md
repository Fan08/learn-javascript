<!--
 * @Descripttion: 
 * @version: 
 * @Author: 唐帆
 * @Date: 2020-04-02 09:58:31
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-02 11:10:59
 -->

# 2 元素可视区client系列
## 2.1 基础概念
- client就是客户端，我们使用client系列的相关属性来获取元素可视区的相关信息，如边框大小、元素大小等。

    - element.clientTop 返回元素上边框的大小；
    - element.clientLeft 返回元素左边框的大小；
    - element.clientWidth 返回自身包括padding、内容区的宽度，不含边框，返回数值不带单位；
    - element.clientHeight 返回自身包括padding、内容区的高度，不含边框，返回数值不带单位；

## 2.2 淘宝flexible.js源码分析
### 2.2.1 立即执行函数
- 立即执行函数，写法：(function(){})()；
    - 后面的小括号用于传参，如：(function(a, b){})(1, 2)
- 主要作用：创建一个独立的作用域；
    - 所有变量都是局部变量，不会产生命名冲突；
- 不需要调用，直接执行；

### 2.2.2 像素比和pageshow事件
#### 像素比获取
- PC端像素比一般为1，移动端为2；
- 获取方式：window.devicePixelRatio；
    - const dpr = window.devicePixelRatio || 1;
    - 如果没有像素比，则设为1；
#### body字体调整
- 通过像素比来调整body元素中的字体：
    - document.body.style.fontSize = (12 * dpr) + 'px'；
    - 如果页面中没有body元素，则需要等页面加载完毕后才进行设置：
        - document.addEventListener('DOMContentLoaded', function(){});
#### html字体调整
- 核心：设置html元素的文字大小：
    - 将屏幕大小划为10等份，并将其设为文字大小；
    - document.documentElement; 获取html根元素；
    - 可以用于在视图大小发生变化时，对字体进行调整；
        - window.addEventListener('resize', setRemUnit);
        - 对window进行事件绑定；
    - 对 load 事件的触发：
        - a标签超链接
        - F5或强制刷新
        - 前进或后退
        - 但是在火狐中，后退按钮不能进行刷新；
    - pageshow事件是指重新加载页面触发的事件；
        - 在火狐中，pageshow能进行刷新；
        - 其他与load基本相似；
        - persisted属性用于判断是否来自缓存，来自缓存则为true；
#### 移动端不支持0.5px的问题
