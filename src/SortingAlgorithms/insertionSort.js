export function getInsertionSortSwaps(array){
   let animations = [];
   let auxArray = array.slice();

    for(let i = 1;  i < auxArray.length; ++i)
    {
        let j = i - 1;
        let temp = auxArray[i];
        animations.push([j, i, "false one"]);
        animations.push([j, i, "false two"]);
        while(j != -1 && auxArray[j] > temp)
           { 
             //console.log(j, j + 1);
             animations.push([j + 1, auxArray[j] , "true"]);
             auxArray[j + 1] = auxArray[j];
             j--;
           
            if(j >= 0){
              animations.push([j, i, "false one"]);
              animations.push([j, i, "false two"]);             }
           }
           animations.push([j + 1, temp, "true"]);
           auxArray[j + 1] = temp;
    }
    
    console.log(checkIfSorted(auxArray));
    return animations;
}

function checkIfSorted(arr){
    for(let i = 0; i < arr.length - 1; i++)
      for(let j = i + 1; j < arr.length; j++)
        if(arr[i] > arr[j]) return 0;
    return 1;
}