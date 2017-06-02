/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';
  angular.module('BlurAdmin.pages', [
    'ui.router',
    'BlurAdmin.pages.dashboard',
    'BlurAdmin.pages.commonlibrary',
    'BlurAdmin.pages.productsetup',
    'BlurAdmin.pages.configuration',
    //'BlurAdmin.pages.ui',
    //'BlurAdmin.pages.form',
  ])
  .config(routeConfig);


  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/dashboard');

/*
    baSidebarServiceProvider.addStaticItem({
      title: 'Product Setup',
      icon: 'ion-ios-more',
      subMenu: [
      {
        title: 'Mapping',
        disabled: true
      },
      {
        title: 'Calculation Setup',
        disabled: true
      },
      {
        title: 'UI setup',
        disabled: true
      },
      {
        title: 'Printout setup',
      },
            {
              title: 'Configuration',
            },
      ]
    });
    baSidebarServiceProvider.addStaticItem({
      title: 'Common Library',
      icon: 'ion-document',
      subMenu: [{
        title: 'Calculation',
        subMenu: [
        {
          title: 'Event group',
          disabled: true
        },
        {
          title: 'Event formula',
          disabled: true
        },
        {
          title: 'Premium calc.',
          disabled: true
        },
        {
          title: 'Validation',
          disabled: true
        },

        ]
      }, {
        title: 'UI Component',
        fixedHref: 'reg.html',
        disabled: true
      }, {
        title: 'Printout Component',
        disabled: true
      }]
    });
*/
  }

})();
