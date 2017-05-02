(function() {
    var animals = [{
        'name': 'Yellow Cat',
        'price': 200,
        'description': 'the truly gold.',
        reviews: [{
            stars: 5,
            body: "I love this gem!",
            author: "joe@example.org",
            createdOn: 1397490980837
        }, {
            stars: 1,
            body: "This gem sucks.",
            author: "tim@example.org",
            createdOn: 1397490980837
        }],
        'specification': 'meou~',
        color: '#CCC',
        remain : 30,
        'canPurchase': true,
        'soldOut': false,
        'images': [
            '../img/cat1.jpg', '../img/cat2.jpg'
        ],
    }, {
        'name': 'Fish ',
        'price': 50,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        reviews: [{
            stars: 5,
            body: "Praesent cursus elit in turpis iacu",
            author: "joe@example.org",
            createdOn: 1397490980837
        }, {
            stars: 1,
            body: "This gem sucks.",
            author: "tim@example.org",
            createdOn: 1397490980837
        }],
        'specification': 'nisi 40*rr',
        color: 'Yellow',
        'canPurchase': true,
        'soldOut': false,
        'images': [
            '../img/fish1.jpg', '../img/fish2.jpg'
        ],
    },{
        'name': 'dog',
        'price': 700,
        'description': 'Donec sodales lorem vel mauris consectetur, at vestibulum neque faucibus.',
        'canPurchase': false,
        'soldOut': true,
        'images': [
            '../img/dog1.jpg'
        ],
    }];
    var app = angular.module('animalsStore', ['products-controller']);
    app.controller('gemController', function() {
        this.products = animals;
    });
})();
