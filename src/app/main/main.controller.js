(function() {
    'use strict';

    angular
        .module('sheaker')
        .controller('MainController', MainController);

    function MainController($scope) {
        $scope.intervalCarousel = 3500;
        $scope.noWrapSlides = false;
        $scope.slides = [
            {
                image: '/assets/images/lockupscreen1.png',
                text1: 'Rogatus ad ultimum admissusque in consistorium ambage'
            },
            {
                image: '/assets/images/lockupscreen2.png',
                text2: 'Rogatus ad ultimum admissusque in consistorium ambage'
            },
            {
                image: '/assets/images/lockupscreen3.png',
                text3: 'Rogatus ad ultimum admissusque in consistorium ambage'
            }
        ];
    }
})();
