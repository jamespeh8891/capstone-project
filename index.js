let bakerBtn = document.querySelector("#baker-btn");
let bakerBtnTwo = document.querySelector("#baker-btn-2");
let deathBtn = document.querySelector("#death-btn");
let deathBtnTwo = document.querySelector("#death-btn-2");
let primBtn = document.querySelector("#prim-btn");
let primBtnTwo = document.querySelector("#prim-btn-2");
let redWheel = document.querySelector("#red-wheel");
let blueWheel = document.querySelector("#blue-wheel");
let orangeWheel = document.querySelector("#orange-wheel");
let silverTruck = document.querySelector("#silver-truck");
let blackTruck = document.querySelector("#black-truck");
let orangeTruck = document.querySelector("#orange-truck");
let cartCount = document.querySelector('#cart-count');

let count = 0;



function updateCartCount(){
  cartCount.textContent = count;

}
function addToCart(){
  count += 1;
  updateCartCount()
  console.log('hit add to cart')
}

bakerBtn.addEventListener("click", addToCart);
bakerBtnTwo.addEventListener("click", addToCart);
deathBtn.addEventListener("click", addToCart);
deathBtnTwo.addEventListener("click", addToCart);
primBtn.addEventListener("click", addToCart);
primBtnTwo.addEventListener("click", addToCart);
redWheel.addEventListener("click", addToCart);
blueWheel.addEventListener("click", addToCart);
orangeWheel.addEventListener("click", addToCart);
silverTruck.addEventListener("click", addToCart);
blackTruck.addEventListener("click", addToCart);
orangeTruck.addEventListener("click", addToCart);



const favReq = () => {
  axios.get('http://localhost:5500/api/heart')
  .then(res => {
    const data = res.data;
    alert(data)
    
  })
}
let heartBtn = document.querySelectorAll('#heart');
heartBtn.forEach(heart => heart.addEventListener("click", favReq))

let formInput = document.querySelector('#email')
let submitBtn = document.querySelector('#submit')

 // axios.post(url, body)
function saveEmail() {
  axios.post('http://localhost:5500/api/email', {email: formInput.value})
  .then(res =>{
    console.log(res.data)
    const data = res.data;
    alert(data)
  })
}

submitBtn.addEventListener("click", saveEmail)