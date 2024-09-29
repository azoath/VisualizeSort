import React, { useEffect, useState } from 'react';
import Bar from './mergebar';
import Graph from './mergegraph';

const mergesort = () => {
    const [array, setArray] = useState([]);
    const [sorting, setSorting] = useState(false);
    const [description, setDescription] = useState('');
    const [currentMergeIndices, setCurrentMergeIndices] = useState([[], []]);
  
    useEffect(() => {
      resetArray();
    }, []);
  
    const resetArray = () => {
      const array = Array.from({ length: 20 }, () => Math.floor(Math.random() * 500));
      setArray(array);
      setDescription('Array reset with new random values.');
      setCurrentMergeIndices([[], []]);
    };
  
    const mergeSort = async (arr, left, right) => {
      if (left >= right) return;
      
      const mid = Math.floor((left + right) / 2);
      
      // Recursively sort each half
      await mergeSort(arr, left, mid);
      await mergeSort(arr, mid + 1, right);
      
      // Merge the sorted halves
      await merge(arr, left, mid, right);
    };
  
    const merge = async (arr, left, mid, right) => {
      const n1 = mid - left + 1;
      const n2 = right - mid;
      
      const L = arr.slice(left, mid + 1);
      const R = arr.slice(mid + 1, right + 1);
      
      let i = 0, j = 0, k = left;
  
      while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
          arr[k++] = L[i++];
        } else {
          arr[k++] = R[j++];
        }
        setArray([...arr]);
        setCurrentMergeIndices([L, R]);
        setDescription(`Merging: ${arr.slice(left, right + 1).join(', ')}`);
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Slower animation
      }
  
      while (i < n1) {
        arr[k++] = L[i++];
      }
  
      while (j < n2) {
        arr[k++] = R[j++];
      }
      
      setArray([...arr]);
      setDescription(`Merged subarrays into: ${arr.slice(left, right + 1).join(', ')}`);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Slower animation
    };
  
    const startMergeSort = async () => {
      setSorting(true);
      let arr = [...array];
      await mergeSort(arr, 0, arr.length - 1);
      setSorting(false);
      setDescription('Array sorted.');
      setCurrentMergeIndices([[], []]);
    };
  
    return (
      <div className="merge-sort-visualizer">
        <Graph array={array} mergeIndices={currentMergeIndices} />
        <div className="description">
          <p>{description}</p>
        </div>
        <div className="buttons">
          <button onClick={resetArray} disabled={sorting}>Generate New Array</button>
          <button onClick={startMergeSort} disabled={sorting}>Sort</button>
        </div>
        <div className="bars-container">
          {array.map((value, idx) => (
            <Bar
              key={idx}
              height={value}
              color= 'lightblue'
              index={idx}
            />
          ))}
        </div>
      </div>
    );
}

export default mergesort
