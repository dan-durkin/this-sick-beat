var createBeatTile = function (beat) {
	var template = '<div class = "beatTile">' + '<p>' + beat.name + '</p>' + '</div>';
	var $beatTile = $(template);
	
	var clickHandler = function (){	
		if(currentBuzzObject){
			stopBeat();
		}
		else{
			currentBuzzObject = new buzz.sound(beat.audioURL,{
				formats: ['mp3'],
				preload: true
			});
			playBeat(beat);
		}
	};
	
	var onHover = function (){
		
	};
	
	var offHover = function () {
		
	};
	
	$beatTile.click(clickHandler);
	$beatTile.hover(onHover, offHover);
	
	return $beatTile;
}


var timeCheck = function (beat){
	if(currentBuzzObject){
		var time = currentBuzzObject.getTime();
		time *= 1000;
		var end = beat.end * 1000;
		if(time >= end - 250){
			fadeBeat(beat);
		}
	}
}

var playBeat = function(beat){
	currentBuzzObject.setTime(beat.start);
	currentBuzzObject.bind('timeupdate', timeCheck(beat));
	
	setVolume(50);
	currentBuzzObject.play();
};

var fadeBeat = function (){
	currentBuzzObject.fadeOut(250, function(){
		stopBeat();
	});
};

var stopBeat = function () {
	currentBuzzObject.unbind('timeupdate');
	currentBuzzObject.stop();
	currentBuzzObject = null;
};

var setVolume = function(newVolume){
	if(currentBuzzObject){
		newVolume = Math.floor(newVolume, 100);
		newVolume = Math.ceil(newVolume, 0);
		currentBuzzObject.setVolume(newVolume);
	}	
};
	
var beats = getBeats();
var currentBuzzObject = null;
var beatBuzzes = [];

var loadBeats = function () {
	var $beatsContainer = $('.tile-container');
	
	for(var i=0, len = beats.length;i<len;i++){
		var $tile = createBeatTile(beats[i]);
		$beatsContainer.append($tile);
	}
};

$(window).load(function (){
	loadBeats();
});