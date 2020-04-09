<!--
 * @Descripttion: 
 * @version: 
 * @Author: 唐帆
 * @Date: 2020-04-05 11:55:08
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-05 13:40:37
 -->


#### 2.1 操作css方法
jQuery可以直接使用css()方法来修改简单样式；
也可以操作类，修改多个样式；
- 1 参数只写属性名，则是返回属性值
    - $(this).css('color');
    - 带有单位的字符串；
- 2 参数是属性名加属性值，如果属性值是数字，可以不用单位和引号
    - $(this).css('color', 'red');
    - $('div').css('width', 400);
- 3 参数可以是对象形式，方便设置多组样式
    - $(this).css({'color': 'white', 'font-size': 20,})
    - $('div').css({ width: 150, backgroundColor: 'blue' });
    - 不加引号时需要驼峰命名法；

#### 2.2 设置类样式方法
- 类似于classList()
    - classList()的使用案例：
    -  document.getElementById("myDIV").classList.add("mystyle");
    - 在div中添加一个mystyle类
- 同样用于操作类样式，注意操作类里面的参数不要加点；
>
- 1 添加类，addClass()
    - $('div').addClass('current');
- 2 删除类，removeClass()
    - $(this).removeClass('current');
- 3 切换类，toggleClass()
    - $(this).toggleClass('current');

#### 案例：tab栏
- tab栏切换分析
    - 点击上部 li，当前 li 添加 current 类，其余兄弟移除；
    - 点击的同时获取索引，根据索引显示内容框；
\$(function () {
&nbsp;&nbsp;&nbsp;&nbsp;\$('.tab_list>ul li').click(function () {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const index =$(this).index();
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\$('.tab_list>ul li').eq(index).addClass('current');
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\$('.tab_list>ul li').eq(index).siblings('li').removeClass('current');
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const tab_con = \$('.tab_con').children('.item');
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tab_con.eq(index).show().siblings().hide();
&nbsp;&nbsp;&nbsp;&nbsp;});
})

#### 2.3 类操作于className区别
- 原生js中className会覆盖元素里面原来的类名；
- jQuery里面类操作只是对指定类进行操作，不影响原先的类名；
- 只会增加或删除特定的类，不会波及其他的类；