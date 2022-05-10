/* write a function that divides an array into sub arrays based on 'n' number given
where 'n' is the length of each sub array 
so basically put 
subarrays ([1,2,3,4,5,6,7,8,9,10],2) -> [[1,2],[3,4],[5.6],[7,8],[9,10]]
*/

function subarray (array,n){
    const x = [];
    //in arrays the computer starts counting from 0 not one 
    const y = [];
    for(let i = 0; i < array.length; i++) {
    x.push(array[i])
    }
    if(x.length$n === 0) {
        y.push(x)
        x=[]
    }
    else {
        y.push(x)
    }
    return[... new set(x)]
//when you have an array you need to intergrate it within a forloop
}



/* craete a function that re-orders the number of element in the array based on
ascending or descending order
*/ 

function order(arr,descritptivestringtnamefortristanlmaoxdletsgogetthisbreadihdfhoadsfagusfgsafgiasassadsafaijasjifhasduohasoudgauhfujiasjiodasjodhasdbnasduasnuasdaudasudnasasuuuuuuuuuhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhdMddamndanielssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu){
for (let i = 0; i < arr.length; i++) {
    if(descritptivestringtnamefortristanlmaoxdletsgogetthisbreadihdfhoadsfagusfgsafgiasassadsafaijasjifhasduohasoudgauhfujiasjiodasjodhasdbnasduasnuasdaudasudnasasuuuuuuuuuhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhdMddamndanielssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu == "des"){
        arr[i] = arr[i].sort((a, b) => b - a);
    }
    if(descritptivestringtnamefortristanlmaoxdletsgogetthisbreadihdfhoadsfagusfgsafgiasassadsafaijasjifhasduohasoudgauhfujiasjiodasjodhasdbnasduasnuasdaudasudnasasuuuuuuuuuhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhdMddamndanielssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu == "asc"){
        arr[i] = arr[i].sort((a, b) => a - b);
    }
}
return arr 
}


console.log(order([694201,2,39263,4,5,23,5],"asc") )
console.log(order([694201,2,39263,4,5,23,5],"dec") )
