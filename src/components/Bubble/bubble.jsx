import React from 'react'

import "../common.css"
import BubbleSort from './bubblesort'
const bubble = () => {
  return (
    <div className="App">
 
      <header className="App-header">
        <h1>Bubble Sort</h1>
      </header>
      <section className="info-section">
        <h2>Bubble Sort Algorithm</h2>
        <p>
          Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. It gets its name because smaller elements "bubble" to the top of the list with each pass.
        </p>
        <h3>How It Works:</h3>
        <ol>
          <li><strong>Start from the beginning:</strong> Begin at the first element of the array.</li>
          <li><strong>Compare adjacent elements:</strong> Compare the current element with the next one.</li>
          <li><strong>Swap if necessary:</strong> If the current element is greater than the next element, swap them.</li>
          <li><strong>Repeat:</strong> Continue this process for each pair of adjacent elements to the end of the array.</li>
          <li><strong>Pass through the array:</strong> Each pass through the array places the next largest element in its correct position.</li>
          <li><strong>Optimize:</strong> If no swaps are needed during a pass, the array is sorted.</li>
        </ol>
        <h3>Time Complexity:</h3>
        <table>
          <thead>
            <tr>
              <th>Case</th>
              <th>Time Complexity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Best Case</td>
              <td>O(n)</td>
            </tr>
            <tr>
              <td>Average Case</td>
              <td>O(n<sup>2</sup>)</td>
            </tr>
            <tr>
              <td>Worst Case</td>
              <td>O(n<sup>2</sup>)</td>
            </tr>
          </tbody>
        </table>
        <h3>Example:</h3>
        <p>Suppose we have an array: [64, 34, 25, 12, 22, 11, 90]</p>
        <p><strong>Step-by-Step Sorting:</strong></p>
        <ul>
          <li>Compare 64 and 34, swap them: [34, 64, 25, 12, 22, 11, 90]</li>
          <li>Compare 64 and 25, swap them: [34, 25, 64, 12, 22, 11, 90]</li>
          <li>Continue comparing and swapping until the largest element (90) is in its correct position.</li>
          <li>Repeat the process for the remaining unsorted portion until the array is sorted.</li>
        </ul>
      </section>
      <BubbleSort />

    </div>
  )
}

export default bubble
