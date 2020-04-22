<!--
 * @Descripttion: 
 * @version: 
 * @Author: 唐帆
 * @Date: 2020-04-15 09:53:20
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-18 11:26:15
 -->

### 1 函数扩展
#### 1.1 箭头函数
- 箭头函数最典型的特点是this绑定，不会发生改变，始终指向申明时的外部指向；
```
    div.onclick = function () {
        setInterval(() => {
            that.style.background = `rgb(${parseInt(Math.random() * 255)},
            ${parseInt(Math.random() * 255)}, ${parseInt(Math.random() * 255)})`
        }, 1000)
    }
```

#### 1.2 参数默认值
- es6之前的写法之一
    ```
        function fn(param) {
            let p = param || 'hello';
        }
    ```
- es6的写法
    ```
        function fn(a=0, b=0) {
            return a + b;
        }

        const x = 3;
        function fn(x=0, b=x) {
            console.log(b);     // 0
        }
        fn();


        function fn1(c=0, b=x) {
            console.log(b);     // 3
        }
        fn1();
    ```

#### 1.3 扩展运算符
- 用在函数调用时
```
    const arr = [1, 2, 3]
    function getSars(a, b, c) {
        console.log(a);     // 1
        console.log(b);     // 2
        console.log(c);     // 3
    }
    getSars(...arr)
```

#### 1.4 rest 运算符
- 用在函数申明时
```
    function fn(a, b, ...args) {
        console.log(a);         // 1
        console.log(b);         // 2
        console.log(args);      // [3, 4, 5, 6]
    }

    fn(1, 2, 3, 4, 5, 6)
```

### 2 Promise
#### 2.1 Promise应用
- 1 可以直接使用 Promise 直接 resove(value)
    ```
    Promise.resolve(5).then(v => console.log(v))    // 5
    ```
- 2 也可以使用 reject(value)
    ```
    Promise.reject(5).catch(v => console.log()v)    // 5
    ```
- 3 执行器错误通过 catch 捕捉
    ```
    new Promise(function(resolve, reject) {
        if(true) {
            throw new Error('error!!')
        }
    }).catch(v => console.log(v.message))   // error!!
    ```
>
#### 2.2 其他方法
除了 reject() 和 resolve() 之外，还有 Promise.all() 和 Promise.race()；
##### Promise.all()
可以使用 all() 方法包装多个 Promise 实例；
- all() 其实就是在所有需要的异步操作完成后，进行某一操作
- 详见 Promise04-all.html

##### promise 状态
- pending：初始状态，既不是成功，也不是失败；
- fulfilled：操作成功；
- rejected：操作失败；

#### 2.3 典型的异步封装
```
    const fnPromise = function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                const d1 = document.querySelector('div');
                d1.style.backgroundColor = 'yellow';
                // 成功执行后传递的数据
                resolve("change color after 2 second")
            }, 2000)
        })
    }

    const p1 = fnPromise();
    p1.then(function (res) {
        console.log(res);
    })
```

### 3 async await
- 使用 await 来替代原有的 .then
- 在 async 内部则也是同步运行，必须先运行 result2，结束后才能运行 result

### 4 迭代器
每个迭代器都有一个 next() ，该方法返回一个对象，包括 value 和 done 属性；
- 注意 Map() 对象的知识点，是ES6的新对象；

### 5 生成器
- <strong>生成器是函数：用来返回迭代器</strong>
- 是 ES6 中特有的，函数前加星号（*）和yield
- 每执行一次 next()，只会执行一个 yield 后面的内容，然后语句中止运行；
```
// 函数前加星号（*）和yield
function* easy() {
    yield 1;
    yield 2;
    yield 3;
}

// 没有运行
let eastAterator = easy();
console.log(eastAterator);

// 遇到 yield 就中断执行
eastAterator.next();    // 1
eastAterator.next();    // 2
eastAterator.next();    // 3

// 实际运行是在 for 循环中运行 next 生成和返回结果的
for (let i of eastAterator) {
    console.log(i);
}
```
- 每次调用 next 时，都是从上次中断的位置开始，首次调用则是从起始位置开始执行；
- 当再一次遇到 yield 时，输出结果并中断；
- function* 和 yield 是生成器，在调用时（如 let eastAterator = easy() ）才是迭代器；
    - eastAterator.next() 则可以获取每次迭代的结果；
>
- 相较于 return ，使用 yield 无需执行之前已经执行过的部分，如需获取第8个值时，无需再次执行前面7个；

### 6 创建可迭代对象
在ES6中，数组、Set、Map、字符串都是可迭代对象；
默认情况下定义的对象（Object）是不可迭代的，但是可以通过 Symbol.iterator 创建迭代器；
- 所谓迭代，就是可以通过 for 循环进行遍历；
- Set()
    ```
    const a = ["456", 2, 3, 4, 5, 2, 3];

    const aa = new Set(a);
    console.log(aa);

    for (let i of aa) {
        console.log(i);
    }
    ```
    - 生成的是一个不重复的可迭代对象
- Map()
    ```
    const user = new Map();
    user.set("name", "456");
    user.set("age", "18");
    user.set("sex", "1");
    console.log(user);
    // [key, vlaue] 是对迭代结果进行解构
    for (let [key, vlaue] of user) {
        console.log(key);
        console.log(vlaue);
    }
    ```
- Symbol.iterator 创建迭代器
    - 可以使任意对象变为可迭代对象，且迭代方式可自定义
    ```
        const student = {
        'name': '12',
        'age': '12',
        'sex': '12',
        // 创建属性方法
        *[Symbol.iterator]() {
                for (let key in this) {
                    yield [key, this[key]]
                }
            }
        }

        for (let [key, value] of student) {
            console.log(key);
            console.log(value);
        }
    ```

#### 6.1 内建迭代器
数组、Set、Map都是可迭代对象，内部提供了3种迭代器
- 1 <strong>entries() 返回迭代器</strong>：返回键值对
    ```
    const a = ["456", 2, 3, 4, 5, 2, 3];
    for (let [key, value] of a.entries()) {
        console.log(key);
        console.log(value);
    }

    const set_a = new Set(a);
    for (let [key, value] of set_a.entries()) {
        console.log(key);
        console.log(value);
    }

    const user = new Map();
    user.set("name", "456");
    user.set("age", "18");
    user.set("sex", "1");
    for (let [key, value] of user.entries()) {
        console.log(key);
        console.log(value);
    }
    ```
    - 注意，Set是没有顺序的
- 2 <strong>values() 返回迭代器</strong>：返回键值对的 value
    ```
    const user = new Map();
    user.set("name", "456");
    user.set("age", "18");
    user.set("sex", "1");
    for (let value of user.values()) {
        console.log(value);
    }
    ```
    - 数组、Set 相同使用；
- 3 <strong>keys() 返回迭代器</strong>：返回键值对的 key
    ```
    const user = new Map();
    user.set("name", "456");
    user.set("age", "18");
    user.set("sex", "1");
    for (let key of user.keys()) {
        console.log(key);
    }
    ```
    - 数组、Set 相同使用；

#### 6.2 展开运算符和迭代器
```
const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [...a, ...b]

function* abc() {
    yield 1;
    yield 5;
    yield 10;
}

const iterator = abc();
// 一次性将迭代器中的内容全部生成并放入数组
const e = [...iterator];
console.log(e);
```

#### 6.3 高级迭代器功能
- 1 传参
    - 生成器中由2个 yield ，当执行第一个 next() 时，返回对应的值，然后在执行下一个 next() 时，将上一个next() 产生的值替换掉：
    ```
    function* creatorIterator() {
        let first = yield 1;
        yield first + 2;
    }

    let i = creatorIterator();
    console.log(i.next());       // {value: 1, done: false}
    console.log(i.next(10));       // {value: 12, done: false}
    ```

#### 6.4 总结
- 生成器就是一个可以中断的函数，每次中断的时候都用yield返回；
- 能降低对内存的需求；

### 7 代理 Proxy
- 语法
    ```
    let p = new Proxy(tartget, handler);
    ```
    - target：一个目标对象，可以是任何对象
    - handler：一个对象，其属性是当执行一个操作时定义代理的行为的函数
    - 所谓代理就是不直接使用目标对象；

### 8 模块
#### 8.1 模块的定义
- 模块是自动运行在严格模式下，并且没有办法退出运行的 js 代码；
- 模块可以是函数、数据、类，需要指定导出的模块名，才能被其他模块访问；

#### 8.2 模块的导出
- 给函数、数据、类添加一个 export，就能导出模块；

#### 8.3 浏览器加载模块
- 必须要有相应的加载顺序，如模块中使用了 jQuery，那就必须先加载 jQuery；
```
<script src="module1.js" type="module"></script>
```
- 与原来直接引入 js 最大的不同在于，如果类型不是 module，多个 js 文件间的变量可以相互引用，都是全局变量；
- 而在设置为 module 后，module 中的变量都是局部变量，不可以互相引用；

