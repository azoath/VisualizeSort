import React from 'react'
import "../common.css"
import MergeSort from './mergesort'

const merge = () => {
  return (
    <div className="App">
    <header className="App-header">
      <h1>Merge Sort</h1>
    </header>
    <section className="info-section">
      <h2>Merge Sort Algorithm</h2>
      <p>
        Merge sort is a divide-and-conquer sorting algorithm that divides the input array into two halves, recursively sorts each half, and then merges the two sorted halves to produce the sorted array. This method is known for its efficiency and is widely used in various applications.
      </p>
      <h3>How It Works:</h3>
      <ol>
        <li><strong>Divide:</strong> Split the array into two halves until each subarray contains a single element.</li>
        <li><strong>Conquer:</strong> Recursively sort the subarrays.</li>
        <li><strong>Combine:</strong> Merge the sorted subarrays to produce the final sorted array.</li>
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
            <td>O(n log n)</td>
          </tr>
        </tbody>
      </table>
      <h3>Example:</h3>
      <p>Suppose we have an array: [38, 27, 43, 3, 9, 82, 10]</p>
      <p><strong>Step-by-Step Sorting:</strong></p>
      <ul>
        <li>Divide the array into [38, 27, 43, 3, 9] and [82, 10]</li>
        <li>Divide [38, 27, 43, 3, 9] into [38, 27] and [43, 3, 9]</li>
        <li>Divide [38, 27] into [38] and [27], then merge to get [27, 38]</li>
        <li>Divide [43, 3, 9] into [43] and [3, 9], then merge [3, 9] to get [3, 9]</li>
        <li>Merge [43] and [3, 9] to get [3, 9, 43]</li>
        <li>Merge [27, 38] and [3, 9, 43] to get the sorted array [3, 9, 27, 38, 43]</li>
      </ul>
    </section>
    <MergeSort /> {/* Updated component */}

  </div>
  )
}

export default merge
