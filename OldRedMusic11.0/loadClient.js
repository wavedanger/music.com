window.onload=function(){
  var curIndex = 0;
      imgArr = getElementsByClassName("imgList")[0].getElementsByTagName("li");
      imgLen = imgArr.length;
      infoArr = getElementsByClassName("infoList")[0].getElementsByTagName("li");
      indexArr = getElementsByClassName("indexList")[0].getElementsByTagName("li"); 
  var autoChange = setInterval(function(){ 
    if(curIndex < imgLen -1){ 
      curIndex ++; 
    }else{ 
      curIndex = 0;
    }
    //调用变换处理函数
    changeTo(curIndex); 
  },2500);
  //调用添加事件处理
  addEvent();
 
  //给右下角的图片index添加事件处理
 function addEvent(){
  for(var i=0;i<imgLen;i++){ 
    //闭包防止作用域内活动对象item的影响
    (function(_i){ 
    //鼠标滑过则清除定时器，并作变换处理
    indexArr[_i].onmouseover = function(){ 
      clearTimeout(autoChange);
      changeTo(_i);
      curIndex = _i;
    };
    //鼠标滑出则重置定时器处理
    indexArr[_i].onmouseout = function(){ 
      autoChange = setInterval(function(){ 
      if(curIndex < imgLen -1){ 
        curIndex ++;
      }else{ 
        curIndex = 0;
      }
    //调用变换处理函数
      changeTo(curIndex); 
    },2500);
    };
     })(i);
  }
}
  //变换处理函数
  function changeTo(num){ 
    var curImg = getElementsByClassName("imgOn")[0];
    fadeOut(curImg); //淡出当前 image
    curImg.className="";
    imgArr[num].className="imgOn";
    fadeIn(imgArr[num]); //淡入目标 image
    var curInfo = getElementsByClassName("infoOn")[0];
   curInfo.className="";
   infoArr[num].className="infoOn";
    
    var _curIndex = getElementsByClassName("indexOn")[0];
    _curIndex.className="";
    indexArr[num].className="indexOn";
  }
 
    //设置透明度
  function setOpacity(elem,level){ 
    if(elem.filters){ 
      elem.style.filter = "alpha(opacity="+level+")";
    }else{ 
      elem.style.opacity = level / 100;
    }
  }
 
  //淡入处理函数
  function fadeIn(elem){ 
    setOpacity(elem,0); //初始全透明
    for(var i = 0;i<=20;i++){ //透明度改变 20 * 5 = 100
      (function(){ 
        var level = i * 5;  //透明度每次变化值
        setTimeout(function(){ 
          setOpacity(elem, level)
        },i*25); //i * 25 即为每次改变透明度的时间间隔，自行设定
      })(i);     //每次循环变化一次
    }
  }
 
    //淡出处理函数
  function fadeOut(elem){ 
    for(var i = 0;i<=20;i++){ //透明度改变 20 * 5 = 100
      (function(){ 
        var level = 100 - i * 5; //透明度每次变化值
        setTimeout(function(){ 
          setOpacity(elem, level)
        },i*25); //i * 25 即为每次改变透明度的时间间隔，自行设定
      })(i);     //每次循环变化一次
    }
  }
 
  //通过class获取节点
  function getElementsByClassName(className){ 
    var classArr = [];
    var tags = document.getElementsByTagName('*');
    for(var item in tags){ 
      if(tags[item].nodeType == 1){ 
        if(tags[item].getAttribute('class') == className){ 
          classArr.push(tags[item]);
        }
      }
    }
    return classArr; //返回
  }
}