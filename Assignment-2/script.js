// Making some fake products
products = [
  {
    name: "Cadbury Celebrations Box",
    price_inr: 550,
    image: "https://m.media-amazon.com/images/I/613FVN20uxL._AC_UL320_.jpg",
    description:
      "Cadbury Celebrations Rich Dry Fruit Collection Chocolate Gift Box, 177 g",
    weight: "177g",
    rating: 4.2,
  },
  {
    name: "Cadbury Celebrations",
    price_inr: 135,
    image: "https://m.media-amazon.com/images/I/71F3fTRGbjL._AC_UL320_.jpg",
    description: "Cadbury Celebrations Chocolate Gift Pack, 130.9 g",
    weight: "75g",
    rating: 4.5,
  },
  {
    name: "Gems",
    price_inr: 259,
    image: "https://m.media-amazon.com/images/I/71LOyIbuwrL._AC_UL320_.jpg",
    description:
      "Cadbury Gems Chocolate Home Treats Pack, 142.2g/126.4g (Grammage may vary)",
    weight: "60g",
    rating: 4.0,
  },
  {
    name: "Amul Chocomini",
    price_inr: 499,
    image: "https://m.media-amazon.com/images/I/71KZQkANkFS._AC_UL320_.jpg",
    description: "Amul Chocomini Chocolate, 250 g",
    weight: "60g",
    rating: 4.0,
  },

  {
    name: "Dairy Milk Silk",
    price_inr: 150,
    image: "https://m.media-amazon.com/images/I/61LojzJ+PuL._AC_UL320_.jpg",
    description: "Cadbury Dairy Milk Silk Chocolate Bar, Pack of 3 x 150g",
    weight: "50g",
    rating: 4.2,
  },
  {
    name: "HERSHEY’S KISSES",
    price_inr: 123,
    image: "https://m.media-amazon.com/images/I/512DJzwos7L._AC_UL320_.jpg",
    description:
      "HERSHEY’S KISSES Milk Chocolate | Melt-in-mouth Chocolates 108g",
    weight: "75g",
    rating: 4.5,
  },
  {
    name: "Chocolate Bar",
    price_inr: 588,
    image:
      "https://m.media-amazon.com/images/I/61syubrGt9L._AC_SX148_SY213_FMwebp_QL65_.jpg",
    description:
      "Galaxy Silky Smooth Milk Chocolate Bar | Loaded with the Goodness of Milk and Cocoa | Imported Smooth Chocolate | Perfect for Sharing with Family & Friends | 56 g | Pack of 8",
    weight: "60g",
    rating: 4.0,
  },
  {
    name: "Cadbury Celebrations Box",
    price_inr: 550,
    image: "https://m.media-amazon.com/images/I/613FVN20uxL._AC_UL320_.jpg",
    description:
      "Cadbury Celebrations Rich Dry Fruit Collection Chocolate Gift Box, 177 g",
    weight: "177g",
    rating: 4.2,
  },
  {
    name: "Cadbury Celebrations",
    price_inr: 135,
    image: "https://m.media-amazon.com/images/I/71F3fTRGbjL._AC_UL320_.jpg",
    description: "Cadbury Celebrations Chocolate Gift Pack, 130.9 g",
    weight: "75g",
    rating: 4.5,
  },
  {
    name: "Gems",
    price_inr: 259,
    image: "https://m.media-amazon.com/images/I/71LOyIbuwrL._AC_UL320_.jpg",
    description:
      "Cadbury Gems Chocolate Home Treats Pack, 142.2g/126.4g (Grammage may vary)",
    weight: "60g",
    rating: 4.0,
  },
  {
    name: "Amul Chocomini",
    price_inr: 499,
    image: "https://m.media-amazon.com/images/I/71KZQkANkFS._AC_UL320_.jpg",
    description: "Amul Chocomini Chocolate, 250 g",
    weight: "60g",
    rating: 4.0,
  },

  {
    name: "Dairy Milk Silk",
    price_inr: 150,
    image: "https://m.media-amazon.com/images/I/61LojzJ+PuL._AC_UL320_.jpg",
    description: "Cadbury Dairy Milk Silk Chocolate Bar, Pack of 3 x 150g",
    weight: "50g",
    rating: 4.2,
  },
  {
    name: "HERSHEY’S KISSES",
    price_inr: 123,
    image: "https://m.media-amazon.com/images/I/512DJzwos7L._AC_UL320_.jpg",
    description:
      "HERSHEY’S KISSES Milk Chocolate | Melt-in-mouth Chocolates 108g",
    weight: "75g",
    rating: 4.5,
  },
  {
    name: "Chocolate Bar",
    price_inr: 588,
    image:
      "https://m.media-amazon.com/images/I/61syubrGt9L._AC_SX148_SY213_FMwebp_QL65_.jpg",
    description:
      "Galaxy Silky Smooth Milk Chocolate Bar | Loaded with the Goodness of Milk and Cocoa | Imported Smooth Chocolate | Perfect for Sharing with Family & Friends | 56 g | Pack of 8",
    weight: "60g",
    rating: 4.0,
  },
];

const chocolatesContainer = document.getElementById("chocolates-container");
const customPack = document.getElementById("custom-pack");

let selectedChocolates = [];
let totalPrice = 0;

function renderChocolates() {
  chocolatesContainer.innerHTML = "";

  products.forEach((chocolate) => {
    const chocolateCard = document.createElement("div");
    chocolateCard.classList.add("chocolate-card");

    const image = document.createElement("img");
    image.classList.add("chocolate-image");
    image.src = chocolate.image;
    chocolateCard.appendChild(image);

    const name = document.createElement("p");
    name.textContent = chocolate.name;
    chocolateCard.appendChild(name);

    const price = document.createElement("p");
    price.textContent = `${chocolate.price_inr} ₹`;
    chocolateCard.appendChild(price);

    const addButton = document.createElement("button");
    addButton.textContent = "Add to Pack";
    addButton.addEventListener("click", () => addToCustomPack(chocolate));
    chocolateCard.appendChild(addButton);

    chocolatesContainer.appendChild(chocolateCard);
  });
}

renderChocolates();

function addToCustomPack(chocolate) {
  const index = selectedChocolates.findIndex(
    (item) => item.name === chocolate.name
  );

  if (index === -1 && selectedChocolates.length < 8) {
    selectedChocolates.push(chocolate);
    totalPrice += chocolate.price_inr;
  } else if (index !== -1) {
    selectedChocolates.splice(index, 1);
    totalPrice -= chocolate.price_inr;
  }

  const selectedChocolatesList = document.getElementById("selected-chocolates");
  selectedChocolatesList.innerHTML = ""; // Clear the list and re-render

  selectedChocolates.forEach((choco) => {
    const li = document.createElement("li");
    li.textContent = `${choco.name} - ${choco.price_inr} INR`;
    selectedChocolatesList.appendChild(li);
  });

  const totalPriceEle = document.getElementById("total-price");
  totalPriceEle.textContent = totalPrice;

  const addButton = document.querySelector(
    `#chocolates-container .chocolate-card:nth-child(${
      products.indexOf(chocolate) + 1
    }) button`
  );
  addButton.textContent = index === -1 ? "Check" : "Add to Pack";
  addButton.classList.toggle("check-button", index === -1);
  addButton.disabled = false;
}
