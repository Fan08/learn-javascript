<!--
 * @Descripttion: 
 * @version: 
 * @Author: 唐帆
 * @Date: 2020-04-06 22:18:33
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-10 10:19:05
 -->

#### 1 删除节点
- 1 禁用
    - this.disabled = true;
    >
- 2 子节点删除
    - node.removeChild() 
    - 从DOM中删除一个子节点，返回删除节点
    - 删除元素，删除的是父节点的子节点
    - ul.removeChild(ul.children[0]);
        - ul是父节点
        - ul.children[0]是要被删除的子节点

#### 2 节点克隆
- node.cloneNode()
    - 括号内无内容时是浅拷贝
    - 浅拷贝只克隆节点本身，不克隆里面的子节点和里面内容
    - 当括号内为true时，为深拷贝

#### 3 DOM（元素节点相关）
- 1 创建（内容、元素节点）
    - document.write 不常用
    - innerHTML
        - innerHTML也可以用于获取元素节点值
        - element.innerHTML;
    - createElement
>
- 2 增
    - appendChild    向父节点新增节点元素
    - insertBefore   向某个节点前新增元素
    - inertAdjacentHTML(position, text);
        - 可以直接把字符串格式元素添加到父元素中
        - position:
            - 'beforebegin' 元素自身前面；
            - 'afterbegin' 插入元素内部的第一个子节点之前；
            - 'beforeend' 插入元素内部的最后一个子节点之后；
            - 'afterend' 元素自身后面；
>
- 3 删
    - removeChild    删除父节点的子节点
    - element.remove()  直接删除某一节点
>
- 4 改
    - 修改元素属性：src、href、title等；
    - 修改普通元素内容：innerHTML、innerText；
    - 修改表单元素：value、type、disabled等；
    - 修改元素样式：style、className；
>
- 5 查
    - DOM提供的：getElementById、getElementsByTagName（不推荐使用）；
    - H5提供的新方法：querySelect、querySelectAll（提倡使用）；
    - 利用节点操作获取元素：父（parentNode）、子（children）、兄（
    - previousElementSibling、nextElementSibling），提倡使用；
>
- 6 属性操作
    - setAttribute：设置DOM的属性；
    - getAttribute：得到DOM的属性；
    - removeAttribute：移除属性；
>
- 7 时间操作
    - 事件源.事件类型 = 事件处理程序

#### 4 事件
##### 4.1 注册事件概述
- 方法1 事件源.事件类型 = 事件处理程序
    - btns[0].onclick = function () { alert('hi'); };
    - 只能设置一个处理函数；
    - 新函数会覆盖旧函数；
>
- 方法2 方法监听注册事件方式
    - IE9之前不兼容 addEventListener()；
    - 可以使用attachEvent()，非标，不可在生产环境中使用；
        - IE9之后不兼容
    - 同一个元素同一个事件可以注册多个监听器；
    - eventTarget.addEventListener(type, listener[, useCapture])：
        - type：事件类型，click、mouseover（无“on”），
        - listener：事件处理函数，
        - useCapture：可选参数
```
    btns[1].addEventListener('click', function () {
        alert('hi, 22');
    }, false);
```

##### 4.2 删除事件（解绑事件）
- 传统方式 eventTarget.onclick = null;
    - 无兼容性问题
```
    divs[0].onclick = null;
```
- h5新方法 eventTarget.removeEventListener(事件, 函数)；
```
    divs[1].removeEventListener('click', fn);
```

#### 5 DOM事件流
- 事件流描述的是从页面中接受事件的顺序
- 事件发生时会在元素节点之间按照特定的顺序传播
    - 冒泡阶段：element div => element body => element html => element document
    - 捕获阶段：element document => element html => element body => element div
>
- 1 JS只能执行冒泡或者捕获中的一个阶段
- 2 onclick和attachEvent只能得到冒泡阶段
- 3 addEventListener(type, listener, useCapture)，第三个参数如是true则是捕获阶段，false则是冒泡；

#### 6 事件对象
- 1 event指的就是事件对象；
- 2 事件对象只有有了事件才会存在，它是系统给我们自动创建的，不需要我们传参；
- 3 “事件对象”是我们事件的一系列相关数据的集合，与实践相关的数据；
    - 如鼠标事件中的鼠标坐标，键盘事件中键盘点击键；
- 4 这个事件对象可以自己命名；
- 5 事件对象也有兼容性问题

##### 常见事件对象的属性和方法
- 1 e.target 返回的是触发事件的对象（元素）
    - 在IE 6、7、8中用e.srcElement；
- 2 返回事件类型
    - 打印的是事件类型，此时是click
    - console.log(e.type);
- 3 阻止默认行为（事件）
    - 如让链接不跳转，或者让提交按钮不提交；
    - e.preventDefault();
- 4 传统的注册方式
    - 普通浏览器可以用 e.preventDefault();
    - 低版本IE用e.returnValue；
    - 使用return false也可以阻止，且无兼容性问题；
    - 但是return false只是用于阻止传统注册方式的事件；
    ```
        a.onclick = function (e) {
            return false;
        }
    ```
- 5 阻止冒泡 dom推荐的标准 stopPropagation()；
```
    son.addEventListener('click', function (e) {
        alert('son');
        e.stopPropagation();
    });
```

##### 事件委托
原理：不再给每个子节点添加事件监听器，而是给父节点添加事件监听，然后利用冒泡原理影响设置每个子节点。
```
    const ul = document.querySelector('ul');
    ul.addEventListener('click', function (e) {
        alert('1111');
        // 使用e.target来获取实际点击的对象
        e.target.style.backgroundColor = 'pink';

        // 注意this和e.target指向的对象是不同的
    })
```

##### 鼠标事件
- e.clientX 相对于浏览器可视区的X坐标
- e.clientY 相对于浏览器可视区的Y坐标
- e.pageX 相对于文档页面的X坐标
- e.pageY 相对于文档页面的Y坐标
>
- 鼠标移动跟随
    - 1 鼠标不断移动，需添加mousemove事件；
    - 2 由于是在页面中移动，所以是给document注册事件；
    - 3 图片要移动举例，且不占位置，使用绝对定位；
    - 4 根据鼠标位置，设置图片top、left的值；