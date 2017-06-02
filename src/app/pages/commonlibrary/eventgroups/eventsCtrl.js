(function () {
  'use strict';

  angular.module('BlurAdmin.pages.commonlibrary'
  )
      .controller('eventsCtrl', eventsCtrl);

  /** @ngInject */
  function eventsCtrl($scope, $http) {
        $scope.groups = [];
        $scope.dropped = []
        $scope.selectedIndex = 0

    $scope.palette = [];
    $scope.watchers = [];

      $scope.aceLoaded = function(_editor) {
        // Options
        _editor.setReadOnly(true);
        alert(_editor)
      };

      $scope.aceChanged = function(e) {
        //
      };

        $http.get('app/data/sample_core_events.json').then(
            function(resp) {
                console.debug(resp)
                $scope.coreEvents = resp.data.result

                var obj = $scope.coreEvents

                Object.values(obj).forEach(function(x) {
                    //console.debug(x)
                    console.debug(x.var.variable)

                    $scope.palette.push(
                        {
                            name: x.var.variable
                        }
                    )

                })
            }
        )



        $scope.editEvent = function(obj) {
            var dataObj
            var resultObj = $scope.coreEvents
            $scope.selectedIndex = 0;
            $scope.currProduct = '';

            $scope.editmode=true;
            Object.values(resultObj).forEach(
                function(x) {
                    if(x.var.variable == obj.name) {
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
            console.debug(obj.attribute.attrValue)//.attrValue)

            if(obj.attribute.attrValue.substring(0,1) == '{') {
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
           $scope.editmode=false;

           this.self = [];




           console.debug(obj.value[0].attribute.attrValue)

           eval(obj.value[0].attribute.attrValue);

           $scope.self = this.self;
           $scope.selectedIndex = 0;

           var events = obj.value[1].attribute.attrValue.match(/\event.*?\.create()/g)

           $scope.dropped = []// events.forEach(


           events.forEach(function(x) {
                $scope.dropped.push(
                    {name: x.replace('.create', '')}
                )
            }
           )
        }



        $scope.addWatcher = function() {

        }

  }

})();

