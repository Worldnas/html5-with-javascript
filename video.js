var myvideo=document.getElementById("video");
var control=document.getElementById("pp");
var mytime=document.getElementById("time");
control.addEventListener("click",playvideo);
mytime.addEventListener("click",show)

function playvideo(e)
{
	var x=setInterval(function(){document.getElementById("person").innerHTML=Math.floor(myvideo.currentTime/myvideo.duration*100)+"%",1000}
)
	if(myvideo.paused)
		{
			myvideo.play()
		}
	else
		{
			myvideo.pause()
		}
						   

};

function show(){alert(myvideo.currentTime)}
		