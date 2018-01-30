(function () {
    'use strict';
    angular
        .module('app').component('linksSociais', {
            bindings: {
                link: '<',
                iconeOnly: '<'
            },
            templateUrl: 'app/components/share-link.component.html',
            // controller: linksSociais,
        });

    // linksSociais.$inject = ['$scope'];

    // function linksSociais($scope, dsComentario) {
    //     var $ctrl = this;
    // }
})();

