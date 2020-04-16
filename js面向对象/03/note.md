<!--
 * @Descripttion: 
 * @version: 
 * @Author: 唐帆
 * @Date: 2020-04-12 09:25:24
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-14 13:31:25
 -->
### 1 函数的定义和调用
#### 1.1 函数的定义方式
- 1 函数声明方式function关键字（命名函数）
- 2 函数表达式（匿名函数）
- 3 new Function('参数1', '参数2', '函数体') 
    ```
        const f = new Function('a', 'b', 'console.log(a + b)');
        f(1, 2);
    ```
    - 效率低，了解即可；
    - 但由这个方法可知，所有函数都是Function的实例；
    - 函数也是对象；

#### 1.2 函数的调用方式
- 1 普通函数
    ```
        function fn() {}

        fn(); 或者 fn.call()
    ```
    - this 指向 window
- 2 对象方法
    ```
        const o = {
            sayHi: function () {}
        };

        o.syaHi();
    ```
    - this 指向所属对象，如 o；
- 3 构造函数
    ```
        function Star() {};
        
        const test = new Star();
    ```
    - this 指向实例对象，如 test；
- 4 绑定事件函数
    ```
        btn.onclick = function () {}; //点击按钮就可以调用
    ```
    - this 指向 btn；
- 5 定时器函数；
    ```
        setInterval(function () {}, 1000)
    ```
    - this 指向 window；
- 6 立即执行函数
    ```
        (function () {})()  // 自动调用
    ```
    - this 指向 window；

### 2 this
#### 2.1 函数内this的指向
this一般指向调用者
<table>
    <tr>
        <td>调用方式</td>
        <td>this指向</td>
    </tr>
    <tr>
        <td>普通函数调用</td>
        <td>window</td>
    </tr>
    <tr>
        <td>对象方法调用</td>
        <td>该方法所属对象</td>
    </tr>
    <tr>
        <td>构造函数调用</td>
        <td>实例对象，原型对象里面的方法也指向实例对象</td>
    </tr>    
    <tr>
        <td>事件绑定方法</td>
        <td>绑定事件对象</td>
    </tr>    
    <tr>
        <td>定时器函数</td>
        <td>window</td>
    </tr>    
    <tr>
        <td>立即执行函数</td>
        <td>window</td>
    </tr>
</table>

#### 2.2 改变函数内部 this 指向
bind()、call()、apply()；
- 1 call
    - call() 方法调用一个对象，可以改变函数的this指向；
    - 主要作用可以实现继承；
        - 见 02.note 的 2.2 节；
    ```
        fun.call(thisArg, arg1, arg2, ...);
    ```
- 2 apply
    - apply() 方法调用一个函数，可以改变函数的this指向；
    ```
        fun.apply(thisArg, [argsArray]);
    ```
    - thisArg：在 fun 函数运行时指定的 this 值；
    - argsArray：传递的值，必须包含在数组里；
    - 返回值就是函数的返回值，因为它就是调用函数；
    ```
        const o = {
            name: 'andy'
        };

        function fn(arr) {
            console.log(this);
            console.log(arr);   // 'pink'

        };

        fn.apply(o, ['pink']);
        // 主要运用：利用 apply 和数学内置对象求最大值
        const arr = [1, 66, 3, 99];
        // 将 this 指向 Math
        const max = Math.max.apply(Math, arr);
    ```
- #### <font color=red> 3 bind 方法</font>
    - bind() 方法<strong>不会调用函数</strong>，但是能改变函数内部 this 指向；
    ```
        fun.bind(thisArg, arg1, arg2, ...);

        // 不会调用 fn，返回一个新函数
        const f = fn.bind(o, 1, 2);
        f();    // this 指向 o，
    ```
    - thisArg：在 fun 函数运行时指定的 this 值；
    - arg1, arg2：传递的值；
    - 返回由指定的 this 值和初始化参数改造的<font color=red>原函数拷贝；</font>
    ```
        // 应用于不需要立即执行，但有需要改变 this 指向的情况
        // bind 中的 this 指向调用对象，而不是 window
        const btn = document.querySelector('button');
        btn.onclick = function () {
            this.disabled = true;
            setTimeout(function () {
                this.disabled = false
            }.bind(this), 3000)
        };

        const btns = document.querySelectorAll('button');
        for (let i = 0; i < btns.length; i++) {
            btns[i].onclick = function () {
                this.disabled = true;
                setTimeout(function () {
                    this.disabled = false
                }.bind(this), 3000)
            }
        }
    ```

#### 2.3 总结
- call 经常用于做继承；
- apply 常与数组相关，比如数组最值；
- bind 不调用函数，还改变 this，如定时器；

### 3 严格模式
- ES5后新增，IE10以上支持；
- 在严格的条件下运行js；
- 1 消除了js语法的不合理、不严谨之处，减少怪异行为；
- 2 保证运行安全；
- 3 提高编译效率；
- 4 保留部分关键字；

#### 3.1 严格模式使用
可以应用到整个脚本或个别函数中，因此严格模式分为<font color=red>为脚本开启严格模式</font>和<font color=red>为函数开启严格模式</font>；
- 1 为整个脚本文件开启严格模式，在所有语句前放 'use strict' 即可；
    ```
        <script>
            'use strict';
            // 下面的 js 代码就会按照严格模式执行代码；
        </script>
        <script>
            (function () {
                'use strict';

            })()
        </script>
    ```
- 2 为某个函数开启严格模式；
    ```
        <script>
            function fn() {
                'use strict';
                // 函数内代码执行严格模式
            };

            function fun() {

            };
        </script>
    ```
    
#### 3.2 严格模式中的变化
用于 ES6 而产生的严格模式；
严格模式对js的语法和行为都做了一些改变；

##### 3.2.1 变量规定
- 1 在正常模式下，如果变量没有声明就赋值，默认时全局变量。严格模式禁止这种用法，必须先声明（const 或 let），然后使用；
- 2 严禁删除已经声明的变量，如 delete xx; 语法会报错；

##### 3.2.2 严格模式下 this 指向问题
- 1 以前在全局作用域函数中的 this 指向 window 对象；
- 2 严格模式下，全局作用域中函数的 this 指向 undefined；
- 3 以前构造函数时不加 new 也可以调用，作为普通函数运行，this 指向全局对象；
- 4 严格模式下，如果构造函数不加 new 调用，this 会报错，如 this.name = 'a'；
- 5 new 实例化的构造函数指向创建的对象实例；
- 6 定时器 this 还是指向 window；
- 7 事件、对象还是指向调用者；

##### 3.2.3 函数变化
- 1 函数不能有重名的参数；
- 2 不允许在非函数的代码块内声明函数；

### 4 高阶函数
- 高阶函数是对其他函数进行操作的函数，它<font color=red>接收函数作为参数</font>或<font color=red>将函数作为返回值输出</font>；
- 函数也是一种数据类型，同样可以作为参数，传递给另外一个参数使用，最典型的就是作为回调函数；


### 5 闭包
#### 5.1 变量作用域
变量作用域分两种：全局变量和局部变量；
- 1 函数内部可以使用全局变量；
- 2 函数外部不能使用局部变量；
- 3 函数执行完毕，本作用域内的局部变量会销毁；

#### 5.2 闭包（Closure）
闭包是指<font color=red>有权访问</font>另一个<font color=red>函数作用域中变量</font>的函数；
```
    // fun 这个函数作用域访问了另一个函数 fn 的局部变量
    function fn() {
        const num = 10;
        function fun() {
            console.log(num);
        }
        fun();
    }
    fn();
```
一个作用域可以访问另一个函数中的局部变量；
在全局作用域中访问某个函数的局部变量；
```
    function fn() {
        const num = 10;
        function fun() {
            console.log(num);
        }
        return fun;
    }
    
    // fn() 外面的作用域访问 fn 内部的变量
    // f 就是 fun()
    const f = fn();
    f();
```
闭包的主要作用：<strong>延申变量作用范围</strong>；

#### 5.3 闭包案例
- 1 循环注册点击事件；
    - <strong>经典面试题；</strong>
    - 立即执行函数也被称为小闭包，但有时会效率更低
    - 同时，i 不得不被保留，可能造成内存泄漏
    ```
        const lis = document.querySelector('.nav').querySelectorAll('li');

        for (let i = 0; i < lis.length; i++) {
            // 利用for循环创建四个立即执行函数
            (function (i) {
                lis[i].onclick = function () {
                    // 点击事件是异步的，当点击事件绑定的函数发生时，i 已是4
                    console.log(i);
                }
            })(i);
        }
    ```
- 2 循环中的 setTimeout
    ```
        // 闭包应用 三秒后打印所有 li 元素内容
        const lis = document.querySelector('.nav').querySelectorAll('li');

        for (let i = 0; i < lis.length; i++) {
            (function (i) {
                setTimeout(function () {
                    // 异步函数在任务队列中执行，无法调用主程序中的变量
                    console.log(lis[i].innerHTML);
                }, 3000)
            })(i)
        }
    ```
- 3 
    ```
        // 打车起步价13（3公里内），之后每多一公里增加 5 元，用户输入公里数就可以计算打车加格
        // 如果有拥堵情况，总价格多收取 10 元；
        // 如果使用的不是立即执行函数，会导致 car 的值是一个函数，而不是最终需要的那个对象
        let car = (function () {
            const start = 13;
            let total = 0;
            return {
                // 正常总价
                price: function (n) {
                    if (n <= 3) {
                        total = start;
                    } else {
                        total = (n - 3) * 5 + start;
                    }
                    return total;
                },
                // 拥堵情况
                yd: function (flag) {
                    return flag ? total + 10 : total;
                },
            }
        })();
    ```

#### 5.4 思考题
无闭包：
```
    const name = "The Window";
    const object = {
        name: "My object",
        getNameFunc: function() {
            return function() {
                return this.name;
            }
        }
    }

    console.log(object.getNameFunc()());    // "The Window"

    const f = object.getNameFunc();
    // 上面的 f 类似于
    const f = function() {
        return this.name;
    }

    f();    // 可见类似于立即执行函数，因此 this 指向window
```
含闭包：
```
    const name = "The Window";
    const object = {
        name: "My object",
        getNameFunc: function() {
            const that = this;
            return function() {
                return that.name;
            }
        }
    }

    console.log(object.getNameFunc()());    // "My object"
    const f = object.getNameFunc();
    const f = function() {
        return that.name;
    };
    f();
```

#### 闭包总价
- 1 闭包是什么？
    - 闭包是一个函数（一个作用域可以访问另一个函数的局部变量）
- 2 闭包的作用是什么？
    - 延申作用范围

### 6 递归
#### 6.1 什么是递归？
- 如果一个函数在内部可以调用其本身，那么这个函数就是递归函数；
- 递归很容易发生“栈溢出”错误（stack overflow，也就是死循环），所以必须要加退出条件 return；

#### 6.2 利用递归求数学题

#### 6.3 利用递归，根据id返回对应的数据对象


#### 6.4 浅拷贝和深拷贝
- 1 浅拷贝
    - 浅拷贝只拷贝了一层，可以拷贝简单拘束了下，但对于复杂数据类型如对象等，只拷贝其引用；
    - 修改了拷贝对象，原对象也会发生变化；
    - es6 浅拷贝语法糖：
        - Object.assign(目标对象, 原数据);
    ```
        for (const i in obj) {
            o[i] = obj[i];
        }
    ```
- 2 深拷贝
    - 深拷贝拷贝多层，每一级的数据都会拷贝；
    ```
        function deepCopy(newobj, oldobj) {
            for (const k in oldobj) {
                // 判断是否是复杂数据类型
                // 1 获取属性值
                const item = oldobj[k];
                // 2 判断这个值是否是数组
                //   数组也是对象，如果放在第二个会被忽略
                if (item instanceof Array) {
                    newobj[k] = [];
                    deepCopy(newobj[k], item);
                }
                // 3 判断这个值是否是对象
                else if (item instanceof Object) {
                    newobj[k] = {};
                    deepCopy(newobj[k], item);
                }
                // 4 是简单数据类型
                else {
                    newobj[k] = item;
                }
            }
        }
        deepCopy(o, obj);
    ```