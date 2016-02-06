(function(){
	function SickBeatCtrl (BeatPlayer, $scope){
		this.title = "This Sick Beat";
		this.beatPlayer = myBeatPlayer = BeatPlayer;
		myBeatPlayer.register($scope);
	}
	
	angular
		.module('thissickbeat')
		.controller('SickBeatCtrl', ['BeatPlayer', '$scope', SickBeatCtrl]);
})();