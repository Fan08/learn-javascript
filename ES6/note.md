<!--
 * @Descripttion: 
 * @version: 
 * @Author: 唐帆
 * @Date: 2020-04-15 09:53:20
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-16 10:42:41
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
