let products = [
  {
    id: 1,
    title: "BESTSELLER",
    image: "./images/p1.png",
    price: 1200,
  },

  {
    id: 2,
    title: "SOLITAIRE",
    image: "./images/p2.png",
    price: 1200,
  },

  {
    id: 3,
    title: "PLATINUM",
    image: "./images/p3.png",
    price: 1200,
  },

  {
    id: 4,
    title: "CHEAP",
    image: "./images/p4.png",
    price: 1200,
  },
];
let catiegory = document.querySelector(".products");
let show = products.map((item) => {
  return `
   <div class="cart">
            <img src="${item.image}" alt="">
            <h3>${item.title}\</h3>
            <p>Trendy models of our experts, for the love of your life selected</p>
            <button onclick="addcart(${item.id})">Discover now</button>
        </div>
    `;
});
catiegory.innerHTML = show.join("");

let productss = [
  {
    id: 1,
    title: "123GOLD",
    image: "./images/а1.png",
    price: 1200,
  },
  {
    id: 2,
    title: "123GOLD",
    image: "./images/а2.png",
    price: 1200,
  },
  {
    id: 3,
    title: "123GOLD",
    image: "./images/а3.png",
    price: 1200,
  },
  {
    id: 4,
    title: "123GOLD",
    image: "./images/а4.png",
    price: 1200,
  },
  {
    id: 5,
    title: "123GOLD",
    image: "./images/а5.png",
    price: 1200,
  },
  {
    id: 6,
    title: "123GOLD",
    image: "./images/а6.png",
    price: 1200,
  },
  {
    id: 7,
    title: "123GOLD",
    image: "./images/а7.png",
    price: 1200,
  },
  {
    id: 8,
    title: "123GOLD",
    image: "./images/а8.png",
    price: 1200,
  },
  {
    id: 9,
    title: "123GOLD",
    image: "./images/а9.png",
    price: 1200,
  },
  {
    id: 10,
    title: "123GOLD",
    image: "./images/а10.png",
    price: 1200,
  },
];

let category = document.querySelector(".productss");

let itemsHTML = productss.map((item) => {
  return `
    <div class="cartt">
      <img src="${item.image}" alt="gold ring">
      <h1>${item.title}</h1>
      <p>Gold 585 | 0,100 ct. | tw, si<br>€ 365,-</p>
    </div>
  `;
});

category.innerHTML = itemsHTML.join("");
// ---------------------------------------------------

let openmodal = document.getElementById("open");
let closemodal = document.getElementById("close");
let modal = document.querySelector(".modal");

openmodal.onclick = function () {
  modal.style.display = "block";
};

closemodal.onclick = function () {
  modal.style.display = "none";
};
// ===================================================================
let array = [];
function addcart(id) {
  let frindproduct = products.find((data) => data.id == id);
  if (frindproduct) {
    array.push(frindproduct);
  }
  Counter();
  displayCart();
}

// ===============================================================
let count = document.querySelector(".count");

function Counter() {
  count.innerHTML = array.length;
}
// ===============================================================

let modalmain = document.querySelector(".modal-main");

function displayCart() {
  let mapProduct = array.map((x, index) => {
    return `
            <div class="mcart">
                <img src="${x.image}" alt="">
                <span>${x.title}</span>
                <span>${x.price}$</span>
                <button class="delete-btn" data-index="${index}">×</button>
            </div>
        `;
  });

  modalmain.innerHTML = mapProduct.join("");

  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const index = parseInt(this.getAttribute("data-index"));
      array.splice(index, 1);
      Counter();
      displayCart();
    });
  });
}
// =============
