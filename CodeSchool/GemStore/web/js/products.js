(function(){
    var app = angular.module('store-products', []);

    app.directive('productTabs', function(){
        return {
            restrict: 'E',
            templateUrl: 'html/product-tabs.html',
            controller: function () {
                this.tab = 1;

                this.setTab = function (tab) {
                    this.tab = tab;
                };

                this.isSet = function (tab) {
                    return (this.tab === tab);
                };
            },
            controllerAs: 'tab'
        };
    });

    app.directive('productGallery', function(){
        return {
            restrict: 'E',
            templateUrl: 'html/product-gallery.html',
            controller: function () {
                this.current = 0;

                this.setCurrent = function (index) {
                    this.current = index;
                };
            },
            controllerAs: 'gallery'
        };
    });

    app.directive('productDescription', function(){
        return {
            restrict: 'E',
            templateUrl: 'html/product-description.html'
        };
    });

    app.directive("productSpecs", function() {
        return {
            restrict: 'E',
            templateUrl: 'html/product-specs.html'
        };
    });

    app.directive('productReviews', function(){
        return {
            restrict: 'E',
            templateUrl: 'html/product-reviews.html'
        };
    });
})();