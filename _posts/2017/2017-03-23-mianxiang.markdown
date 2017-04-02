---
title: 面向对象编程
date: '2017-03-23 00:26'
categories: null
tags: JS笔记
---

### 系统对象：
>我们把系统自带的对象，叫做 _系统对象_。

### 面向对象：  
               1. *抽象*：抓住核心问题
               2. *封装*：只能通过对象来访问方法
               3. *继承*：从已有对象上继承出新的对象
               4. *多台*：多对象的不同形态
        *对象的组成* ：方法（操作，行为）——对象下面的函数，叫做对象的方法
        *属性* : 对象下面的变量，我们叫做属性。
        *状态* : 静态的

__关于new__： 当new去调用一个函数，这个时候函数中的this就是创建出来的对象，而且函数的返回值直接就是this了（隐式返回）。  
而new后面的函数，就叫做构造函数。

**关于原型** ： 去改写对象下面公用的方法或者属性，让同样公用的方法或者属性在内存中只存在一份（提高性能）；
<Excerpt in index | 首页摘要>
+<!-- more -->
<The rest of contents | 余下全文>

**prototype** : 要写在构造函数的下面

    Array.prototype.sum = function() {
    			var result =0;
    			for(var i=0; i<this.length; i++){
    				result += this[i];
    			}
    			return result;
    		}

    		var arr = [1,8,6,2,7];
    		alert(arr.sum());


**面向对象的写法**：function 构造函数() {  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 对象，属性  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;}  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;构造函数.原型.方法 = function(){}

**面向对象的使用**：var  对象 = new 构造函数();  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;对象.方法();

    function CreatePerson(name){  
    	this.name = name;     //创建构造函数下面的属性
    }
    CreatePerson.prototype.showName = function(){
    		alert(this.name);		//创建原型方法
    	}
    var obj = new CreatePerson('xiaoqiang');
    obj.showName();				//创建一个对象，调用原型方法

    var obj2 = new CreatePerson('daxiang');
    obj2.showName();			//创建一个对象，调用原型方法


**普通写法转面向对象写法**：
1. 先变形
2. 尽量不要出现函数嵌套函数
3. 可以有全局变量
4. 把onload中不是赋值的语句放到单独函数中  

        var oParent = null;
        var aBtn = null;
        var aDiv = null;

        window.onload = function(){
	       oParent = document.getElementById('div1');
	       aBtn = oParent.getElementsByTagName('input');
	       aDiv = oParent.getElementsByTagName('div');
	       init();
        }

        function init(){
	       for(var i=0; i<aBtn.length; i++){
		      aBtn[i].index = i;
		      aBtn[i].onclick =change;
	       }
        }

        function change (){
        	for(var i=0; i<aBtn.length; i++){
        		aBtn[i].className = '';
        		aDiv[i].style.display = 'none';
        	}
        	this.className = 'active';
        	aDiv[this.index].style.display = 'block';
        }

**改成面向对象**
1. 全局变量就是属性
2. 函数就是方法
3. Onload中创建对象
4. 改this指向问题：在事件或定时器的时候容易出问题，尽量让面向对象的this指向对象  

        window.onload = function(){
        	var t1 = new Tab('div1');
        	t1.init();
        	var t2 = new Tab('div2');
        	t2.init();
        }

        function Tab(id){
        	this.oParent = document.getElementById(id);
        	this.aBtn = this.oParent.getElementsByTagName('input');
        	this.aDiv = this.oParent.getElementsByTagName('div');
        }

        Tab.prototype.init = function(){
        	var This = this;
        	for(var i=0; i<this.aBtn.length; i++){
        		this.aBtn[i].index = i;
        		this.aBtn[i].onclick =function(){
        			This.change(this);
        		}
        	}
        }

        Tab.prototype.change = function(obj){
        	for(var i=0; i<this.aBtn.length; i++){
        		this.aBtn[i].className = '';
        		this.aDiv[i].style.display = 'none';
        	}
        	obj.className = 'active';
        	this.aDiv[obj.index].style.display = 'block';
        }
        	</script>
        </head>
        <body>
        	<div id="div1">
        		<input class="active" type="button" value="1">
        		<input type="button" value="2">
        		<input type="button" value="3">
        		<div style="display: block">111111</div>
        		<div>222222</div>
        		<div>333333</div>
        	</div>
        	<div id="div2">
        		<input class="active" type="button" value="1">
        		<input type="button" value="2">
        		<input type="button" value="3">
        		<div style="display: block">111111</div>
        		<div>222222</div>
        		<div>333333</div>
        	</div>
        </body>



### <strong>原型链</strong> ###
*******************************************

**包装对象**　：基本类型都有自己对应的包装对象。String  Number  Boolean  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;基本类型会找到对应的包装类型，然后包装对象把所有的属性和方法给了基本类型，然后包装对象消失。

 **原型链**   ：实例对象与原型之间的连接，叫做原型链    
 &emsp; &emsp; &emsp; &ensp;原型链的链接我们是看不见的，但是在Friebug下是可以查看到的，它的英文名字叫着__\_proto___(隐式链接)


原型链的查找是由内而外的  
原型链的最外层 : Object.prototype  

        function Aaa(){
        	//this.num = 20;        //优先弹出内部的属性
        }
        //Aaa.prototype.num = 10;	//其次是构造函数下面原型的属性
        Object.prototype.num = 30;	//最后弹出最外层Object的属性

        var a1 = new Aaa();			
        alert(a1.num);


**面向对象的属性和方法**:

**<font color="#f60"> hasOwnProperty()</font>** :  看是不是对象自身下面的属性


        var arr = [];
        Arr.num = 10;
        Array.prototype.num2 = 20;
        alert(arr.hasOwnProperty(‘num’));   //true  证明num是arr对象下独有的属性
        alert(arr.hasOwnProperty(‘num2’));  //flase  证明num2不是arr对象下独有的属性，所有的数组的原型下都有这个属性

**<font color="#f60">constructor</font>**  :  查看对象的构造函数  

    function Aaa(){}
    	var a1 = new Aaa();
    	alert(a1.constructor);   //function Aaa(){};  弹出了a1下面的构造函数

同理，我们新建一个数组，查看它的构造函数是谁？

	var arr = [];
	console.log(arr.constructor);   // function Array() { [native code] }  弹出数组的构造函数
	console.log(arr.constructor == Array);  // true    可以运用这个属性来做判断


当我们写完一个函数的时候，不管是系统自带的函数，还是我们写的函数，都是一样的。

	function Aaa(){}
	Aaa.prototype.constructor == Aaa; //每一个函数，程序会自动的帮我们生成这句话
	var a1 = new Aaa();
	alert(a1.constructor); 	//然后我们就可以通过constructor找到它的构造函数 function Aaa(){}


	function Aaa(){}
	Aaa.prototype.constructor == Array; //可以手动修改
	var a1 = new Aaa();
	alert(a1.constructor); 	//这个时候它的构造函数就会变成 function Array() { [native code] }
