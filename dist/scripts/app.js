(function() {
    function config($stateProvider, $locationProvider) {
       $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('main', {
                url: '/',
                controller: 'SickBeatCtrl as sickbeat',
                templateUrl: '/templates/thissickbeat.html'
            });
    };

    angular
        .module('thissickbeat', ['ui.router'])
        .config(config);
})();