const verticalMenu = document.querySelectorAll("#vertical-menu");

verticalMenu.forEach((vmenu) => {
  const verticalMenuTarget = vmenu.getAttribute("data-vertical-target");
  vmenu.addEventListener("mouseenter", () => {
    document.getElementById(verticalMenuTarget).classList.add("active");
  });
  vmenu.addEventListener("mouseleave", () => {
    document.getElementById(verticalMenuTarget).classList.remove("active");
  });
});



/* Deal of the week cards */
function showDeals(){
  const dealOfWeekCard = document.querySelectorAll('#dealOfWeekCard');
dealOfWeekCard.forEach((card)=>{
  const image = card.getAttribute('data-image');
  const name = card.getAttribute('data-name');
  const about = card.getAttribute('data-about');
  const price = card.getAttribute('data-price');
  const rating = card.getAttribute('data-rating');
  const sold = card.getAttribute('data-sold');

  card.innerHTML = '<img src="include/images/'+image+'.png" alt="" />\
          <div class="row duration a-center j-center">\
            <p class="t-center"> 14 <br /> HRS</p>\
            <p class="t-center">14 <br /> MINS</p>\
            <p class="t-center">14 <br /> SECS</p>\
          </div>\
          <div class="row a-center j-center">\
            <h3 class="card-name">'+name+'</h3>\
          </div>\
          <div class="row-c a-center j-center">\
            <h2>'+about+'</h2>\
            <h2>'+price+'  <del>20$</del></h2>\
          </div>\
          <div class="row a-center j-center cart">\
            <i class="fas fa-heart"></i>\
            <i class="fas fa-clipboard-list"></i>\
            <i class="fas fa-random"></i>\
          </div>\
          <div class="row-c a-center j-even rating" data-rating="'+rating+'">\
            <div class="row">\
              <div class="row">\
                <i class="fas fa-star"></i>\
                <i class="fas fa-star"></i>\
                <i class="fas fa-star"></i>\
                <i class="fas fa-star-half-alt"></i>\
              </div>\
              <div class="row">4.5</div>\
            </div>\
            <div class="line"></div>\
          </div>\
          <div class="h3">Sold '+sold+'</div>';
});
};

showDeals();

/* products */
const produtBox = document.querySelectorAll('#product-box');
produtBox.forEach((product)=>{
  const image = product.getAttribute('data-image');
  const name = product.getAttribute('data-name');
  const about = product.getAttribute('data-about');
  const price = product.getAttribute('data-price');
  product.innerHTML += 
  ' <img src="include/images/' +
  image +
  '.png">\
  <p>' +
  about +
  '</p>\
  <h3 class="name">' +
  name +
  '</h3>\
  <p class="price">' +
  price +
  '</p>';
});

/* sales */
const saleBox = document.querySelectorAll('#sale-box');
saleBox.forEach((sale)=>{
  const image = sale.getAttribute('data-image');
  const name = sale.getAttribute('data-name');
  const type = sale.getAttribute('data-type');
  const price = sale.getAttribute('data-price');
  sale.innerHTML = 
  '<img src="include/images/'+image+'.png">\
  <p class="name">'+name+'</p>\
  <h3>'+type+'</h3>\
  <p class="price">'+price+'</p>\
  ';
})

/* Best sales */
const bestSaleBox = document.querySelectorAll('#sale-box');
bestSaleBox.forEach((bestSale)=>{
  const image = bestSale.getAttribute('data-image');
  const name = bestSale.getAttribute('data-name');  
  const price = bestSale.getAttribute('data-price');
  bestSale.innerHTML = 
  '<div class="row a-center j-center">\
   <img src="include/images/'+image+'.png" alt="">\
  </div>\
  <div class="row-c j-center">\
    <h2>'+name+'</h2>\
    <p class="price">'+price+'</p>\
  </div>'
})

 
const blogBox = document.querySelectorAll('#blog-box');
blogBox.forEach((blog)=>{
  const title = blog.getAttribute('data-title');
  const detail = blog.getAttribute('data-detail');
  const date = blog.getAttribute('data-date');
  const image = blog.getAttribute('data-image')
  blog.innerHTML='<img src="include/images/'+image+'.png" alt="">\
  <div class="row j-around"><div class="row"><i class="fas fa-calendar"></i>\
    <h3>'+date+'</h3>\
    </div><i class="fas fa-comment"></i> </div>\
  <h2>'+title+'</h2>\
  <p>'+detail+'</p>\
  <button class="btn-readmore"> Readmore</button>'
})