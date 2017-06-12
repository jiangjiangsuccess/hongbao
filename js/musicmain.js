var audio = document.createElement("audio");
audio.src = "music/yinyue.mp3";
audio.loop = true;
audio.load();
audio.play();

//默认自动播放音乐
document.addEventListener("DOMContentLoaded", function () {
	function audioAutoPlay() {
		audio.play();
		document.addEventListener("WeixinJSBridgeReady", function () {
			audio.play();
		}, false);
	}
	audioAutoPlay();
});
//音乐
var $musicIsPlay = true; //音乐是否播放
$("#sectionMusic").show();
//音乐控制
function SwitchMusic(){
	if ($musicIsPlay == false) {
		Continue();
	}else {
		Pause();
	}
}
//播放事件
function Play() {
	$("#imgMusicBtn").attr("src", "images/soundon.png");
	$musicIsPlay = true;
	audio.play();
}
//暂停事件
function Pause() {
	$("#PauseTime").val(audio.currentTime);
	$("#imgMusicBtn").attr("src", "images/soundoff.png");
	$musicIsPlay = false;
	audio.pause();
}
//继续播放事件
function Continue() {
	audio.startTime = $("#PauseTime").val();
	$("#imgMusicBtn").attr("src", "images/soundon.png");
	$musicIsPlay = true;
	audio.play();
}