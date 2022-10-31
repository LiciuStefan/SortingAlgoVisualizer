import React from 'react';
import './SortingVis.css';
import { getBubbleSortSwaps } from '../SortingAlgorithms/bubbleSort';
import { getMergeSortSwaps } from '../SortingAlgorithms/mergeSort';
import { getQuickSortSwaps } from '../SortingAlgorithms/quickSort';
import { getInsertionSortSwaps } from '../SortingAlgorithms/insertionSort';
import { getSelectionSortSwaps } from '../SortingAlgorithms/selectionSort';


const ARRAY_BARS = 100;
const PRIMARY_COLOR = '#f1faee';
var STOP_SORTING = false;

export default class SortingVis extends React.Component{
    constructor(props){
        super(props);
        this.state = { array: [],};
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array  = [];
        for(let i = 0; i < ARRAY_BARS; i++)
        {
            array.push(randomNumber(5, 550));
        }
        this.setState({array});
        let arrays = document.getElementsByClassName("array-bar");
        for(let i = 0; i < arrays.length; i++)
          arrays[i].style.backgroundColor = PRIMARY_COLOR;
    }

    bubbleSort(){
        if(!STOP_SORTING)
    {    
       const swaps = getBubbleSortSwaps(this.state.array);
       for(let i = 0; i < swaps.length; i++)
       {
        const change = swaps[i][2] === "false one" || swaps[i][2] === "false two";
        const arrayBars = document.getElementsByClassName("array-bar");
        if(change){
            const [barOneIndex, barTwoIndex, ] = swaps[i];
            const barOneStyle = arrayBars[barOneIndex].style;
            const barTwoStyle = arrayBars[barTwoIndex].style;
            setTimeout(() => {
                barOneStyle.backgroundColor = swaps[i][2] === "false one" ? "#31cb00" : "#f1faee"; //green / normal color;
                barTwoStyle.backgroundColor = swaps[i][2] === "false one" ? "#ad2e24" : "#f1faee"; // red / normal color;
            }, i * 10)

            
        }
        else {
            const [barIndex, newHeight, ] = swaps[i];
            const barStyle = arrayBars[barIndex].style;
            setTimeout(() => {
                barStyle.height = `${newHeight}px`;
                STOP_SORTING = true;
            }, i * 10);
        }
       }
    }
     STOP_SORTING = false;
}

    quickSort() {
        if(!STOP_SORTING)
        {
        const swaps = getQuickSortSwaps(this.state.array);
        for(let i = 0; i < swaps.length; i++)
        {
         const change = swaps[i][2] === "false one" || swaps[i][2] === "false two";
         const arrayBars = document.getElementsByClassName("array-bar");
         if(change){
             const [barOneIndex, barTwoIndex, ] = swaps[i];
             const barOneStyle = arrayBars[barOneIndex].style;
             const barTwoStyle = arrayBars[barTwoIndex].style;
             setTimeout(() => {
                 barOneStyle.backgroundColor = swaps[i][2] === "false one" ? "#31cb00" : "#f1faee";
                 barTwoStyle.backgroundColor = swaps[i][2] === "false one" ? "#ad2e24" : "#f1faee";
             }, i * 10)
         }
         else {
             const [barIndex, newHeight, ] = swaps[i];
             if (barIndex === -1) {
                continue;
             }
             const barStyle = arrayBars[barIndex].style;
             setTimeout(() => {
                 barStyle.height = `${newHeight}px`;
                 STOP_SORTING = true;
             }, i * 10);
         }
        }
    }
    STOP_SORTING = false;
    }

    mergeSort() {
        if(!STOP_SORTING)
    {  
        const swaps = getMergeSortSwaps(this.state.array);
        for(let i = 0; i < swaps.length; i++)
       {
        const change = i % 3 !== 2;
        const arrayBars = document.getElementsByClassName("array-bar");
        if(change){
            const [barOneIndex, barTwoIndex] = swaps[i];
            const barOneStyle = arrayBars[barOneIndex].style;
            const barTwoStyle = arrayBars[barTwoIndex].style;
            setTimeout(() => {
                barOneStyle.backgroundColor = i % 3 === 0 ? "#31cb00" : "#f1faee";
                barTwoStyle.backgroundColor = i % 3 === 0 ? "#ad2e24" : "#f1faee";
            }, i * 10)
        }
        else {
            const [barIndex, newHeight] = swaps[i];
            const barStyle = arrayBars[barIndex].style;
            setTimeout(() => {
                barStyle.height = `${newHeight}px`;
                STOP_SORTING = true;
            }, i * 10);
        }
       }  
    }
    STOP_SORTING = false;
    }

    selectionSort() {
        if(!STOP_SORTING)
        {
        const swaps = getSelectionSortSwaps(this.state.array);
        for(let i = 0; i < swaps.length; i++)
        {
        
         const change = swaps[i][2] === "false one" || swaps[i][2] === "false two";
         const arrayBars = document.getElementsByClassName("array-bar");
         if(change){ 
             const [barOneIndex, barTwoIndex, ] = swaps[i];
             const barOneStyle = arrayBars[barOneIndex].style;
             const barTwoStyle = arrayBars[barTwoIndex].style;
             setTimeout(() => {
                 barOneStyle.backgroundColor = swaps[i][2] === "false one" ? "#31cb00" : "#f1faee";
                 barTwoStyle.backgroundColor = swaps[i][2] === "false one" ? "#ad2e24" : "#f1faee";
             }, i * 10)
         }
         else {
             const [barIndex, newHeight, ] = swaps[i];
             const barStyle = arrayBars[barIndex].style;
             setTimeout(() => {
                 barStyle.height = `${newHeight}px`;
                 STOP_SORTING = true;
             }, i * 10);
         }
        }
    }
        STOP_SORTING = false;
}

    insertionSort() {
        if(!STOP_SORTING)
        {
        const swaps = getInsertionSortSwaps(this.state.array);
        for(let i = 0; i < swaps.length; i++)
        {
         const change = swaps[i][2] === "false one" || swaps[i][2] === "false two";
         const arrayBars = document.getElementsByClassName("array-bar");
         if(change){ 
             const [barOneIndex, barTwoIndex, ] = swaps[i];
             const barOneStyle = arrayBars[barOneIndex].style;
             const barTwoStyle = arrayBars[barTwoIndex].style;
             setTimeout(() => {
                 barOneStyle.backgroundColor = swaps[i][2] === "false one" ? "#31cb00" : "#f1faee";
                 barTwoStyle.backgroundColor = swaps[i][2] === "false one" ? "#ad2e24" : "#f1faee";
             }, i * 10)
         }
         else {
             const [barIndex, newHeight, ] = swaps[i];
             const barStyle = arrayBars[barIndex].style;
             setTimeout(() => {
                 barStyle.height = `${newHeight}px`;
                 STOP_SORTING = true;
             }, i * 10);
         }
        }
 
    }
        STOP_SORTING = false;
}

render(){
    const {array} = this.state;
    
    return (
        <div className = "array-container">
            <button id = 'btn' onClick={() => this.resetArray()}>Generate New Array</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                <button onClick={() => this.quickSort()}>Quick Sort</button>
                <button onClick={() => this.insertionSort()}>Insertion Sort</button>
                <button onClick={() => this.bubbleSort()}>Bubble Sort</button>  
                <button onClick={() => this.selectionSort()}>Selection Sort</button>  

            <div>{"\u00a0\u00a0"}</div>
            <div>{"\u00a0\u00a0"}</div>
            {array.map((value, idx) => (
            
            <div 
            className = "array-bar" 
            key = {idx} 
            style = {{
                backgroundColor: PRIMARY_COLOR,
                height: `${value}px`,
                width: `10px`,
                }}></div>))}
                <br></br>
                  
        </div>

    );
   
}

}
function randomNumber(a, b)
{
    return Math.floor(Math.random() * (b - a + 1) + a);
}
