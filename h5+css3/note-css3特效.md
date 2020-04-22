<!--
 * @Descripttion: 
 * @version: 
 * @Author: 唐帆
 * @Date: 2020-04-18 23:48:50
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-20 23:48:05
 -->

### 1 CSS3 2D 转换
<font color=red>转换（ transform ）</font>是 CSS3 中具有颠覆性的特征之一，可以实现元素的位移、旋转、缩放等效果；

#### 1.2 2D 转换之移动 <font color=red>translate</font>
可以改变元素在页面中的位置，类似<strong>定位</strong>；
- 1 语法
    ```
    transform: translate(x, y);
    transform: translateX(n);
    transform: translateY(n);

    div {
        width: 200px;
        height: 200px;
        background-color: skyblue;
        transform: translate(12px, 20px);
    }
    ```
- 2 重点：
    - 沿 x 和 y 轴进行移动；
    - translate 最大的优点：<strong>不会影响到其他元素的位置</strong>；
        - 可以用于鼠标经过时图片上浮特效；
        - 见 css3（02）=> 19；
    - translate 中的百分比单位是相对于元素自身的 translate:(50%, 50%)；
        - 如 width 为 100px，横向移动 50% 就是移动 50px；
        - 使用 translate 的百分比实现居中：
        ```
        div {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 100px;
            height: 100px;
            background-color: skyblue;
            /* 这里移动的 50% 就是 50px */
            transform: translate(-50%, -50%);
        }
        ```
    - 对行内元素没有作用；


#### 1.3 2D 转换之旋转 <font color=red>rotate</font>
- 1 语法
    ```
    transform: rotate(度数)
    ```
- 2 重点
    - 度数单位是 deg，如 rotate(45deg)；
    - 角度为正，是顺时针，角度为负，是逆时针；
    - 默认旋转的中心点是元素的中心点；
```
div {
    position: absolute;
    left: 100px;
    top: 100px;
    width: 200px;
    height: 200px;
    background-color: skyblue;
    /* 设置过渡效果 */
    transition: transform 2s;
}

div:hover {
    transform: rotate(360deg);
}
```

#### 1.4 2D 转换中心点 <font color=red>transform-origin</font>
设置元素转换的中心点；
- 1 语法
    ```
    transform-origin: x y;
    ```
- 2 重点
    - 注意后面的参数 x 和 y 用空格隔开；
    - x y 默认转换的中心点是元素的中心点 (50% 50%)；
    - 还可以给 x y 设置 像素 或 方位名词 (top bottom left right center)；
```
div {
    width: 200px;
    height: 200px;
    background-color: skyblue;
    margin: 100px auto;
    transition: all 0.5s;
    /* 方位名词 */
    /* transform-origin: left bottom; */
    /* 像素 */
    transform-origin: 50px 50px;
}

div:hover {
    transform: rotate(360deg);
}
```

#### 1.5 2D 转换之缩放 <font color=red>scale</font>
缩放，顾名思义可以放大和缩小，用于控制有元素的放大和缩小；
- 1 语法
    ```
    transform: scale(x, y);
    ```
- 2 注意
    - 注意其中的 x 和 y 用逗号分割；
    - x 是宽，y 是高；
    - transform: scale(1, 1) ：宽和高都放大一倍；
    - transform: scale(2, 2) ：宽和高都放大两倍；
    - transform: scale(2) ：宽和高都放大两倍；
    - transform: scale(0.5, 0.5) ：缩小；
    - <strong>可以设置转换中心点缩放，默认以中心点缩放的，且不影响其他盒子</strong>；
```
div {
    width: 200px;
    height: 200px;
    background-color: springgreen;
    margin: 100px auto;
    transition: all 0.5s;
    transform-origin: left top;
}

div:hover {
    /* transform: scale(0.5, 0.5); */
    transform: scale(2, 0.7);
}
```


#### 1.6 2D 转换综合写法
<strong><font color=red>注意：</font></strong>
- 1 同时使用多个转换的格式：
    - transform: translate() rotate() scale() ... 等
- 2 其顺序会影响转换的效果，如，先旋转会改变坐标轴方向；
- <strong>3 当同时有位移和其他属性的时候，记得要将唯一放到最前；</strong>

```
div {
    width: 200px;
    height: 200px;
    background-color: greenyellow;
    margin: 100px auto;
    transition: all .5s;
}

div:hover {
    transform: translate(50px, 50px) rotate(360deg);
    background: url(./1.jpg) no-repeat;
    background-size: 100%;
}
```

### 2 CSS3 动画
<strong><font color=red>动画（animation）</font></strong>是 CSS3 中具有颠覆性的特征之一，可通过设置多个节点来精确控制一个或一组动画，用于实现复杂的动画效果；
相交过渡，动画可以实现更多变化，更多控制，连续自动播放等效果；

#### 2.1 动画的基本使用
制作动画分为两步：
- 1 先定义动画；
- 2 再使用（调用）动画；

##### 1 使用 keyframes 定义动画（类似应以类选择器）
```
@keyframes 动画名称 {
    0% {
        width: 100px;
    }

    100% {
        width: 200px;
    }
}
```
- 动画序列
    - 0% 是动画的<font color=red>开始</font>，100% 是动画的<font color=red>完成</font>，这样的规则就是动画序列；
    - 在<font color=red> @keyframes </font>中规定某项 CSS 样式，就能创建由当前样式主键改为新样式的动画效果；
    - 动画是使元素从一种样式主键变化为另一种样式的效果，可以改变任意多的<font color=red>样式</font>和任意多的<font color=red>次数</font>；
    - 用百分比来规定变化发生的事件，或用“<font color=red> from </font>”和“ <font color=red>to</font> ”，等同于<font color=red> 0% </font>和<font color=red> 100% </font>；

##### 2 元素使用动画
```
div {
    width: 200px;
    height: 200px;
    margin: 100px auto;
    background-color: greenyellow;

    /* 调用动画 */
    animation-name: 动画名称;
    /* 持续事件 */
    animation-duration: 持续时间;
    
}
```

#### 2.2 动画属性
<table>
<tr><th>属性</th><th>描述</th></tr>
<tr><td>@keyframes</td><td>规定动画</td></tr>
<tr><td>animation</td><td>所有动画属性的简写属性，除 anmiation-play-state 属性</td></tr>
<tr><td>animation-name</td><td>规定 @keyframes 动画的名称（必须）</td></tr>
<tr><td>animation-duration</td><td>规定动画的完成时间（必须）</td></tr>
<tr><td>animation-time-function</td><td>规定动画的速度曲线，默认是 0 </td></tr>
<tr><td>animation-delay</td><td>规定动画何时开始，默认是0</td></tr>
<tr><td>animation-iteration-count</td><td>规定动画被播放的次数，默认是1，还有 infinite</td></tr>
<tr><td>animation-direction</td><td>规定动画是否在下一周期逆向播放，默认是“ normal ”，“ alternate ”逆播放</td></tr>
<tr><td>animation-play-state</td><td>规定动画是否正在运行或暂停，默认“ running ”，还有“ pause ”</td></tr>
<tr><td>animation-fill-mode</td><td>规定动画结束后状态， forwards 停留在动画结束位，回到起始位 backwards</td></tr>

</table>

#### 2.3 动画简写属性
语法
```
animation: 动画名称 持续时间 运动曲线 何时开始 播放次数 是否反方向 动画起始或者结束的状态;

animation: myfirst 5s linear 2s infinite alternate;
```
- 简写属性中不包含 animation-play-state；
- 暂停动画：animation-play-state: puased; 经常和鼠标经过等配合使用；
- 想要动画来回走 animation-direction: alternate;
- 动画结束后停在结束位置 animation-fill-node: forwards;
>
- animation-time-function 的 steps(n) 函数，指定了整个动画平均分几步走完；
>
- 需要添加多个动画时，用逗号隔开即可；
    - animation: bear 1s step(8) infinite, moves 1s;

### 3 3D 转换
- 特点
    - 近大远小
    - 物体后面遮挡不可见
- 主要知识点：
    - 3D 位移：translate3d(x, y, z)
    - 3D 旋转：rotate3d(x, y, z)
    - 透视：perspective
    - 3D 呈现 transform-style

#### 3.1 三维坐标系
- x、y、z 三轴构成；
    - z轴垂直于屏幕；

####  3.2 3D 位移 translate3d
3D 移动在 2D 移动的基础上多加了一个可以移动的方向，就是 z 轴方向；
- transform: translateX(100px)：仅仅是在 x 轴上移动；
- transform: translateY(100px)：仅仅是在 y 轴上移动；
- <strong> transform: translateZ(100px) </strong>：仅仅是在 z 轴上移动，一般用 px 单位；
- transform: translate3d(x, y, z)：在 x、y、z 上分别移动距离；
    - x、y、z 三个值不能省略；

#### 3.3 透视 <font color=red>perspective</font>
- 模拟人类的视觉位置；
- 透视也被称为视距；
- 距离视觉点越近，电脑平面成像越大，越远，成像越小；
- 单位是像素；
>
<font color=red>透视写在被观察元素的父盒子上</font>
- d：就是视距，视剧就是一个距离人的眼镜到屏幕的距离；
- z：就是 z 轴，物体距离屏幕的距离，z 轴越大（正值），物体越大；
- 当 父元素 上的 perspective 值固定时，三个不同的元素设置不同的 translateZ() 会得出不同效果；

#### 3.4 3D 旋转 rotate3d
3D 旋转指可以让元素在三维平面内沿着 x 轴、y 轴、z 轴或者自定义轴进行旋转；
- 语法：
    - <strong> transform: rotateX(45deg)：沿着 x 轴正方向旋转 45 度；
    - transform: rotateY(45deg)：沿着 y 轴正方向旋转 45 度；
    - transform: rotateZ(45deg)：沿着 z 轴正方向旋转 45 度；</strong>
    - transform: rotate3d(x, y, z, 45deg)：沿着自定义轴正方向旋转 45 度；
- 左手准则
    - 大拇指指向各轴正方向；
    - 四个手指弯曲方向就是翻转方向（ deg 为正时）；

#### 3.5 3D 呈现 <font color=red>transform-style</font>
- 控制子元素是否开启三维环境；
- transform-style: flat; 子元素默认不开启 3D 空间；
- transform-style: preserve-3d; 子元素开启立体空间；
- <strong>样式写在父级中</strong>，但影响子盒子；
- <strong>该属性非常重要；</strong>

#### 3.x 两面反转的盒子
- 1 搭建 HTML 结构；
    ```
    <div class="box">
        <div class="front"></div>
        <div class="back"></div>
    </div>
    ```
    - box 父盒子里面包含前后两个盒子；
    - box 是翻转的盒子，front、back 一前一后；
    - 被翻转的是父盒子，不是子盒子；
- 2 设置背靠背的两个子盒子；
- 3 父盒子保留 3D 空间效果；

#### 3.x + 1 3D 头部栏
- transform: translateY(17.5px) rotateX(-80deg);
    - 多种特效以空格隔开；
- 将 front 盒子前移；


### 4 浏览器私有前缀
浏览器私有前缀是为了兼容老版本的写法，新版本的浏览器无需添加；

#### 4.1 私有前缀
- -moz- ：代表 firefox 浏览器私有前缀；
- -ms- ：代表 IE 浏览器私有属性；
- -webkit- ：代表 safari、chrome 私有属性；
- -o- ：代表 Opera 私有属性；

#### 4.2 提倡写法
圆角中也有兼容问题；
先写私有前缀，再写标准写法；
```
-moz-border-radius: 10px;
-webkit-border-radius: 10px;
-o-border-radius: 10px;
border-radius: 10px;
```

### 5 CSS3 总结
- 新的选择器；
    - 属性选择器
        - [title]
        - [class='demo']
        - [class^='demo']
        - [class$='demo']
    - 结构伪类选择器
        - nth-child(n)
            - n 可以是数字
            - n 可以是 odd / even
            - n 可以是公式 2n+1、5n
        - nth-of-tyoe(n)
            - 根据类选择
    - 伪元素选择器
        - ::before
        - ::after
        - 必须设置 content 属性
- 转换 transform；
    - 2D
        - translate(x, y)
        - rotate(45deg)
        - scale(x, y) 缩放
    - 3D
        - translate3d(x, y, z)
        - rotateX(x)
        - rotateY(y)
        - rotateZ(z)
- 动画 animation；
    - 记住动画的简写属性
- 浏览器私有前缀；