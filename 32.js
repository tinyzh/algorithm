const maxPro = (prices) => {
    let minPrices = Number.MAX_VALUE
    let maxPrices = 0
    for(let i = 0; i < prices.length; i++){
        if(prices[i] < minPrices){
            minPrices = prices[i]
        }else if(prices[i] - minPrices > maxPrices){
            maxPrices = prices[i] - minPrices
        }
    }
    return maxPrices
}