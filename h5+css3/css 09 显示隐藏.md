<!--
 * @Descripttion: 
 * @version: 
 * @Author: 唐帆
 * @Date: 2020-04-13 18:07:27
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-13 18:54:04
 -->

#### 1 display 显示隐藏
display 属性用于设置一个元素应如何显示；
- display: none; 隐藏对象；
- display: block; 除了转换为块级元素之外，同时还有显示元素的意思；
>
display 隐藏元素后，<font color=red>不再占有</font>原来的位置；
<strong>搭配JS</strong>可以做很多的网页特效；

#### 2 visibility 显示隐藏
visibility 属性用于指定一个元素应可见还是隐藏；
- visibility: visible; 元素可视；
- visibility: hidden; 元素隐藏；
>
display 隐藏元素后，<font color=red>继续占有</font>原来的位置；
如果隐藏元素想要原来位置，就用 visibility: hidden;
如果隐藏元素不想要原来位置，就用 display: none;

#### 3 overflow 溢出部分显示隐藏
- overflow: visible; 默认为visible，超出元素部分显示；
- overflow: hidden; 超出元素部分隐藏；
- overflow: scroll; 超出元素部分显示滚动条，不溢出也显示；
- overflow: auto; 超出元素部分在需要时添加滚动条；
>
一般情况下都不允许超出显示；
但如果有定位的盒子，请慎用 overflow: hidden，因为它会隐藏多余的部分；


#### 案例
css06 => 28
```
.tudou:hover .hidden-layer {
    display: block;
}
```
鼠标经过 tudou 元素后，.hidden-layer 显示；