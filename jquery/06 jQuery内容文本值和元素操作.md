<!--
 * @Descripttion: 
 * @version: 
 * @Author: 唐帆
 * @Date: 2020-04-06 13:15:07
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-06 14:17:20
 -->

### 5 内容文本值
主要针对元素的内容还有表单的值操作

#### 1 元素内容
- html() （相当于元素innerHTML）
- html() &nbsp;&nbsp;&nbsp;// 获取元素内容
    - \$("div").html()
- html("内容") &nbsp;// 设置元素内容
    - \$("div").html("123456")

#### 2 元素文本内容
- text() （相当于元素innerText）
- text() &nbsp;&nbsp;&nbsp;// 获取元素文本内容
    - \$("div").text()
- text("内容") &nbsp;&nbsp;&nbsp;// 设置元素文本内容
    - \$("div").text("123456")

#### 3 获取表单值
- val() （相当于元素value属性）
    - \$("div").val()
- val("内容") &nbsp;&nbsp;&nbsp;// 设置表单内容
    - \$("div").val("123456")



### 6 jQuery元素操作
主要是遍历、创建、添加、删除元素操作

#### 6.1 遍历元素
隐式迭代虽然也包含了遍历，但是它对每个元素做是同样的操作，如果需要做不同的操作，则需要用到遍历；
- each()
##### 语法 1
- $("div").each(function (index, domEle) { ……; })
    - each() 方法遍历匹配的每一个元素；
    - each中的回调函数包含两个参数：
        - index是每个元素的索引号；
        - <font color=red>domEle是DOM对象，不是jQuery对象；</font>
        - 因此如果想对其使用jQuery方法，需要外包$；
```
    $(function () {
        // 隐式迭代
        // $("div").css("color", "red");
        $("div").each(function (index, domEle) {
            if (index % 2 === 0) {
                domEle.style.color = "white";
            } else {
                $(domEle).css("color", "blue")
            }
        })
    })
```

##### 语法 2
- $.each(object, function (index, domEle) { ……; })
    - $.each() 方法可用于遍历任何对象，主要用于数据处理，比如数组、<font color=blue>对象</font>；
    - 里面的函数有2个参数：index是每个元素的索引号；element遍历内容；
```
    $.each($("div"), function (index, domEle) {
        console.log(index);
    });
```

#### 6.2 创建元素
- 语法
    - \$("<li\></li\>");
- 1 内部添加
    - element.append("内容");
        - 把内容放入匹配元素内部最后面，类似原生的appendChild；
    - element.prepend("内容");
        - 把内容放入匹配元素内部最前面；
    - element是父，新元素是子
- 2 外部添加
    - element.before("内容");
    - element.after("内容");
    - 生成的是兄弟元素；
- 3 删除元素
    - element.remove()
    - 删除匹配的元素（本身）
    >
    - element.empty()
    - 删除匹配的元素的所有子节点
    >
    - element.html("")
    - 删除匹配的元素的所有子节点
