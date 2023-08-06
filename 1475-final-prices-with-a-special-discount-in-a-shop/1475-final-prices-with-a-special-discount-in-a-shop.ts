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

/*
# Rank 122,976
# Date 08/05/2023
# Runtime: 68 ms, faster than 77.05%
# Memory Usage: 49.1 MB, less than 9.84%
*/