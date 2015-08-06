(function() {
    var app = angular.module('gemStore', ['store-products']);

    app.controller('StoreController', ['$http', function($http){
        var store = this;
        store.products = [];

        $http.get('json/store-products.json').success(function(data){
            store.products = data;
        });
    }]);

    app.controller('ReviewController', ['$scope', function($scope){
        var reviewCtrl = this;
        this.review = {};
        this.currentDate = Date.now();

        this.addReview = function(product) {
            this.review.createdOn = Date.now();

            product.reviews.push(this.review);

            this.review = {};

            $scope.reviewForm.$setPristine();
            $scope.reviewForm.$setUntouched();
        };

        function updateLater() {
            setTimeout(function() {
                reviewCtrl.currentDate = Date.now();
                updateLater();
            }, 1000);
        }

        updateLater();
    }]);
})();
