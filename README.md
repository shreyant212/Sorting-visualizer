# Sorting Visualizer

A browser-based visualization tool for learning and comparing sorting algorithms. The app generates an array of random values and animates each algorithm step-by-step so you can clearly see how comparisons, swaps, and element movement happen.

## Project Overview

This project demonstrates five popular sorting algorithms using animated vertical bars:

- Bubble Sort
- Selection Sort
- Insertion Sort
- Merge Sort
- Quick Sort

Each bar represents a single array value, and its height is proportional to that value. During sorting, bars change colors to indicate active comparisons and pivot selection.

## Key Features

- Random array generation with 50 values
- Algorithm selection via dropdown
- Adjustable animation speed using a slider
- Display of time and space complexity for the chosen algorithm
- Execution time display after sorting completes
- Visual feedback for comparisons, swaps, and final sorted result

## Files and Structure

- `index.html`
  - Contains the page structure and control elements
  - Loads the CSS and JavaScript files
- `style.css`
  - Provides styling for the page, controls, bar display, and information panel
- `script.js`
  - Implements array generation and sorting algorithms
  - Handles UI interactions, animation timing, and complexity display

## How to Run

1. Open the project folder in your code editor.
2. Open `index.html` in a web browser.
3. Alternatively, use a simple local server if you want a more realistic development setup.

### Recommended Local Server Options

- VS Code Live Server extension
- Python built-in server:
  - `python -m http.server`
- Node.js `http-server`

## Usage Instructions

1. Click **Generate New Array** to create a new random dataset.
2. Choose a sorting algorithm from the dropdown menu.
3. Adjust the **Speed** slider to make the animation faster or slower.
4. Click **Start Sorting** to run the selected algorithm.
5. Watch the bars animate and the info panel update.

## Algorithm Details

The app shows the following algorithm complexity information for each selection:

- Bubble Sort
  - Time Complexity: Best O(n), Average O(n²), Worst O(n²)
  - Space Complexity: O(1)
- Selection Sort
  - Time Complexity: Best O(n²), Average O(n²), Worst O(n²)
  - Space Complexity: O(1)
- Insertion Sort
  - Time Complexity: Best O(n), Average O(n²), Worst O(n²)
  - Space Complexity: O(1)
- Merge Sort
  - Time Complexity: Best O(n log n), Average O(n log n), Worst O(n log n)
  - Space Complexity: O(n)
- Quick Sort
  - Time Complexity: Best O(n log n), Average O(n log n), Worst O(n²)
  - Space Complexity: O(log n)

## How the Visualization Works

- When sorting starts, controls are disabled to prevent interruptions.
- Active comparisons are highlighted using color changes.
- Swapped bars update their height immediately.
- After sorting completes, all bars become green.
- The execution time is shown in milliseconds.

## Customization Ideas

- Add more algorithms like Heap Sort or Shell Sort
- Allow the user to change the number of bars
- Add pause/resume controls for the animation
- Show step-by-step pseudocode alongside the animation

## Notes

- This project is designed for learning and demonstration purposes.
- No build step is required; the app runs directly in the browser.
- Keep `style.css` and `script.js` available in the same folder as `index.html` unless you update the file paths.

## License

This project is open source and free to modify for learning and experimentation.
