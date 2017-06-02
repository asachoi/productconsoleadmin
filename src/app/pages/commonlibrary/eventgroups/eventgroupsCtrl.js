(function () {
  'use strict';

  angular.module('BlurAdmin.pages.commonlibrary'
  )
  .controller('eventGroupsCtrl', eventGroupsCtrl);

  /** @ngInject */
  function eventGroupsCtrl($scope, $http, dataSvc) {
        var dragging = null;



        $scope.sortableOptions = {
            containment: '#sortable-container',
            allowDuplicates: true,
            longTouch: true,
        };

        $scope.sortableCloneOptions = {
            containment: '#sortable-container',
            clone: true,
            longTouch: true,
        };

        dataSvc.getEvents().then(function(data) {
            $scope.coreEvents = data.coreEvents
            $scope.palette = data.palette
        }
        )

        dataSvc.getEventGroups().then(function(data) {
            $scope.coreEventGroups = data.coreEventGroups
            $scope.groups = data.groups
        }
        )

        $scope.productSelected = function(obj) {
           this.self = [];
           console.debug(obj.value[0].attribute.attrValue)
           eval(obj.value[0].attribute.attrValue);
           $scope.self = this.self;
           $scope.currProduct = obj

           var events = obj.value[1].attribute.attrValue.match(/\event.*?\.create()/g)

           $scope.dropped = []// events.forEach(


           events.forEach(function(x) {
                $scope.dropped.push(
                    {name: x.replace('.create', '')}
                )
            }
           )
        }

        $scope.removeEvent = function(obj) {


            $scope.dropped = $scope.dropped.filter(function(item) {
                return item.name != obj.name;
            });
        }


  }
    var CatalogConstants = {
        PRODUCT_TYPE: {
            'UVLIFE':1
        }
    }
})();


