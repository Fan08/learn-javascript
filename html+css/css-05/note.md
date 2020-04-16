<!--
 * @Descripttion: 
 * @version: 
 * @Author: 唐帆
 * @Date: 2020-04-11 13:42:19
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-11 14:44:58
 -->

#### 3 css属性书写顺序
- 1 布局定位属性：display/position/float/clear/visibility/overflow；
- 2 自身属性：width/height/margin/padding/border/background；
- 3 文本属性：color/font/text-decoration/text-align/vertical-align/white-space/break-word；
- 4 其它属性（CSS3）：content/cursor/border-radius/box-shadow/text-shadow/background:linear-gradient；

#### 4 页面布局整体思路
- 1 必须确定页面的版心（可视区）；
- 2 分析页面中的行模块，以及每个行模块中的列模块（页面布局第一准则）；
- 3 一行中的列模块经常浮动布局，先确定每个列的大小，之后确定列的位置（页面布局第二准则）；
- 4 制作HTML结构，先有结构，后有样式；
- 5 先理清楚布局结构，再写代码；

#### 5 确定版心
- 学成在线的版心是1200像素，每个版心都要居中对齐，可以定义一个公共类；
```
.w {
    width: 1200px;
    margin: auto;
}
```

#### 6 头部制作
##### 导航栏
- 不会直接使用a链接，而是用 li 包含 a 链接
    - （li + a）的做法；
    - 1 li + a 语义更清晰；
    - 2 直接用a会使搜索引擎认为有堆砌关键字的嫌疑，影响网站排名；
- 行内块之间默认有边距；
    - 如 input 和 button；
    - 可以通过浮动来清除；