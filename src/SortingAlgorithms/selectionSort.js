export function getSelectionSortSwaps(array) {
  let animations = [];
  let auxArray = array.slice();
  console.log(auxArray);

  for(let i = 0; i < auxArray.length; ++i)
  {
    let minimum = i;
    for(let j = i + 1; j < auxArray.length; ++j)
     {
      if(auxArray[j] < auxArray[minimum])
      {  animations.push([i, j, "false one"]);
         animations.push([i, j, "false two"]);
         minimum = j;
      }
     }

     if(minimum != i)
     {
      animations.push([i, auxArray[minimum] , "true"]);
      //animations.push([minimum, auxArray[i] , "true"]);
      [auxArray[i], auxArray[minimum]] = [auxArray[minimum], auxArray[i]];
     }
     else {
      animations.push([i, auxArray[minimum] , "true"]);

     }
  }
 console.log(checkIfSorted(auxArray));
 console.log(animations);
 return animations;
}

function checkIfSorted(arr){
  for(let i = 0; i < arr.length - 1; i++)
    for(let j = i + 1; j < arr.length; j++)
      if(arr[i] > arr[j]) return 0;
  return 1;
}