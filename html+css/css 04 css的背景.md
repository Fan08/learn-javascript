<!--
 * @Descripttion: 
 * @version: 
 * @Author: 唐帆
 * @Date: 2020-04-05 14:24:55
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-05 16:28:09
 -->

- 通过CSS背景属性，可以给页面元素添加背景样式；
- 背景属性可以设置背景颜色、背景图片、背景平铺、背景图片设置、背景图像固定等；

#### 3.1 背景颜色
- background-color 属性定义了元素的背景颜色；
    - transparent是默认值，完全透明；

#### 3.2 背景图片
- background-image 描述了元素的背景图片，非常便于控制位置；
- 适用于logo和超大背景图（精灵图也是一种运用场景）；
- background-image:url(url);
    - 默认值 none；
    - background-image: url(images/logo.png);

#### 3.3 背景平铺
- 如果需要在HTML页面上对背景图像进行平铺，可以使用background-repeat属性；
- background-repeat: repeat | no-repeat | repeat-x | repeat-y
    - repeat 平铺；
    - no-repeat 不平铺；
    - repeat-x 沿x平铺；
    - repeat-y 沿y平铺；
- 页面元素既可以添加背景颜色，也可以添加背景图片；
    - 背景图片会遮住背景颜色；

#### 3.4 背景图片位置
- 利用 <font color=red>background-position</font> 属性可以改变图片在背景中的位置；
    - background-position: x y;
    - x和y分别是x坐标和y坐标，可以使用方位名词或精确单位；
    - length 百分数 | 由浮点数和单位标识符组成的长度值 精确单位；
    - position top | center | bottom | left | center | right 方位名词；
>
- 1 参数是方位词
    - 如果两个值都是方位名词，两个值前后顺序无影响，left top 和 top left效果一致（图片位于左上角）；
    - background-position: center top; 顶部居中
    - bottom top 都是y轴方向的；
    - left right 都是x轴方向的；
    - <font color=blue>如果只指定了一个方位名词，则第二个则默认居中；</font>
>
- 2 参数是精确单位
    - 如果参数值是精确坐标，那么<font color=red>第一个肯定是x坐标，第二个是y坐标</font>；
    - background-position: 20px 50px;
        - 即使只有一个值，也是x轴方向的；
        - 另一个默认垂直居中；
>
- 3 混合单位
    - 同样存在固定顺序，<font color=red>第一个肯定是x坐标，第二个是y坐标</font>；
    - background-position: 20px bottom;
        - x轴是20px，y轴则在底部；
    
#### 3.5 背景图像固定（背景附着）
- <font color=red>background-attachment</font> 属性设置背景图像是否固定或者随着页面的其余部分滚动；
- background-attachment 后期可以制作视差滚动的效果；
- background-attachment: scroll | fixed; 
    - 就两个值，默认是scroll；
    - fixed 背景图像固定；
    - scroll 背景图像随对象内容滚动；

#### <font color=red>3.6 背景复合写法</font>
- 使用简写属性时，没有特定的书写顺序，一般习惯约定顺序为：
    - background: 背景颜色 背景图片地址 背景平铺 背景图像滚动 背景图片位置;
    - background: black url(images/bg.jpg) no-repeat fixed center top;

#### 3.7 背景色半透明
- background: rgba(0, 0, 0, 0.3)；
    - r：红色
    - g：绿色
    - b：蓝色
    - a：透明度
    - background: rgba(0, 0, 0, .5);
        - 小数点前的0可以不写；
