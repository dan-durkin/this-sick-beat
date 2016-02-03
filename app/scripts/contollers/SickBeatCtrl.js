(function(){
	function SickBeatCtrl (BeatPlayer, $scope){
		this.title = "This Sick Beat";
		this.beatPlayer = BeatPlayer;
		
		this.beatPlayer.register($scope);
	}
	
	angular
		.module('thissickbeat')
		.controller('SickBeatCtrl', ['BeatPlayer', '$scope', SickBeatCtrl]);
})();