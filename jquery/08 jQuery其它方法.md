<!--
 * @Descripttion: 
 * @version: 
 * @Author: 唐帆
 * @Date: 2020-04-07 12:51:22
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-07 14:11:59
 -->

#### 1 jQuery拷贝对象
- $.extend()
    - $.extend([deep], target, object1, [objectN])
    - 1 deep：如值为true则是深拷贝，反之为浅拷贝；
        - 浅拷贝：将对象中的复杂数据类型的地址拷贝；
            - 修改目标对象时原来的对象也会被改变；
        - 深拷贝：完全克隆，拷贝的是对象而不是地址；
            - 修改目标对象时原来的对象<font color=red>不会被改变</font>；
    - 2 target：要拷贝的目标对象；
    - 3 object1：待拷贝到第一个对象的对象；
        - 将object1拷贝给target；
```
    $(function () {
        const targetObj = {
            id: 0,
        };
        const obj = {
            id: 1,
            name: "andy",
        }

        // 深拷贝会保留原有不冲突的数据
        $.extend(true, targetObj, obj);
        console.log(targetObj);

        // 浅拷贝会覆盖原有的数据
        $.extend(targetObj, obj);
        console.log(targetObj);

    })
```

#### 2 多库共存
- 其它js库中也可能使用“$”，这样会引起冲突；
- 1 将 $ 符号改为 jQuery；
- 2 自定义符号：
    - const name = $.noConflict();
    - 此时 $ 就变成了 name；

#### 3 jQuery插件
- 这些插件也是依赖jQuery来完成的，所以也需要先引入jQuery；
- jQuery之家：www.htmleaf.com；
>
##### 图片懒加载
- 当页面滑动到可视区域再显示图片；
- www.jq22.com

##### bootstrap 