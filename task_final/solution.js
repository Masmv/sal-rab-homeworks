function sendRequest(name, phone, address, goods, sum) {
    let data = {client: name + phone, 
                order: {address, sum}, 
                goods: []
        }

    let countOfGoods = goods.length;

    for (let i = 0; i < countOfGoods; i += 1) {
        data.goods.push({title: goods[i].title, count: goods[i].count});
}

    data.order.address = address;
    //data.order.sum = name + phone + address + goods + sum;

    //data.client = 'Иван';

    let jsonData = JSON.stringify({data});

    return jsonData;
}
