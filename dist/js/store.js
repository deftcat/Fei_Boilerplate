(function() {
    var animals = [{
        'name': 'Yellow Cat',
        'price': 200,
        'description': 'the truly gold.',
        'review': 'so cute',
        'specification': 'meou~',
        'canPurchase': true,
        'soldOut': false,
        'images': [
            '../img/cat1.jpg', '../img/cat2.jpg'
        ],
    }, {
        'name': 'medal',
        'price': 700,
        'description': 'the truly medal.',
        'canPurchase': false,
        'soldOut': true,
        'images': [
            '../img/dog1.jpg'
        ],
    }];
    var app = angular.module('animalsStore', []);
    app.controller('gemController', function() {
        this.products = animals;
    });
    app.controller('tabController', function() {
        this.tab = 1;
        this.setTab = function(NewTab) {
            this.tab = NewTab;
        };
        this.selectTab = function(checkTab){
            return this.tab === checkTab;
        };

    });
})();
