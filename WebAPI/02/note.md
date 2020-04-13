<!--
 * @Descripttion: 
 * @version: 
 * @Author: 唐帆
 * @Date: 2020-04-07 22:05:33
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-09 22:41:49
 -->

#### 1 获取元素
- element.querySelector(value)
    - .class
    - #id
    - tag_name

#### 2 元素属性
```
    // 获取元素的属性
    // 1）element属性，获取缺省属性值
    console.log(div.id);
    // 2）element.getAttribute('属性')，可以获取自定义属性
    console.log(div.getAttribute('id'));
    console.log(div.getAttribute('index'));
    // 3）设置属性值
    div.my_name = '12';
    // 4）设置属性值div.setAttribute('属性名', '属性值')
    div.setAttribute('new_name', '2323');
    // 5）删除属性值div.removeAttribute('属性名');
    div.removeAttribute('index');
```

#### 3 自定义属性
```
    const div = document.querySelector('div');
    console.log(div.getAttribute('getTime'));

    // 1 h5自定义属性要以“data-”开头
    //   element.setAttribute()   设置自定义属性
    div.setAttribute('data-index2', '4');

    // 2 h5获取自定义属性，不需要前缀“data-”
    //   IE11以上兼容
    //   不能获取自定义属性以外的属性
    console.log(div.dataset.index2);
    console.log(div.dataset['index2']);
    //   获取data-index-index属性，驼峰命名
    console.log(div.dataset.indexIndex);
```
