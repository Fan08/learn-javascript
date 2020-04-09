<!--
 * @Descripttion: 
 * @version: 
 * @Author: 唐帆
 * @Date: 2020-04-07 09:59:36
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-07 12:51:39
 -->

#### 单个事件注册
- element.事件(function())
    - \$("div").click(function(){})
- 事件与原生基本一致，如mouseenter、mouseleave；

### 2 事件处理
#### 2.1 事件处理 on() 绑定事件
- 优势一：
    - on() 方法在匹配元素上可以绑定<font color=red>一个或多个事件</font>的事件处理函数；
        - element.on(events, [selector], fn)
        - 1 events：一个或多个，用空格分割的事件类型；
        - 2 selector：元素的子元素选择器；
        - 3 fn：回调函数；
- 给一个元素绑定多个事件，使用不同回调函数：
```
    $(function () {
        $('div').on({
            mouseenter: function () {
                $(this).css("background", "skyblue")
            },
            click: function () {
                $(this).css("background", "purple")
            },
            mouseleave: function () {
                $(this).css("background", "blue")
            }
        })
    })
```
- 给一个元素绑定两个事件，使用同一个回调函数：
```
    $("div").on("mouseenter mouseleave", function () {
        $(this).toggleClass("current");
    })
```

- 优势二
    - 事件委派。将原来加给子元素身上的事件绑定在父元素身上，就是把事件委派给父元素；
```
    // 绑定在ul上，触发的是ul的子元素li
    $("ul").on("click", "li", function () {
        $(this).css("color", "blue")
    });
```

- 优势三
    - 给动态创建的元素绑定事件
```
    // 给动态创建的元素绑定事件
    $("ol").on("click", "li", function () {
        alert(11)
    })
    const li = $("<li>新元素</li>")
    $("ol").append(li)
```
- 案例：03-04


#### 2.2 事件处理 off() 解绑事件
off()方法可以移除通过on()方法添加的事件处理程序；
- element.off() 
    - 解绑所有事件
- element.off(事件);
    - 解绑特定事件；
    - $("div").off("click");
- fatherElement.off(事件, childElement);
    - 解绑事件委托；
    - $("ul").off("click", "li");
>
##### 单次触发事件绑定
- 仅触发一次的事件，使用one()进行绑定
```
    $("p").one("click", function () {
        alert("p")
    })
```


#### 2.3 自动触发事件 trigger()
- 可以利用定时器自动触发右侧按钮点击事件，不必鼠标点击触发。
    - element.click()
    - element.trigger("type")
    - element.triggerHandler("type")
        - 不会触发事件的默认行为；
```
    $("div").on("click", function () {
        alert(11);
    });

    // 第一种
    $("div").click();
    // 第二种
    $("div").trigger("click")
    // 第三种
    $("div").triggerHandler("click")
```
- focus事件
```
    $("input").on("focus", function () {
        $(this).val("test1");
    });
    
    // 仅改变input框的值
    $("input").triggerHandler("focus");

    // 焦点也被定位至输入框
    $("input").trigger("focus");
```

### 3 事件对象
事件被触发，就会有事件对象的产生；
- 阻止默认行为：event.preventDefault() 或 return false；
- 阻止冒泡：event.stopPropagation()；
