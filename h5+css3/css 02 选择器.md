<!--
 * @Descripttion: 
 * @version: 
 * @Author: 唐帆
 * @Date: 2020-04-03 17:27:50
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-08 13:33:10
 -->

### 1 Emmet 语法
- 用于提升css编写速度

#### 1.1 快速生成HTML结构语法
- 1 生成标签：输入标签名，按tab键即可；
- 2 如想生成多个标签，加上“*”即可，如 div\*3，即可生成3个div；
- 3 如有父子级关系的标签，可用\>，比如ul \> li；
- 4 如有兄弟级关系的标签，可用+，如div+p；
- 5 如果生成带有类名或者id名字的div，直接使用“.类名”、“#id名”就可生成；
    - 如果要生成其他标签，则前缀标签名即可，如“p.name”和“p#id”；
- 6 带顺序的命名生成使用“$”，如“.demo$*5”；
- 7 直接生成文字用大括号，如div{生成文字}；

#### 1.2 快速生成css样式语法
- css基本采取简写形式即可：
- 1 如w200 按tab 可以生成 width: 200px;；
- 2 如lh26 按tab 可以生成 line-height: 26px;；
- 3 如tac 可以生成 text-align: center;；


### 2 css的复合选择器
#### 2.1 什么是复合选择器
复合选择器是建立在基础选择器基础上的，对基本选择器进行组合形成的。
- 复合选择器可以更准确、更高效地选择目标元素；
- 复合选择器是由两个或多个基础选择器，通过不同的方式组合而成的；
- 常用的复合选择器包括：后代选择器、子选择器、并集选择器、伪类选择器等等；

#### <font color=red>2.2 后代选择器</font>
- 后代选择器又称为包含选择器，可以选择父元素里面的子元素，其方法就是把外层标签写
在前面，内层标签写在后面，中间用空格隔开。当标签发生嵌套时，内层标签就成为外层
标签的后代；
    - 以标签为例：
    - ol li { color: pink; }
    - 元素1 元素2 { 样式生命 }；
    - 上述语法表示<font color=red>选择元素1中所有的元素2</font>
    - 元素2可以是儿子，也可以是孙子，只要是后代即可；
    
#### <font color=red>2.3 子选择器</font>
- 子选择器只能选择某元素的最近一级子元素，简单理解就是选亲儿子元素；
- 孙子元素不会被选中；
    - .father>a { color: red;}
        - father是类，a是标签
    - .father>.child { color: red; }
    - 用大于号进行分割；

#### <font color=red>2.4 并集选择器</font>
- 并集选择器可以选择多组标签，同时为它们定义相同的样式，通常用于集体声明；
    - div, p, .pig li { color: pink; }
    - 通过逗号进行分割；
    - 前两个是标签，最后一个是后代选择器；
    - 一般使用纵向编辑；
    - 最后一个选择器不需要加逗号；

#### 2.5 伪类选择器
- <font color=red>伪类选择器</font>用于向某些选择器添加特殊的效果，比如给链接添加特殊效果，或者选择第一个、第n个元素；
- 伪类选择器书写最大的特点是<font color=red>用冒号（:）表示</font>，比如:hover（鼠标经过）、:first-child（第一个子元素）；

#### 2.6 链接伪类
- a:link 选择所有未被访问的链接；
- a:visited 选择所有已被访问的链接；
- <font color=blue>a:hover 选择鼠标指针位于其上的链接；</font>
- a:active 选择活动链接（鼠标按下未弹起的链接）；
>
- 1 链接伪类注意事项：
    - <font color=red>为了确保生效，按照LVHA的顺序进行声明；
        - :link - :visited - :hover - :active；</font>
    - 实际开发中需要给a<font color=red>单独</font>指定样式；
    - 最常用的是 a { color: gray } a:hover{ color: skyblue }；
        - 没有太多的样式
- <font color=red>任何标签都可以使用hover伪类；</font>
```
    div:hover {
        box-shadow: 5px 5px 5px rgba(0, 0, 0, .3);
    }
```

#### 2.7 :focus伪类选择器
- :focus伪类选择器用于选择获取焦点的表单元素；
- 焦点就是光标，一般清空input类表单元素才能获取，因此这个选择器也主要针对表单元素；
- input:focus { background-color: skyblue }