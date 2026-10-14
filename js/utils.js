export function formatPrice(amount) {
    return amount + " GEL";
}


export function getProductBadge({inStock, isSale, isNew}) {
    if (!inStock) {
        return "Sold out";
    } else if (isSale) {
        return "Sale";
    } else if (isNew) {
        return "New";
    } else {
        return "Regular";
    }
}

export function applyDiscount(product, discountPercent) {
    const newPrice = product.price - (product.price * discountPercent);
    return {
        ...product, 
        price: newPrice 
    };
}
export function createDiscountCalculator(rate) {
    return function(price) {
        return price - (price * rate);
    };
}