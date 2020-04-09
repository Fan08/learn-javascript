<!--
 * @Descripttion: 
 * @version: 
 * @Author: 唐帆
 * @Date: 2020-04-05 13:41:19
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-07 10:47:05
 -->

 - 显示和隐藏
    - show()
    - hide()
    - toggle()

- 滑动
   - slideDown()
   - slideUp()
   - slideToggle()

- 淡入淡出
   - fadeIn()
   - fadeOut()
   - fadeToggle()
   - fadeTo()

- 自定义动画
   - animate()

<font color=red> 加中括号的变量意味着是可以省略的 </font>

#### 3.1 显示隐藏效果
<font color=red>需要动画的元素实际上是从隐藏状态到显示状态的，因此开始时它们的display值是none；</font>
##### 显示
- 1 显示语法规范
   - show([speed, [easing], [fn]])
   - $('div').hide(1000, fun)
- 2 显示参数
   - 1）参数都可以省略，无动画直接显示
      - 没有任何动画效果，直接将组件显示
   - 2）speed：'slow', 'normal', 'fast'；
      - 也可以直接使用动画时长毫秒数，如1000；
      - 即耗时一秒，缓慢显示；
   - 3）[easing]：（Optional）用来指定切换效果，默认是'swing'，可用参数'linear'；
      - linear是匀速，swing是变速；
   - 4）[fn]：回调函数，执行一次；

##### 隐藏
- hide([speed, [easing], [fn]])
   - 与show()完全相同；

##### 切换
- toggle([speed, [easing], [fn]])
   - 与show()完全相同；
>
- 一般情况不做动画，直接显示或隐藏

#### 3.2 滑动
- 1 下拉滑动
   - slideDown([speed, [easing], [fn]])
   - 与show()完全相同；
- 2 上拉滑动
   - slideUp([speed, [easing], [fn]])
- 3 切换滑动
   - slideToggle([speed, [easing], [fn]])


#### 3.3 事件切换
- hover([over, ]out)
- 1）over是鼠标经过时触发的函数，相当于mouseenter；
- 2）out是鼠标离开时触发的函数，相当于mouseleave；
```
   $(function () {
      // 1 事件切换 hover 就是鼠标经过离开的复合写法
      $('.nav>li').hover(function () {
            $(this).children('ul').slideDown();
      }, function () {
            $(this).children('ul').slideUp();
      });

      // 2 如果只写一个函数，那么鼠标离开和经过都会触发
      $('.nav>li').hover(function () {
            $(this).children('ul').slideToggle();
      });
   })
```

#### 3.4 动画队列及其停止排队方法
- 1 动画队列
   - 一旦动画或效果被触发，就一定会有相关的执行操作，如果触发多次，就造成多个动画或效果排队执行的情况；
- 2 stop()
   - $(this).children('ul').stop().slideToggle();
   - 通过使用<font color=red>stop()</font>，使得每次动画执行时都会停止上一次动画，仅执行本次动画；
   - stop必须写在动画的前面；

#### 3.5 淡入淡出效果
- 1 淡入效果语法规范
   - fadeIn([speed, [easing], [fn]])
- 2 淡出效果语法规范
   - fadeOut([speed, [easing], [fn]])
- 3 淡入淡出切换效果语法规范
   - fadeToggle([speed, [easing], [fn]])
- 4 渐进方式调整到指定透明度
   - fadeTo([\[speed], opacity, [easing], [fn]])
   - opacity 透明度
      - 必须填写
      - 值为 0 ~ 1；

#### <font color=red>3.6 自定义动画</font>
- 1 语法
   - animate(params, [speed], [easing], [fn])
- 2 参数
   - params 修改样式属性
      - 以对象形式传递，必须写
      - 属性名可以不写引号
      - 复合属性用驼峰命名法