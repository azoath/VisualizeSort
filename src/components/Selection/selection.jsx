import React from 'react'
import "../common.css"
import Selection from './selectionsort'

const selection = () => {
  return (
    <div className="App">

    <header className="App-header">
      <h1>Selection Sort</h1>
    </header>
    <section className="info-section">
      <h2>Selection Sort Algorithm</h2>
      <p>
        Selection sort is a simple sorting algorithm that divides the input list into two parts: a sorted sublist of items which is built up from left to right and a remaining sublist of items that need to be sorted. Initially, the sorted sublist is empty and the unsorted sublist contains all the items.
      </p>
      <h3>How It Works:</h3>
      <ol>
        <li><strong>Start with the first element:</strong> Assume the first element is the smallest.</li>
        <li><strong>Find the minimum element:</strong> Find the smallest element in the remaining unsorted portion of the array.</li>
        <li><strong>Swap elements:</strong> Swap the found minimum element with the first unsorted element.</li>
        <li><strong>Move the boundary:</strong> Move the boundary of the sorted portion one step to the right.</li>
        <li><strong>Repeat:</strong> Repeat steps 1-4 until the entire array is sorted.</li>
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
            <td>O(n<sup>2</sup>)</td>
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
      <p>Suppose we have an array: [64, 25, 12, 22, 11]</p>
      <p><strong>Step-by-Step Sorting:</strong></p>
      <ul>
        <li>Find the minimum in [64, 25, 12, 22, 11] and swap with 64: [11, 25, 12, 22, 64]</li>
        <li>Find the minimum in [25, 12, 22, 64] and swap with 25: [11, 12, 25, 22, 64]</li>
        <li>Find the minimum in [25, 22, 64] and swap with 25: [11, 12, 22, 25, 64]</li>
        <li>The array is now sorted.</li>
      </ul>
    </section>
    <Selection />

  </div>
  )
}

export default selection
