
		//匀速运动函数

	 function doMove(obj,attr,dir,target,endFn) {
        if(attr == 'opacity'){
           dir = parseInt(getStyle( obj, attr )*100) < target ? dir : -dir; 
        }
        else{
            dir = parseInt(getStyle( obj, attr )) < target ? dir : -dir; 
        }
        clearInterval(obj.timer);
        var speed = 0;
        obj.timer = setInterval(function () {

        	if(attr == 'opacity'){
        		
        		speed = parseInt(getStyle( obj, attr )*100) + dir;
        	}
        	else{
        		
        		speed = parseInt(getStyle(obj,attr)) + dir;
        	}                
            if ( speed > target && dir > 0 ||  speed < target && dir < 0  ) {
                    speed = target;
            }
            if(attr == 'opacity'){
            	obj.style.opacity = speed/100;
                obj.style.filter = 'alpha(opacity = ' + speed + ')';
            }
            else{
            	obj.style[attr] = speed + 'px';
            }
            
            if ( speed == target ) {
                    clearInterval( obj.timer );
                    endFn && endFn();
            }
        },1);
    }

  function bufferMove (obj,attr,dir,target,endFn ) {
            clearInterval( obj.timer );
            var iCur = 0;
            var iSpeed = 0;
            obj.timer = setInterval(function () {
                if(attr == 'opacity'){
                    iCur = parseInt(getStyle( obj, attr ) * 100);   
                    iSpeed = target>iCur ?  Math.ceil((target-iCur)/dir):Math.floor((target-iCur)/dir);
                    obj.style.opacity = (iCur + iSpeed)/100;
                    obj.style.filter = 'alpha(opacity = ' + (iCur + iSpeed) + ')';
                    document.getElementById('text').value = getStyle( obj, attr );
                }
                else{
                    iCur = parseInt(getStyle( obj, attr ));
                    iSpeed = target>iCur ?  Math.ceil((target-iCur)/dir):Math.floor((target-iCur)/dir);
                    obj.style[attr] = iCur + iSpeed + 'px';
                }
                
                if ( iCur == target ) {
                    clearInterval( obj.timer );
                    endFn && endFn();
                }
            },20);  
        }    

function getStyle(obj,attr){ return obj.currentStyle?obj.currentStyle[attr] : getComputedStyle(obj)[attr]; }


function AppendChild(obj,elem){
	if ( obj.children[0] ) {
		obj.insertBefore( elem, obj.children[0] );
	} 
		else {
		obj.appendChild(elem);
	}
}



//给元素添加class
function addClass(obj,className){
        if(obj.className == ''){
            obj.className = className;
        }
        else{
            var arrClassName = obj.className.split(' ');
            var _index = arrIndexOf(arrClassName,className);
            if(_index == -1){
                obj.className += ' ' + className;
            }
        }
    }
    //删除指定元素指定的class
    function removeClass(obj,className){
        if(obj.className != ''){
            var arrClassName = obj.className.split(' ');
            var _index = arrIndexOf(arrClassName,className);
            if( _index != -1 ){
                arrClassName.splice(_index,1);
                obj.className = arrClassName.join(' ');
            }
        }
        
    }
    //为上面函数封装的方法，判断数组有没有重复的。
    function arrIndexOf(arr, v) {
        for (var i=0; i<arr.length; i++) {
            if (arr[i] == v) {
                return i;
            }
        }
        return -1;
    }