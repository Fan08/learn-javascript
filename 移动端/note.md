<!--
 * @Descripttion: 
 * @version: 
 * @Author: 唐帆
 * @Date: 2020-04-21 15:25:52
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-21 15:48:09
 -->
#### 3.4 less 变量
变量是指没有固定的值，可以改变的；
```
@变量名: 值;

@color: skyblue;
@font14: 14px;
```
- 1 变量命名规范
    - 必须有 @ 前缀
    - 不能包含特殊字符
    - 不能以数字开头
    - 大小写敏感


#### 3.5 less 编译
需要把 less 文件编译为 css 才能在 html 中使用；
- vs code 的 easy less 插件；
- 安装后会进行自动编译；

#### 3.6 嵌套
- 父子元素
    ```
    .header {
        width: 200px;
        height: 200px;
        background-color: pink;
        a {
            text-decoration: none;
            color: red;
        }
    }
    ```

- (交集|伪类|伪元素选择器)
    - 内层选择器的前面没有 & 符号，则它被解析为父选择器的后代；
    - 如有 & 符号，就被解析为父元素自身或父元素的伪类；
    ```
    a {
        text-decoration: none;
        color: red;
        &:hover {
            color: blue;
        }
        &::before {
            content: "";
        }
    }
    ```

#### 3.7 less 运算
```
@border: 5px + 5;

div {
    width: 300px - 50;
    height: 300px * 0.6;
    border: @border solid red;
}
```
- 1 运算符左右两侧需要单位；
- 2 两个数参与运算，只有一个有单位，最后的结果以该单位为准；
- 3 两个数参与运算，两个都有单位，且不同，则以第一个为准；