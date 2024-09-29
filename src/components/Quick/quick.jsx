import React from 'react'
import "../common.css"
import Quick from './quicksort'

const quick = () => {
  return (
    <div className="App">
     
      <header className="App-header">
        <h1>Quick Sort</h1>
      </header>
      <section className="info-section">
        <h2>Quick Sort Algorithm</h2>
        <p>
          QuickSort is an efficient sorting algorithm that uses a divide-and-conquer strategy to sort items by partitioning the array into subarrays and recursively sorting them.
        </p>
        <h3>How It Works:</h3>
        <ol>
          <li><strong>Choose a Pivot:</strong> Select an element as the pivot. This can be the first, last, middle, or any random element.</li>
          <li><strong>Partition the Array:</strong> Rearrange the array elements so that elements less than the pivot are on the left, elements greater than the pivot are on the right.</li>
          <li><strong>Recursively Apply:</strong> Apply the same steps recursively to the subarray of elements with smaller values and the subarray of elements with greater values.</li>
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
              <td>O(n log n)</td>
            </tr>
            <tr>
              <td>Average Case</td>
              <td>O(n log n)</td>
            </tr>
            <tr>
              <td>Worst Case</td>
              <td>O(n<sup>2</sup>)</td>
            </tr>
          </tbody>
        </table>
        <h3>Example:</h3>
        <p>Suppose we have an array: [64, 25, 12, 22, 11]</p>
        <p><strong>Step-by-Step Sorting:</strong></p>
        <ul>
          <li>Choose 11 as the pivot. Partition the array into [11] and [64, 25, 12, 22].</li>
          <li>Choose 22 as the pivot for the subarray [64, 25, 12, 22]. Partition into [12, 22] and [64, 25].</li>
          <li>Continue partitioning and sorting the subarrays recursively.</li>
          <li>The array is now sorted as [11, 12, 22, 25, 64].</li>
        </ul>
      </section>
      <Quick /> {/* Replace Selection with QuickSort */}

    </div>
  )
}

export default quick
