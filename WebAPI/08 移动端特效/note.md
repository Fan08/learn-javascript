<!--
 * @Descripttion: 
 * @version: 
 * @Author: 唐帆
 * @Date: 2020-04-18 09:18:56
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-18 10:00:21
 -->
### 1 触屏事件
#### 1.1 触屏事件概述
- 在移动端不需要考虑 js 兼容的问题；
- 但是移动端也有特殊的地方，如触屏事件 touch ；
<table>
<tr><th>触屏 touch 事件</th><th>说明</th></tr>
<tr><td>touchstart</td><td>手指触摸到一个 DOM 元素事触发</td></tr>
<tr><td>touchmove</td><td>手指在一个 DOM 元素上滑动时触发</td></tr>
<tr><td>touchend</td><td>手指从一个 DOM 元素上移开时触发</td></tr>
</table>

#### 1.2 触摸事件对象
<table>
<tr><th>触屏列表</th><th>说明</th></tr>
<tr><td>touches</td><td>正在触摸屏幕的所有手指的一个列表</td></tr>
<tr><td>targetTouches</td><td>正在触摸当前 DOM 元素上的手指的一个列表</td></tr>
<tr><td>chargeTouches</td><td>手指状态发生了改变的列表，从无到有，从有到无的变化</td></tr>
</table>

- 如果侦听的是一个DOM元素，touches 和 targetTouches 的结果是相同的；
- e.touches;
- 当手指离开屏幕的时候，就没有了 touches 和 targetTouches 列表，但依然有 changedTouches；
- 重点记住 targetTouches；


#### 1.3 移动端拖动元素
- 使用 targetTouches[0] 里面的 pageX 和 pageY；
- 计算手指的移动距离，用盒子原位置 + 手指移动距离；
- 手指移动距离：手指滑动中的位置 - 手指刚开始触摸的位置；
- 1 获取手指初始坐标和盒子原来坐标；
- 2 计算手指滑动距离并滑动盒子；
- 3 离开手指
- <font color=red>4 需要阻止手指一动触发的屏幕滚动，使用e.preventDefault()；</font>