// Menu stuff

const menu =[ 
    {
      id: 1,
      name: "Boba tea",
      category: "breakfast",
      price: "$4",
      description:`white boba tea with milk and boba` ,
      img: "./img/bobatea1b.jpg",
    },
    {
      id: 2,
      name: "Burger with fries",
      category: "lunch",
      price: "$15",
      description:`Juicy burger topped withcheese and fresh veggies with fries` ,
      img: "./img/burger1b.jpg",
    },
    {
        id: 3,
        name: "Chicken burger",
        category: "lunch",
        price: "$15",
        description:`Crispy fried chicken burger with fresh vegetables with cheese` ,
        img: "./img/chickenburger1b.jpg",
      },
      {
        id: 4,
        name: "Chocolate cupcake",
        category: "dessert",
        price: "$4",
        description:`Chocolate cupcake topped with frosties` ,
        img: "./img/cupcake1b.jpg",
      },
      {
        id: 5,
        name: "Glazed dougnut",
        category: "dessert",
        price: "$6",
        description:`Dougnut with glazing with different flavors` ,
        img: "./img/dougnut2b.jpg",
      },
      {
        id: 6,
        name: "Glazed dougnut",
        category: "dessert",
        price: "$6",
        description:`Dougnut with glazing with different flavors` ,
        img: "./img/dougnut3b.jpg",
      },
      {
        id: 7,
        name: "Strawberry milkshake",
        category: "drink",
        price: "$4",
        description:`Strawberry flavored sneaker with frosting` ,
        img: "./img/item-3b.jpeg",
      },
      {
        id: 8,
        name: "Bread and omelette",
        category: "breakfast",
        price: "$5",
        description:`Bread and omelette and chocolate tea` ,
        img: "./img/item-4b.jpeg",
      },
      {
        id: 9,
        name: "Chocolate milkshake",
        category: "drink",
        price: "$5",
        description:`Chocolate flavored drink with sliced strawberry` ,
        img: "./img/item-6b.jpeg",
      },
      {
        id: 10,
        name: "Pancake with maple syrup",
        category: "breakfast",
        price: "$10",
        description:`Plain vanila pancake with maple syrup and ice-cream` ,
        img: "./img/item-1b.jpeg",
      },
      {
        id: 11,
        name: "Steak",
        category: "dinner",
        price: "$15",
        description:`Tenderly cooked Steak with vegetables` ,
        img: "./img/item-10b.jpeg",
      },
      {
        id: 12,
        name: "Chicken wrap",
        category: "lunch",
        price: "$10",
        description:`Chicken wrap with fresh vegetables` ,
        img: "./img/wrap2b.jpg",
      },
    
      {
        id: 13,
        name: "Mango juice",
        category: "drink",
        price: "$4",
        description:`Fresh mango juice` ,
        img: "./img/juice1b.jpg",
      },
      {
          id: 14,
          name: "Chocolate cookie milkshake",
          category: "drink",
          price: "$6",
          description:`Chocolate flavored milkshake with vanila frosting` ,
          img: "./img/milkshake1b.jpg",
        },
        {
          id: 15,
          name: "Vanila milkshake",
          category: "drink",
          price: "$6",
          description:`Vanila flavored milkshake with frosting` ,
          img: "./img/milkshake2b.jpg",
        },
        {
          id: 16,
          name: "Capuccino",
          category: "drink",
          price: "$4",
          description:`Creamy capuccino` ,
          img: "./img/milkshake3b.jpg",
        },
        {
          id: 17,
          name: "Pancake with strawberry syrup and fruits ",
          category: "breakfast",
          price: "$8",
          description:`Fluffy pancake top with maple syrup and fruits` ,
          img: "./img/pancake1b.jpg",
        },
        {
          id: 18,
          name: "Pizza(beef)",
          category: "dinner",
          price: "$4",
          description:`Beef pizza topped green pepper and onions` ,
          img: "./img/pizza1b.jpg",
        },
        {
          id: 19,
          name: "Pizza(mushroom)",
          category: "dinner",
          price: "$4",
          description:`Pizza topped with mushroom and cheese` ,
          img: "./img/pizza2b.jpg",
        },
        {
          id: 20,
          name: "Steak",
          category: "dinner",
          price: "$10",
          description:`Tenderly cooked steak` ,
          img: "./img/steak2b.jpg",
        },
        {
          id: 21,
          name: "Steak",
          category: "dinner",
          price: "$10",
          description:`Tenderly cooked steak` ,
          img: "./img/steak3b.jpg",
        },
        {
          id: 22,
          name: "Waffles with syrup and berries",
          category: "breakfast",
          price: "$8",
          description:`Fluffy waffles with syrup and berries` ,
          img: "./img/waffles2b.jpg",
        },
        {
            id: 23,
            name: "Beef wrap",
            category: "lunch",
            price: "$10",
            description:`Beef wrap with Vegetables` ,
            img: "./img/wrap3b.jpg",
          },
        {
          id: 24,
          name: "English breakfast",
          category: "breakfast",
          price: "$4",
          description:`Toasted bread with omelette and sauted tomato` ,
          img: "./img/g-7b.jpg",
        },

  ];




// navigation bar


let bars = document.querySelector("#bars")
let navbar = document.querySelector(".navbar")

bars.addEventListener('click', function(){
    bars.classList.toggle("fa-times")
    navbar.classList.toggle("actives")
})

let searchIcon = document.querySelector("#search-icon")
let searchForm = document.querySelector(".search-form")
let times = document.querySelector("#close")


searchIcon.addEventListener("click", function(){
    searchForm.classList.toggle("display-form")  
})

times.addEventListener("click", function(){
    searchForm.classList.remove("display-form")  
})



// Menu section
const sectionCenter =document.querySelector(".section-center") 
const btnContainer = document.querySelector(".btn-container");
const filterBtn = document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded", function(){
    // console.log("foodYard")
     displayMenuItems(menu)
})

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        // console.log(item)
        // return item;

        return `<article class="menu-item">
        <img src=${item.img} class="photo" alt=${item.name}>
        <div class="item-info">

         <div class="item-info-text">
           <h4>${item.name}</h4>
            <h4 class="price">${item.price}</h4> 
         
         </div>
            
          <p class="item-text">
            ${item.description}
          </p>
        </div>
      </article>`
    })
    displayMenu = displayMenu.join("")
 sectionCenter.innerHTML =displayMenu 
}


// setting up the filter button

const filterBtns =document.querySelectorAll(".filter-btn")
filterBtns.forEach(function(btn){
    btn.addEventListener("click", function(e){
       const category =e.currentTarget.dataset.id
       const menuCategory = menu.filter(function(menuItem){

        if(menuItem.category == category){
          return menuItem  
        }
           
       })
       if(category == "all"){
           displayMenuItems(menu)
       }
       else{
           displayMenuItems(menuCategory)
       }
    })
})


// nav bar

const linkColor = document.querySelectorAll(".nav-link")
   function colorLink(){
       if(linkColor){
           linkColor.forEach(L => L.classList.remove("active"))
           this.classList.add("active")
       }
   }

   linkColor.forEach(L => L.addEventListener("click",colorLink))

 

   // menu link

const linkColors = document.querySelectorAll(".menu-link")
   function colorLinks(){
       if(linkColors){
           linkColors.forEach(L => L.classList.remove("active-filter"))
           this.classList.add("active-filter")
       }
   }

   linkColors.forEach(L => L.addEventListener("click",colorLinks))
