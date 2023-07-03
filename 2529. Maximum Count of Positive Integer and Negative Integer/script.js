var maximumCount = function(nums) {
    let posCount = 0;
    let negCount = 0;
                
    for (let num of nums) {
        if (num > 0) posCount++;
        if (num < 0) negCount++;
        }
                                            
    return Math.max(posCount, negCount);
};