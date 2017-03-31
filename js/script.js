window.onload=function(){
	console.log("网页可见区宽:"+document.body.clientWidth);
	console.log("网页可见区高:"+document.body.clientHeight);

	console.log("网页可见区宽（包过边线的宽）:"+document.body.offsetWidth);
	console.log("网页可见区高（包过边线的高）:"+document.body.offsetHeight);

	console.log("网页正文全文宽:"+document.body.scrollWidth);
	console.log("网页正文全文高:"+document.body.scrollHeight);

	console.log("网页被卷起的宽:"+document.body.scrollTop);
	console.log("网页被卷起的左:"+document.body.scrollLeft);

	console.log("网页正文全文部分上:"+window.screenTop);
	console.log("网页正文全文部分左:"+window.screenLeft);

	console.log("屏幕分辨率的高:"+window.screen.height);
	console.log("屏幕分辨率的宽:"+window.screen.width);

	console.log("屏幕可用工作区的高:"+window.screen.availHeight);
	console.log("屏幕可用工作区的宽:"+window.screen.availWidth);

	var music=document.getElementById("music");
	var audio=document.getElementsByTagName("audio")[0];
	var page1=document.getElementById("page1");
	var page2=document.getElementById("page2");
	var page3=document.getElementById("page3");

	//当音乐播放完停止的时候，自动停止光盘旋转
	audio.addEventListener("ended",function(event){
		music.setAttribute("class","");
	},false);

	//点击音乐图标，音乐暂停效果
	//click在移动端有300毫秒的延时，应该用touchstart，触摸事件，通过addeventListener
	/*music.onclick=function(){
		if(audio.paused){
			audio.play();
			//this.setAttribute("class","music_play");
			//这样不太好，希望回到原始的状态；
			//this.style.webkitanimationPlayState="running";这样iPhone6也支持
			this.style.animationPlayState="running";
		}else{
			audio.pause();
			//this.setAttribute("class","");
			this.style.animationPlayState="paused";
		}
	};*/
	music.addEventListener("touchstart",function(){
		if(audio.paused){
			audio.play();
			//this.setAttribute("class","music_play");
			//这样不太好，希望回到原始的状态；
			//this.style.webkitanimationPlayState="running";这样iPhone6也支持
			this.style.animationPlayState="running";
		}else{
			audio.pause();
			//this.setAttribute("class","");
			this.style.animationPlayState="paused";
		}
	});
	//显示隐藏
	page1.addEventListener("touchstart",function(event){
		page1.style.display="none";
		page2.style.display="block";
		page3.style.display="block";
		page3.style.top="100%";

		setTimeout(function(){
			page2.setAttribute("class","page fadeOut");
			page3.setAttribute("class","page fadeIn");
		},5500);
	});
};
