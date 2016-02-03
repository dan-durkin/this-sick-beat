(function(){
	function SickBeats () {
		var SickBeats = {};
		
		var beats = [
			{name: 'Style', audioURL:'/assets/beats/style', start:0, end: 50},
			{name: 'Clean', audioURL: '/assets/beats/clean', start: 0, end: 34},
			{name: 'This. Sick. Beat.', audioURL:'/assets/beats/shake_it_off', start: 147.8, end: 150.5},
			{name: 'I could dance to this beat... forever more', audioURL:'/assets/beats/welcome_to_ny', start:61, end:69},
			{name: 'Nightmare dressed like a daydream', audioURL:'/assets/beats/blank_space', start:128, end:130.3}
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