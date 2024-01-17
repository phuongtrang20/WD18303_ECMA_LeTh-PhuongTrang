function wrapProduct() {
  const url = "http://localhost:3000/products";
  fetch(url)
    .then((wrap) => wrap.json())
    .then((data) => {
      const listProduct = document.getElementById("product__wrap");
      let productsHTML = "";

      data.forEach((item) => {
        productsHTML += `
            <div class="col-12 col-md-4 mb-4">
                    <div class="card h-100">
                        <a href="shop-single.html">
                            <img src="${item.image}" class="card-img-top" alt="...">
                        </a>
                        <div class="card-body">
                            <ul class="list-unstyled d-flex justify-content-between">
                                <li>
                                    <i class="text-warning fa fa-star"></i>
                                    <i class="text-warning fa fa-star"></i>
                                    <i class="text-warning fa fa-star"></i>
                                    <i class="text-muted fa fa-star"></i>
                                    <i class="text-muted fa fa-star"></i>
                                </li>
                                <li class="text-muted text-right">${item.price}</li>
                            </ul>
                            <a href="shop-single.html" class="h2 text-decoration-none text-dark">${item.name}</a>
                            <p class="card-text">
                                ${item.detail}
                            </p>
                        </div>
                    </div>
                </div>`;
      });
      listProduct.innerHTML = productsHTML;
    })
    .catch((error) => {
      console.error("Lỗi khi kết nối:", error);
    });
}
wrapProduct();

function featureProduct() {
  const url = "http://localhost:3000/categories";
  fetch(url)
    .then((response) => response.json())

    .then((data) => {
      const featureProduct = document.getElementById("product__portfolio");
      let optionHTML = "";

      data.forEach((item) => {
        optionHTML += `<option>${item.name}</option> `;
      });
      featureProduct.innerHTML = `<div class="row">
                    <div class="col-md-6 pb-4">
                        <div class="d-flex">
                            <select class="form-control">
                                <option>Tất cả</option>
                                ${optionHTML}
                            </select>
                        </div>
                    </div>
        </div>`;
    })
    .catch((error) => {
      console.error("Lỗi khi lấy dữ liệu:", error);
    });
}
featureProduct();
