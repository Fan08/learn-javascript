<!--
 * @Descripttion: 
 * @version: 
 * @Author: 唐帆
 * @Date: 2020-04-08 10:07:29
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-15 13:28:41
 -->
 
 #### bootstrp引入
<link rel="stylesheet" href="css/bootstrap.min.css">
<script src="../jquery.js"></script>
<script src="js/bootstrap.min.js"></script>

#### bootstrap页面使用
- 需要\<div class="container">包裹；
```
    <div class="container">
        <!-- Single button -->
        <div class="btn-group">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">
                Action <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
            </ul>
        </div>
        
    </div>
```