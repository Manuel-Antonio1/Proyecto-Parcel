let e=document.getElementById("cate");(async()=>{let t=await fetch("https://api.escuelajs.co/api/v1/categories?offset=0&limit=10"),a=await t.json(),i=a?.map(e=>`
        <article class="Card">
        <img src="${e.image[0]}"/>
        <h2>${e.name}</h2>
        </article>
        `).join(""),c=document.createElement("section");c.classList.add("Items"),c.innerHTML=i,e.appendChild(c)})();
//# sourceMappingURL=categorias.0c5a06a1.js.map
