window.onload = function() {

    // 购物车下拉
    (function() {
        var oShop = document.getElementById('shopping_cart');
        var oDiv = oShop.getElementsByTagName('div')[0];
        oShop.onmouseover = function() {
            timeMove(oDiv, {'height':98}, 200,'easeOut');
        }
        oShop.onmouseout = function() {
            timeMove(oDiv, {'height':0}, 200,'easeOut');
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

                oItem.style.display = 'block';
                 timeMove(oItem, {'height':230},300,'easeOut');

                var oList = oItem.getElementsByTagName('li')[0];
                var oDiv = oList.getElementsByTagName('div')[1];
                oDiv.className = 'figure first';
            }
            aLi[i].onmouseout = function() {
                timeMove(oItem, {'height':0},300,'easeOut', function() {
                    oItem.style.display = 'none';
                });
            }
            oItem.onmouseover = function() {
                timeMove(oItem, {'height':230},300,'easeOut');
            }
            oItem.onmouseout = function() {
                timeMove(oItem, {'height':0},300,'easeOut', function() {
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
                doMove(aImg[iNum],'opacity',3,0);

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
            if(iNow>1000){
            	for (var i = 0; i < aImg.length; i++){
            		aImg[i].style.zIndex = 2;
            	}
            	iNow = 3;
            }
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

		//小米明星单品/为你推荐
		(function(){
			var M1 = new Move('more1','box-bd1');
   			M1.init();
   			var M2 = new Move('more2','box-bd2');
   			M2.init();
        })();

        //搭配/周边/配件  选项卡
        (function(){
        	var T1 = new Tab('more3','box-bd3');
        	T1.init();
        	T1.comment();

        	var T2 = new Tab('more4','box-bd4');
        	T2.init();
        	T2.comment();

        	var T3 = new Tab('more5','box-bd5');
        	T3.init();
        	T3.comment();
        })();


        //内容
        (function(){
        	var Con1 = new Content('item-list1','page-list1','arrow1');
        	Con1.init();
        	Con1.arrow();

        	var Con2 = new Content('item-list2','page-list2','arrow2');
        	Con2.init();
        	Con2.arrow();

        	var Con3 = new Content('item-list3','page-list3','arrow3');
        	Con3.init();
        	Con3.arrow();

        	var Con4 = new Content('item-list4','page-list4','arrow4');
        	Con4.init();
        	Con4.arrow();
        })();

   //Select Region -->
        (function(){
        	var oBtn = document.getElementById('select');
			var oWindow = document.getElementById('modal');
			var oClose = document.getElementById('close');
			var oMask = document.getElementById('mask');
			var top = 0;
			oBtn.onclick = function(){
				oMask.style.display = 'block';
				oWindow.style.display = 'block';
				top = document.documentElement.clientHeight-oWindow.offsetHeight ;
				timeMove(oWindow,{'opacity':100,'top':Math.floor(top/4)},500,'linear');
				timeMove(oMask,{'opacity':50},500,'linear');
			}
			oClose.onclick = function(){
				timeMove(oWindow,{'opacity':0,'top':-oWindow.offsetHeight},500,'linear',function(){
					oWindow.style.display = 'none';
				});
				timeMove(oMask,{'opacity':0},500,'linear',function(){
					oMask.style.display = 'none';
				});
			}

			window.onresize = function(){
				oWindow.style.top = Math.floor((document.documentElement.clientHeight-oWindow.offsetHeight)/5)+ 'px';
			}

        })();

        (function(){
        	var oVContentList = document.getElementById('content_list');
        	var aList = oVContentList.getElementsByTagName('div');
        	var oText = oVContentList.getElementsByTagName('h3');


        	var oVideoWindow = document.getElementById('modalVideo');
        	var oHeader = document.getElementById('modal_hd2');
        	var oTitle = oHeader.getElementsByTagName('strong')[0];
        	var oClose = oHeader.getElementsByTagName('i')[0];
        	var oVideo = document.getElementById('video');
        	var oMask = document.getElementById('mask');

        	var oPlay = document.getElementById('play');
        	var oTimers = document.getElementById('timers');
        	var aSpan = oTimers.getElementsByTagName('span');

        	var oProgress = document.getElementById('progress_bar');
        	var oDiv = oProgress.getElementsByTagName('div')[0];
        	var oBuoy = oProgress.getElementsByTagName('a')[0];

        	var oVolume = document.getElementById('volume_bar');
        	var oDiv1 = oVolume.getElementsByTagName('div')[0];
        	var oVolumeBuoy = oVolume.getElementsByTagName('a')[0];

        	var oMuteBtn = document.getElementById('muteBtn');
        	var oFull = document.getElementById('full_screen');

        	var oModalBd = document.getElementById('modal_bd');
        	var oControls = document.getElementById('controls');
        	var beforeNum = 0;
        	for(var i=0; i<aList.length; i++){
        		aList[i].index = i;
        		aList[i].onclick=function(){
        			oVideoWindow.style.display = 'block';
        			oMask.style.display = 'block';

        			
        			oVolumeBuoy.style.left = oVolume.offsetWidth*oVideo.volume + 'px';
        			oDiv1.style.width = oVolume.offsetWidth*oVideo.volume + 'px';

        			var top = (document.documentElement.clientHeight-oVideoWindow.offsetHeight)/2;
        			var oA = oText[this.index].getElementsByTagName('a')[0];
        			oTitle.innerHTML = oA.innerHTML;
        			oVideo.src = oA.getAttribute('_src');
        			
        			timeMove(oVideoWindow,{'opacity':100,'top':top},500,'linear');
        			timeMove(oMask,{'opacity':50},500,'linear');
        			beforeNum = oVideo.volume;
        		}
        	}


        	oModalBd.onmouseover = function(){
        		clearInterval(oModalBd.timer);
        		timeMove(oControls,{'bottom':0},300,'linear');
        	}
        	oModalBd.onmouseout = function(){
        		oModalBd.timer=setTimeout(function(){
        			timeMove(oControls,{'bottom':-46},300,'linear');
        		},5000);
        	}
        	
        	oClose.onclick = function(){
        		oVideo.pause();
        		oPlay.innerHTML = '&#xe778;';
        		oBuoy.style.display = 'none';
        		timeMove(oVideoWindow,{'opacity':0,'top':-oVideoWindow.offsetHeight},500,'linear',function(){
        			oVideoWindow.style.display = 'none';
        		});
        		timeMove(oMask,{'opacity':0},500,'linear',function(){
        			oMask.style.display = 'none';
        		});

        	}
        	window.onresize = function(){
					oVideoWindow.style.top = Math.floor((document.documentElement.clientHeight-oVideoWindow.offsetHeight)/2)+ 'px';
				}
       
        	
        	var timer = null;
        	
        	oPlay.onclick = function(){
        		if(oVideo.paused){
        			oBuoy.style.display = 'block';
        			oVideo.play();
        			this.innerHTML = '&#xe640;';
        			nowTime();
        			timer = setInterval(nowTime,1000);
        			aSpan[2].innerHTML = changeTime(oVideo.duration);

        		}
        		else{
        			oVideo.pause();
        			this.innerHTML = '&#xe778;';
        			clearInterval(timer);
        		}
        	}
        	
        	oProgress.onclick = function(ev){
        		var ev = ev || window.event;
        		var disX = ev.clientX - oVideoWindow.offsetLeft;
        		oDiv.style.width = disX + 'px';
        		oBuoy.style.left = disX-12 + 'px';
        		oVideo.currentTime =disX/oProgress.offsetWidth * oVideo.duration;
        		aSpan[0].innerHTML = changeTime(disX/oProgress.offsetWidth * oVideo.duration);
        	}

        	oBuoy.onmousedown = function(ev){
        		var ev = ev || window.event;
        		var disX = ev.clientX - oBuoy.offsetLeft;

        		document.onmousemove=function(ev){
        			var ev = ev || window.event;
        			var L = ev.clientX - disX;
        			if(L<0){
        				L=0;
        			}
        			else if(L>oProgress.offsetWidth-oBuoy.offsetWidth){
        				L=oProgress.offsetWidth-oBuoy.offsetWidth;
        			}
        			oBuoy.style.left = L + 'px';
        			oDiv.style.width = L + 'px';
        			oVideo.currentTime =L/oProgress.offsetWidth * oVideo.duration;
        			aSpan[0].innerHTML = changeTime(L/oProgress.offsetWidth * oVideo.duration);
        		}
        		document.onmouseup = function(){
        			document.onmousemove= null;
        		}
        		return false;
        	}

        	
        	oMuteBtn.onclick = function(){
        		if(oVideo.volume){
        			oVideo.volume = 0;
        			oVolumeBuoy.style.left = 0;
        			oDiv1.style.width = 0;
        			oMuteBtn.innerHTML = '&#xe621;';
        		}
        		else{
        			oVideo.volume = beforeNum;
        			oVolumeBuoy.style.left = oVolume.offsetWidth*beforeNum + 'px';
        			oDiv1.style.width = oVolume.offsetWidth*beforeNum + 'px';
        			oMuteBtn.innerHTML = '&#xe622;';
        		}
        	}

        	oVolumeBuoy.onmousedown = function(ev){
        		var ev = ev || window.event;
        		var disX = ev.clientX - oVolumeBuoy.offsetLeft;

        		document.onmousemove=function(ev){
        			var ev = ev || window.event;
        			var L = ev.clientX - disX;
        			if(L<0){
        				L=0;
        				oMuteBtn.innerHTML = '&#xe621;';
        			}
        			else if(L>0){
        				oMuteBtn.innerHTML = '&#xe622;';
        			}
        			else if(L>oVolume.offsetWidth-oVolumeBuoy.offsetWidth){
        				L=oVolume.offsetWidth-oVolumeBuoy.offsetWidth;
        			}
        			oVolumeBuoy.style.left = L + 'px';
        			oDiv1.style.width = L + 'px';
        			oVideo.volume =L/oVolume.offsetWidth * 1;
        			beforeNum = oVideo.volume;
        		}
        		document.onmouseup = function(){
        			document.onmousemove= null;
        		}
        		return false;
        	}


        	
        	oFull.onclick = function(){
				launchFullScreen(oVideo);	
				fullScreen()
        	}

        	function fullScreen() {
 			
			  var el = document.documentElement;
			 
			  var rfs = el.requestFullScreen || el.webkitRequestFullScreen || 
			 
			      el.mozRequestFullScreen || el.msRequestFullScreen;
			 
			  if(typeof rfs != "undefined" && rfs) {
			 
			    rfs.call(el);
			 
			  } 
			  else if(typeof window.ActiveXObject != "undefined") {
			 
			    //for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏
			 
			    var wscript = new ActiveXObject("WScript.Shell");
			 
			    if(wscript != null) {
			 
			        wscript.SendKeys("{F11}");
			 
			    }
			 
			  }
			}
        	function launchFullScreen(element) { 
				if(element.requestFullscreen) { 
					element.requestFullscreen(); 
				} 
				else if(element.mozRequestFullScreen) { 
					element.mozRequestFullScreen(); 
				} 
				else if(element.webkitRequestFullscreen) { 
					element.webkitRequestFullscreen(); 
				} 
				else if(element.msRequestFullscreen) { 
					element.msRequestFullscreen(); 
				} 
			} 


        	function nowTime(){
        		aSpan[0].innerHTML = changeTime(oVideo.currentTime);
        		var scale = oVideo.currentTime/oVideo.duration;
        		oDiv.style.width = 880*scale + 'px';
        		oBuoy.style.left = 880*scale + 'px';
        		if(oVideo.ended){
        			clearInterval(timer);
        			oBuoy.style.left = 0;
        			oPlay.innerHTML = '&#xe778;';
        		}
        	}
        	function changeTime(iNum){
        		iNum = parseInt(iNum);
        		iM = toZero(Math.floor(iNum%3600/60));
        		iS = toZero(Math.floor(iNum%60));

        		return iM + ':' + iS;
        	}

        	function toZero(num){
        		if(num<=9){
        			return '0'+num;
        		}
        		else{
        			return num;
        		}
        	}
        })();
	        
}



//内容
function Content(id1,id2,id3){
	this.oItem = document.getElementById(id1);

	this.oPage = document.getElementById(id2);
	this.aBtn = this.oPage.getElementsByTagName('li');

	this.oArrow = document.getElementById(id3);
	this.aGuide = this.oArrow.getElementsByTagName('a');
	this.iNow = 0;
}

Content.prototype.init = function(){
	var This = this;
	for(var i=0; i<this.aBtn.length; i++){
		this.aBtn[i].index = i;

		this.aBtn[i].onclick = function(){
			This.iNow = this.index;
			This.move();
		}
	}
}

Content.prototype.arrow = function(){
	var This = this;
	this.aGuide[0].onclick = function(){
		This.iNow--;
		if(This.iNow < 0){
			This.iNow = 0;
		}

		This.move();
	}
	this.aGuide[1].onclick = function(){
		This.iNow++;
		
		if(This.iNow>This.aBtn.length-1){
			This.iNow = This.aBtn.length-1;
		}

		This.move();
	}
}

Content.prototype.move = function(){
	for(var i=0; i<this.aBtn.length; i++){
		removeClass(this.aBtn[i],'active');
	}
	addClass(this.aBtn[this.iNow],'active');
	timeMove(this.oItem,{'marginLeft':-296*this.iNow},400,'easeOut');
}
// 小米明星单品/为你推荐 

function Move(id1,id2){
	this.arr = ['#ffac13','#83c44e','#2196f3','#e53935','#00c0a5'];
	this.oMore = document.getElementById(id1);
    this.aBtn = this.oMore.getElementsByTagName('a');
	
    this.oDiv = document.getElementById(id2);
    this.oUl = this.oDiv.getElementsByTagName('ul')[0];
    this.len = moveList.length;
   	this.html = '';
   	this.timer = null;
   	this.onOff = true;
    for(var i=0; i<this.len; i++){
		this.html += '<li><a href="'+moveList[i].href+'" target="_blank"><img src="'+moveList[i].src+'" alt="'+moveList[i].title+'"></a><h3><a href="'+moveList[i].href+'" target="_blank">'+moveList[i].title+'</a></h3><p>'+moveList[i].str+'</p><span>'+moveList[i].Price+'元</span></li>';
		}        	
	this.oUl.innerHTML = this.html;
	this.aLi = this.oUl.getElementsByTagName('li');
	for(var i=0; i<this.len; i++){
		this.aLi[i].style.borderColor = this.arr[i%5];
	}
}
Move.prototype.init = function(){
	this.click();
	this.show();
}

Move.prototype.click = function(){
	var This = this;
	this.aBtn[1].onclick = function(){
		clearInterval(This.timer);
		This.onOff = true;
		This.move();
		This.show();
	}
	this.aBtn[0].onclick = function(){
		clearInterval(This.timer);
		This.onOff = false;
		This.move();
		This.show();
	}
}

Move.prototype.show = function(){
	var This = this;
		this.timer = setInterval(function(){
			This.onOff = !This.onOff;
			This.move();
		},10000);
	}
Move.prototype.move = function(){
	if(this.onOff){
		this.aBtn[1].style.cursor = 'default';
		this.aBtn[0].style.cursor = 'pointer';
		removeClass(this.aBtn[1],'active');
		addClass(this.aBtn[0],'active');
    	doMove(this.oUl,'marginLeft',14,-1226);
	}
	else{
		this.aBtn[0].style.cursor = 'default';
		this.aBtn[1].style.cursor = 'pointer';
		removeClass(this.aBtn[0],'active');
		addClass(this.aBtn[1],'active');
		doMove(this.oUl,'marginLeft',14,0);
	}
}

//搭配/周边/配件  选项卡 
function Tab(id1,id2){
	this.oMore = document.getElementById(id1);
	this.aBtn = this.oMore.getElementsByTagName('a');
	this.oDiv = document.getElementById(id2);
	this.aList = this.oDiv.getElementsByTagName('ul');
	this.aLi = null;
}

Tab.prototype.init = function (){
	var This = this;
	for(var i=0; i<this.aBtn.length; i++){
		this.aBtn[i].index = i;
		this.aBtn[i].onmouseover = function(){
			for(var i=0; i<This.aBtn.length; i++){
				removeClass(This.aBtn[i],'active');
				This.aList[i].style.display = 'none';
			}
			addClass(this,'active');
			This.aList[this.index].style.display = 'block';

		}
	}
}

Tab.prototype.comment = function(){
	var oComment = null;
	for(var i=0; i<this.aList.length; i++){
		this.aLi = this.aList[i].getElementsByTagName('li');
		for(var j=0; j<this.aLi.length; j++){
			this.aLi[j].index = j;
			
			this.aLi[j].onmouseover = function(){
				oComment = this.getElementsByTagName('div')[0];
				if(oComment){
					doMove(oComment,'bottom',3,0);
				}
			}
			this.aLi[j].onmouseout = function(){
				oComment = this.getElementsByTagName('div')[0];
				if(oComment){
					doMove(oComment,'bottom',3,-73);
				}
			}
		}
	}
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
