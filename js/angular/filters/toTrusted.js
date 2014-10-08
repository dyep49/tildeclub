'use strict';

define(['app'], function(app) {
  app.filter('toTrusted', ['$sce', function($sce) {
    return function(text) {
        $sce.trustAsCss(text);
        $sce.trustAsJs(text);
        return $sce.trustAsHtml(text);
    };    
  }]);
});


