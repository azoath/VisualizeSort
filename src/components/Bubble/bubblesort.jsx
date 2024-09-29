import React, { useEffect, useState } from 'react';
import Bar from './bubblebar';
import Graph from './bubblegraph';

const bubblesort = () => {
    const [array, setArray] = useState([]);
    const [sorting, setSorting] = useState(false);
    const [description, setDescription] = useState('');
    const [currentComparisonIndices, setCurrentComparisonIndices] = useState([]);
    const [swappedIndices, setSwappedIndices] = useState([]);
    const [sortedUntilIdx, setSortedUntilIdx] = useState(-1);
  
    useEffect(() => {
      resetArray();
    }, []);
  
    const resetArray = () => {
      const newArray = Array.from({ length: 20 }, () => Math.floor(Math.random() * 500));
      setArray(newArray);
      setDescription('Array reset with new random values.');
      setCurrentComparisonIndices([]);
      setSwappedIndices([]);
      setSortedUntilIdx(-1);
    };
  
    const bubbleSort = async () => {
      setSorting(true);
      let arr = [...array];
      const length = arr.length;
  
      for (let i = 0; i < length - 1; i++) {
        let swapped = false;
        setSortedUntilIdx(length - i - 1);
        setDescription(`Starting pass ${i + 1}.`);
  
        for (let j = 0; j < length - i - 1; j++) {
          setCurrentComparisonIndices([j, j + 1]);
          await new Promise(resolve => setTimeout(resolve, 1000)); // Slower animation
  
          if (arr[j] > arr[j + 1]) {
            // Swap
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            setArray([...arr]);
            setSwappedIndices([j, j + 1]);
            setDescription(`Swapped elements at indices ${j} and ${j + 1}.`);
            await new Promise(resolve => setTimeout(resolve, 1000)); // Slower animation
            swapped = true;
          } else {
            setSwappedIndices([]);
          }
          setCurrentComparisonIndices([]);
        }
  
        if (!swapped) break; // Array is sorted if no elements were swapped in this pass
      }
  
      setSorting(false);
      setDescription('Array sorted.');
      setCurrentComparisonIndices([]);
      setSwappedIndices([]);
      setSortedUntilIdx(length - 1);
    };
  return (
    <div className="bubble-sort-visualizer">
      <Graph
        array={array}
        currentComparisonIndices={currentComparisonIndices}
        swappedIndices={swappedIndices}
        sortedIndices={Array.from({ length: array.length - sortedUntilIdx }, (_, idx) => array.length - 1 - idx)}
      />
      <div className="description">
        <p>{description}</p>
      </div>
      <div className="buttons">
        <button onClick={resetArray} disabled={sorting}>Generate New Array</button>
        <button onClick={bubbleSort} disabled={sorting}>Sort</button>
      </div>
      <div className="bars-container">
        {array.map((value, idx) => (
          <Bar
            key={idx}
            height={value}
            color={
              currentComparisonIndices.includes(idx) || currentComparisonIndices.includes(idx + 1)
                ? 'lightblue'
                : swappedIndices.includes(idx)
                ? 'lightcoral'
                : idx >= array.length - sortedUntilIdx - 1
                ? 'lightgreen'
                : 'lightgrey'
            }
            index={idx}
          />
        ))}
      </div>
    </div>
  )
}

export default bubblesort
