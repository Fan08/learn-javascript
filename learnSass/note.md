<!--
 * @Descripttion: 
 * @version: 
 * @Author: 唐帆
 * @Date: 2020-04-21 14:37:42
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-21 14:56:09
 -->

### 1 windows 安装
npm install -g sass

### 2 基本使用
#### 2.1 编译
- 1 手动编译
    - 命令行执行 sass 目标文件/输出地址;
        - 如：sass sass/style.scss:css/style.css
        - 注意是相对路径，不是绝对路径

- 2 自动进行编译
    - sass --watch 目标文件夹:输出文件夹
        - sass --watch sass:css

#### 2.2 style
- expanded，扩展
- compressed，压缩