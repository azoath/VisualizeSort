import React, { useEffect, useState } from 'react';
import Bar from './insertionbar';
import Graph from './insertiongraph';

const insertionsort = () => {

    const [array, setArray] = useState([]);
    const [sorting, setSorting] = useState(false);
    const [description, setDescription] = useState('');
    const [currentIdx, setCurrentIdx] = useState(-1);
    const [comparisonIdx, setComparisonIdx] = useState(-1);
  
    useEffect(() => {
      resetArray();
    }, []);
  
    const resetArray = () => {
      const array = Array.from({ length: 20 }, () => Math.floor(Math.random() * 500));
      setArray(array);
      setDescription('Array reset with new random values.');
    };
  
    const insertionSort = async () => {
      setSorting(true);
      let arr = [...array];
      for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        setCurrentIdx(i);
        setDescription(`Considering element at index ${i} with value ${key}.`);
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Slower animation
        
        while (j >= 0 && arr[j] > key) {
          setComparisonIdx(j);
          setDescription(`Comparing and shifting element at index ${j} with value ${arr[j]}.`);
          arr[j + 1] = arr[j];
          setArray([...arr]);
          await new Promise((resolve) => setTimeout(resolve, 2000)); // Slower animation
          j = j - 1;
        }
        
        arr[j + 1] = key;
        setArray([...arr]);
        setDescription(`Inserted element with value ${key} at index ${j + 1}.`);
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Slower animation
      }
      setSorting(false);
      setDescription('Array sorted.');
      setCurrentIdx(-1);
      setComparisonIdx(-1);
    };
  
    return (
      <div className="insertion-sort-visualizer">
        <Graph array={array} />
        <div className="description">
          <p>{description}</p>
        </div>
        <div className="buttons">
          <button onClick={resetArray} disabled={sorting}>Generate New Array</button>
          <button onClick={insertionSort} disabled={sorting}>Sort</button>
        </div>
        <div className="bars-container">
          {array.map((value, idx) => (
            <Bar
              key={idx}
              height={value}
              color={
                idx === currentIdx
                  ? 'lightgreen'
                  : idx === comparisonIdx
                  ? 'lightcoral'
                  : 'lightblue'
              }
              index={idx}
            />
          ))}
        </div>
        
      </div>
    );
  };

export default insertionsort
