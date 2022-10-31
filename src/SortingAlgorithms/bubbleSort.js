export function getBubbleSortSwaps(array) {
    const animations = [];
    //if(array.length <= 1) return array;
    let auxArray = array.slice();
    bubbleSortHelper(auxArray, animations);
    return animations;
}

function bubbleSortHelper(auxArray, animations) {
    const length = auxArray.length;
    //let x = length - 1;

  

    for(let i = 0; i < length; i++)
      for(let j = 0; j < length - i - 1; j++)
      {
        //let swap = false;
        animations.push([j, j + 1, "false one"]);
        animations.push([j, j + 1, "false two"]);
        if(auxArray[j] > auxArray[j + 1]) {
            //swap = true;
            animations.push([j, auxArray[j + 1], "true"]);
            animations.push([j + 1, auxArray[j], "true"]);
            [auxArray[j], auxArray[j + 1]] = [auxArray[j + 1], auxArray[j]];
      
      }
    }

    console.log(checkIfSorted(auxArray));
}

function checkIfSorted(arr){
    for(let i = 0; i < arr.length - 1; i++)
      for(let j = i + 1; j < arr.length; j++)
        if(arr[i] > arr[j]) return 0;
    return 1;
}