const div = document.querySelector(".div");
const add = document.querySelector(".add");
const remove = document.querySelector(".remove");

add.addEventListener("click", () => {
  div.innerHTML = `<h2>Loading...</h2>`;
  fetch("https://dummyjson.com/products")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      let content = "";
      data.products.forEach((user) => {
        if (user.price < 50) {
          content += `<div class="card w-25">
                            <img src="${user.images[0]}" class="card-img-top">
                            <div class="card-body">
                              <h5 class="card-title">${user.title}</h5>
                              <p class="card-text">${user.description}</p>
                              <p class="card-text text-success fs-3">$ ${user.price}</p>
                              <button class="btn btn-primary w-100">View Products</button>
                            </div>
                      </div>`;
        }
      });
      div.innerHTML = content;
    });
});

remove.addEventListener("click", () => {
  div.innerHTML = "";
});
