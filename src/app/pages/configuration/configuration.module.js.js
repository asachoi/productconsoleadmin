/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.configuration', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('configuration', {
          url: '/configuration',
          template : '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'System Config',
          sidebarMeta: {
            icon: 'ion-compose',
            order: 250,
          },
        })
        .state('configuration.label', {
          url: '/cfglabel',
          //templateUrl: 'app/pages/maps/maps.html',
          abstract: true,
          title: 'Label',
          sidebarMeta: {
            icon: 'ion-ios-location-outline',
            order: 500,
          },
        })

  }

})();
