<!--
 * @Descripttion: 
 * @version: 
 * @Author: 唐帆
 * @Date: 2020-04-06 09:36:00
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-06 10:00:03
 -->
- 1 npm install jquery --save
- 2 //修改webpack配置文件:
```
    plugins:[
        new webpack.ProvidePlugin({
        $:"jquery",
        jQuery:"jquery",
        "window.jQuery":"jquery"
        })
    ]
```
- 3 函数编写：
```
    define(["jquery"],function($){
         ...
         var initialChart = function(data){
             //插件逻辑
         }
         .  ..
         \$(function(){
             //页面逻辑
         })
         ...
         return{
            initialChart:initialChart //导出函数
         } 
     })
```
- 4 在生命周期函数中使用
```
     import {initialChart} from '../../es5Components/emp-orgChart.js' 
     import {orgOrgChart} from '../../es5Components/emp-orgChart.js' 
     
     ...
     componentDidMount(){
         initialChart(this.state.data);
         orgOrgChart(this.state.data)
     }
```