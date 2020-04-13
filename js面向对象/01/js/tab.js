/*
 * @Descripttion:
 * @version:
 * @Author: 唐帆
 * @Date: 2020-04-09 11:36:46
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-10 10:34:38
 */

let that;

class Tab {
    constructor(id) {
        // 获取元素
        // 这些元素不需要进行更新
        this.main = document.querySelector(id);
        this.add = this.main.querySelector('.tabadd');

        this.ul = this.main.querySelector('.firstnav ul:first-child');
        this.fsection = this.main.querySelector('.tabscon');
        this.init();
        that = this;
    }

    // 获取所有li和section
    // 以下几种元素需要根据操作不断更新
    updateNode() {
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.removes = this.main.querySelectorAll('.iconfont-right');
        this.spans = this.main.querySelectorAll('.firstnav li span');
    }

    // 初始化操作，让相关元素绑定事件
    init() {
        this.updateNode();
        this.add.onclick = this.addTab;
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;

            this.removes[i].onclick = this.removeTab;

            // 双击编辑内容
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        }
    }

    // 1 切换功能
    toggleTab() {
        that.clearClass();
        // console.log(this.index);
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive';

    }

    // 2 添加功能
    addTab() {
        that.clearClass();
        // alert('add');
        // 1 创建li元素和section元素
        let li = '<li class="liactive"><span>新标签</span><i class="iconfont iconfont-right">&#xe651;</i></li>';
        let section = '<section class="conactive">新标签</section>';

        // 2 把这两个元素追加到对应父元素中
        that.ul.insertAdjacentHTML('beforeend', li);
        that.fsection.insertAdjacentHTML('beforeend', section);

        // 3 在init中调用重新获取节点的函数
        that.init();
    }

    // 3 删除功能
    removeTab(e) {
        // 阻止冒泡，防止li的切换事件
        e.stopPropagation();
        let index = this.parentNode.index;
        that.lis[index].remove();
        that.sections[index].remove();
        that.removes[index].remove();
        that.init();

        // 当删除的是非选定状态选项卡时，选中的li不变
        // 能找到处于选定状态的li，则直接退出
        if (document.querySelector('.liactive')) {
            return;
        }

        // 当删除了选定状态的li，让它的前一个li处于选定状态
        index--;
        // 手动调用点击事件，不需要鼠标触发
        // 避免只剩最后一个时的关闭报错
        that.lis[index] && that.lis[index].click();
    }

    // 4 修改功能
    editTab() {
        this.removeEventListener('dblclick', this.editTab);

        // 获取标签栏中的值，赋值给输入框
        const str = this.innerHTML;
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = '<input type="text"/>';
        const input = this.children[0];
        input.value = str;
        input.select();  // 使文本框文字处于选定状态

        // input框失焦保存
        input.onblur = function () {
            this.parentNode.addEventListener('dblclick', this.editTab);
            this.parentNode.innerHTML = this.value;
        }

        // 回车保存
        input.onkeyup = function (e) {
            if (e.keyCode === 13) {
                // 手动触发失焦事件
                this.blur();
            }
        }
    }

    clearClass() {
        // this指向that
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
}

new Tab('#tab');