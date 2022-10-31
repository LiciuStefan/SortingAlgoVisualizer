export function getMergeSortSwaps(array){
    const animations = [];
    //if(array.length <= 1) return array;
    let auxArray = array.slice();
    let auxdoiarray = array.slice();
    //console.log(auxArray);
    mergeSort(auxArray, animations, 0, auxArray.length - 1, auxdoiarray);
    console.log(checkIfSorted(auxArray));
    console.log(auxArray);
    return animations;
}

function mergeSort(auxArray, animations, startIndex, endIndex, auxdoiarray)
{
   //console.log("start index: " + startIndex + ", end index: " + endIndex);
   if(startIndex < endIndex)
   {
    let midIndex = Math.floor(startIndex + Math.floor((endIndex - startIndex)/2));

    mergeSort(auxArray, animations, startIndex, midIndex, auxdoiarray);
    mergeSort(auxArray, animations, midIndex + 1, endIndex, auxdoiarray);
    let i = startIndex;
    let j = midIndex + 1;
    let p = startIndex;
    //const auxdoiarray = [];
    //Array.from({length: endIndex - startIndex}, () => 0);
   

    while(i <= midIndex && j <= endIndex)
    {   
        animations.push([i, j]);
        animations.push([i, j]); 
        if(auxArray[i] < auxArray[j])
        {   
            animations.push([p, auxArray[i]]);
            auxdoiarray[p] = auxArray[i];
            i = i + 1;
            p = p + 1; 
        }
        else {
            animations.push([p, auxArray[j]]);
            auxdoiarray[p] = auxArray[j];
            j = j + 1;
            p = p + 1;
        }
    }
    while(i <= midIndex)
    {
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([p, auxArray[i]]);
        auxdoiarray[p] = auxArray[i];
        i = i + 1;
        p = p + 1;
    }

    while(j <= endIndex)
    {
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([p, auxArray[j]]);
        auxdoiarray[p] = auxArray[j];
        j = j + 1;
        p = p + 1;
    }
    p = startIndex;
    for(let index = startIndex; index <= endIndex; index++)
    {   
        //console.log(p);
        //console.log("aux initial: " + auxArray[index]);
        //console.log("elementul bun: " + newArray[p]);
        auxArray[index] = auxdoiarray[p];
        //console.log("aux dupa: " + auxArray[index]);
        p = p + 1;
    }
   }
}

function checkIfSorted(arr){
    for(let i = 0; i < arr.length - 1; i++)
      for(let j = i + 1; j < arr.length; j++)
        if(arr[i] > arr[j]) return 0;
    return 1;
}
