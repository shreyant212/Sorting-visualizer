const complexities = {
    bubble: {
        time: "Best: O(n) | Avg: O(n²) | Worst: O(n²)",
        space: "O(1)"
    },
    selection: {
        time: "Best: O(n²) | Avg: O(n²) | Worst: O(n²)",
        space: "O(1)"
    },
    insertion: {
        time: "Best: O(n) | Avg: O(n²) | Worst: O(n²)",
        space: "O(1)"
    },
    merge: {
        time: "Best: O(n log n) | Avg: O(n log n) | Worst: O(n log n)",
        space: "O(n)"
    },
    quick: {
        time: "Best: O(n log n) | Avg: O(n log n) | Worst: O(n²)",
        space: "O(log n)"
    }
};
const container = document.getElementById("array-container");
let array = [];
let bars = [];
let delay = 50;

function generateArray() {
    container.innerHTML = "";
    array = [];
    bars = [];

    for (let i = 0; i < 50; i++) {
        let value = Math.floor(Math.random() * 300) + 20;
        array.push(value);

        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value}px`;

        container.appendChild(bar);
        bars.push(bar);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function disableControls() {
    document.querySelectorAll("button, select, input").forEach(el => el.disabled = true);
}

function enableControls() {
    document.querySelectorAll("button, select, input").forEach(el => el.disabled = false);
}

async function startSorting() {
    delay = 101 - document.getElementById("speedRange").value;
    let algo = document.getElementById("algorithm").value;

    disableControls();

    const startTime = performance.now();

    if (algo === "bubble") await bubbleSort();
    if (algo === "selection") await selectionSort();
    if (algo === "insertion") await insertionSort();
    if (algo === "merge") await mergeSort(0, array.length - 1);
    if (algo === "quick") await quickSort(0, array.length - 1);

    const endTime = performance.now();
    const executionTime = (endTime - startTime).toFixed(2);

    document.getElementById("executionTime").innerText = executionTime + " ms";

    bars.forEach(bar => bar.style.backgroundColor = "green");

    enableControls();
}
document.getElementById("algorithm").addEventListener("change", updateComplexity);

function updateComplexity() {
    let algo = document.getElementById("algorithm").value;

    document.getElementById("timeComplexity").innerText = complexities[algo].time;
    document.getElementById("spaceComplexity").innerText = complexities[algo].space;
}

updateComplexity();

//////////////////// BUBBLE ////////////////////

async function bubbleSort() {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {

            bars[j].style.backgroundColor = "red";
            bars[j + 1].style.backgroundColor = "red";
            await sleep(delay);

            if (array[j] > array[j + 1]) {
                swap(j, j + 1);
            }

            resetColor(j);
            resetColor(j + 1);
        }
    }
}

//////////////////// SELECTION ////////////////////

async function selectionSort() {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        bars[i].style.backgroundColor = "yellow";

        for (let j = i + 1; j < array.length; j++) {
            bars[j].style.backgroundColor = "red";
            await sleep(delay);

            if (array[j] < array[minIndex]) {
                minIndex = j;
            }

            resetColor(j);
        }

        swap(i, minIndex);
        resetColor(i);
    }
}

//////////////////// INSERTION ////////////////////

async function insertionSort() {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;

        bars[i].style.backgroundColor = "yellow";
        await sleep(delay);

        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            bars[j + 1].style.height = `${array[j]}px`;
            j--;
            await sleep(delay);
        }

        array[j + 1] = key;
        bars[j + 1].style.height = `${key}px`;
        resetColor(i);
    }
}

//////////////////// MERGE SORT ////////////////////

async function mergeSort(left, right) {
    if (left >= right) return;

    let mid = Math.floor((left + right) / 2);

    await mergeSort(left, mid);
    await mergeSort(mid + 1, right);
    await merge(left, mid, right);
}

async function merge(left, mid, right) {
    let temp = [];
    let i = left;
    let j = mid + 1;

    while (i <= mid && j <= right) {
        bars[i].style.backgroundColor = "red";
        bars[j].style.backgroundColor = "red";
        await sleep(delay);

        if (array[i] < array[j]) {
            temp.push(array[i++]);
        } else {
            temp.push(array[j++]);
        }

        resetColor(i - 1);
        resetColor(j - 1);
    }

    while (i <= mid) temp.push(array[i++]);
    while (j <= right) temp.push(array[j++]);

    for (let k = left; k <= right; k++) {
        array[k] = temp[k - left];
        bars[k].style.height = `${array[k]}px`;
        await sleep(delay);
    }
}

//////////////////// QUICK SORT ////////////////////

async function quickSort(low, high) {
    if (low < high) {
        let pi = await partition(low, high);
        await quickSort(low, pi - 1);
        await quickSort(pi + 1, high);
    }
}

async function partition(low, high) {
    let pivot = array[high];
    bars[high].style.backgroundColor = "yellow";

    let i = low - 1;

    for (let j = low; j < high; j++) {
        bars[j].style.backgroundColor = "red";
        await sleep(delay);

        if (array[j] < pivot) {
            i++;
            swap(i, j);
        }

        resetColor(j);
    }

    swap(i + 1, high);
    resetColor(high);

    return i + 1;
}

//////////////////// UTILITIES ////////////////////

function swap(i, j) {
    [array[i], array[j]] = [array[j], array[i]];
    bars[i].style.height = `${array[i]}px`;
    bars[j].style.height = `${array[j]}px`;
}

function resetColor(index) {
    if (bars[index]) {
        bars[index].style.backgroundColor = "#00bcd4";
    }
}

generateArray();