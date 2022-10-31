export function getQuickSortSwaps(array){
    const animations = [];
    //if(array.length <= 1) return array;
    let auxArray = array.slice();
    //console.log(auxArray);
    quickSortHelper(auxArray, animations, 0, auxArray.length - 1);
    console.log(animations);
    return animations;
}

function quickSortHelper(auxArray, animations, startIndex, endIndex)
{
    if(startIndex < endIndex)
    {
       let poz = AflaPozitie(auxArray, animations, startIndex, endIndex);
       quickSortHelper(auxArray, animations, startIndex, poz - 1);
       quickSortHelper(auxArray, animations, poz + 1, endIndex);
    }
}

function AflaPozitie(auxArray, animations, startIndex, endIndex)
{
    let RandomIndexOne = randomNumber(startIndex, endIndex);
    let RandomIndexTwo = randomNumber(startIndex, endIndex);
    let RandomIndexThree = randomNumber(startIndex, endIndex);
    //console.log(RandomIndexOne + " " + RandomIndexTwo + " " + RandomIndexThree);
    let pivot;
    let pozitiePivot;
    if(auxArray[RandomIndexOne] > auxArray[RandomIndexTwo])
    {
        if(auxArray[RandomIndexTwo] > auxArray[RandomIndexThree])
        {
            pivot = auxArray[RandomIndexTwo];
            pozitiePivot = RandomIndexTwo;
        }
        else if(auxArray[RandomIndexOne] > auxArray[RandomIndexThree])
        {
            pivot = auxArray[RandomIndexThree];
            pozitiePivot = RandomIndexThree;
        }
        else
        {
            pivot = auxArray[RandomIndexOne];
            pozitiePivot = RandomIndexOne;
        }
    }
    else
    {
      if(auxArray[RandomIndexOne] > auxArray[RandomIndexThree])
      {
        pivot = auxArray[RandomIndexOne];
        pozitiePivot = RandomIndexOne;
      }  
      else if(auxArray[RandomIndexTwo] > auxArray[RandomIndexThree])
      {
        pivot = auxArray[RandomIndexThree];
        pozitiePivot = RandomIndexThree;
      }
      else
      {
        pivot = auxArray[RandomIndexTwo];
        pozitiePivot = RandomIndexTwo;
      }

    }
    animations.push([pozitiePivot, endIndex, "false one"]);
    animations.push([pozitiePivot, auxArray[endIndex], "true"]);
    animations.push([endIndex, auxArray[pozitiePivot], "true"]);
    animations.push([pozitiePivot, endIndex, "false two"]);
    [auxArray[endIndex], auxArray[pozitiePivot]] = [auxArray[pozitiePivot], auxArray[endIndex]];

    pivot = auxArray[endIndex]; //Oare?
    let pIndex = startIndex;
    for(let i = startIndex; i < endIndex; i++)
    {
        animations.push([i, endIndex, "false one"]);
        animations.push([i, endIndex, "false two"]);
        if(auxArray[i] < pivot)
        {   
        animations.push([i, pIndex, "false one"]);
        animations.push([i, auxArray[pIndex], "true"]);
        animations.push([pIndex, auxArray[i], "true"]);
        animations.push([i, pIndex, "false two"]);
        [auxArray[i], auxArray[pIndex]] = [auxArray[pIndex], auxArray[i]];
        pIndex++;
        }
    }
    animations.push([pIndex, endIndex, "false one"]);
    animations.push([endIndex, auxArray[pIndex], "true"]);
    animations.push([pIndex, auxArray[endIndex], "true"]);
    animations.push([pIndex, endIndex, "false two"]);
    [auxArray[endIndex], auxArray[pIndex]] = [auxArray[pIndex], auxArray[endIndex]];
    return pIndex;
}



function checkIfSorted(arr){
    for(let i = 0; i < arr.length - 1; i++)
      for(let j = i + 1; j < arr.length; j++)
        if(arr[i] > arr[j]) return 0;
    return 1;
}

function randomNumber(a, b)
{
    return Math.floor(Math.random() * (b - a + 1) + a);
}