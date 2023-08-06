function finalPrices(prices: number[]): number[] {

    let output : number [] = []
    
    for (let i = 0; i < prices.length; i++) {
        let currentPrice = prices[i]
        let discount = prices.slice(i + 1).find(element => element <= currentPrice)
        if (discount)
            output.push(currentPrice-discount)
        else 
            output.push(currentPrice)
    }
    
    return output
};