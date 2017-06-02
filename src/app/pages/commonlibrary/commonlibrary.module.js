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
            order: 0,
          },
        })
        .state('commonlibrary.eventgroups', {
          url: '/eventgroups',
          templateUrl: 'app/pages/commonlibrary/eventgroups/eventgroups.html',
          controller: 'eventGroupsCtrl',
          title: 'Event Groups',
          sidebarMeta: {
            icon: 'ion-ios-location-outline',
            order: 2,
          },
        })
        .state('commonlibrary.events', {
          url: '/events',
           templateUrl: 'app/pages/commonlibrary/events/events.html',
          controller: 'eventsCtrl',
          title: 'Events',
          sidebarMeta: {
            order: 1,
          },
        })
        .state('commonlibrary.premium', {
          url: '/premium',
          //templateUrl: 'app/pages/commonlibrary/premium/premium.html',
          //controller: 'premiumCtrl',
          abstract: true,
          title: 'Premium Calc.',
          sidebarMeta: {
            order: 3,
          },
        })
        .state('commonlibrary.ui', {
          url: '/clui',
          //templateUrl: 'app/pages/commonlibrary/premium/premium.html',
          //controller: 'premiumCtrl',
          abstract: true,
          title: 'Form component',
          sidebarMeta: {
            order: 4,
          },
        })
        .state('commonlibrary.report', {
          url: '/clreport',
          //templateUrl: 'app/pages/commonlibrary/premium/premium.html',
          //controller: 'premiumCtrl',
          abstract: true,
          title: 'Report component',
          sidebarMeta: {
            order: 5,
          },
        })

  }

})();
