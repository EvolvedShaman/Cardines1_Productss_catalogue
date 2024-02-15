fetch('data.json')
  .then(response => response.json())

  .then(data => {
    const productListElement = document.getElementById("productlist");
    data.forEach(product => {
      const productItem = document.createElement("div");

        var li = document.createElement('li');

        li.innerHTML = '<div class="card mt-1">'+
        '<div class="product-1 align-items-center p-2 text-center"> <img src="'+data.image+'" class="rounded"  width="150" height="100">'+
        '<h6 class="mt-0 font-weight-bold mb-2 info">'+data.Name+'</h6>'+
        '<div class="mt-3 info"> <span class="text1 d-block">'+ data.description+'</span> </div>'+
        'div class="cost mt-1 text-dark"> <span>$' +data.price+'</span>'+
        '</div>'+
        '<div class="button-color p-2 text-center text-white"><span class="text-uppercase">Add to cart</span></div>'+
        '</div>';
        document.getElementsById("home_product").appendChild(li);
    })
  })