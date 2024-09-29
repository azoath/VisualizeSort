import React from 'react'
import "../common.css"
import Insertion from './insertionsort'

const insertion = () => {
  return (
    <div>
         <div className="App">

      <header className="Appheader">
        <h1>Insertion Sort</h1>
      </header>
      <section className="info-section">
        <h2>Insertion Sort Algorithm</h2>
        <p>
          Insertion sort is a simple and intuitive sorting algorithm that works similarly to the way you might sort playing cards in your hands. The algorithm builds the final sorted array one element at a time, making it efficient for small data sets or arrays that are already nearly sorted.
        </p>
        <h3>How It Works:</h3>
        <ol>
          <li><strong>Start with the first element:</strong> Consider the first element to be sorted. Since a single element is trivially sorted, move on to the next element.</li>
          <li><strong>Pick the next element:</strong> Take the next element in the array.</li>
          <li><strong>Compare with elements in the sorted portion:</strong> Compare the picked element with each element in the sorted portion of the array (to its left) in reverse order.</li>
          <li><strong>Shift elements if necessary:</strong> Shift all elements in the sorted portion that are greater than the picked element one position to the right.</li>
          <li><strong>Insert the picked element:</strong> Place the picked element in its correct position.</li>
          <li><strong>Repeat:</strong> Repeat steps 2-5 until all elements are sorted.</li>
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
        <p>Suppose we have an array: [5, 2, 4, 6, 1, 3]</p>
        <p><strong>Step-by-Step Sorting:</strong></p>
        <ul id="color">
          <li>Consider the first element 5 (already sorted).</li>
          <li>Take 2, compare it with 5, and shift 5 to the right. Place 2 before 5: [2, 5, 4, 6, 1, 3]</li>
          <li>Take 4, compare it with 5 and 2, and place it between 2 and 5: [2, 4, 5, 6, 1, 3]</li>
          <li>Take 6, no need to shift, place it after 5: [2, 4, 5, 6, 1, 3]</li>
          <li>Take 1, compare and shift 6, 5, 4, and 2 to the right, and place 1 at the beginning: [1, 2, 4, 5, 6, 3]</li>
          <li>Take 3, compare and shift 6, 5, and 4 to the right, and place 3 between 2 and 4: [1, 2, 3, 4, 5, 6]</li>
        </ul>
      </section>
      <Insertion />

    </div>
    </div>
  )
}

export default insertion
