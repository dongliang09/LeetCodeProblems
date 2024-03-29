/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {

    let stackP = [p];
    let stackQ = [q];
    while (stackP.length) {
        let currentP = stackP.pop();
        let currentQ = stackQ.pop();

        if (currentP !== null && currentQ !== null) {

            if (currentP.val !== currentQ.val) return false

            let currentPLeft = currentP.left === null ? "null" : currentP.left.val.toString();
            let currentQLeft = currentQ.left === null ? "null" : currentQ.left.val.toString();
            let currentPRight = currentP.right === null ? "null" : currentP.right.val.toString();
            let currentQRight = currentQ.right === null ? "null" : currentQ.right.val.toString();
            let stringP = currentPLeft + " " + currentPRight;
            let stringQ = currentQLeft + " " + currentQRight;
            if (stringP !== stringQ) return false;

            if (currentP.left) stackP.push(currentP.left);
            if (currentP.right) stackP.push(currentP.right);
            if (currentQ.left) stackQ.push(currentQ.left);
            if (currentQ.right) stackQ.push(currentQ.right);

        } else if (currentP === null && currentQ === null) return true
        else return false


    }
    
    return true;
};


/**

Rank 239,836
Runtime: 58 ms, faster than 94.31%
Memory Usage: 42.8 MB, less than 6.21 %

====================test case ==============
[390,255,2266,-273,337,1105,3440,-425,4113,null,null,600,1355,3241,4731,-488,-367,16,null,565,780,1311,1755,3075,3392,4725,4817,null,null,null,null,-187,152,395,null,728,977,1270,null,1611,1786,2991,3175,3286,null,164,null,null,4864,-252,-95,82,null,391,469,638,769,862,1045,1138,null,1460,1663,null,1838,2891,null,null,null,null,3296,3670,4381,null,4905,null,null,null,-58,null,null,null,null,null,null,null,null,734,null,843,958,null,null,null,1163,1445,1533,null,null,null,2111,2792,null,null,null,3493,3933,4302,4488,null,null,null,null,null,null,819,null,null,null,null,1216,null,null,1522,null,1889,2238,2558,2832,null,3519,3848,4090,4165,null,4404,4630,null,null,null,null,null,null,1885,2018,2199,null,2364,2678,null,null,null,3618,3751,null,4006,null,null,4246,null,null,4554,null,null,null,1936,null,null,null,null,2444,2642,2732,null,null,null,null,null,null,null,4253,null,null,null,null,2393,2461,null,null,null,null,4250,null,null,null,null,2537]

[390,255,2266,-273,337,1105,3440,-425,4113,null,null,600,1355,3241,4731,-488,-367,16,null,565,780,1311,1755,3075,3392,4725,4817,null,null,null,null,-187,152,395,null,728,977,1270,null,1611,1786,2991,3175,3286,null,164,null,null,4864,-252,-95,82,null,391,469,638,769,862,1045,1138,null,1460,1663,null,1838,2891,null,null,null,null,3296,3670,4381,null,4905,null,null,null,-58,null,null,null,null,null,null,null,null,734,null,843,958,null,null,null,1163,1445,1533,null,null,null,2111,2792,null,null,null,3493,3933,4302,4488,null,null,null,null,null,null,819,null,null,null,null,1216,null,null,1522,null,1889,2238,2558,2832,null,3519,3848,4090,4165,null,4404,4630,null,null,null,null,null,null,1885,2018,2199,null,2364,2678,null,null,null,3618,3751,null,4006,null,null,4246,null,null,4554,null,null,null,1936,null,null,null,null,2444,2642,2732,null,null,null,null,null,null,null,4253,null,null,null,null,2461,2393,null,null,null,null,4250,null,null,null,null,2537]


 */