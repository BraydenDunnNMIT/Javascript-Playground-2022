//create a function that takes an array and return both the min and max number in order

// example findMinMax((1,2,3,4,5)) -> [1,5]

const array1 = [1,2,3,4,5,6,7,8,9,10,11];
const find_min = array1.find(element => element <2);
const find_max = array1.find(element => element >10);
console.log(find_max);
console.log(find_min);


/* better solution to this problem by ali

function findMinMax(arr){
    let array= [];
    let min = arr[0]
    let max = arr [0]

    for (let i = 0; i < arr.length; i++) {
        if(arr)[i] < min)[{
            min -arr[i]
        }
            if(arr[i] > max){
                max = arr[i]
            }
        }
    }
array.push(min)
array.push(max)
return array

create a function that concentrates a number of arrays together
arraysConCat(1,2,3,4,5), [6,7,8,9] -> [1,2,3,4,5,6,7,8,9]
*/ 

const arrayC1 = [1,2,3,4,5];
const arrayC2 = [6,7,8,9];
const arrayC3 = arrayC1.concat(arrayC2);
console.log(arrayC3)

/* create a function that an array of numbers 
a string and return an array of numbers as per the following rules listed below
array rules([4,3,2,1]), "ASC") -> [1,2,3,4];
array rules2([5,6,7,8,9]), "DES") -> [9,8,7,6,5];
array rules3([4,3,2,1], "None") -> [4,3,2,1]
*/
function ArrayRules(arr,str){
    switch(str){
        case 'Asc':
            return arr.sort((a,b)
            => a-b)
            case 'Des': 
            return arr.sort((a,b) => b-a)
            default 
            return arr
    }
}


