## Live site at https://ryanspando.github.io/angular-camera-view/


# Angular Camera View

In this assignment, you will use Angular built-in directives and filters as well as create your own filters to build a simple shopping page for cameras.

## Example in action

![Camera Shop Example](images/camera_example.gif)

## Example Data

Here is the data that will be used. It is included in the `ng-init` directive for you.

```javascript
[
  {
    id: 1,
    name: 'Nikon D3100 DSLR',
    image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
    rating: 4,
    price: 369.99,
    onSale: true
  },
  {
    id: 2,
    name: 'Canon EOS 70D',
    image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',
    rating: 2,
    price: 1099.0,
    onSale: false
  },
  {
    id: 3,
    name: 'Nikon D810A',
    image:'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg',
    rating: 3,
    price: 3796.95,
    onSale: true
  }
]
```

## Part 1 - Requirements

The camera shop page will require the following:

1. Display of the data in some format.
1. The price is formatted into a currency
1. The words "On SALE!" (or some form) are used when `onSale` is true
1. The ability to sort by name or rating (default is name)
1. The ability to search to filter the results (keeping the same order).
1. A custom filter to handle the conversion of the rating from a number to asterisks. It is assumed that the rating will be an integer.

## Part 2 - Requirements

The goal of part 2 is to add controllers to the exercise implementing a cart functionality.

![Camera Shop Example Part 2](images/camera_example_part2.gif)

1. Create two controllers, one to manage the cart, and one to manage the catalog of items.
1. Remove all instances of `ng-init` and initialize any data into the controller. Ensure all `ng-model` variables are managed in a controller.
1. When the user clicks "Add to Cart", the cart manages the item inserted. Subsequent adds increase the quantity of the item.
1. User can remove an item from the cart by clicking on a button (it will remove the entire quantity of that item).
1. The subtotal, tax, and total are calculated in place.
