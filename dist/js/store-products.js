  var app = angular.module('products-controller', []);

    app.controller('tabController', function() {
        this.tab = 1;
        this.setTab = function(NewTab) {
            this.tab = NewTab;
        };
        this.selectTab = function(checkTab) {
            return this.tab === checkTab;
        };
    });
    app.controller('GalleryController', function(){
        this.current = 0;
        this.setCurrent = function(iCur){
            this.current = iCur || 0 ;
        };
    });
    app.controller('reviewController', function(){
        this.review={};
        this.addReview = function(product){
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review= {};
        };
    });
    app.directive('productDescription',function(){
        return{
            restrict : 'E',
            templateUrl: 'product-description.html'
        };
    });