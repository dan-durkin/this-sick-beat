(function(){
	function BeatPlayer(SickBeats) {
		var BeatPlayer = {};
		var currentBuzzObject = null;
	
		var setBeat = function (beat) {
			if(currentBuzzObject){
				stopBeat(BeatPlayer.currentBeat);
			}
			
			currentBuzzObject = new buzz.sound(beat.audioURL,{
				formats: ['mp3'],
				preload: true
			});
			
			BeatPlayer.currentBeat = beat;
			BeatPlayer.setVolume(50);
			playBeat(beat);
		}
		
		var playBeat = function(beat){
			currentBuzzObject.play();
			BeatPlayer.currentBeat = beat;
		};
		
		var stopBeat = function (beat) {
			currentBuzzObject.stop();
			currentBuzzObject = null;
			BeatPlayer.currentBeat = null;
		}
		
		BeatPlayer.setVolume = function(newVolume){
			if(currentBuzzObject){
				newVolume = Math.floor(newVolume, 100);
				newVolume = Math.ceil(newVolume, 0);
				currentBuzzObject.setVolume(newVolume);
				BeatPlayer.currentVolume = newVolume;
			}	
		};
		
		BeatPlayer.play = function (beat){
			beat = beat || BeatPlayer.currentSong;
			if(BeatPlayer.currentBeat !== beat && BeatPlayer.currentBeat){
				stopBeat(BeatPlayer.currentBeat);
				setBeat(beat);
			}
			else{
				setBeat(beat);
			}
		};
		
		BeatPlayer.beats = SickBeats.getBeats();
		BeatPlayer.currentBeat = null;
		BeatPlayer.currentVolume = null;
		
		return BeatPlayer;
	}
	
	angular
		.module('thissickbeat')
		.factory('BeatPlayer', ['SickBeats', BeatPlayer]);
})();