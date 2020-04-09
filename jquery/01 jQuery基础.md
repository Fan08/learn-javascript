<!--
 * @Descripttion: 
 * @version: 
 * @Author: 唐帆
 * @Date: 2020-04-04 11:07:58
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-04 12:15:08
 -->

### 1 jQuery概述
#### 1.1 javascript库
- library ，封装好的特定的集合；
- 是一个js文件；

#### 1.2 jQuery的概念
- 把js中的DOM操作进行了封装，可以快速查询使用里面的功能；
- 如DOM操作、事件处理、动画设计和Ajax交互；

### 2 jQuery使用
- 在官网上复制黏贴源码；
- 引用；

#### 2.3 jQuery的入口函数
- $(function () {
&nbsp;&nbsp;&nbsp;&nbsp;...&nbsp;&nbsp;// 此处是页面DOM加载完成的入口
})
- $(document).ready(function () {
&nbsp;&nbsp;&nbsp;&nbsp;...&nbsp;&nbsp;// 此处是页面DOM加载完成的入口
})
- 以上两种是完全相同的，<font color=blue> 更推荐第一种；</font>

#### 2.4 jQuery中的顶级对象 $
- 1 \$是jquery的别称，在代码中使用$来代替jquery，通常直接使用\$；
- 2 \$是顶级对象，相当于原生js中的window，<font color=blue> 把元素利用\$包装成jquery对象，就可以调用jquery方法；</font>
    - 如\$('div').hide();；

#### 2.5 jQuery对象和DOM对象
- 1 用原生js来获取的对象就是DOM对象；
- 2 jquery对象，用jquery方式获取的对象就是jquery对象；
    - \$('div');；
    - jquery对象中不能直接使用原生DOM的属性和方法；
    - 同样，DOM对象也不能直接使用hide()方法；
- 3 本质是对DOM对象的包装，伪数组形式存储；
>
- <font color=red>DOM对象和jQuery之间是可以相互转换的；</font>
    - 原生js比jQuery更大，部分属性jQuery并没有进行封装，需要将jQuery转换为DOM对象后才能使用；
        - \<video src='../大黄蜂录屏 2019-08-26 23-42-30@0.mp4' muted>\</video>；
        - 如video中的play()；
        - myvideo.play()；
        - muted是静音，从而能在Chrome中自动播放；
        >
- <font color=blue>1 DOM对象转换为jQuery对象：
    - $(DOM对象)；
- 2 jQuery对象转DOM对象：
    - \$('div')[index] index是索引号；
    - \$('div').get(index) ；
    - 如\$('video')[0].play();；</font>