# Shoes Shopping Cart

This is a React application that simulates the functionalities of a simple shopping website

## Getting Started

The following instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing
install Node js in local machine.
```
https://nodejs.org/en/download/
```
Clone this repository to local machine. 
```
git clone https://github.com/csc301-fall-2020/assignment-1-73-yingkewang2018-sherryw99-web.git
```
change directory on terminal to the project location and run npm i. 
```
cd <project_location>
npm i
```


## Running the tests

You can run Jest tests by following command.

```
npm run test
```

## Running the app
You can run the app tests by following command.

```
npm run start
```
or you can go to the deployed version
```
https://shopping-cart-301.herokuapp.com/
```

## Features

Steps for using the features in this app. 

### Shopping Menu
I include a menu of shoes and their price on the left side of the window
### Add item

There is an add-to-cart button for each product. when it successfully adds, shoe card will appear in the shopping cart

### View cart

Shopping cart appear by default in bigger screen size (larger than 1000px wide)

on a smaller screen click on the cart icon on the top right corner. The cart will appear

### Update cart

you can remove item and add item to the cart. They have icon in the shoe card.

### Include tax

You can choose to include/exclude tax by clicking the button next to the cart total.

### Apply Coupon

You can apply a Coupon to your order by entering a coupon code in the box under cart total, where it says 'Enter Discount Code,' and click the **Apply** button. 
All the Coupon Codes are: JA3sML, oyQiDC, JsSznT, 1jZISy, 0h9SRf, Bq1rxa, yQrpIA, mjrey2, zA4fWD, 
They all have different discount rate. Details can be seen in: data/couponCode.json

## CI/CD
I also finish the optional CI/CD requirement
It's in another private repo pls inform me if TA failed to get invited into the project

## Acknowledgments

[CSS Transition Tutorial](https://css-tricks.com/ease-out-in-ease-in-out/)

[Jest Tutorial](https://www.udemy.com/course/react-redux-tutorial)

