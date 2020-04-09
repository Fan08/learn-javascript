<!--
 * @Descripttion: 
 * @version: 
 * @Author: 唐帆
 * @Date: 2020-04-06 16:10:15
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-08 13:36:33
 -->

### 1 盒子
#### 1.1 看透网页布局的本质
- 1 先准备好相关的网页元素，网页元素基本都是盒子Box；
- 2 利用css设置好盒子样式，让后摆放到相应位置；
- 3 往盒子里装内容；

#### 1.2 盒子模型组成
- css 盒子模型本质上是一个盒子，封装周围的HTML元素，它包括：
    - 边框（border）；
    - 外边距（margin）；
    - 内边距（padding）；
    - 实际内容（content）；

#### 1.3 边框（border）
- 边框宽度、边框样式、边框颜色；
    - border-width；
    - border-style；
        - dotted（点线）、dashed（虚线）、solid（实线）
    - border-color；

##### 边框复合写法
- border: 1px solid red; &nbsp;&nbsp;&nbsp;&nbsp;// 没有顺序；

##### 上下左右边框可以分开写
- border-top
    - 如，border-top: 1px solid red;
- border-bottom
- border-left
- border-right
```
    div {
        width: 200px;
        height: 200px;
        border: 1px solid blue;
        border-top: 1px solid red;
    }
```
- 上例中，上边框为蓝色，其它为红色；
    - 两个border属性的顺序不能调换，否则会产生覆盖；
    - 利用的是层叠性；

#### 1.4 表格的细线边框
- border-collapse
    - 控制相邻单元格的边框；
    - border-collapse: collapse；
    - 将相邻的边框合并在一起，宽度不增加；
- table：thead、tbody、tr、td；

##### 边框会影响盒子的实际大小

#### 1.5 盒子的内边距
padding 属性用于设置内边距，即边框与内容之间的距离；
- left、right、top、bottom；
- <font color=red>复合写法：</font>
    - 四周都是5px padding: 5px;
    - 上下是5px，左右是10px padding: 5px 10px;
    - 上边距px，左右10px，下边距11px padding: 5px 10px 11px;
    - 上、右、下、左 padding: 5px 10px 11px 12px;
        - 顺时针
- <strong>会影响盒子大小；</strong>
>
- <strong>盒子本身如果没有设置height和width，padding就不会撑开盒子；</strong>
    - 如果只指定了高度，那么宽度也不会受影响；
    - 无论是用像素还是百分比都会产生影响；

#### 1.6 盒子的外边距
- margin 用于设置外边距，控制盒子和盒子之间的距离；
- <font color=red>复合写法：</font>
    - 四周都是5px margin: 5px;
    - 上下是5px，左右是10px margin: 5px 10px;
    - 上边距px，左右10px，下边距11px margin: 5px 10px 11px;
    - 上、右、下、左 margin: 5px 10px 11px 12px;

#### 1.7 外边距典型应用
外边距可以让块级盒子水平居中，但必须满足两个条件；
- 盒子必须指定了宽度（width）；
- 左右外部边距设为auto；
- 上下可以另外进行设置；
- <strong>对于行内元素或行内块元素的水平居中，给其父元素添加 text-align: center 即可；</strong>

#### 1.8 外边距合并
##### 8.1 相邻块元素垂直外边距合并
- 当上下两个块元素分别由上边距和下边距时，会取两个值中比较大的那个；
    - 如上div的下边距是50px，下div的上边距是40px；
    - 在这种情况下会保留上div的下边距50px，下div的上边距会被取消；
- <strong>解决方案：</strong>尽量只给一个盒子加margin；

##### 1.8.2 嵌套块元素垂直外边距塌陷
- 两个嵌套关系（父子关系）的块元素，当父子元素均有上外边距是，父元素的最终上外边距的值是二者的和，而父子元素间不会产生边距；
- <strong>解决方案：</strong>
    - 1 给父盒子设置外边框（transparent是透明色）
    - 2 子盒子的margin-top改为使用父盒子的padding-top；
    - 3 可以为父元素添加 overflow: hidden；

##### <font color=red>9 清除内外边距</font>
- 不少元素在浏览器中自带边距，不同浏览器边距也不同；
    - 比如Chrome中的body自带8px；
    - 比如Chrome中的ul左边距30px；
- 因此需要先清除所有的原有边距：
```
    * {
        padding: 0  /* 清除内边距 */
        margin: 0  /* 清除外边距 */
    }
```
- <font color=red>这是css的第一行；
- 行内元素尽量只设置左右内外边距，但是转换为块级或行内块元素就可以了；</font>

#### 总结
- 标签都是有语义的，合理的地方用合理的标签；
    - 产品标题用h；
    - 大段文字使用p；
- 给每一个盒子取一个类名；
    - 方便后期维护；


### 2 圆角
 语法
```
    border-radius: length;
```
- 可以是像素，也可以是百分比；
- 也可以分别指定四个角：
    - border-radius: 左上 右上 右下 左下;
    - border-top-left-radius;
    - border-top-right-radius;
    - border-bottom-left-radius;
    - border-bottom-left-radius;

### 3 盒子阴影
css3中新增盒子阴影，使用 <font color=red>box-shadow</font> 属性为盒子添加阴影；
- 语法：
    - box-shadow: h-shadow v-shadow blur spread color inset;
    - h-shadow  必须，水平阴影的位置，允许负值；
    - v-shadow  必须，垂直阴影的位置，允许负值；
    - blur  可选，模糊距离；
    - spread    可选，阴影尺寸；
    - color 可选，阴影颜色；
    - inset 可选，将外部阴影（outset）改为内部阴影；
        - 不可以直接写outset，需要内阴影则可以inset；
- 阴影不占空间；

### 4 文字阴影
text-shadow
- text-shadow: h-shadow v-shadow blur color;