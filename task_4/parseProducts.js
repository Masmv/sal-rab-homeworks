// Задание 4.1. Вывод карточек товаров
function parseProducts(json) {
    let data = JSON.parse(json);
    let products = data.products;
    return products;
}
