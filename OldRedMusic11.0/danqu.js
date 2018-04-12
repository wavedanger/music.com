window.onload=function(){
	var music=document.getElementById("musicPlayer");
	var audio=document.getElementById("baudio");
	audio.onmouseover=function(){
		music.style.display="block";
	}
	audio.onmouseout=function(){
		music.style.display="none";
	}
	loadStorage('msg');
}
function play(){
		 var music = document.getElementById("musicPlayer");
		 music.src="audios/丢火车乐队 - 晚安.mp3";
		 music.play();
		}

function show(){
	var s=document.getElementById("show");
	var h=document.getElementById("hide");
	var st=document.getElementById("songText");
	s.style.display="none";
	h.style.display="block";
	st.style.overflow="visible";
	st.style.height="100%";
}
function hide(){
	var s=document.getElementById("show");
	var h=document.getElementById("hide");
	var st=document.getElementById("songText");
	h.style.display="none";
	s.style.display="block";
	st.style.overflow="hidden";
	st.style.height="200px";
}
function saveStorage(id){
			var data=document.getElementById(id).value;
			var time=new Date().getTime();
			localStorage.setItem(time,data);
			alert("数据已保存！！！");
			loadStorage('msg');
		}
		function loadStorage(id){
			var result='<div>';
			for(var i=0;i<localStorage.length;i++){
				var key=localStorage.key(i);
				var value=localStorage.getItem(key);
				var date=new Date();
				date.setTime(key);
				var datestr=date.toLocaleString();
				result+='<div class="cDiv">'+'<img class="cUser" src="images/danqu_comment2.png" alt="" width="58px" height="64px"/>'+
				'<p class="cText">'+value+'</p>'+'<span class="cDate">'+datestr+'</span>'+
				'<img class="cZan" src="images/danqu_good.png" alt="" width="18px" height="20px"/>'+'</div>';
			}
			result+='</div>';
			var target=document.getElementById(id);
			target.innerHTML=result;
		}