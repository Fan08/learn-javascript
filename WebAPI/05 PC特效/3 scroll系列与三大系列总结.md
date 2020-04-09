<!--
 * @Descripttion: 
 * @version: 
 * @Author: 唐帆
 * @Date: 2020-04-02 11:11:16
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-04 21:43:34
 -->

# 3 元素滚动scroll系列
## 3.1 元素scroll系列属性
- 可以动态获得元素的大小、滚动距离等；
    - element.scrollTop：返回被卷去的上侧距离，返回值不带单位；
    - element.scrollLeft：返回被卷去的左侧距离，返回值不带单位；
    - element.scrollWidth：返回自身实际的宽度，不含边框，返回值不带单位；
    - element.scrollHeight：返回自身实际的高度，不含边框，返回值不带单位；
        - 包含整个滚动区的高度；
        - 包含padding值，不包含border；
        - 在内容超出div时，scrollHeight会根据内容的实际高度来获取值；
        - 因此获取的盒子的实际高度（包含内容），而不是css中的高度；
        - overflow: auto;
- <font color=blue>scrollTop 和 scrollLeft均是可以编辑的值，实现元素上下或左右的偏移；</font>

## 3.2 页面被卷去的头部
- 滚动条在滚动时会触发onscroll事件；
- 具体数值可以通过window.pageYOffset获得；
    - 左侧则为window.pageXOffset；
    - IE9以上版本开始支持；
- 兼容性较好的方式是document.body.scrollTop；

# 主要用法
- 1 offset系例常用于获取元素位置 offsetLeft offsetTop；
    - <font color=blue>通过获取offsetLeft和offsetTop，来改变元素的位置，实现元素的移动（绝对定位）；</font>
- 2 client系列用于获取元素大小 clientWidth clientHeight；
- 3 scroll系列常用于获取滚动距离（元素） scrollTop scrollLeft；
- 4 页面滚动距离通过window.pageYOffset获得；




