const $cate = document.getElementById("cate");
const API="https://api.escuelajs.co/api/v1/categories?offset=0&limit=10";

const cateogorias =async() => {
    const response = await fetch(API);
    const categorys =  await response.json();

    const output = categorys?.map((category)=>{
        return`
        <article class="Card">
        <img src="${category.image[0]}"/>
        <h2>${category.name}</h2>
        </article>
        `;
    }).join('');

    let newItem = document.createElement('section')
    newItem.classList.add("Items")
    newItem.innerHTML = output;
    $cate.appendChild(newItem);
}

cateogorias();


