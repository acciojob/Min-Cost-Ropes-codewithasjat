function mincost(arr)
{ 
//write your code here
// return the min cost
	function mincost(arr) { 
    let cost = 0;

    while (arr.length > 1) {
        // Sort in ascending order
        arr.sort((a, b) => a - b);

        // Take two smallest ropes
        let first = arr.shift();
        let second = arr.shift();

        // Connect them
        let sum = first + second;

        // Add to total cost
        cost += sum;

        // Push new rope back
        arr.push(sum);
    }

    return cost;
}

module.exports = mincost;

	
  
}

module.exports=mincost;
