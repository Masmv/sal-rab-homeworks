function sendRequest(name, phone, address, goods, sum) {
    let data = {client: name + " " + phone, 
                order: {address, sum}, 
                goods: []
        }

    let countOfGoods = goods.length;

    for (let i = 0; i < countOfGoods; i += 1) {
        data.goods.push({title: goods[i].title, count: goods[i].count});
}
    
    data.order.address = 'ул. ' + address.street + ', дом ' + address.house + ', ' + address.entrance + ' подъезд, ' + address.floor + ' этаж' + ', кв ' + address.flat;
    //'ул. ' + address.street, 'дом ' + address.house, address.entrance + ' подъезд', address.floor + ' этаж' , 'кв' + address.flat;
    //{street, house, entrance, floor, flat}
    //{'ул. ' + address.street, 'дом ' + address.house, address.entrance + ' подъезд', address.floor + ' этаж' , 'кв' + address.flat};
    
    //adress = {'ул. ' + address.street, 'дом ' + address.house, address.entrance + ' подъезд', address.floor + ' этаж' , 'кв' + address.flat};
    //data.order.sum = name + phone + address + goods + sum;

    //data.client = 'Иван';

    let jsonData = JSON.stringify({data});

    return jsonData;
}
