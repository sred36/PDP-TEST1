# PDP-STEP3

# Title
  Product detail page design Using react components
  
# Description
  
  Implemented page using react components and data handled by from API.
  
 
# Technologies: 

  React, React-Dom, CSS, React-Browser Router, 
  

The branch has 3 folders:

# CSS:
  
  Global.css  written styles globally and i have written predefined classes those classes can be used through out the project

  I have followed BEM structure for classes Name 

  written dimension sizes in rem formate

  Used media query to support responsive design

# React compenents

# Layout: This folders contains all react components

  App.js component has multiple components like Poduct, Women , Men, Ftw, Accessiories
  
    1) Men: click on men category link it should be navigating to Men compnent
    2) Women:click on women category link it should be navigating to Women compnent
    3) Product: click on Product category link it should navigate to Product compnent
    4) Ftw: click on Ftw category link it should navigate to Ftw compnent
    5) Accessiories: click on Accessiories category link it should navigate to Accessiories compnent


# Header.js 
  This is header component . this component has all related header information
  
# Naviagtaion.js

  Navigation component has all the category links like Men,Women,Kids,Ftw,Accessories. Genarted all links dynaically based json Object
  
# Product.js

    <ProductImage productImage={selectedData}/> : called componnent to load product image and we have shred the initial props data
    <ProductDetails productImage={selectedData} sendImageData={this.sendImageData}/> called component to show product details section and shared inital props here
    
    
# componentDimount:

  initlised this life cycle method used for to load the Api to get all product information
  
   componentDidMount() {
    fetch("https://api.jsonbin.io/b/60b5c741b104de5acddb7fcf/2")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            productItems: result,
            activeProductId:result[0]
          });
          console.log(result);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      
# sendImageData(): 

  updated the product information with state when  callback event from  children to parent component 
  
# ProductDetails.js :

  update the product details like product price, title ,product description , see more product info
  
   SeeMoreImage: get the dynamic images and update the image path
      
# images:

  images folder contans the all project images like swatches colors, product image, see more images


#Local Demo: 
    
    1) download PDP-STEP3 branch
    
    2) extarct the zip folder
    3) npm install
    4) npm run 
    
