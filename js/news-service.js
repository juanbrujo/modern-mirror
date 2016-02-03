(function() {
    'use strict';

    function NewsService($http) {
        var service = {};
        service.news = null;

        service.init = function(geoposition) {
            // geoloc = geoposition;
            return $http.jsonp('http://api.nytimes.com/svc/topstories/v1/home.json?api-key=' + NYTIMES_API_KEY + '&callback=JSON_CALLBACK').
                then(function(response) {
                    return service.news = JSON.parse(response);
                });
        };

        service.dailyNews = function(){
            // if(service.news === null){
            //     return null;
            // }
            // // Add human readable info to info
            // for (var i = 0; i < service.news.data.daily.data.length; i++) {
            //     service.news.data.daily.data[i].day = moment.unix(service.news.data.daily.data[i].time).format('ddd');
            // };
            // return service.news.data.daily;
        }
        
        return service;
    }

    angular.module('SmartMirror').factory('NewsService', NewsService);

}());