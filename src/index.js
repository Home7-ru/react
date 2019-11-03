/**
 * Created by SadAdmin on 12.01.2019.
 */
//Параметры по умолчанию
//было так
function fetchOrders(count,start){
    if(count===undefined){
        count =10;

    }
    if(start===undefined){
        start=0;
    }
}
//стало так
function fetchOrders(count=10,start=0){
    console.log('count=',count,'start=',start);
}
//fetchOrders(15);

// так можно установить обьект в пораметрах по умолчанию
function findProducts(opts={ minPrice: 10, maxPrice: 20}){
    console.log(opts);
}
findProducts();