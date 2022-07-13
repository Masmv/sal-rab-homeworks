function sendRequest(name, phone, address, goods, sum) {
    let data = {client: name + " " + phone, 
                order: {address, sum}, 
                goods: []
        }

    let countOfGoods = goods.length;

    for (let i = 0; i < countOfGoods; i += 1) {
        data.goods.push({title: goods[i].title, count: goods[i].count});
}
    
    data.order.address = {street: 'ул. ' + address.street, house: 'дом' + address.house, address.entrance + entrance: 'подъезд', address.floor + floor: 'этаж', flat: 'кв' + address.flat};
    
    //data.order.sum = name + phone + address + goods + sum;

    //data.client = 'Иван';

    let jsonData = JSON.stringify({data});

    return jsonData;
}
