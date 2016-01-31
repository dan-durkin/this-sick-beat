(function(){
	function SickBeats () {
		var SickBeats = {};
		
		var beats = [
			{name: 'Style', audioURL:'/assets/beats/style'},
			{name: 'Clean', audioURL: '/assets/beats/clean'}
		];
		
		SickBeats.getBeats = function (){
			return beats;
		}
		
		return SickBeats;
	}
	
	angular
		.module('thissickbeat')
		.factory('SickBeats', SickBeats);
})();