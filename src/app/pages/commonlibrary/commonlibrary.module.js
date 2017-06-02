/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.commonlibrary',
  [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('commonlibrary', {
          url: '/commonlibrary',
          template : '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'Common Library',
          sidebarMeta: {
            icon: 'ion-compose',
            order: 250,
          },
        })
        .state('commonlibrary.eventgroups', {
          url: '/eventgroups',
          templateUrl: 'app/pages/commonlibrary/eventgroups/eventgroups.html',
          controller: 'eventGroupsCtrl',
          title: 'Event Groups',
          sidebarMeta: {
            icon: 'ion-ios-location-outline',
            order: 500,
          },
        })
        .state('commonlibrary.events', {
          url: '/events',
           templateUrl: 'app/pages/commonlibrary/events/events.html',
          controller: 'eventsCtrl',
          title: 'Events',
          sidebarMeta: {
            order: 0,
          },
        })

  }

})();
