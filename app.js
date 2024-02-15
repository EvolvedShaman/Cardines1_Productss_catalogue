const url = 'data.json';

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let productsHtml = '';
    data.forEach((product) => {
      productsHtml += `
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${product.image}" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">Price: $${product.price}</p>
            <p class="card-text">Description: ${product.description}</p>
            <button type="button" class="btn btn-primary add-to-cart" data-id="${product.id}">Add to Cart</button>
          </div>
        </div>`;
    });
    document.getElementById('products').innerHTML = productsHtml;

    // Add event listener for add to cart button
    document.querySelectorAll('.add-to-cart').forEach((button) => {
      button.addEventListener('click', (event) => {
        const productId = event.target.dataset.id;
        console.log(Added.product.with.id ,{productId},to.cart);
      });
    });
  })
  .catch((error) => {
    console.error('Error fetching ', error);
  });