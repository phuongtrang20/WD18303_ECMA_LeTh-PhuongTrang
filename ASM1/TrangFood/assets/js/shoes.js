/// ASM 1
// Hiển thị sản phẩm
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

//Hiển thị danh mục
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

// function cartProduct() {
//   const url = "http://localhost:3000/order_details";
//   fetch(url)
//     .then((cart) => cart.json())
//     .then((data) => {
//       const cartProduct = document.getElementById("product__cart");
//       let cartHTML = `<table class="table table-bordered">
//     <thead>
//         <tr>
//             <th>STT</th>
//             <th>Ảnh đại diện</th>
//             <th>Tên sản phẩm</th>
//             <th>Số lượng</th>
//             <th>Đơn giá</th>
//             <th>Thành tiền</th>
//             <th>Hành động</th>
//         </tr>
//     </thead>
//     <tbody id="datarow">`;
//     data.forEach(cart => {
//       cartHTML += `<tr>
//       <td>1</td>
//       <td>
//           <img src="${cart.image}" class="hinhdaidien">
//       </td>
//       <td>Apple Ipad 4 Wifi 16GB</td>
//       <td class="text-right">2</td>
//       <td class="text-right">11,800,000.00</td>
//       <td class="text-right">23,600,000</td>
//       <td> -->
//           <!-- <a id="delete_1" data-sp-ma="2" class="btn btn-danger btn-delete-sanpham">
//               <i class="fa fa-trash" aria-hidden="true"></i> Xóa
//           </a>
//       </td>
//   </tr>`
//     });
//     cartHTML += `</tbody>
//     </table>`;
//     cartProduct.innerHTML = cartHTML;
//     });
// }
