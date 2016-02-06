(function(){
	function BeatPlayer(SickBeats) {
		var BeatPlayer = {};
		var currentBuzzObject = null;
		var registeredScopes = [];
		
		var setBeat = function (beat) {
			if(currentBuzzObject){
				stopBeat(BeatPlayer.currentBeat);
			}
			
			currentBuzzObject = new buzz.sound(beat.audioURL,{
				formats: ['mp3'],
				preload: true
			});
			
			currentBuzzObject.setTime(beat.start);
			currentBuzzObject.bind('timeupdate', function(){
				for(var i=0;i<registeredScopes.length;i++){
					registeredScopes[i].$apply(function(){
						var time = currentBuzzObject.getTime();
						time *= 1000;
						var end = beat.end * 1000;
						if(time >= end - 250){
							fadeBeat(beat);
							currentBuzzObject.unbind('timeupdate');
						}
					});
				}
			})
						
			BeatPlayer.setVolume(50);
			playBeat(beat);
		}
		
		var playBeat = function(beat){
			currentBuzzObject.play();
			BeatPlayer.currentBeat = beat;
		};
		
		var fadeBeat = function (beat){
			currentBuzzObject.fadeOut(250, function(){
				stopBeat(beat);
			});
		}
		
		var stopBeat = function (beat) {
			currentBuzzObject.stop();
			currentBuzzObject = null;
			BeatPlayer.currentBeat = null;
		}
		
		BeatPlayer.beats = SickBeats.getBeats();
		BeatPlayer.currentBeat = null;
		BeatPlayer.currentVolume = null;
		
		BeatPlayer.setVolume = function(newVolume){
			if(currentBuzzObject){
				newVolume = Math.floor(newVolume, 100);
				newVolume = Math.ceil(newVolume, 0);
				currentBuzzObject.setVolume(newVolume);
				BeatPlayer.currentVolume = newVolume;
			}	
		};
		
		BeatPlayer.play = function (beat){
			//beat = beat || BeatPlayer.currentBeat;
			if(BeatPlayer.currentBeat){
				stopBeat(BeatPlayer.currentBeat);
				setBeat(beat);
			}
			else{
				setBeat(beat);
			}
		};
		
		BeatPlayer.register = function (scope) {
			registeredScopes.push(scope);
		};
		
		return BeatPlayer;
	}
	
	angular
		.module('thissickbeat')
		.factory('BeatPlayer', ['SickBeats', BeatPlayer]);
})();