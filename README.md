#Feature/PDP-STEP2

# Title
  Product detail page design
# Description
  Simple product details page which contains product main image and product titile, product price,Availability of sizes and see more section
   Product informatio is loading from Ajax

# Demo:
  https://rawcdn.githack.com/sred36/PDP-TEST1/Feature/PDP-STEP2/index.html
  
  
# Technologies: 

  HTML5, CSS3 ,JAVASCRIPT, AJAX, JQUERY,FONT AWESOME.MEDIA QUERYS.

The branch has 3 folders:

# CSS:
  
  Global.css  written styles globally and i have written predefined classes those classes can be used throught the project

  I have followed Bem structure for classes Name 

  written dimension sizes in rem formate

  Used media query to support responsive design

# Js

  Global.Js: i have wrriten functiona js programming

  initializeCache() function initilise to get the all elements of dom. this helps us improve the performence rathere than traversing everytime

  initializeEvents : initilise is the event for swatches get the selected swatch information 

   appendDataToDom() method helps to update the dom elements like product image , product title, Product price, Product availability sizes, Product description

# AJAX

  loadJSONData(): used this function to get the product information from API. These product data have been used.
  
 
# API : https://api.jsonbin.io/b/60b5c741b104de5acddb7fcf 

# images:

  images folder contans the all project images like swatches colors, product image, see more images

# index.html
  
  index.html: loadded css, js files and font awesome links

# Local Demo: 
    
  1) download Master branch
  2) npm install
  3) grunt sass
  4) grunt js
  5) extarct the zip folder and double click on index.html

