<!--
 * @Descripttion: 
 * @version: 
 * @Author: 唐帆
 * @Date: 2020-04-04 21:52:46
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-09 13:52:00
 -->

### 1 键盘事件
#### 1.1 三种事件
- 1 keyup      按键弹起后触发
- 2 keydown    按键按下时触发
    - 如不松开，保持不断触发
- 3 keypress   按键按下时触发
    - 如不松开，保持不断触发
    - press不识别功能键，如ctrl键
- 4 三个事件的执行顺序是 keydown=> keypress => keyup

#### 1.2 事件特点
- 1 keydown和keyup的事件不区分字母大小写
    - a和A的值都是65
- 2 keypress则可以区分大小写
    - a是97和A是65
    - 根据ASCII来判断是哪个键

#### 1.3 事件对象
- keyCode()
    - 使用键盘事件对象中的keyCode判断用户是否按下s键；
    - 上面的获取a键的值就是用的keyCode对象；


#### 其他
- element.focus();
    - 焦点放入指定元素；
- element.click();
    - 手动触发点击事件，不需要鼠标点击；


### 2 BOM
#### 2.1 基本概念
BOM是浏览器对象模型，它提供了对立与内容而与浏览器窗口进行交互的对象，其核心是window
>
- DOM是打开的一个页面，document
    - 操作页面元素
    - W3C标准
- BOM是打开的整个浏览器，window
    - 浏览器窗口交互的对象
    - 各个浏览器不同，兼容性差
    - window中包含document
>
- window中包含
    - document
    - location
    - navigation
    - screen
    - history
>
- window是浏览器的顶级对象，具有双重角色
    - 1 是js访问浏览器窗口的一个接口
    - 2 是一个全局对象

#### 2.2 window常见事件
- 1 window.onload（窗口加载事件）：
    - 在页面完全加载完成后，才执行该函数
    - 在页面完全加载完成后，才执行该函数
    - 在页面完全加载完成后，才执行该函数
    - 包含页面dom元素、图片、flash、css等；
    - 从而使得js函数能写在DOM之前
    - 但是只能注册一次
>
- 2 DOMContentLoaded（窗口加载事件）：
    - 仅当DOM加载完成时触发；
    - 不包含页面dom元素、图片、flash、css等；
    - IE9以上才支持；
    - 在图片极多时，不影响交互；
    - 不影响交互；
>
- 3 window.onresize：
    - 是调整窗口大小加载事件，当触发时就调用的处理函数
    - 用于响应式布局
>
- 4 window.innerWidth:
    - 获取当前屏幕宽度

#### 2.3 定时器
- 1 <font color=red>window.setTimeout(调用函数, [延迟的毫秒数])</font>：
    - setTimeout用于设置一个定时器，该定时器在定时器到期后执行调用函数；
        - <font color=red>只执行一次</font>
    - window可以省略；
    - 延迟事件如省略，默认是零；
    - 可以直接写函数，也可以写函数名；
    - 调用函数也被称为回调函数callback；
    - addEventListener中的函数也被称为回调函数；
- 2 clearTimeout(func)
    - 清除setTimeout定时器；
>
- 3 <font color=red>window.setInterval(调用函数, [延迟的毫秒数])</font>：
    - setInterval方法重复调用一个函数，每隔一段时间（延迟毫秒数）就会回调一次函数；
    - 重复调用函数，<font color=red>不是仅调用一次</font>；

### 3 this指向问题
this 指向问题 一般情况下this的最终指向的是那个调用它的对象；
- 1 全局作用域或者普通函数中this指向全局对象window（注意定时器中的this指向window）；
- 2 方法调用中谁调用this指向谁；
- 3 构造函数中this指向构造函数实例；

