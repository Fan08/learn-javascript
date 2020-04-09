<!--
 * @Descripttion: 
 * @version: 
 * @Author: 唐帆
 * @Date: 2020-04-04 12:15:30
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-05 11:53:18
 -->

### 1 jQuery选择器
#### 1.1 jQuery基础选择器
使用统一的，无兼容问题的元素获取方式；
- $("选择器")&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 里面选择器直接写CSS选择器即可，需要引号；
    - $("#id") id选择器
    - $("*") 通配符
    - $(".class") 类选择器
    - $("div") 标签选择器
    - $("div, p") 并集选择器
    - $("li.current") 交集选择器
    - $("div>p") 子代选择器
    - $("div p") 后代选择器

#### 1.2 jQuery设置样式
- $("div").css('属性', '值')

#### 1.3 隐式迭代（重要）
- 遍历内部DOM元素的过程就叫做隐式迭代；
    - 不用手动进行循环遍历操作，由css方法直接完成；
    - 把匹配到的元素在内部进行遍历循环，给每个元素添加css这个方法；

#### 1.4 jQuery筛选选择器
- :first 
    - $("li:first")
    - 获取第一个li元素
    - $('ul li:first').css('color', 'red');
- :last 
    - $("li:last")
    - 获取最后一个li元素
- :eq(index) 
    - $("li:eq(2)")
    - 根据索引排序获取元素
- :odd 
    - $("li:odd")
    - 获取奇数行
- :even 
    - $("li:even")
    - 获取偶数行

#### <font color=red> 1.5 jQuery筛选方法 </font>
- 父子兄
- <font color=red>重点：parent(), children(), find(), siblings(), eq()；</font>
- 可以嵌套使用
    - $('#content div').eq(index).siblings().hide();
>
- parent() 
    - $('li').parent();
    - 查找父级；
- children(selector) 
    - $('ul').children('li');
    - $('.nav').children('p').css('color', 'red')
    - 查找子元素，相当于ul>li；
- find(selector) 
    - $('ul').find('li');
    - $('.nav').find('p').css('color', 'blue')
    - 后代选择器，相当于ul li；
- siblings(selector)
    - $('.first').siblings('li');
    - $('ol .item').siblings('li').css('color', red);
    - 查找兄弟节点，不包含本身
- prevtAll([expr]) 
    - $('.last').prevtAll();
    - 查找当前元素之前的所有同辈元素；
- nextAll([expr])
    - $('.first').nextAll();
    - 查找当前元素之后的所有同辈元素；
- hasClass(class)
    - $('div').hasClass('protected');
    - 检查当前的元素是否含有某个特定的类名，有则返回true；
- eq(index)
    - $('li').eq(2);
    - 按索引获取，比在选择器中筛选更合适；
    - $('ul li').eq(2).css('color', 'yellow')；

#### 1.6 jQuery里的排他思想
想要多选一的效果：当前元素设置样式，其余的兄弟元素清除样式；
// 1 给所有获取的按钮都绑定点击事件
\$('button').click(function () {
&nbsp;&nbsp;&nbsp;&nbsp;// 2 当前元素变化背景颜色
&nbsp;&nbsp;&nbsp;&nbsp;\$(this).css('background-color', 'blue');
&nbsp;&nbsp;&nbsp;&nbsp;// 3 其余兄弟元素去掉背景颜色
&nbsp;&nbsp;&nbsp;&nbsp;\$(this).siblings('button').css('background-color', '');
})
