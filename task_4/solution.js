// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {
    let data = JSON.parse(json);
    let products = data.products; 
    return products; 
}



function renderProductsCards(json) {
  clearProducts();
  let products = parseProducts(json);
  length = products.length;
}




// Напишите цикл, в котором перебираете все products от 0 до (length - 1)
// и выполняете addProduct с каждым элементом массива products (передавая элемент массива как аргумент)
