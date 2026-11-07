// 13
// ამოცანა 7 — პროდუქტის ბარათის აგება (createProductCard)

export function createProductCard(product) {
    const card = document.createElement("article");
    card.classList.add("product-card");
    card.dataset.id = product.id;

    const img = document.createElement("img");
    img.src = product.image || ""; 
    img.alt = product.name;
    img.className = "product-img";

    const category = document.createElement("span");
    category.textContent = product.category;
    category.className = "product-category";
    
    const title = document.createElement("h3");
    title.className = "product-title";
    title.textContent = product.name;

    const description = document.createElement("p");
    description.textContent = product.description;
    description.classList.add("product-description");

    const price = document.createElement("p");
    price.className = "product-price";

    if (product.isSale && product.oldPrice) {
        price.innerHTML = `<span class="old-price">₾ ${product.oldPrice}</span> ₾ ${product.price}`;
    } else {
        price.textContent = `₾ ${product.price}`;
    }

    // 14
    // ამოცანა 4 — "კალათაში დამატების" ღილაკი და Event Delegation
    const addBtn = document.createElement("button");
    addBtn.classList.add("btn-add");
    
    if (product.inStock === false) {
        addBtn.disabled = true;
        addBtn.textContent = "მარაგი ამოწურულია";
    } else {
        addBtn.textContent = "კალათაში დამატება";
    }
    
    card.append(img, category, title, description, price, addBtn);
    return card;
}


// ამოცანა 8 — კატალოგის რენდერინგი (renderCatalog)
export function renderCatalog(productsList) {
    const container = document.querySelector("#products-grid");
    if (!container) return;
 
    container.replaceChildren();
 
    if (productsList.length === 0) {
        const emptyMsg = document.createElement("p");
        emptyMsg.classList.add("empty-msg");
        emptyMsg.textContent = "პროდუქტები ვერ მოიძებნა.";
        container.appendChild(emptyMsg);
        return;
    }
 
    for (const product of productsList) {
        const card = createProductCard(product);
        container.appendChild(card);
    }
}
 
export function renderFeatured(productsList) {
    const container = document.querySelector("#featured-grid");
    if (!container) return;
 
    container.replaceChildren();
 
    const featuredProducts = productsList.slice(0, 2);
 
    for (const product of featuredProducts) {
        const card = createProductCard(product);
        container.appendChild(card);
    }
}