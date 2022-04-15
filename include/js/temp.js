//card for temporary
const deals = [
  {
    name: "Tomato",
    image: "tomato",
    about: "Lorem",
    price: "2$",
    sold: "23",
  },
  {
    name: "Strawberry",
    image: "strawberry",
    about: "fresh",
    price: "5$",
    sold: "25",
  },
  {
    name: "Mango",
    image: "mango",
    about: "dark",
    price: "2$",
    sold: "2",
  },
  {
    name: "Dragon",
    image: "dragon",
    about: "dark",
    price: "2$",
    sold: "2",
  },
  {
    name: "Berry",
    image: "berry",
    about: "dark",
    price: "2$",
    sold: "2",
  },
];

const hscroll = document.getElementById("deals-container");
//deals of the week
deals.forEach((deal) => {
  hscroll.innerHTML +=
    ' <div class="container dealoftheweek flyin" id="dealOfWeekCard" data-image="' +
    deal.image +
    '" data-name="' +
    deal.name +
    '" data-about="' +
    deal.about +
    '" data-price="' +
    deal.price +
    '" data-sold="' +
    deal.sold +
    '">';
});

const products = [
  {
    name: "Apple",
    about: "fast line",
    price: "14$",
    image: "apple",
  },
  {
    name: "Avacado",
    about: "fast line",
    price: "14$",
    image: "avacado",
  },
  {
    name: "Banana",
    about: "fast line",
    price: "14$",
    image: "banana",
  },
  {
    name: "Goyava",
    about: "fast line",
    price: "14$",
    image: "goyava",
  },
  {
    name: "Graphs",
    about: "fast line",
    price: "14$",
    image: "graphs",
  },
  {
    name: "Kiwi",
    about: "fast line",
    price: "14$",
    image: "kiwi",
  },
  {
    name: "Orange",
    about: "fast line",
    price: "14$",
    image: "orange",
  },
];

const productContainer = document.getElementById("product-container");
products.forEach((product) => {
  productContainer.innerHTML +=
    ' <div class="product row-c a-center flyin" id="product-box" data-image="' +product.image +'" data-about="' + product.about +'"data-name="' + product.name +'"data-price="' + product.price +'"></div>';
});

const sales = [
  {
    name: "Garlic",
    type: "Vegitable",
    price: "$10.00",
    image: "garlic",
  },
  {
    name: "Tomato",
    type: "Vegitable",
    price: "$7.00",
    image: "tomato",
  },
  {
    name: "Watermelone",
    type: "Fruits",
    price: "$5.00",
    image: "watermelone",
  },
  {
    name: "Pomegranate",
    type: "Vegitable",
    price: "$15.00",
    image: "pomegranate",
  },
  {
    name: "Lime",
    type: "Fruits",
    price: "$4.00",
    image: "lime",
  },
  {
    name: "Onion",
    type: "Vegitables",
    price: "$8.00",
    image: "onion",
  }
];

const bestSeller = document.getElementById("best-seller");
sales.forEach((sale) => {
  bestSeller.innerHTML +=
    '<div class="product row-c a-center flyin" id="sale-box" data-name="'+sale.name+'" data-image="'+sale.image+'" data-price="'+sale.price+'" data-type="'+sale.type+'"></div>';
});



const saleProducts = [
  {
    name:'Garlic',
    price:'$12.00',
    image:'garlic'
  },
  {
    name:'Onion',
    price:'$12.00',
    image:'onion'
  },
  {
    name:'Carrot',
    price:'$12.00',
    image:'carrot'
  },
  {
    name:'Cabbage',
    price:'$12.00',
    image:'cabbage'
  },
  {
    name:'Leeks',
    price:'$12.00',
    image:'leek'
  },
  {
    name:'Beans',
    price:'$12.00',
    image:'beans'
  },
  {
    name:'lime',
    price:'$12.00',
    image:'lime'
  },
  {
    name:'PineApple',
    price:'$12.00',
    image:'pineapple'
  },
  {
    name:'Cherry',
    price:'$12.00',
    image:'cherry'
  },
  {
    name:'Kiwi',
    price:'$12.00',
    image:'kiwi'
  }
]

const salesContainer = document.getElementById('sale-products');

saleProducts.forEach(sale => {
  salesContainer.innerHTML += 
  '<div class="row a-center sale-product flyin" id="sale-box" data-name="'+sale.name+'" data-price="'+sale.price+'" data-image="'+sale.image+'">\
</div>'
});

const blogs = [
  {
    title:'NATURAL FOOD STORES',
    details:'In 1975, a “Mom & Pop” store called Dinner for the Earth opened in Asheville, NC, with a simple pledge—make it easy to shop for healthy food.....”',
    date:'Apr 14 2022',
    image:'blog1'
  },
  {
    title:'7 Organic Food FOR HEALTHY HOME',
    details:'Eating more meals at home? Now is a great time to try new recipes and explore different types of cuisine........',
    date:'Apr 14 2022',
    image:'blog2'
  },
  {
    title:'5 Favourite Organic Food',
    details:'Before we take a look at our favourite organic food blogs, let’s first understand what “organic” actually means. While regulations may vary from country...',
    date:'Apr 14 2022',
    image:'blog3'
  },
  {
    title:'Mark’s Daily Apple',
    details:'Mark Sisson is a former elite endurance athlete who is dedicated to fitness and health through “primal living”. He',
    date:'Apr 14 2022',
    image:'blog4'
  }
]

const blogContainer = document.getElementById('blog-container');
blogs.forEach(blog => {
  blogContainer.innerHTML += '<div class="blog row-c j-around flyin" id="blog-box" data-title="'+blog.title+'" data-detail="'+blog.details+'" data-date="'+blog.date+'" data-image="'+blog.image+'">'
});

