import React, { useEffect, useState } from 'react';
import Bar from './quickbar';
import Graph from './quickgraph';

const quicksort = () => {
    const [array, setArray] = useState([]);
    const [sorting, setSorting] = useState(false);
    const [description, setDescription] = useState('');
    const [pivotIndex, setPivotIndex] = useState(-1);
    const [lowIndex, setLowIndex] = useState(-1);
    const [highIndex, setHighIndex] = useState(-1);
    const [sortedIndices, setSortedIndices] = useState([]);
  
    useEffect(() => {
      resetArray();
    }, []);
  
    const resetArray = () => {
      const array = Array.from({ length: 20 }, () => Math.floor(Math.random() * 500));
      setArray(array);
      setDescription('Array reset with new random values.');
      setPivotIndex(-1);
      setLowIndex(-1);
      setHighIndex(-1);
      setSortedIndices([]);
    };
  
    const quickSort = async () => {
      setSorting(true);
      let arr = [...array];
      await quickSortHelper(arr, 0, arr.length - 1);
      setSorting(false);
      setDescription('Array sorted.');
      setPivotIndex(-1);
      setLowIndex(-1);
      setHighIndex(-1);
      setSortedIndices(Array.from({ length: arr.length }, (_, i) => i));
    };
  
    const quickSortHelper = async (arr, low, high) => {
      if (low < high) {
        const pi = await partition(arr, low, high);
        await quickSortHelper(arr, low, pi - 1);
        await quickSortHelper(arr, pi + 1, high);
      }
    };
  
    const partition = async (arr, low, high) => {
      const pivot = arr[high];
      setPivotIndex(high);
      setDescription(`Choosing pivot element at index ${high}.`);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Slower animation
      let i = low - 1;
  
      for (let j = low; j < high; j++) {
        setLowIndex(j);
        setHighIndex(high);
        setDescription(`Comparing element at index ${j} with pivot.`);
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Slower animation
        if (arr[j] < pivot) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
          setArray([...arr]);
          setDescription(`Swapped elements at indices ${i} and ${j}.`);
          await new Promise((resolve) => setTimeout(resolve, 1000)); // Slower animation
        }
      }
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      setArray([...arr]);
      setDescription(`Swapped pivot element with element at index ${i + 1}.`);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Slower animation
      return i + 1;
    };
  
    return (
      <div className="quicksort-visualizer">
        <Graph array={array} pivotIndex={pivotIndex} lowIndex={lowIndex} highIndex={highIndex} sortedIndices={sortedIndices} />
        <div className="description">
          <p>{description}</p>
        </div>
        <div className="buttons">
          <button onClick={resetArray} disabled={sorting}>Generate New Array</button>
          <button onClick={quickSort} disabled={sorting}>Sort</button>
        </div>
        <div className="bars-container">
          {array.map((value, idx) => (
            <Bar
              key={idx}
              height={value}
              color={
                sortedIndices.includes(idx)
                  ? 'lightblue'
                  : idx === pivotIndex
                  ? 'lightgreen'
                  : idx === lowIndex || idx === highIndex
                  ? 'yellow'
                  : 'lightcoral'
              }
              index={idx}
            />
          ))}
        </div>
      </div>
    );
}

export default quicksort
