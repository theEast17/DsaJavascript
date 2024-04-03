const stockPrediction = (stocks) => {

    if (stocks.length < 2) {
        return 0; 
    }
    
    // Brtute force
    // let maxProfit = 0;
    // for (let i = 0; i < stocks.length; i++) {
    //     if (stocks[i] < stocks[i + 1]) {
    //         for (let j = i + 1; j < stocks.length; j++) {
    //             if (stocks[j] - stocks[i] > maxProfit) {
    //                 maxProfit = stocks[j] - stocks[i]
    //             }
    //         }
    //     }
    // }
    // return maxProfit

    // greedy technique
    // we want stock price less and profit should be maximum

    let min=stocks[0]  
    let maxProfit=0  
    for(let i=1;i<stocks.length;i++){
        if(stocks[i]<min){
            min=stocks[i]
        }else{
            if(stocks[i]-min > maxProfit){
                maxProfit=stocks[i]-min
            }
        }
    }
    return maxProfit


}


console.time('number')
console.log(stockPrediction([10, 7, 5, 8, 11, 9]))
console.timeEnd('number')