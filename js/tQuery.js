
		//匀速运动函数

	 function doMove(obj,attr,dir,target,endFn) {

        clearInterval(obj.timer);
        var speed = 0;
        obj.timer = setInterval(function () {

        	if(attr == 'opacity'){
        		// dir = parseInt(getStyle( obj, attr )*100) < target ? dir : -dir;
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

    
function getStyle(obj,attr){ return obj.currentStyle?obj.currentStyle[attr] : getComputedStyle(obj)[attr]; }


function AppendChild(obj,elem){
	if ( obj.children[0] ) {
		obj.insertBefore( elem, obj.children[0] );
	} 
		else {
		obj.appendChild(elem);
	}
}



