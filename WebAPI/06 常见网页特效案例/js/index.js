/*
 * @Descripttion:
 * @version:
 * @Author: 唐帆
 * @Date: 2020-04-17 13:20:01
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-18 00:38:33
 */
window.addEventListener('load', function () {
    // this.alert(1);
    // 1 左右按钮随鼠标移入移出隐藏
    const arrow_r = document.querySelector('.next');
    const arrow_l = document.querySelector('.prev');
    const main_area = document.querySelector('.main-area');
    const tb_promoa = document.querySelector('.tb-promo');

    // const first_img = main_area.children[0].cloneNode(true);
    // main_area.appendChild(first_img)

    let timer = setInterval(function () {
        if (img_index < 3 && direction === 'right') {
            img_index++;

            arrow_r.click();
        } else if (img_index === 3 && direction === 'right') {
            direction = 'left';
            arrow_l.click();
        }
        if (img_index > 0 && direction === 'left') {
            img_index--;
            arrow_l.click();
        } else if (img_index === 0 && direction === 'left') {
            direction = 'right';
            arrow_r.click();
        }
    }, 3000)

    // 鼠标进入则显示
    tb_promoa.addEventListener('mouseover', function () {
        arrow_r.style.display = 'block';
        arrow_l.style.display = 'block';
        clearInterval(timer);
        timer = null;
    });

    // 鼠标移出则隐藏
    tb_promoa.addEventListener('mouseleave', function () {
        arrow_r.style.display = 'none';
        arrow_l.style.display = 'none';
        timer = setInterval(function () {
            if (img_index < 3 && direction === 'right') {
                img_index++;

                arrow_r.click();
            } else if (img_index === 3 && direction === 'right') {
                direction = 'left';
                arrow_l.click();
            }
            if (img_index > 0 && direction === 'left') {
                img_index--;
                arrow_l.click();
            } else if (img_index === 0 && direction === 'left') {
                direction = 'right';
                arrow_r.click();
            }
        }, 3000)
    })

    // 2 动态生成小圆圈 
    const num_of_img = document.querySelector('.main-area').querySelectorAll('li');
    const ul_point = document.querySelector('.ul-point');
    let needed_number = num_of_img.length;
    for (let x = 0; x < needed_number; x++) {
        const li = document.createElement('li');
        // console.log(x);
        li.index = x;
        //      绑定事件
        li.addEventListener('click', function () {
            for (let x of ul_point.children) {
                x.className = '';
            }
            this.className = 'selected';
            clickCircle.call(this);
        })
        ul_point.appendChild(li)
    }
    //      默认第一个是选中状态
    ul_point.children[0].className = 'selected';

    // 3 点击小圆，ul 滚动
    function clickCircle() {
        // console.log(this);
        const img_width = main_area.querySelector('img').clientWidth;
        // console.log(img_width * this.index);
        animate(main_area, -img_width * this.index);
    }


    const MoveSingleImg = function (type) {
        const position_of_imgs = main_area.offsetLeft;
        const num_of_img = main_area.querySelectorAll('li');
        let needed_number = num_of_img.length - 1;
        const img_width = main_area.querySelector('img').clientWidth;
        // console.log(position_of_imgs - img_width);


        let whether_move = false;
        if (type === 'right' && position_of_imgs !== -needed_number * img_width) {
            if (position_of_imgs % img_width === 0) {
                move_length = position_of_imgs - img_width;
                animate(main_area, move_length);
                whether_move = true;
            }
        } else if (type === 'left' && position_of_imgs !== 0) {
            if (position_of_imgs % img_width === 0) {
                move_length = position_of_imgs + img_width
                animate(main_area, move_length);
                whether_move = true;
            }
        }

        if (whether_move) {
            let index = - move_length / img_width;
            const circles = document.querySelector('.ul-point').querySelectorAll('li');
            for (let i = 0; i < circles.length; i++) {
                circles[i].className = '';
            }
            circles[index].className = 'selected';
        }

    }

    arrow_r.addEventListener('click', MoveSingleImg.bind(this, 'right'));
    arrow_l.addEventListener('click', MoveSingleImg.bind(this, 'left'));

    let img_index = 0;
    let direction = 'right';




    // class DuiLie {
    //     constructor(x, y) {
    //         this.arr = [];
    //     }

    //     push_my(number) {
    //         let arr = this.arr;
    //         arr.push(number);
    //         this.arr = arr;
    //     }

    //     pop_my() {
    //         if (this.arr.length > 0) {
    //             let arr = this.arr;
    //             const a = arr.splice(0, 1)
    //             return a;
    //         }
    //         return false;
    //     }
    // }

    // class Son extends DuiLie {
    //     constructor(x, y) {
    //         super(x, y)
    //     }
    // }

    // const js_duilie = new DuiLie();
    // js_duilie.push_my(1);
})