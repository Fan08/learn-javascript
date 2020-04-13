<!--
 * @Descripttion: 
 * @version: 
 * @Author: 唐帆
 * @Date: 2020-04-08 11:08:57
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-10 10:15:45
 -->

### 1 面向对象编程介绍
#### 1.1 两大编程思想
- 面向过程
- 面向对象

#### 1.2 面向过程 POP
面向过程就是分析出解决问题所需要的步骤，然后用函数把这些步骤一步步实现，最后依次调用；

#### 1.3 面向对象编程 OOP
面向对象是把事务分解成为一个个对象，然后由对象之间分工与合作；
- 灵活、可复用、易维护；
- 封装性
- 继承性
- 多态性
    - 多种功能

### 2 ES6中的类和对象
#### 2.1 对象
对象由属性和方法组成；
- 属性：事物的特征
- 方法：事物的行为

#### 2.2 类 class
类：抽象了对象的公共部分，泛指某一大类；
对象特指某一个，通过类实例化一个具体的对象；

#### 2.3 创建类
语法：
```
    class name {
        // class body
    }
```
创建实例：
```
    const xx = new name();
```
<font color=red>类必须使用new实例化对象；</font>

```
    // 1 创建类
    class Star {
        constructor(uname) {
            // this实际上指向的是test
            this.uname = uname;
            this.age = age
        }
    }

    // 2 利用类创建对象 new
    const test = new Star('test', 29);
    const test2 = new Star('test2', 30);
    console.log(test.uname);    //  'test'
    console.log(test2.uname);    //  'test2'
```
- construct
    - 构造函数会接受实例化时传递的变量；
    - 在调用类时，构造函数自动调用（用new调用时）；
    - 实例化时 new 不能省略；
    - 类名首字母大写；

#### 2.4 类中的编辑方法
- 1 不需要function关键字；
```
    class Star {
        constructor(uname, age) {
            this.uname = uname;
            this.age = age
        }

        sing (song) {
            // 可以调用song变量
        }
    }

    const test = new Star('test', 29);
    test.sing(song);    // 方法的调用
```

### 3 类的继承
#### 3.1 继承
- extends
```
    // 1 类的继承
    class Father {
        constructor() {

        }

        money() {
            console.log(100);
        }
    }

    // 2 类的继承
    class Son extends Father {

    }

    const son = new Son();
    son.money();
```

#### 3.2 super关键字
用于访问和调用对象父类上的函数，<font color=red>可以调用父类的构造函数</font>，也可以调用父类的普通函数；
- 调用父类的构造函数，将子类的值传给父类的x、y；
- 原因是父类中的this.x 和 this.y，this指向的是父类的构造函数赋值；
- 因此，子类使用super调用父类的构造函数进行赋值；
- super的执行需在子类的this之前
```
    class Father {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }

        sum() {
            console.log(this.x + this.y);
        }
    }

    class Son extends Father {
        constructor(x, y) {
            // 调用父类的构造函数，将子类的值传给父类的x、y；
            // 原因是父类中的this.x 和 this.y，this指向的是父类的构造函数赋值；
            // 因此，子类使用super调用父类的构造函数进行赋值；
            super(x, y);

            // super的执行需在子类的this之前
            this.x = x;
            this.y = y;
        }
    }

    const son = new Son(2, 5);
    son.sum();
```
- 继承中首先执行子类中的方法，如过没有则执行父类中的方法；
- 如需执行父类中被子类覆盖的方法，则使用super.function()；
```
    // 在Son中创建sum函数
    sum(x, y) {
        super.sum()
        return x + y;
    }
```

#### 三个注意点
- 1 在ES6中类没有变量提升，必须先定义类，才能使用类进行实例化；
- 2 类里面的共有属性和方法一定要加this使用；
    - this指向的是实例化对象；
- 3 类中的this指向问题；
```
    class Star {
        constructor(uname, age, element) {
            // this指向创建的实例对象，此处指向test1
            this.uname = uname;
            this.age = age;
            this.element = element;
            this.element.onclick = this.sing;
        }

        sing() {
            // 此处的this指向的是element（按钮）
            console.log(this.uname);
        }

        dance() {
            // 此处的this指向的也是test1
            console.log(this.uname);
        }
    }

    const btn = document.querySelector('button')

    const test1 = new Star('test1', 12, btn);
    test1.dance()
```
- 4 constructor里面的this指向实例化对象，方法里面调用的this指向这个方法的调用者；

#### tab栏
抽象对象：Tab栏
- 1 该对象有切换功能
- 2 该对象有添加功能
- 3 该对象有删除功能
    - 点击叉号删除当前li和section；
    - 通过父节点获取index；

    - that.lis[index] && that.lis[index].click();
        - 前式为真，则执行后式；
- 4 该对象有修改功能
    - 双击事件（ondblclick）；
    - 阻止双击事件的文字选中功能；
        - window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty()
>
- inertAdjacentHTML(position, text);
    - 可以直接把字符串格式元素添加到父元素中
    - position:
        - 'beforebegin' 元素自身前面；
        - 'afterbegin' 插入元素内部的第一个子节点之前；
        - 'beforeend' 插入元素内部的最后一个子节点之后；
        - 'afterend' 元素自身后面；
>
