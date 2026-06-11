const elDataContainer = document.querySelector("#dataContainer");
const elContainerTitle = document.querySelector("#container__title");
const elViewSection = document.querySelector("#view__section");

const data = fetch("https://fakestoreapi.com/users").then((resolve) =>
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

data.then((users) => {
  console.log(users);
  elContainerTitle.textContent = `Users`;
  users.forEach((user) => {
    console.log();
    elDataContainer.innerHTML += `
        <div class="dataContainer__item">
          <h3 class="item__count">#${user.id}</h3>
          <p class="item__id">UserID: ${user.id}</p>
          <p class="item__info">Name: ${user.name.firstname + " " + user.name.lastname}</p>
          <p class="item__info">Email: ${user.email}</p>
          <button onclick="{
            
            );}" class="view edit">View</button>
        </div>
    `;
  });
});
