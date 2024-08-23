function contactHandle(event) {
    event.preventDefault();

    const email = event.target.email.value;
    // console.log(email);
    
    const successMessage = document.getElementById('submissionSuccess');
    // console.log(successMessage);

    if (email === '') {
        alert('Please enter a valid email address');
    } else {
        const emailParagraph = document.createElement('p');
        emailParagraph.innerText = `Email: ${email}`;
        // console.log(emailParagraph);

        successMessage.appendChild(emailParagraph);
        alert('Subcription is successful.');
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
            title: "Green Salad",
            imgSrc: "./image/salad.png",
            rating: "5.0",
            price: "$30.00"
        },
        {
            title: "Pizza",
            imgSrc: "./image/pizza 02.png",
            rating: "4.9",
            price: "$40.00"
        },
        {
            title: "Green Beans",
            imgSrc: "./image/mpi - 03.png",
            rating: "4.8",
            price: "$18.00"
        },
        {
            title: "Enchilade",
            imgSrc: "./image/mpi - 02.png",
            rating: "4.7",
            price: "$15.00"
        },
        {
            title: "Chicken Pot Pie",
            imgSrc: "./image/Chicken.png",
            rating: "4.9",
            price: "$22.00"
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





// const additionalProducts = [
//     { name: 'Pasta', rating: '⭐ 4.8', price: '$20.00', img: './image/mpi - 01.png' },
//     { name: 'Tacos', rating: '⭐ 4.7', price: '$12.50', img: './image/mpi - 02.png' },
//     { name: 'Burger', rating: '⭐ 5.0', price: '$17.00', img: './image/mpi - 03.png' },
//     { name: 'Pizza', rating: '⭐ 4.9', price: '$30.00', img: './image/pizza 02.png' },
//     { name: 'Caesar Salad', rating: '⭐ 4.9', price: '$14.50', img: './image/salad.salad.png' },
//     { name: 'Chicken Pot Pie', rating: '⭐ 4.8', price: '$20.00', img: './image/Chicken.png' },
// ];

// const itemContainer = document.getElementById('item-cards');
// const loadMoreBtn = document.getElementById('see-more');
// const seeLessBtn = document.getElementById('see-less');
// const originalCards = itemContainer.innerHTML;


// loadMoreBtn.addEventListener('click', function () { 
//     additionalProducts.forEach(image => {
//         const itemDivImage = document.createElement('div');
//         itemDivImage.classList.add('item-cards');
//         itemDivImage.innerHTML = `
//             <img src="${image.img}" alt="${image.name}">
//             <h1>${image.name}</h1>
//             <p>${image.price}</p>
//             <p>${image.rating}</p>
//             <button> Add To Cart </button>
//         `;
//         const computedStyles = window.getComputedStyle(itemContainer);
//         itemContainer.style[image] = computedStyles.getPropertyValue(image);
//         itemContainer.appendChild(itemDivImage);
//     });

//     loadMoreBtn.style.display = 'none';
//     seeLessBtn.style.display = 'block';
// });

// seeLessBtn.addEventListener('click', function () {
    
//     itemContainer.innerHTML = originalCards;

//     // Hide the "See Less" button and show the "See More" button
//     seeLessBtn.style.display = 'none';
//     loadMoreBtn.style.display = 'block';
// });