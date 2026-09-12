let e=document.getElementById("app");(async()=>{let t=await fetch("https://api.escuelajs.co/api/v1/products?offset=5&limit=10"),a=await t.json(),s=a?.map(e=>`
    <article class="Card">
    <img src="${e.images[0]}"/>
    <h2>
    ${e.title}<small>${e.price}</small>
    </h2>
    </article>
    `).join(""),i=document.createElement("section");i.classList.add("Items"),i.innerHTML=s,e.appendChild(i)})();
//# sourceMappingURL=Proyecto-Parcel.3960290b.js.map
