const elDataContainer = document.querySelector("#dataContainer");
const elContainerTitle = document.querySelector("#container__title");
const elViewSection = document.querySelector("#view__section");

const data = fetch("https://fakestoreapi.com/users").then((resolve) =>
  resolve.json(),
);

const viewFunc = (
  city,
  street,
  zipcode,
  username,
  passwd,
  firstname,
  lastname,
  phone,
) => {
  elViewSection.style.display = "flex";
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
        <p>Firstname: ${firstname}</p>
        <p>Lastname: ${lastname}</p>
        <p>Username: ${username}</p>
        <p>Password: ${passwd}</p>
        <p>Phone: ${phone}</p>
        <p>City: ${city}</p>
        <p>Street: ${street}</p>
        <p>Zipcode: ${zipcode}</p>
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
            viewFunc('${user.address.city}', '${user.address.street}', '${user.address.zipcode}', '${user.username}', '${user.password}', '${user.name.firstname}', '${user.name.lastname}', '${user.phone}');
          }" class="view edit">View</button>
        </div>
    `;
  });
});
