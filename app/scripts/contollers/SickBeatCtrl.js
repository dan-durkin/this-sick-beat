(function(){
	function SickBeatCtrl (BeatPlayer){
		this.title = "This Sick Beat";
		this.beatPlayer = BeatPlayer;
	}
	
	angular
		.module('thissickbeat')
		.controller('SickBeatCtrl', ['BeatPlayer', SickBeatCtrl]);
})();