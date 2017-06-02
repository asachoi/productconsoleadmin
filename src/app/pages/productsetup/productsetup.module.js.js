/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.productsetup', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('productsetup', {
          url: '/productsetup',
          template : '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'Product Setup',
          sidebarMeta: {
            icon: 'ion-compose',
            order: 250,
          },
        })
        .state('productsetup.mapping', {
          url: '/psmapping',
          //templateUrl: 'app/pages/maps/maps.html',
          abstract: true,
          title: 'Mapping',
          sidebarMeta: {
            icon: 'ion-ios-location-outline',
            order: 500,
          },
        })
        .state('productsetup.calculation', {
          url: '/pscalculation',
          //templateUrl: 'app/pages/maps/google-maps/google-maps.html',
          //controller: 'GmapPageCtrl',
          title: 'Calculation',
          sidebarMeta: {
            order: 0,
          },
        })
        .state('productsetup.configuration', {
          url: '/psconfiguration',
          //templateUrl: 'app/pages/maps/google-maps/google-maps.html',
          //controller: 'GmapPageCtrl',
          title: 'Configuration',
          sidebarMeta: {
            order: 0,
          },
        })
        .state('productsetup.formlayout', {
          url: '/psformlayout',
          //templateUrl: 'app/pages/maps/google-maps/google-maps.html',
          //controller: 'GmapPageCtrl',
          title: 'Form Layout',
          sidebarMeta: {
            order: 0,
          },
        })
        .state('productsetup.reportlayout', {
          url: '/psreportlayout',
          //templateUrl: 'app/pages/maps/google-maps/google-maps.html',
          //controller: 'GmapPageCtrl',
          title: 'Report Layout',
          sidebarMeta: {
            order: 0,
          },
        })


  }

})();
