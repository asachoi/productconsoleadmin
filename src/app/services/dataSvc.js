
(function () {
  'use strict';

  angular.module('BlurAdmin.services',[])
      .service('dataSvc', dataSvc)


  function dataSvc($http, $q) {
    this.getEvents = function() {
        var deferred = $q.defer();
        var result = {}
        result.palette = []

        $http.get('app/data/sample_core_events.json').then(

            function(resp) {
				result.coreEvents = resp.data.result
				var obj = result.coreEvents
                Object.values(obj).forEach(function(x) {
	                   result.palette.push(
                        {
                            name: x.var.variable
                        }
                    )

                })

                deferred.resolve(result);
            }
        )



        return deferred.promise;

    }

    this.getEventGroups = function() {
        var result = {}
        var deferred = $q.defer();
        result.groups = []

        $http.get('app/data/sample_core_event_groups.json').then(
            function(resp) {
                result.coreEventGroups = resp.data.result
                 //console.debug($scope.coreEventGroups)
                var obj = result.coreEventGroups

                Object.values(obj).forEach(function(x) {
                    console.debug(x)
                    result.groups.push(
                        {
                            name: x.var.variable,
                            value: x.var.body//[1].attribute.attrValue
                        }
                    )
                });
                deferred.resolve(result);
            }
        )


        return deferred.promise;
    }

  }
}
)();
