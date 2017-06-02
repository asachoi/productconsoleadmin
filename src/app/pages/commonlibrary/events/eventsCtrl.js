(function() {
    'use strict';

    angular.module('BlurAdmin.pages.commonlibrary')
        .controller('eventsCtrl', eventsCtrl);

    /** @ngInject */
    function eventsCtrl($scope, $http, dataSvc) {


        $scope.palette = [];
        $scope.watchers = [];

        dataSvc.getEvents().then(function(data) {
            $scope.coreEvents = data.coreEvents
            $scope.palette = data.palette
        })




        $scope.editEvent = function(obj) {
            var dataObj
            var resultObj = $scope.coreEvents

            $scope.currProduct = '';

            $scope.editmode = true;

            Object.values(resultObj).forEach(
                function(x) {
                    if (x.var.variable == obj.name) {
                        dataObj = x
                    }
                }
            );
            //filterFilter(tmp, {})
            //console.log(dataObj)
            $scope.selectedObj = dataObj
            $scope.code = null

            $scope.setCode($scope.selectedObj.var.body[0])
        }
        $scope.setCode = function(obj) {
            console.debug(obj.attribute.attrValue) //.attrValue)

            if (obj.attribute.attrValue.substring(0, 1) == '{') {
                obj.attribute.attrValue = obj.attribute.attrValue.slice(1, obj.attribute.attrValue.length - 2)
            }

            $scope.code = obj.attribute

            //if($scope.code.substr
            //obj.attribute
        }
        $scope.removeEvent = function(obj) {
            $scope.dropped = $scope.dropped.filter(function(item) {
                return item.name != obj.name;
            });
        }
        $scope.productSelected = function(obj) {
            $scope.editmode = false;

            this.self = [];

            eval(obj.value[0].attribute.attrValue);

            $scope.self = this.self;
            $scope.selectedIndex = 0;

            var events = obj.value[1].attribute.attrValue.match(/\event.*?\.create()/g)

            $scope.dropped = [] // events.forEach(


            events.forEach(function(x) {
                $scope.dropped.push({
                    name: x.replace('.create', '')
                })
            })
        }

        $scope.addWatcher = function() {
            //$scope.watchers += '100,'
            console.debug($scope.watchers)

        }

    }

})();