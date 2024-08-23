function contactHandle(event) {
    event.preventDefault();

    const email = event.target.email.value;
    
    const successMessage = document.getElementById('submissionSuccess');

    if (email === '') {
        const emailParagraph = document.createElement('p');
        // alert('Please enter a valid email address');
        emailParagraph.innerText = `Please enter a valid email address`;
        successMessage.appendChild(emailParagraph);
    } else {
        const emailParagraph = document.createElement('p');
        emailParagraph.innerText = `Thanks for subscribing to our newsletter. Your email address "${email}" has been added to our mailing list.`;

        successMessage.appendChild(emailParagraph);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const seeMoreBtn = document.getElementById("see-more");
    const seeLessBtn = document.getElementById("see-less");
    const itemCards = document.getElementById("item-cards");

    const newItems = [
        {
            title: "Pasta",
            imgSrc: "./image/1.png",
            rating: "4.8",
            price: "$12.00"
        },
        {
            title: "Healthy Breakfast",
            imgSrc: "./image/2.png",
            rating: "5.0",
            price: "$35.00"
        },
        {
            title: "Combo Food",
            imgSrc: "./image/3.png",
            rating: "4.9",
            price: "$26.00"
        },
        {
            title: "Fruit Juice",
            imgSrc: "./image/4.png",
            rating: "4.8",
            price: "$11.50"
        },
        {
            title: "Shomi Rice",
            imgSrc: "./image/5.png",
            rating: "4.7",
            price: "$17.00"
        },
        {
            title: "Mushrom Salad",
            imgSrc: "./image/Chicken.png",
            rating: "4.9",
            price: "$45.00"
        }
    ];

    seeMoreBtn.addEventListener("click", function () {
        newItems.forEach(item => {
            const itemCard = document.createElement("div");
            itemCard.classList.add("item-card");

            itemCard.innerHTML = `
                <div class="item-img">
                    <img src="${item.imgSrc}" alt="${item.title}">
                </div>
                <div class="item-title">
                    <div class="item-card-title">
                        <h1>${item.title}</h1>
                        <button class="item-desc">Add To Cart</button>
                    </div>
                    <div class="item-rating-and-price">
                        <p><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 1L8.854 4.6204L13 5.20452L10 8.02103L10.708 12L7 10.1204L3.292 12L4 8.02103L1 5.20452L5.146 4.6204L7 1Z"
                                fill="#F48E28" stroke="#F48E28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg> ${item.rating}</p>
                        <p>${item.price}</p>
                    </div>
                </div>
            `;

            itemCards.appendChild(itemCard);
        });

        seeMoreBtn.style.display = "none";
        seeLessBtn.style.display = "block";
    });

    seeLessBtn.addEventListener("click", function () {
        const allItemCards = document.querySelectorAll(".item-card");
        allItemCards.forEach((card, index) => {
            if (index >= 6) {
                card.remove();
            }
        });

        seeMoreBtn.style.display = "block";
        seeLessBtn.style.display = "none";
    });
});


const shop = document.getElementById('item-cards')

// let generateShop = () => {
//      shop.innerHTML = dataItemsList.map((x) => {
//              let { id, name, price, img } = x
// //         return `
// //                 <div class = "shop_item" id = product-id-${id}>
// //                     <img src = "${img}" alt="" />
// //                     <div class="product_info">
// //                         <h5>${name}</h5>
// //                     </div>
// //                 </div>
// //         `
//      })
//  }

//  generateShop()

let add_to_cart = (id, name, price, img) => {
    console.log(id);
}