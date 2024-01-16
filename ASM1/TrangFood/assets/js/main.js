import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
  child,
  push,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyDFvPr7IRoFCqzksdXwrAkhIcHNF84kGb4",
    authDomain: "phuongtrang-f3f13.firebaseapp.com",
    databaseURL: "https://phuongtrang-f3f13-default-rtdb.firebaseio.com",
    projectId: "phuongtrang-f3f13",
    storageBucket: "phuongtrang-f3f13.appspot.com",
    messagingSenderId: "1019234783937",
    appId: "1:1019234783937:web:ce44362026f890b12aba40",
    measurementId: "G-2DC5JP63WE"
  };

initializeApp(firebaseConfig);

const dbRef = ref(getDatabase());






// fetch("http://localhost:3000/products")
function updateProductList() {
    const productList = document.querySelector(".product__wrap");
    productList.innerHTML = "";
    productList.innerHTML = "";
  
    get(child(dbRef, "products"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const products = snapshot.val();
          console.log(products);
          products?.map((product)=>{
            console.log(product);
            const div = document.createElement("div");
            div.classList = `col-11 col-sm-6 col-lg-6 mt-5`
            let htmls= `              <div class="row product__wrap">
            <div class="col-md-4">
                <div class="card mb-4 product-wap rounded-0">
                    <div class="card rounded-0">
                        <img class="card-img rounded-0 img-fluid" src="assets/img/${product.img}">
                        <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                            <ul class="list-unstyled">
                                <li><a class="btn btn-success text-white" href="shop-single.html"><i class="far fa-heart"></i></a></li>
                                <li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="far fa-eye"></i></a></li>
                                <li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fas fa-cart-plus"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-body">
                        <a href="shop-single.html" class="h3 text-decoration-none">${product.name}</a>
                        <ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
                            <li>M/L/X/XL</li>
                            <li class="pt-2">
                                <span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                <span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                <span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                <span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                <span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                            </li>
                        </ul>
                        <ul class="list-unstyled d-flex justify-content-center mb-1">
                            <li>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-muted fa fa-star"></i>
                                <i class="text-muted fa fa-star"></i>
                            </li>
                        </ul>
                      <p class="text-center mb-0">${product.price}</p>
                    </div>
                </div>
            </div>
            </div>`
        div.innerHTML = htmls
        productList.appendChild(div);
          })
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  updateProductList();
