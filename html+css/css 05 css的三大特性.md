<!--
 * @Descripttion: 
 * @version: 
 * @Author: 唐帆
 * @Date: 2020-04-06 15:13:33
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-06 16:08:08
 -->
### 1 css有三个非常重要的特性：
- 层叠性
- 继承性
- 优先级

#### 1.1 层叠性
- 相同选择器对相同属性设置，两个样式会产生冲突
    - 遵循就近原则，哪个样式离结构近，就执行哪个样式
    - 样式不冲突就不会层叠
>
- 以下两个样式的color属性产生了冲突，但font-size不会产生冲突，颜色则是pink；
```
    div {
        color: red;
        font-size: 12px;
    }
    div {
        color: pink;
    }
```

#### 1.2 继承性
css中的继承：子标签会继承父标签的某些样式，如文本颜色和字号；
- 恰当地使用继承可以简化代码，降低css样式的复杂性；
- 子元素可以继承父元素的样式（text-、font-、line-这些元素开头的可以继承，以及color属性）；

##### 行高的继承性
```
    body {
        font: 12px/1.5 Microsoft YaHei;
    }

    p {
        font-size: 14px;
    }
```
行高可以跟单位也可以不跟单位；
- 1.5 指的是文字大小的1.5倍；
    - 此时的行高就是18px；
- 在body中设置这样的行高，可是使子元素根据自身的字体大小设置行高；
    - 直接在body中设置，从而让其它子元素继承；
    - 比如p中的行高就是21px；

#### 1.3 优先级
当同一个元素指定多个选择器，就会有优先级的产生；
```
    div {
        color: pink;
    }
    .test {
        color: red;
    }

    <div class="test"></div>
```
- 选择器相同，则执行层叠性；
- 选择器不同，则根据<font color=red>选择器权重</font>执行；

##### 权重终类
- 以下选择器由低向高排序↓：
    - 0, 0, 0, 0 继承 或 *
    - 0, 0, 0, 1 元素选择器
    - 0, 0, 1, 0 类选择器、伪类选择器（.和:hover/:focus）
    - 0, 1, 0, 0 ID选择器（#）
    - 1, 0, 0, 0 行内样式 style=""
    - 1, 1, 1, 1 !important 重要的
        - color: red!important;
- 在上例中，div的color最终为 red ；
- <font color=blue>范围越小权重越高；</font>
- <font color=red>继承的权重是0；</font>

##### 权重叠加
- 如果是复合选择器，则会有权重叠加，需要计算权重；
```
    ul li {
        color: green;
    }
    .nav li {
        color: green;
    }
```
- ul li 的权重就是 0, 0, 0, 1 + 0, 0, 0, 1 = 0, 0, 0, 2；
    - 0, 0, 0, 2 大于 0, 0, 0, 1
- .nav li 的权重就是 0, 0, 1, 0 + 0, 0, 0, 1 = 0, 0, 1, 1；
- a:hover 是 0, 0, 1, 1；