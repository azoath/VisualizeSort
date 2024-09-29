import React, { useEffect, useState } from 'react';
import Bar from './selectionbar';
import Graph from './selectiongraph';

const selectionsort = () => {
  
    const [array, setArray] = useState([]);
    const [sorting, setSorting] = useState(false);
    const [description, setDescription] = useState('');
    const [currentMinIdx, setCurrentMinIdx] = useState(-1);
    const [sortedUntilIdx, setSortedUntilIdx] = useState(-1);
  
    useEffect(() => {
      resetArray();
    }, []);
  
    const resetArray = () => {
      const array = Array.from({ length: 20 }, () => Math.floor(Math.random() * 500));
      setArray(array);
      setDescription('Array reset with new random values.');
      setCurrentMinIdx(-1);
      setSortedUntilIdx(-1);
    };
  
    const selectionSort = async () => {
      setSorting(true);
      let arr = [...array];
      const length = arr.length;
  
      for (let i = 0; i < length - 1; i++) {
        let minIdx = i;
        setCurrentMinIdx(minIdx);
        setSortedUntilIdx(i - 1);
        setDescription(`Finding the minimum element from index ${i} to ${length - 1}.`);
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Slower animation
  
        for (let j = i + 1; j < length; j++) {
          if (arr[j] < arr[minIdx]) {
            minIdx = j;
            setCurrentMinIdx(minIdx);
            setDescription(`Current minimum index updated to ${minIdx}.`);
            await new Promise((resolve) => setTimeout(resolve, 2000)); // Slower animation
          }
        }
  
        if (minIdx !== i) {
          [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]; // Swap
          setArray([...arr]);
          setDescription(`Swapped elements at indices ${i} and ${minIdx}.`);
          await new Promise((resolve) => setTimeout(resolve, 2000)); // Slower animation
        }
      }
  
      setSorting(false);
      setDescription('Array sorted.');
      setCurrentMinIdx(-1);
      setSortedUntilIdx(length - 1);
    };
  
    return (
      <div className="insertion-sort-visualizer">
        <Graph array={array} currentMinIndex={currentMinIdx} sortedUntilIndex={sortedUntilIdx} />
        <div className="description">
          <p>{description}</p>
        </div>
        <div className="buttons">
          <button onClick={resetArray} disabled={sorting}>Generate New Array</button>
          <button onClick={selectionSort} disabled={sorting}>Sort</button>
        </div>
        <div className="bars-container">
          {array.map((value, idx) => (
            <Bar
              key={idx}
              height={value}
              color={
                idx === currentMinIdx
                  ? 'lightgreen'
                  : idx <= sortedUntilIdx
                  ? 'lightblue'
                  : 'lightcoral'
              }
              index={idx}
            />
          ))}
        </div>
      </div>
    );
  };

export default selectionsort
