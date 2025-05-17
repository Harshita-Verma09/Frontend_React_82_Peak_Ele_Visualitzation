# PeakVisualizer

A React application that visually demonstrates the process of finding a peak element in an array using a binary search-like approach.

## How it Works

The `PeakVisualizer` component initializes an array of numbers. When the "Start Visualization" button is clicked, it calculates the steps involved in finding a peak element. A peak element is defined as an element that is not smaller than its neighbors.

The visualization proceeds step-by-step:

1.  **Initialization:** The left and right pointers of the search space are initialized to the start and end of the array, respectively.
2.  **Iteration:** In each step, the middle element is calculated.
    * If the middle element is greater than its right neighbor, the peak must lie in the left half (including the middle element). The right pointer is moved to the middle.
    * Otherwise, the peak must lie in the right half (excluding the middle element). The left pointer is moved to `middle + 1`.
3.  **Termination:** The loop continues until the left and right pointers converge. The element at this index is a peak element.

The visualization highlights the left, right, and middle elements at each step with different background colors. Once the peak is found, it is highlighted with a purple background.

## Usage

1.  Make sure you have Node.js and npm (or yarn) installed on your system.
2.  Clone this repository (or copy the code into a new React project).
3.  Navigate to the project directory in your terminal.
4.  Install the dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```
5.  Start the development server:
    ```bash
    npm start
    # or
    yarn start
    ```
6.  Open your browser and navigate to `http://localhost:3000` (or the port your development server runs on).

## Component Structure

* `PeakVisualizer`: The main functional component that manages the state and logic for the visualization.
    * `arr`: State variable holding the array of numbers.
    * `steps`: State variable storing an array of objects, where each object represents a step in the peak finding process (containing the left, right, and middle indices).
    * `stepIndex`: State variable to track the current step being visualized.
    * `started`: State variable to indicate if the visualization has started.
    * `generateSteps()`: Function to calculate the steps involved in finding the peak element.
    * `nextStep()`: Function to advance to the next step in the visualization.
    * The component renders the array elements with color-coding based on the current step, along with "Start Visualization" and "Next Step" buttons. It also displays information about the current step and the roles of the different colors.

## Styling

The component uses basic inline styles and Tailwind CSS classes for styling. You might need to have Tailwind CSS configured in your React project for the styling to be applied correctly.

## Potential Enhancements

* **Customizable Array:** Allow users to input their own array of numbers.
* **Speed Control:** Add options to control the speed of the visualization.
* **More Detailed Step Information:** Display more information about the comparison being made at each step.
* **Animation:** Implement smoother transitions between steps using animations.
* **Error Handling:** Add checks for edge cases and invalid input arrays.
