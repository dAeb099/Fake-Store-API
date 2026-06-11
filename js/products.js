const elDataContainer = document.querySelector("#dataContainer");
const elContainerTitle = document.querySelector("#container__title");

const data = fetch("https://fakestoreapi.com/products").then((resolve) =>
  resolve.json(),
);

data.then((products) => {
  console.log(products);
  elContainerTitle.textContent = `Products`;
  products.forEach((product) => {
    elDataContainer.innerHTML += `
        <div class="dataContainer__item">
          <img src="${product.image}" alt="${product.title}" class="item__image">
          <h2 class="item__title">${product.title}</h2>
          <p class="item__category">${product.category}</p>
          <p class="item__price">$${product.price}</p>
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        </div>
    `;
  });
});
