window.onload = function() {

    // 购物车下拉
    (function() {
        var oShop = document.getElementById('shopping_cart');
        var oDiv = oShop.getElementsByTagName('div')[0];
        oShop.onmouseover = function() {
            doMove(oDiv, 'height', 2, 98);
        }
        oShop.onmouseout = function() {
            doMove(oDiv, 'height', 2, 0);
        }
    })();

    // 搜索框关键字

    (function() {
        var oDiv = document.getElementById('header_search');
        var aDiv = oDiv.getElementsByTagName('div');
        var oUl = aDiv[1].getElementsByTagName('ul')[0];
        var aA = oUl.getElementsByTagName('a');
        var oForm = document.getElementById('search_form');
        var aInput = oForm.getElementsByTagName('input');
        var onOff = true;

        aInput[0].onfocus = function() {
            aDiv[1].style.display = 'block';
            oForm.style.border = '1px solid #ff6700';
            this.style.borderRight = '1px solid #ff6700';
            aDiv[0].style.display = 'none';
            if (onOff) {
                onOff = false;
                fn();
            }
        }

        aInput[0].onblur = function() {
            this.value != '' ? aDiv[0].style.display = 'none' : aDiv[0].style.display = 'block';
            oForm.style.border = '1px solid #b0b0b0';
            this.style.borderRight = '1px solid #b0b0b0';
            setTimeout(function() {
                aDiv[1].style.display = 'none';
            }, 200)

        }

        aInput[1].onclick = function() {
            oForm.action = 'http://search.mi.com/search_' + aInput[0].value;
            aInput[0].value = '';
        }

        aInput[0].onkeyup = function() {
            if (this.value != '') {
                var oScript = document.createElement('script');
                oScript.src = 'http://search.mi.com/search/expand?keyword=' + this.value + '&jsonpcallback=resultList';
                document.body.appendChild(oScript);
            } else {
                fn();
            }
        }

        function fn() {
            var str = '';
            for (var i = 0; i < dataSearchConfig.length; i++) {
                str += '<li><a href="' + dataSearchConfig[i].Url + '"><strong>' + dataSearchConfig[i].Key + '</strong><span>约有' + dataSearchConfig[i].Rst + '件</sapn></a></li>';
            }
            oUl.innerHTML = str;
        }

    })();

    //小米商城导航下拉菜单
    (function() {
        var oDiv = document.getElementById('header_nav');
        var aLi = oDiv.getElementsByTagName('li');
        var oItem = document.getElementById('item-children');
        var oUl = document.getElementById('children_list');
        var len = childrenList.length;
        for (var i = 0; i < len; i++) {
            aLi[i].index = i;
            aLi[i].onmouseover = function() {
                oItem.style.display = 'block';
                doMove(oItem, 'height', 5, 230);
                oUl.innerHTML = '';
                for (var j = 0; j < childrenList[this.index].length; j++) {
                    var oLi = document.createElement('li');
                    var oDiv1 = document.createElement('div');
                    var oDiv2 = document.createElement('div');
                    oDiv1.className = 'flags';
                    if (childrenList[this.index][j].flag != '') {
                        var oSpan = document.createElement('span');
                        oSpan.innerHTML = childrenList[this.index][j].flag;
                        oDiv1.appendChild(oSpan);
                    }
                    oDiv2.className = 'figure';

                    var oA1 = document.createElement('a');
                    var oA2 = document.createElement('a');
                    var oImg = document.createElement('img');
                    var oP = document.createElement('p');
                    oImg.src = childrenList[this.index][j].src;
                    oA1.href = childrenList[this.index][j].url;
                    oA1.alt = childrenList[this.index][j].title;

                    oA2.href = childrenList[this.index][j].url;
                    oA2.className = 'title';
                    oA2.innerHTML = childrenList[this.index][j].title;
                    oP.innerHTML = childrenList[this.index][j].pic + '元';

                    oLi.appendChild(oDiv1);
                    oA1.appendChild(oImg);
                    oDiv2.appendChild(oA1);
                    oLi.appendChild(oDiv2);
                    oLi.appendChild(oA2);
                    oLi.appendChild(oP);


                    oUl.appendChild(oLi);

                }
                var oList = oItem.getElementsByTagName('li')[0];
                var oDiv = oList.getElementsByTagName('div')[1];
                oDiv.className = 'figure first';
            }
            aLi[i].onmouseout = function() {
                doMove(oItem, 'height', 5, 0, function() {
                    oItem.style.display = 'none';
                });
            }
            oItem.onmouseover = function() {
                doMove(oItem, 'height', 5, 230);
            }
            oItem.onmouseout = function() {
                doMove(oItem, 'height', 5, 0, function() {
                    oItem.style.display = 'none';
                });
            }
        }
    })();

    // 轮播图

    (function() {
        var oDiv = document.getElementById('CarouselFigure');
        var aDiv = oDiv.getElementsByTagName('div');
        var aImg = aDiv[0].getElementsByTagName('a');
        var aBtn = aDiv[0].getElementsByTagName('span');
        var oUl = aDiv[1].getElementsByTagName('ul')[0];
        var aA = oUl.getElementsByTagName('a');
        var timer = null;
        var html = '';
        for (var i = 0; i < aImg.length; i++) {
            html += '<li><a href="javascript:;"></a></li>';
        }
        oUl.innerHTML = html;

        var iNum = 0;
        var iNow = 3;
        go();

        function show() {
            clearInterval(timer);
            timer = setInterval(function() {
                doMove(aImg[iNum], 'opacity', 3, 0);

                iNum++;
                go();
            }, 3000);
        }

        show();

        oDiv.onmouseover = function() {
            clearInterval(timer);
        }

        oDiv.onmouseout = function() {
            show();
        }

        aBtn[1].onclick = function() {
            doMove(aImg[iNum], 'opacity', 3, 0);

            iNum++;
            go();
        }

        aBtn[0].onclick = function() {
            doMove(aImg[iNum], 'opacity', 3, 0);

            iNum--;
            go();
        }

        for (var i = 0; i < aA.length; i++) {
            aA[i].index = i;
            aA[i].onclick = function() {
                doMove(aImg[iNum], 'opacity', 3, 0);
                iNum = this.index;
                go();
            }
        }

        function go() {
            iNow++;
            if (iNum < 0) {
                iNum = aImg.length - 1;
            } else {
                iNum %= aImg.length;
            }
            for (var i = 0; i < aImg.length; i++) {
                aA[i].className = '';
            }
            aImg[iNum].style.zIndex = iNow;
            doMove(aImg[iNum], 'opacity', 3, 100);
            aA[iNum].className = 'active';
        }
    })();

    /*导航详细子类容*/
    (function() {
        var oOl = document.getElementById('nav_list');
        var aList = oOl.getElementsByTagName('li');

        var oDiv = document.getElementById('children-list');

        var len = aList.length;
        var html = '';
        for (var i = 0; i < len; i++) {
            aList[i].index = i;
            aList[i].onmouseover = function() {
                oDiv.innerHTML = '';
                oDiv.style.display = 'block';
                html = '';
                for (var i = 0; i < childrenNavList[this.index].length; i++) {
                    if (childrenNavList[this.index][i].str) {
                        html += '<li><a class="left" href="javascript:;" style="background: url(' + childrenNavList[this.index][i].src + ') no-repeat">' + childrenNavList[this.index][i].Key + '</a><a class="right" href="javascript:;">' + childrenNavList[this.index][i].str + '</a></li>';
                    } else {
                        html += '<li><a class="left" href="javascript:;" style="background: url(' + childrenNavList[this.index][i].src + ') no-repeat">' + childrenNavList[this.index][i].Key + '</a></li>'
                    }
                }
                oDiv.innerHTML = html;
                var aLi = oDiv.getElementsByTagName('li');
                for (var i = 0; i < aLi.length; i++) {
                    aLi[i].style.top = 20 + i % 6 * 76 + 'px';
                    if (Math.ceil(aLi.length / 6) == 4) {
                        aLi[i].style.width = 230 + 'px';
                        aLi[i].style.left = 20 + Math.floor(i / 6) * 235 + 'px';
                    } else {
                        aLi[i].style.left = 20 + Math.floor(i / 6) * 264 + 'px';
                        aLi[i].style.width = 235 + 'px';
                    }
                }

                if (Math.ceil(aLi.length / 6) == 4) {
                    oDiv.style.width = '992px';
                } else {
                    oDiv.style.width = 5 + Math.ceil(aLi.length / 6) * 264 + 'px';
                }

            }

            aList[i].onmouseout = function() {
                oDiv.style.display = 'none';
            }
        }
        oDiv.onmouseover = function() {
            oDiv.style.display = 'block';
        }
        oDiv.onmouseout = function() {
            oDiv.style.display = 'none';
        }
    })();

		//小米明星单品
		(function(){
			var arr = ['#ffac13','#83c44e','#2196f3','#e53935','#00c0a5'];
			var oMore = document.getElementById('more');
            var aBtn = oMore.getElementsByTagName('a');
        	
            var oDiv = document.getElementById('box-bd');
            var oUl = oDiv.getElementsByTagName('ul')[0];
            var len = moveList.length;
           	var html = '';
           	var timer = null;
           	var onOff = true;
            for(var i=0; i<len; i++){
        		html += '<li><a href="'+moveList[i].href+'"><img src="'+moveList[i].src+'" alt="'+moveList[i].title+'"></a><h3><a href="'+moveList[i].href+'">'+moveList[i].title+'</a></h3><p>'+moveList[i].str+'</p><span>'+moveList[i].Price+'元</span></li>';
				}        	
        	oUl.innerHTML = html;
        	var aLi = oUl.getElementsByTagName('li');
        	for(var i=0; i<len; i++){
        		aLi[i].style.borderColor = arr[i%arr.length];
        	}
        	aBtn[1].onclick = function(){
        		clearInterval(timer);
        		onOff = true;
        		move();
        		show();
        	}
        	aBtn[0].onclick = function(){
        		clearInterval(timer);
        		onOff = false;
        		move();
        		show();
        	}
        	function show(){
        		timer = setInterval(function(){
	    			onOff = !onOff;
	    			move();
	        	},5000);
        	}
    		show();
        	function move(){
        		if(onOff){
        			aBtn[1].style.cursor = 'default';
	        		aBtn[0].style.cursor = 'pointer';
	        		removeClass(aBtn[1],'active');
	        		addClass(aBtn[0],'active');
		        	doMove(oUl,'marginLeft',14,-1226);
        		}
        		else{
        			aBtn[0].style.cursor = 'default';
	        		aBtn[1].style.cursor = 'pointer';
	        		removeClass(aBtn[0],'active');
	        		addClass(aBtn[1],'active');
        			doMove(oUl,'marginLeft',14,0);
        		}
        	}
        })();












}


// 搜索框关键词跨域函数
function resultList(data) {
    var oDiv = document.getElementById('key_word_list');
    var oUl = oDiv.getElementsByTagName('ul')[0];
    var html = '';
    if (data.length) {
        oDiv.style.display = 'block';
        for (var i = 0; i < data.length; i++) {
            html += '<li><a href="http://search.mi.com/search_' + decodeURI(data[i].Key) + '"><strong>' + decodeURI(data[i].Key) + '</strong><span>约有' + decodeURI(data[i].Rst) + '件</sapn></a></li>';
        }
        oUl.innerHTML = html;
    } else {
        oDiv.style.display = 'none';
    }
}
