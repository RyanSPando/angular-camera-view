(function() {
  'use strict';

$('select').material_select();

  var app = angular.module('cameraApp', []); // jshint ignore:line

  app.controller('items', function() {
    this.cameras = [{id: 1,name: 'Nikon D3100 DSLR',image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',rating: 4,price: 369.99,onSale: true},{id: 2,name: 'Canon EOS 70D',image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',rating: 2,price: 1099.0,onSale: false},{id: 3,name: 'Nikon D810A',image:'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg',rating: 3,price: 3796.95,onSale: true}];
    this.selectValue = 'name';
    this.cameraSearch = '';
  });

    app.filter('stars', ($sce) => {
      return function(input) {
        let stars = '';

        for (let i = 0; i < input; i++) {
          stars += '<i class="fa fa-star" aria-hidden="true"></i>';
        }
        return $sce.trustAsHtml(stars);
      };
    });

  app.controller('shoppingCart', function() {
    this.itemToAdd = '';
    this.basket = [];
    this.subtotal = 0.00;
    this.tax = 0.00;
    this.total = 0.00;

    this.addItem = (item) => {

      const indexOfItem = this.basket.map(value => value.name).indexOf(item.name);

      if( indexOfItem === -1 ) {
        this.basketObj = Object.assign({}, item);
        this.basketObj.quantity = 1;
        this.basket.push(this.basketObj);
      }
      else {
        this.basket[indexOfItem].quantity++;
      }

      this.subtotal += this.basketObj.price;
      this.tax = parseFloat(this.subtotal) * 0.0875;
      this.total = parseFloat(this.subtotal) + parseFloat(this.tax);
    };

    this.removeItem = (item) => {
      const itemToRemove = this.basket.splice(this.basket.map(value => value.name).indexOf(item.name), 1)[0];
      this.subtotal -= parseFloat(itemToRemove.price) * parseInt(itemToRemove.quantity);
      this.tax = parseFloat(this.subtotal) * 0.0875;
      this.total = parseFloat(this.subtotal) + parseFloat(this.tax);
    };

  });
})();
