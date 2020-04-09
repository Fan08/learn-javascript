<!--
 * @Descripttion: 
 * @version: 
 * @Author: 唐帆
 * @Date: 2020-04-06 11:31:07
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-06 13:05:23
 -->

### 4 jQuery属性操作
#### 4.1 设置或获取元素固有属性值 prop()
所谓固有属性就是元素本身自带的属性，比如<a\>元素里面的href，比如input元素的type；
- 1 获取属性语法：
    - element.prop("属性名") 获取属性值
- 2 设置属性语法：
    - prop("属性", "属性值")

```
    $(function () {
        // element.props("属性名") 获取属性值
        console.log($("a").prop("href"));
        $("a").prop("title", "新title");
        // 获取复选框是否被选中
        $("input").change(function () {
            console.log($(this).prop("checked"));
        })
    })
```

#### 4.2 设置或获取元素自定义属性 attr()
- 1 获取属性语法：
    - element.attr("属性名") 获取属性值
    - 类似原生的getAttribute()
- 2 设置属性语法：
    - attr("属性", "属性值")
    - 类似原生的setAttribute()

- H5的自定义属性也可以获取和设置
    - 如，element.attr("data-index")

#### 4.3 数据缓存 data()
该方法可以在指定的元素上存取数据，并不会修改DOM元素结构，一旦页面刷新，之前存放的数据都将被移除；
```
    $("span").data("uname", "andy");
    console.log($("span").data("uname"));
```

- H5的自定义属性也可以获取和设置
    - 如，element.attr("index")
    - 不需要“data-”开头
    - 返回的数字型
