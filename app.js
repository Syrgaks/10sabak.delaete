//  1  ----------------------------------------------------------------
// const title = document.querySelectorAll("h1");
// console.log(title);

// title[1].textContent = "maks"

// ---------------------------------------------------------------------





//  2  ---------------------------------------------------------------

// const del = document.querySelector("#del")
// const btn = document.querySelector("#btn")

// btn.onclick = () => {
//     del.innerHTML= "text";
// };

// ------------------------------------------------------------------





// 3 -------------------------------------------------------------

// const input = document.querySelector("#input")
// const text = document.querySelector("#text")

// input.addEventListener('input' , (e) => {
//     text.textContent = e.target.value;
// })

// ----------------------------------------------------------------





// 4 ------------------------------------------------------------------------------
// const addButton = document.getElementById('addButton');
// const removeButton = document.getElementById('removeButton');
// const itemList = document.getElementById('itemList');

// addButton.addEventListener('click', () => {
    
//     const newItem = document.createElement('li');
//     newItem.textContent = `Item ${itemList.children.length + 1}`;

    
//     itemList.appendChild(newItem);
// });


// removeButton.addEventListener('click', () => {
    
//     if (itemList.children.length > 0) {
        
//         itemList.removeChild(itemList.lastElementChild);
//     } else {
        
//     }
// });

// --------------------------------------------------------------------------------





// 5  ---------------------------------------------------------------------------

const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

openModal.addEventListener("click", () => {
   modal.style.display = "block";
   overlay.style.display = "block";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    overlay.style.display = "none";
});

overlay.addEventListener("click", () => {
    modal.style.display = "none";
    overlay.style.display = "none";
});