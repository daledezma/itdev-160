//welcome message
var user = "visitor! ";
var salutation = "Hello ";
var greeting = salutation + user + "Here are my product reviews.";
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

//
var sstPrice = 218.71;
    sstDiscount = 196.84;
    sstPriceEl = document.getElementById("sst-price");
    sstDiscountPriceEl = document.getElementById("sst-discount");
sstPriceEl.textContent = sstPrice.toFixed(2);
sstDiscountPriceEl.textContent = sstDiscount.toFixed(2);

var chainPrice = 146.29;
    chainDiscount = 131.66;
    chainPriceEl = document.getElementById("chain-price");
    chainDiscountPriceEl = document.getElementById("chain-discount");
chainPriceEl.textContent = chainPrice.toFixed(2);
chainDiscountPriceEl.textContent = chainDiscount.toFixed(2);

var manifoldPrice = 1333.32;
    manifoldDiscount = 1199.99;
    manifoldPriceEl = document.getElementById("manifold-price");
    manifoldDiscountPriceEl = document.getElementById("manifold-discount");
manifoldPriceEl.textContent = manifoldPrice.toFixed(2);
manifoldDiscountPriceEl.textContent = manifoldDiscount.toFixed(2);


    