const elDataContainer = document.querySelector("#dataContainer");
const elContainerTitle = document.querySelector("#container__title");
const elViewSection = document.querySelector("#view__section");

const data = fetch("https://fakestoreapi.com/carts").then((resolve) =>
  resolve.json(),
);

const viewFunc = (cartId, cartUserId, cartDate, cartProducts) => {
  elViewSection.style.display = "flex";
  const products = [];
  let user;
  function assignUser(attrUser) {}
  fetch(`https://fakestoreapi.com/users/${cartUserId}`)
    .then((resolve) => resolve.json())
    .then((fetchedUser) => {
      const constuser = fetchedUser.username;
      user = constuser;
      cartProducts.split(",").forEach((productId) => {
        const product = fetch(`https://fakestoreapi.com/products/${productId}`)
          .then((resolve) => resolve.json())
          .then((product) => {
            products.push(product.image);
          });
      });
      const productsImages = products.map(
        (url) => `<img src="${url}" class="item__image">`,
      );
      console.log(products);
      elViewSection.innerHTML = `
        <p
          onclick="
            {
              elViewSection.style.display = 'none';
            }
          "
          class="close"
        >
          x
        </p>
        <p>User/Owner: ${user}</p>
        <p>Cart ID: ${cartId}</p>
        <p>Date: ${cartDate}</p>
        <p>Products:</p>
        <div>
          ${productsImages}
        </div>
  `;
    });
  cartProducts.split(",").forEach((productId) => {
    const product = fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((resolve) => resolve.json())
      .then((product) => {
        products.push(product.image);
      });
  });
  console.log(products);
  elViewSection.innerHTML = `
        <p
          onclick="
            {
              elViewSection.style.display = 'none';
            }
          "
          class="close"
        >
          x
        </p>
        <p>User/Owner: ${user}</p>
  `;
};

data.then((carts) => {
  console.log(carts);
  elContainerTitle.textContent = `Carts`;
  carts.forEach((cart) => {
    console.log();
    elDataContainer.innerHTML += `
        <div class="dataContainer__item">
          <h3 class="item__count">#${cart.id}</h3>
          <p class="item__id">UserID: ${cart.userId}</p>
          <p class="item__products">Products: ${cart.products.map((product) => {
            return product.productId;
          })}
          </p>
          <button onclick="{
            viewFunc(${cart.id}, ${cart.userId}, '${cart.date}', '${cart.products.map(
              (product) => {
                return product.productId;
              },
            )}'
            );}" class="view edit">View</button>
        </div>
    `;
  });
});
