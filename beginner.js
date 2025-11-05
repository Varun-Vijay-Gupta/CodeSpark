const topics = {
    "Bubble Sort": {
        explanation: `
            <h3>What is Bubble Sort?</h3>
<p>Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The process continues until the list is completely sorted. It is called "Bubble Sort" because smaller elements gradually "bubble" up to their correct position.</p>

<h3>How Does It Work?</h3>
<ul>
    <li>Start from the first element and compare it with the next one.</li>
    <li>If the first element is greater than the second, swap them.</li>
    <li>Move to the next adjacent pair and repeat the comparison and swap if needed.</li>
    <li>Continue for the entire array, moving the largest unsorted element to its correct position at the end.</li>
    <li>Repeat the process for the remaining unsorted elements until no swaps are required.</li>
</ul>

<h3>Example</h3>
<p>Sorting the array [5, 3, 8, 4, 2] using Bubble Sort:</p>
<ul>
    <li>Pass 1: [3, 5, 8, 4, 2] → [3, 5, 8, 4, 2] → [3, 5, 4, 8, 2] → [3, 5, 4, 2, 8]</li>
    <li>Pass 2: [3, 5, 4, 2, 8] → [3, 4, 5, 2, 8] → [3, 4, 2, 5, 8]</li>
    <li>Pass 3: [3, 4, 2, 5, 8] → [3, 2, 4, 5, 8]</li>
    <li>Pass 4: [2, 3, 4, 5, 8] (Sorted)</li>
</ul>

<h3>Performance Analysis</h3>
<ul>
    <li><strong>Best Case (Already Sorted):</strong> O(n) - Only one pass is needed.</li>
    <li><strong>Average Case:</strong> O(n²) - About n/2 swaps per pass over n passes.</li>
    <li><strong>Worst Case (Reversed Order):</strong> O(n²) - Maximum swaps required.</li>
</ul>

<h3>Space Complexity</h3>
<ul>
    <li>O(1) (Constant space) - Uses no extra memory apart from variables.</li>
    <li>Stable Sort - Maintains the order of duplicate elements.</li>
</ul>

<h3>Optimized Bubble Sort (Early Stopping)</h3>
<p>To improve efficiency, we can stop the algorithm if no swaps occur in a pass, meaning the array is already sorted.</p>

<pre>
public void optimizedBubbleSort(int[] arr) {
    int n = arr.length;
    boolean swapped;
    for (int i = 0; i < n - 1; i++) {
        swapped = false; 
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) { 
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break;
    }
}
</pre>
        `,
        partialCode: `public void bubbleSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                // Complete the swap logic here
            }
        }
    }
}`,
        correctCode: `int temp = arr[j]; 
arr[j] = arr[j + 1]; 
arr[j + 1] = temp;`,
        stepByStep: "To swap elements, store arr[j] in temp, assign arr[j+1] to arr[j], then store temp in arr[j+1].",
        quiz: [
            { question: "What is the time complexity of Bubble Sort?", options: ["O(n)", "O(n log n)", "O(n^2)", "O(1)"], answer: "O(n^2)" },
            { question: "What type of sorting algorithm is Bubble Sort?", options: ["Divide and Conquer", "Comparison-based", "Non-comparison-based", "Hash-based"], answer: "Comparison-based" },
            {
                question: "What is the time complexity of Bubble Sort in the worst case?",
                options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
                answer: "O(n²)"
              },
              {
                question: "Which technique does Bubble Sort use to sort elements?",
                options: ["Divide and Conquer", "Swapping adjacent elements", "Binary Search", "Recursion"],
                answer: "Swapping adjacent elements"
              },
              {
                question: "In which case does Bubble Sort perform best?",
                options: ["Reversed array", "Random array", "Already sorted array", "Large dataset"],
                answer: "Already sorted array"
              },
              {
                question: "Does Bubble Sort work in-place?",
                options: ["Yes", "No", "Only in Java", "Only with arrays"],
                answer: "Yes"
              },
              {
                question: "What is the average case time complexity of Bubble Sort?",
                options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
                answer: "O(n²)"
              }
        ]
    },
    "Selection Sort": {
        explanation: `
           <h3>What is Selection Sort?</h3>
<p>Selection Sort is a simple sorting algorithm that divides the list into a sorted and an unsorted region. It repeatedly selects the smallest (or largest) element from the unsorted part and swaps it with the first unsorted element. This process continues until the entire list is sorted. It is called "Selection Sort" because it selects the smallest element in each iteration.</p>

<h3>How Does It Work?</h3>
<ul>
    <li>Start from the first element and consider it as the minimum.</li>
    <li>Find the smallest element in the remaining unsorted portion of the array.</li>
    <li>Swap the smallest element with the first element of the unsorted portion.</li>
    <li>Move the boundary of the sorted portion one step forward.</li>
    <li>Repeat the process until the entire list is sorted.</li>
</ul>

<h3>Example</h3>
<p>Sorting the array [5, 3, 8, 4, 2] using Selection Sort:</p>
<ul>
    <li>Pass 1: [<b>2</b>, 3, 8, 4, <b>5</b>] (Swapped 2 and 5)</li>
    <li>Pass 2: [2, <b>3</b>, 8, 4, 5] (No swap needed)</li>
    <li>Pass 3: [2, 3, <b>4</b>, <b>8</b>, 5] (Swapped 4 and 8)</li>
    <li>Pass 4: [2, 3, 4, <b>5</b>, <b>8</b>] (Swapped 5 and 8)</li>
    <li>Pass 5: [2, 3, 4, 5, 8] (Sorted)</li>
</ul>

<h3>Performance Analysis</h3>
<ul>
    <li><strong>Best Case (Already Sorted):</strong> O(n²) - Still needs comparisons.</li>
    <li><strong>Average Case:</strong> O(n²) - Always makes n(n-1)/2 comparisons.</li>
    <li><strong>Worst Case (Reversed Order):</strong> O(n²) - Maximum swaps required.</li>
</ul>

<h3>Space Complexity</h3>
<ul>
    <li>O(1) (Constant space) - Uses no extra memory apart from variables.</li>
    <li>Unstable Sort - May change the order of duplicate elements.</li>
</ul>

<h3>Optimized Selection Sort</h3>
<p>Although Selection Sort is inefficient for large data sets, we can slightly optimize it by reducing unnecessary swaps.</p>

<pre>
public void selectionSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
        int minIdx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        if (minIdx != i) { // Swap only if a new minimum was found
            int temp = arr[minIdx];
            arr[minIdx] = arr[i];
            arr[i] = temp;
        }
    }
}
</pre> `,
        partialCode: `public void selectionSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n-1; i++) {
        int minIdx = i;
        for (int j = i+1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                // Complete the min index update logic here
            }
        }
        // Complete the swap logic here
    }
}`,
        correctCode: `minIdx = j;
int temp = arr[i]; 
arr[i] = arr[minIdx]; 
arr[minIdx] = temp;`,
        stepByStep: "minIdx is the index which is equal to j and to find the minimum element, swap it with the first unsorted element.",
        quiz: [
            { question: "What is the time complexity of Selection Sort?", options: ["O(n)", "O(n log n)", "O(n^2)", "O(n!)"], answer: "O(n^2)" },
            { question: "How many swaps does Selection Sort perform in the worst case?", options: ["O(n)", "O(n log n)", "O(n^2)", "O(1)"], answer: "O(n)" },
            {
                question: "What is the main idea behind Selection Sort?",
                options: [
                  "Select the smallest element and swap it to the front",
                  "Compare every pair of elements and swap them",
                  "Divide the array and conquer",
                  "Use a pivot to partition the array"
                ],
                answer: "Select the smallest element and swap it to the front"
              },
              {
                question: "What is the time complexity of Selection Sort in the worst case?",
                options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
                answer: "O(n²)"
              },
              {
                question: "Which of the following is true about Selection Sort?",
                options: [
                  "It is a stable sort by default",
                  "It requires additional memory",
                  "It performs fewer swaps than Bubble Sort",
                  "It always performs better than Merge Sort"
                ],
                answer: "It performs fewer swaps than Bubble Sort"
              },
              {
                question: "In which case does Selection Sort perform the best?",
                options: [
                  "Already sorted array",
                  "Reverse sorted array",
                  "All elements are the same",
                  "It always performs the same"
                ],
                answer: "It always performs the same"
              },
              {
                question: "Is Selection Sort an in-place sorting algorithm?",
                options: ["Yes", "No", "Only in Python", "Only for strings"],
                answer: "Yes"
              }
        ]
    },
    "Insertion Sort": {
    explanation: `
        <h3>What is Insertion Sort?</h3>
<p>Insertion Sort is a simple and intuitive sorting algorithm that builds the sorted list one item at a time. It takes each element from the unsorted part and places it in its correct position within the sorted part. This method is similar to how we sort playing cards in our hands.</p>

<h3>How Does It Work?</h3>
<ul>
    <li>Start with the second element and compare it with the first.</li>
    <li>If the second element is smaller, shift the first element to the right and insert the second element in its correct position.</li>
    <li>Move to the next element and insert it into the sorted portion by shifting larger elements to the right.</li>
    <li>Repeat this process for all elements until the entire list is sorted.</li>
</ul>

<h3>Example</h3>
<p>Sorting the array [5, 3, 8, 4, 2] using Insertion Sort:</p>
<ul>
    <li>Pass 1: [<b>3</b>, 5, 8, 4, 2] (Inserted 3 before 5)</li>
    <li>Pass 2: [3, 5, 8, 4, 2] (No change, as 8 is already in place)</li>
    <li>Pass 3: [3, 5, <b>4</b>, 8, 2] → [3, <b>4</b>, 5, 8, 2] (Inserted 4 before 5)</li>
    <li>Pass 4: [3, 4, 5, <b>2</b>, 8] → [3, 4, <b>2</b>, 5, 8] → [3, <b>2</b>, 4, 5, 8] → [<b>2</b>, 3, 4, 5, 8] (Inserted 2 before 3)</li>
</ul>

<h3>Performance Analysis</h3>
<ul>
    <li><strong>Best Case (Already Sorted):</strong> O(n) - Only one comparison per element.</li>
    <li><strong>Average Case:</strong> O(n²) - About n²/4 comparisons and shifts.</li>
    <li><strong>Worst Case (Reversed Order):</strong> O(n²) - Maximum comparisons and shifts required.</li>
</ul>

<h3>Space Complexity</h3>
<ul>
    <li>O(1) (Constant space) - Uses no extra memory apart from variables.</li>
    <li>Stable Sort - Maintains the order of duplicate elements.</li>
</ul>

<h3>Optimized Insertion Sort (Binary Search for Position)</h3>
<p>To reduce comparisons, we can use binary search to find the correct position for each element.</p>

<pre>
public void insertionSort(int[] arr) {
    int n = arr.length;
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) { // Shift larger elements to the right
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key; // Insert the key at its correct position
    }
}
</pre>
    `,
    partialCode: `public void insertionSort(int[] arr) {
        int n = arr.length;
        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) {
                // Complete the shifting logic here
            }
            // Insert the key
        }
    }`,
    correctCode: `arr[j + 1] = arr[j];
j--;
arr[j + 1] = key;`,
    stepByStep: "Shift all elements greater than key to the right, then insert key in its correct position.",
    quiz: [
        { question: "What is the worst-case time complexity of Insertion Sort?", options: ["O(n)", "O(n log n)", "O(n^2)", "O(1)"], answer: "O(n^2)" },
        { question: "Is Insertion Sort stable?", options: ["Yes", "No"], answer: "Yes" },
        {
            question: "How does Insertion Sort work?",
            options: [
              "It swaps the largest element to the end in each pass",
              "It builds the sorted array one item at a time by shifting elements",
              "It uses a pivot to divide the array",
              "It divides the array into halves and merges them"
            ],
            answer: "It builds the sorted array one item at a time by shifting elements"
          },
          {
            question: "What is the best-case time complexity of Insertion Sort?",
            options: ["O(n²)", "O(log n)", "O(n)", "O(n log n)"],
            answer: "O(n)"
          },
          {
            question: "Which situation is best suited for Insertion Sort?",
            options: [
              "Large unsorted datasets",
              "Sorting linked lists",
              "Nearly sorted small arrays",
              "Parallel sorting"
            ],
            answer: "Nearly sorted small arrays"
          },
          {
            question: "Is Insertion Sort stable?",
            options: ["Yes", "No", "Only in some cases", "Depends on implementation"],
            answer: "Yes"
          },
          {
            question: "What is the worst-case number of comparisons in Insertion Sort?",
            options: [
              "n",
              "n log n",
              "n²",
              "(n(n-1))/2"
            ],
            answer: "(n(n-1))/2"
          }
    ]
},

"Merge Sort": {
    explanation: `
        <h3>What is Merge Sort?</h3>
<p>Merge Sort is a **divide-and-conquer** sorting algorithm that splits an array into smaller subarrays, sorts them, and then merges them back together in sorted order. It is one of the most efficient sorting algorithms with a guaranteed time complexity of O(n log n).</p>

<h3>How Does It Work?</h3>
<ul>
    <li>Divide the array into two halves recursively until each subarray has only one element.</li>
    <li>Merge the subarrays back together in sorted order.</li>
    <li>Repeat the merging process until the entire array is sorted.</li>
</ul>

<h3>Example</h3>
<p>Sorting the array [5, 3, 8, 4, 2] using Merge Sort:</p>
<ul>
    <li>Step 1: Split into two halves → [5, 3, 8] and [4, 2]</li>
    <li>Step 2: Split further → [5, 3] and [8] | [4] and [2]</li>
    <li>Step 3: Sort and merge → [3, 5] and [8] | [2, 4]</li>
    <li>Step 4: Merge final halves → [2, 3, 4, 5, 8] (Sorted)</li>
</ul>

<h3>Performance Analysis</h3>
<ul>
    <li><strong>Best Case:</strong> O(n log n) - Always divides into equal halves.</li>
    <li><strong>Average Case:</strong> O(n log n) - Recursively splits and merges.</li>
    <li><strong>Worst Case:</strong> O(n log n) - Always requires full merging.</li>
</ul>

<h3>Space Complexity</h3>
<ul>
    <li>O(n) - Requires extra space to store subarrays.</li>
    <li>Stable Sort - Maintains the order of duplicate elements.</li>
</ul>

<h3>Implementation</h3>
<p>Merge Sort is implemented using recursion to split and merge the array.</p>

<pre>
public void mergeSort(int[] arr, int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        
        mergeSort(arr, left, mid); // Sort first half
        mergeSort(arr, mid + 1, right); // Sort second half
        
        merge(arr, left, mid, right); // Merge the two halves
    }
}

private void merge(int[] arr, int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;

    int[] leftArr = new int[n1];
    int[] rightArr = new int[n2];

    for (int i = 0; i < n1; i++) leftArr[i] = arr[left + i];
    for (int i = 0; i < n2; i++) rightArr[i] = arr[mid + 1 + i];

    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k++] = leftArr[i++];
        } else {
            arr[k++] = rightArr[j++];
        }
    }

    while (i < n1) arr[k++] = leftArr[i++];
    while (j < n2) arr[k++] = rightArr[j++];
}
</pre>
    `,
    partialCode:` public void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;
            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);
            // Complete the merge function call here
        }
    }
        private void merge(int[] arr, int left, int mid, int right) {
    // Sizes of the two subarrays
    int n1 = mid - left + 1;
    int n2 = right - mid;

    // Create temporary arrays
    int[] leftArray = new int[n1];
    int[] rightArray = new int[n2];

    // Copy data to temporary arrays
    for (int i = 0; i < n1; i++)
        leftArray[i] = arr[left + i];
    for (int j = 0; j < n2; j++)
        rightArray[j] = arr[mid + 1 + j];

    // Merge the temporary arrays
    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (leftArray[i] <= rightArray[j]) {
            arr[k] = leftArray[i];
            i++;
        } else {
            arr[k] = rightArray[j];
            j++;
        }
        k++;
    }

    // Copy remaining elements of leftArray[], if any
    while (i < n1) {
        arr[k] = leftArray[i];
        i++;
        k++;
    }

    // Copy remaining elements of rightArray[], if any
    while (j < n2) {
        arr[k] = rightArray[j];
        j++;
        k++;
    }
}`,
    correctCode: "merge(arr, left, mid, right);",
    stepByStep: "Recursively divide the array, sort each half, and then merge them back together.",
    quiz: [
        { question: "What is the time complexity of Merge Sort?", options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"], answer: "O(n log n)" },
        { question: "Is Merge Sort in-place?", options: ["Yes", "No"], answer: "No" },
        {
            question: "What is the basic strategy of Merge Sort?",
            options: [
              "Divide and Conquer",
              "Backtracking",
              "Dynamic Programming",
              "Greedy Algorithm"
            ],
            answer: "Divide and Conquer"
          },
          {
            question: "What is the worst-case time complexity of Merge Sort?",
            options: ["O(n²)", "O(n log n)", "O(n)", "O(log n)"],
            answer: "O(n log n)"
          },
          {
            question: "Is Merge Sort a stable sorting algorithm?",
            options: ["Yes", "No", "Only for integers", "Only for strings"],
            answer: "Yes"
          },
          {
            question: "Merge Sort is best suited for which type of data structure?",
            options: ["Arrays", "Linked Lists", "Stacks", "Queues"],
            answer: "Linked Lists"
          },
          {
            question: "What happens during the 'merge' step in Merge Sort?",
            options: [
              "Two sorted halves are combined into a larger sorted array",
              "The array is split into halves",
              "The largest element is moved to the end",
              "Unsorted elements are moved to the start"
            ],
            answer: "Two sorted halves are combined into a larger sorted array"
          }
    ]
},

"Quick Sort": {
    explanation: `
        <h3>What is Quick Sort?</h3>
<p>Quick Sort is a **divide-and-conquer** sorting algorithm that selects a "pivot" element and partitions the array into two halves: elements smaller than the pivot and elements greater than the pivot. It then recursively sorts the two halves.</p>

<h3>How Does It Work?</h3>
<ul>
    <li>Select a pivot element (can be first, last, middle, or random).</li>
    <li>Rearrange the array so that elements smaller than the pivot are on the left and elements greater than the pivot are on the right (partitioning step).</li>
    <li>Recursively apply Quick Sort on the left and right subarrays.</li>
    <li>Continue until the entire array is sorted.</li>
</ul>

<h3>Example</h3>
<p>Sorting the array [5, 3, 8, 4, 2] using Quick Sort:</p>
<ul>
    <li>Choose pivot = 4.</li>
    <li>Partition: [3, 2] (smaller) and [5, 8] (greater).</li>
    <li>Recursively sort both subarrays.</li>
    <li>Final sorted array: [2, 3, 4, 5, 8].</li>
</ul>

<h3>Performance Analysis</h3>
<ul>
    <li><strong>Best Case:</strong> O(n log n) - Ideal partitioning into equal halves.</li>
    <li><strong>Average Case:</strong> O(n log n) - Recursive partitioning.</li>
    <li><strong>Worst Case:</strong> O(n²) - If pivot always picks the smallest or largest element.</li>
</ul>

<h3>Space Complexity</h3>
<ul>
    <li>O(log n) (Recursive stack space).</li>
    <li>Not a Stable Sort - May not maintain the order of duplicate elements.</li>
</ul>

<h3>Implementation</h3>
<p>Quick Sort is implemented recursively with partitioning.</p>

<pre>
public void quickSort(int[] arr, int low, int high) {
    if (low < high) {
        int pivotIndex = partition(arr, low, high);
        
        quickSort(arr, low, pivotIndex - 1); // Sort left part
        quickSort(arr, pivotIndex + 1, high); // Sort right part
    }
}

private int partition(int[] arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    
    return i + 1;
}
</pre>
    `,
    partialCode:`public void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            // Complete the recursive Quick Sort calls here
        }
    }
        private int partition(int[] arr, int low, int high) {
    int pivot = arr[high]; // Choosing the last element as pivot
    int i = low - 1; // Index of smaller element

    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) { // If current element is smaller than pivot
            i++;
            // Swap arr[i] and arr[j]
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    // Swap arr[i+1] and arr[high] (placing pivot at the correct position)
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    return i + 1; // Return the partition index
}`,
    correctCode: `quickSort(arr, low, pi - 1); 
quickSort(arr, pi + 1, high);`,
    stepByStep: "Partition the array around the pivot, then apply Quick Sort to left and right subarrays.",
    quiz: [
        { question: "What is the average-case time complexity of Quick Sort?", options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"], answer: "O(n log n)" },
        { question: "Which method is used for partitioning in Quick Sort?", options: ["Merge", "Divide and Conquer", "Lomuto or Hoare", "Binary Search"], answer: "Lomuto or Hoare" },
        {
            question: "What is the key concept behind Quick Sort?",
            options: ["Divide and Conquer", "Dynamic Programming", "Greedy Algorithm", "Backtracking"],
            answer: "Divide and Conquer"
          },
          {
            question: "What is the worst-case time complexity of Quick Sort?",
            options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
            answer: "O(n²)"
          },
          {
            question: "Which operation is crucial in Quick Sort?",
            options: ["Merging", "Partitioning", "Pushing", "Swapping adjacent elements"],
            answer: "Partitioning"
          },
          {
            question: "Which element is typically chosen as the pivot in Quick Sort?",
            options: ["Always the first", "Always the last", "Middle element or random", "Largest element"],
            answer: "Middle element or random"
          },
          {
            question: "Is Quick Sort an in-place sorting algorithm?",
            options: ["Yes", "No", "Only in some implementations", "Only for arrays"],
            answer: "Yes"
          }
    ]
},

"Linear Search": {
    explanation: `
        <h3>What is Linear Search?</h3>
<p>Linear Search is a **simple searching algorithm** that sequentially checks each element in an array until the desired element is found or the end of the array is reached.</p>

<h3>How Does It Work?</h3>
<ul>
    <li>Start from the first element of the array.</li>
    <li>Compare the current element with the target element.</li>
    <li>If they match, return the index of the element.</li>
    <li>If they do not match, move to the next element.</li>
    <li>Repeat until the element is found or the entire array is traversed.</li>
</ul>

<h3>Example</h3>
<p>Finding 4 in the array [5, 3, 8, 4, 2] using Linear Search:</p>
<ul>
    <li>Compare 5 with 4 → No match.</li>
    <li>Compare 3 with 4 → No match.</li>
    <li>Compare 8 with 4 → No match.</li>
    <li>Compare 4 with 4 → Match found at index 3.</li>
</ul>

<h3>Performance Analysis</h3>
<ul>
    <li><strong>Best Case:</strong> O(1) - If the element is at the first position.</li>
    <li><strong>Average Case:</strong> O(n) - If the element is somewhere in the middle.</li>
    <li><strong>Worst Case:</strong> O(n) - If the element is at the last position or not present.</li>
</ul>

<h3>Space Complexity</h3>
<ul>
    <li>O(1) - No extra space required.</li>
    <li>Works on both sorted and unsorted arrays.</li>
</ul>

<h3>Implementation</h3>
<p>Linear Search is implemented iteratively.</p>

<pre>
public int linearSearch(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i; // Element found, return index
        }
    }
    return -1; // Element not found
}
</pre>
    `,
    partialCode:` public int linearSearch(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                // Complete the return statement
            }
        }
        return -1;
    }`,
    correctCode: "return i;",
    stepByStep: "Iterate through the array, compare each element with the target, and return its index if found.",
    quiz: [
        { question: "What is the worst-case time complexity of Linear Search?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], answer: "O(n)" },
        { question: "Is Linear Search efficient for large datasets?", options: ["Yes", "No"], answer: "No" },
        {
            question: "What is the time complexity of linear search in the worst case?",
            options: ["O(log n)", "O(n)", "O(1)", "O(n²)"],
            answer: "O(n)"
          },
          {
            question: "In linear search, how are the elements of the array checked?",
            options: ["Binary steps", "Randomly", "One by one from start to end", "Using recursion"],
            answer: "One by one from start to end"
          },
          {
            question: "Which of the following data structures can linear search be used on?",
            options: ["Only arrays", "Only linked lists", "Any linear data structure", "Only strings"],
            answer: "Any linear data structure"
          },
          {
            question: "What happens if the searched element is not found in linear search?",
            options: ["It returns the middle index", "It throws an error", "It continues indefinitely", "It returns -1 or a failure indicator"],
            answer: "It returns -1 or a failure indicator"
          },
          {
            question: "Which of the following is a drawback of linear search?",
            options: ["It only works on sorted data", "It is complex to implement", "It is slow for large datasets", "It requires binary operations"],
            answer: "It is slow for large datasets"
          }
    ]
},

"Binary Search": {
    explanation: `
       <h3>What is Binary Search?</h3>
<p>Binary Search is an **efficient searching algorithm** that finds the position of a target element in a sorted array. It works by repeatedly dividing the search range in half, eliminating half of the elements in each step.</p>

<h3>How Does It Work?</h3>
<ul>
    <li>Ensure the array is sorted.</li>
    <li>Find the middle element.</li>
    <li>If the middle element matches the target, return its index.</li>
    <li>If the middle element is greater than the target, search in the left half.</li>
    <li>If the middle element is smaller than the target, search in the right half.</li>
    <li>Repeat the process until the target is found or the search range becomes empty.</li>
</ul>

<h3>Example</h3>
<p>Finding 4 in the sorted array [2, 3, 4, 5, 8] using Binary Search:</p>
<ul>
    <li>Middle element: 4 → Match found at index 2.</li>
</ul>
<p>Finding 7 in [2, 3, 4, 5, 8]:</p>
<ul>
    <li>Middle element: 4 → 7 is greater, search in [5, 8].</li>
    <li>Middle element: 5 → 7 is greater, search in [8].</li>
    <li>Middle element: 8 → 7 is smaller, search range is empty.</li>
    <li>7 is not found in the array.</li>
</ul>

<h3>Performance Analysis</h3>
<ul>
    <li><strong>Best Case:</strong> O(1) - If the middle element is the target.</li>
    <li><strong>Average Case:</strong> O(log n) - The search space is halved each step.</li>
    <li><strong>Worst Case:</strong> O(log n) - If the element is not in the array.</li>
</ul>

<h3>Space Complexity</h3>
<ul>
    <li>O(1) - Iterative approach uses no extra space.</li>
    <li>O(log n) - Recursive approach uses extra space due to recursion calls.</li>
</ul>

<h3>Implementation</h3>
<p>Binary Search can be implemented iteratively or recursively.</p>

<h4>Iterative Binary Search</h4>
<pre>
public int binarySearch(int[] arr, int target) {
    int left = 0, right = arr.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
</pre>

<h4>Recursive Binary Search</h4>
<pre>
public int binarySearchRecursive(int[] arr, int left, int right, int target) {
    if (left > right) return -1;
    int mid = left + (right - left) / 2;
    if (arr[mid] == target) return mid;
    if (arr[mid] < target) return binarySearchRecursive(arr, mid + 1, right, target);
    return binarySearchRecursive(arr, left, mid - 1, target);
}
</pre>
    `,
    partialCode: `public int binarySearch(int[] arr, int left, int right, int target) {
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] == target) {
                // Complete the return statement
            }
            if (arr[mid] < target) {
                // Move to the right half
            } else {
                // Move to the left half
            }
        }
        return -1;
    }`,
    correctCode: `return mid;
left = mid + 1;
right = mid - 1;`,
    stepByStep: "Find the middle element, compare with the target, and decide whether to search left or right.",
    quiz: [
        { question: "What is the time complexity of Binary Search?", options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"], answer: "O(log n)" },
        { question: "Can Binary Search be used on an unsorted array?", options: ["Yes", "No"], answer: "No" },
        {
            question: "What is the time complexity of binary search in the worst case?",
            options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
            answer: "O(log n)"
          },
          {
            question: "What condition must be met to use binary search?",
            options: ["Array must be sorted", "Array must be reversed", "Array must be of fixed size", "Array must have even elements"],
            answer: "Array must be sorted"
          },
          {
            question: "In binary search, how is the middle element calculated?",
            options: ["(start + end) / 2", "(start - end) / 2", "Random index", "Always index 0"],
            answer: "(start + end) / 2"
          },
          {
            question: "What happens if the target is less than the middle element?",
            options: ["Search the left half", "Search the right half", "Return -1", "Restart the algorithm"],
            answer: "Search the left half"
          },
          {
            question: "What type of algorithm is binary search?",
            options: ["Brute-force", "Divide and conquer", "Greedy", "Backtracking"],
            answer: "Divide and conquer"
          }
    ]
},
"Heap Sort": {
    explanation: `
        <h3>What is Heap Sort?</h3>
        <p>Heap Sort is a comparison-based sorting technique based on a Binary Heap data structure. It is similar to selection sort where we first find the maximum element and place it at the end. We repeat the same process for the remaining elements.</p>

        <h3>How Does It Work?</h3>
        <ul>
            <li>Build a Max-Heap from the input array.</li>
            <li>Swap the first (largest) element with the last element of the heap.</li>
            <li>Reduce the heap size by 1 and heapify the root again.</li>
            <li>Repeat until the entire array is sorted.</li>
        </ul>

        <h3>Example</h3>
        <p>Sorting the array [4, 10, 3, 5, 1] using Heap Sort:</p>
        <ul>
            <li>Build Max Heap: [10, 5, 3, 4, 1]</li>
            <li>Swap 10 with 1: [1, 5, 3, 4, 10]</li>
            <li>Heapify: [5, 4, 3, 1, 10]</li>
            <li>Repeat process...</li>
            <li>Final Sorted Array: [1, 3, 4, 5, 10]</li>
        </ul>

        <h3>Performance Analysis</h3>
        <ul>
            <li><strong>Best, Average, Worst Case:</strong> O(n log n)</li>
            <li><strong>Space Complexity:</strong> O(1)</li>
            <li><strong>Stable Sort:</strong> No</li>
        </ul>

        <h3>Why Use Heap Sort?</h3>
        <ul>
            <li>Consistent time complexity of O(n log n).</li>
            <li>Efficient for large datasets when stability is not a concern.</li>
        </ul>

        <h3>Complete Java Code for Heap Sort</h3>
        <pre>
public void heapSort(int[] arr) {
    int n = arr.length;

    // Build max heap
    for (int i = n / 2 - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Extract elements from heap one by one
    for (int i = n - 1; i > 0; i--) {
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr, i, 0);
    }
}

void heapify(int[] arr, int n, int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest])
        largest = left;

    if (right < n && arr[right] > arr[largest])
        largest = right;

    if (largest != i) {
        int swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;
        heapify(arr, n, largest);
    }
}
        </pre>
    `,
    partialCode: `void heapify(int[] arr, int n, int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    // Complete logic to find the largest and swap
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest != i) {
        // Complete the swap code here
    }
}`,
    correctCode: `int swap = arr[i];
arr[i] = arr[largest];
arr[largest] = swap;
heapify(arr, n, largest);`,
    stepByStep: "Compare the current node with its left and right children. Swap with the largest child if needed and recursively heapify the affected subtree.",
    quiz: [
        { question: "What is the time complexity of Heap Sort in all cases?", options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"], answer: "O(n log n)" },
        { question: "Which data structure does Heap Sort rely on?", options: ["Queue", "Stack", "Binary Heap", "Linked List"], answer: "Binary Heap" },
        {
            question: "What data structure is used in heap sort?",
            options: ["Queue", "Stack", "Heap", "Tree"],
            answer: "Heap"
          },
          {
            question: "What type of heap is typically used in heap sort?",
            options: ["Max Heap", "Min Heap", "Binary Search Tree", "AVL Tree"],
            answer: "Max Heap"
          },
          {
            question: "What is the time complexity of heap sort in the worst case?",
            options: ["O(n)", "O(n log n)", "O(log n)", "O(n²)"],
            answer: "O(n log n)"
          },
          {
            question: "Heap sort is based on which algorithmic approach?",
            options: ["Divide and conquer", "Greedy", "Dynamic programming", "Comparison-based"],
            answer: "Comparison-based"
          },
          {
            question: "Is heap sort a stable sorting algorithm?",
            options: ["Yes", "No", "Only for arrays", "Only for strings"],
            answer: "No"
          }
    
    ]
},
"DFS": {
    explanation: `
        <h3>What is Depth First Search (DFS)?</h3>
        <p>Depth First Search (DFS) is a graph traversal algorithm that starts at a source node and explores as far as possible along each branch before backtracking.</p>

        <h3>How Does It Work?</h3>
        <ul>
            <li>Start from the source node.</li>
            <li>Visit it and mark it as visited.</li>
            <li>Recursively visit all its unvisited adjacent nodes.</li>
            <li>Backtrack when no unvisited neighbors are left.</li>
        </ul>

        <h3>DFS Characteristics:</h3>
        <ul>
            <li>Can be implemented using recursion (stack) or explicit stack.</li>
            <li>Used for topological sorting, cycle detection, connected components.</li>
            <li>Applicable to both trees and graphs (directed/undirected).</li>
        </ul>

        <h3>Time and Space Complexity</h3>
        <ul>
            <li><strong>Time Complexity:</strong> O(V + E), where V is vertices and E is edges</li>
            <li><strong>Space Complexity:</strong> O(V) for visited tracking</li>
        </ul>

        <h3>Use Cases</h3>
        <ul>
            <li>Maze and puzzle solving</li>
            <li>Finding connected components in a graph</li>
            <li>Topological sorting</li>
        </ul>

        <h3>Example Code (Recursive DFS in Java)</h3>
        <pre>
void dfs(int node, boolean[] visited, ArrayList<ArrayList<Integer>> adj) {
    visited[node] = true;
    System.out.print(node + " ");
    for (int neighbor : adj.get(node)) {
        if (!visited[neighbor]) {
            dfs(neighbor, visited, adj);
        }
    }
}
        </pre>
    `,
    partialCode: `void dfs(int node, boolean[] visited, ArrayList<ArrayList<Integer>> adj) {
    visited[node] = true;
    System.out.print(node + " ");
    
    // Complete the logic to visit all neighbors
}`,
    correctCode: `for (int neighbor : adj.get(node)) {
    if (!visited[neighbor]) {
        dfs(neighbor, visited, adj);
    }
}`,
    stepByStep: "Mark the current node as visited, print it, and for each neighbor that hasn't been visited, call DFS recursively.",
    quiz: [
        {
            question: "What data structure is used by DFS recursively?",
            options: ["Queue", "Stack", "Heap", "Tree"],
            answer: "Stack"
        },
        {
            question: "What is the time complexity of DFS?",
            options: ["O(V)", "O(E)", "O(V + E)", "O(V * E)"],
            answer: "O(V + E)"
        },
        {
            question: "What data structure is typically used to implement DFS iteratively?",
            options: ["Queue", "Stack", "Heap", "Priority Queue"],
            answer: "Stack"
          },
          {
            question: "DFS is best suited for which type of graph traversal?",
            options: ["Finding shortest path", "Exploring all paths", "Topological sort", "Detecting cycles"],
            answer: "Exploring all paths"
          },
          {
            question: "Which of the following is a valid application of DFS?",
            options: ["Breadth-first search", "Dijkstra's algorithm", "Topological sorting", "Kruskal's algorithm"],
            answer: "Topological sorting"
          },
          {
            question: "What happens if you don't mark visited nodes in DFS?",
            options: ["The traversal becomes faster", "It visits all nodes twice", "It may enter an infinite loop", "It skips nodes"],
            answer: "It may enter an infinite loop"
          },
          {
            question: "In a recursive DFS implementation, what is stored in the function call stack?",
            options: ["Visited nodes", "Adjacency matrix", "Path history", "Recursive state of each node"],
            answer: "Recursive state of each node"
          }
    ]
},
"BFS": {
    explanation: `
        <h3>What is Breadth First Search (BFS)?</h3>
        <p>Breadth First Search (BFS) is a graph traversal algorithm that explores all neighbors at the present depth prior to moving on to nodes at the next depth level. It uses a queue to keep track of nodes to be visited next.</p>

        <h3>How Does It Work?</h3>
        <ul>
            <li>Start from the source node and add it to the queue.</li>
            <li>Mark it as visited.</li>
            <li>While the queue is not empty:
                <ul>
                    <li>Dequeue a node and process it.</li>
                    <li>Add all its unvisited neighbors to the queue.</li>
                </ul>
            </li>
        </ul>

        <h3>BFS Characteristics:</h3>
        <ul>
            <li>Uses a queue data structure.</li>
            <li>Useful for finding the shortest path in unweighted graphs.</li>
            <li>Explores level by level.</li>
        </ul>

        <h3>Time and Space Complexity</h3>
        <ul>
            <li><strong>Time Complexity:</strong> O(V + E)</li>
            <li><strong>Space Complexity:</strong> O(V)</li>
        </ul>

        <h3>Use Cases</h3>
        <ul>
            <li>Shortest path in unweighted graphs</li>
            <li>Web crawlers</li>
            <li>Social networking sites (friend suggestion)</li>
        </ul>

        <h3>Example Code (BFS in Java)</h3>
        <pre>
void bfs(int start, ArrayList<ArrayList<Integer>> adj, int V) {
    boolean[] visited = new boolean[V];
    Queue<Integer> queue = new LinkedList<>();
    visited[start] = true;
    queue.add(start);

    while (!queue.isEmpty()) {
        int node = queue.poll();
        System.out.print(node + " ");
        for (int neighbor : adj.get(node)) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.add(neighbor);
            }
        }
    }
}
        </pre>
    `,
    partialCode: `void bfs(int start, ArrayList<ArrayList<Integer>> adj, int V) {
    boolean[] visited = new boolean[V];
    Queue<Integer> queue = new LinkedList<>();
    visited[start] = true;
    queue.add(start);

    while (!queue.isEmpty()) {
        int node = queue.poll();
        System.out.print(node + " ");
        
        // Add logic to visit unvisited neighbors and add them to queue
    }
}`,
    correctCode: `for (int neighbor : adj.get(node)) {
    if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.add(neighbor);
    }
}`,
    stepByStep: "Dequeue a node, print it, then check each neighbor. If a neighbor is unvisited, mark it visited and enqueue it.",
    quiz: [
        {
            question: "What data structure is used by BFS?",
            options: ["Stack", "Queue", "Heap", "Array"],
            answer: "Queue"
        },
        {
            question: "What is the time complexity of BFS?",
            options: ["O(V)", "O(E)", "O(V + E)", "O(V * E)"],
            answer: "O(V + E)"
        },
        {question: "Which data structure is typically used to implement BFS?",
            options: ["Stack", "Queue", "Priority Queue", "HashMap"],
            answer: "Queue"
          },
          {
            question: "BFS explores nodes in what manner?",
            options: ["Depth-wise", "Random order", "Level by level", "Backwards"],
            answer: "Level by level"
          },
          {
            question: "Which of the following is a common use of BFS?",
            options: ["Finding shortest path in unweighted graphs", "Cycle detection in trees", "Topological sort", "Building heaps"],
            answer: "Finding shortest path in unweighted graphs"
          },
          {
            question: "What could happen if visited nodes are not tracked in BFS?",
            options: ["It will crash the program", "It may revisit nodes and run infinitely", "It will sort the nodes", "It will only check leaf nodes"],
            answer: "It may revisit nodes and run infinitely"
          },
          {
            question: "Which of the following graphs is best suited for BFS over DFS?",
            options: ["Sparse graphs", "Dense graphs", "Graphs with weighted edges", "Graphs with short paths to goal nodes"],
            answer: "Graphs with short paths to goal nodes"
          }
    ]
},
"Graphs": {
    explanation: `
        <h3>What is a Graph?</h3>
        <p>A graph is a non-linear data structure consisting of nodes (also called vertices) and edges that connect pairs of nodes. Graphs are used to represent real-world problems like social networks, web links, and network routing.</p>

        <h3>Types of Graphs:</h3>
        <ul>
            <li><strong>Directed vs Undirected:</strong> Edges have direction or not.</li>
            <li><strong>Weighted vs Unweighted:</strong> Edges may have weights or not.</li>
            <li><strong>Cyclic vs Acyclic:</strong> May or may not contain cycles.</li>
            <li><strong>Connected vs Disconnected:</strong> Whether all vertices are reachable from any other vertex.</li>
        </ul>

        <h3>Graph Representations:</h3>
        <ul>
            <li><strong>Adjacency Matrix:</strong> 2D array to represent connections. Good for dense graphs.</li>
            <li><strong>Adjacency List:</strong> Array of lists. Efficient for sparse graphs.</li>
        </ul>

        <h3>Common Graph Algorithms:</h3>
        <ul>
            <li>BFS (Breadth-First Search)</li>
            <li>DFS (Depth-First Search)</li>
            <li>Dijkstra’s Algorithm</li>
            <li>Bellman-Ford Algorithm</li>
            <li>Topological Sorting</li>
            <li>Minimum Spanning Tree (Prim’s, Kruskal’s)</li>
        </ul>

        <h3>Applications of Graphs:</h3>
        <ul>
            <li>Social networks</li>
            <li>Navigation systems</li>
            <li>Network routing</li>
            <li>Dependency resolution (e.g., package managers)</li>
        </ul>

        <h3>Example (Graph using Adjacency List)</h3>
        <pre>
void addEdge(ArrayList<ArrayList<Integer>> adj, int u, int v) {
    adj.get(u).add(v);
    adj.get(v).add(u); // for undirected graph
}
        </pre>
    `,
    partialCode: `void addEdge(ArrayList<ArrayList<Integer>> adj, int u, int v) {
    adj.get(u).add(v);
    // Complete the code for undirected graph
}`,
    correctCode: `adj.get(v).add(u);`,
    stepByStep: "To make the graph undirected, ensure you add an edge from u to v and also from v to u.",
    quiz: [
        {
            question: "Which is the most space-efficient way to represent a sparse graph?",
            options: ["Adjacency Matrix", "Adjacency List", "Edge List", "Incidence Matrix"],
            answer: "Adjacency List"
        },
        {
            question: "Which graph algorithm is best for finding shortest paths in an unweighted graph?",
            options: ["DFS", "BFS", "Dijkstra’s", "Bellman-Ford"],
            answer: "BFS"
        },
        {
            question: "What is a graph in data structures?",
            options: ["A linear data structure", "A collection of nodes and edges", "A type of array", "A sorting algorithm"],
            answer: "A collection of nodes and edges"
          },
          {
            question: "What is an edge in a graph?",
            options: ["A node", "A path between two nodes", "The weight of a node", "The label of a graph"],
            answer: "A path between two nodes"
          },
          {
            question: "Which of these is used to represent a graph?",
            options: ["Stack", "Adjacency matrix", "Heap", "Tree"],
            answer: "Adjacency matrix"
          },
          {
            question: "What distinguishes a directed graph from an undirected graph?",
            options: ["Nodes are not connected", "Edges have directions", "Graphs can't have cycles", "Edges must have weights"],
            answer: "Edges have directions"
          },
          {
            question: "What is a cycle in a graph?",
            options: ["A node connected to itself", "A path that starts and ends at the same node", "An edge without a node", "A disconnected node"],
            answer: "A path that starts and ends at the same node"
          }
    ]
},
"Trees": {
    explanation: `
        <h3>What is a Tree?</h3>
        <p>A tree is a hierarchical data structure consisting of nodes, where each node has a parent (except the root) and zero or more children. Trees are widely used in databases, file systems, and compilers.</p>

        <h3>Basic Terminologies:</h3>
        <ul>
            <li><strong>Root:</strong> The topmost node of a tree.</li>
            <li><strong>Leaf Node:</strong> A node with no children.</li>
            <li><strong>Parent and Child:</strong> A node that points to others is a parent; those it points to are children.</li>
            <li><strong>Subtree:</strong> A tree formed by a node and its descendants.</li>
            <li><strong>Height:</strong> Number of edges on the longest path from a node to a leaf.</li>
        </ul>

        <h3>Types of Trees:</h3>
        <ul>
            <li>Binary Tree</li>
            <li>Binary Search Tree (BST)</li>
            <li>AVL Tree (Self-balancing BST)</li>
            <li>Heap (Max-Heap and Min-Heap)</li>
            <li>Trie</li>
        </ul>

        <h3>Tree Traversal Techniques:</h3>
        <ul>
            <li><strong>Inorder (Left, Root, Right)</strong> – used in BSTs for sorted output</li>
            <li><strong>Preorder (Root, Left, Right)</strong> – used to clone trees</li>
            <li><strong>Postorder (Left, Right, Root)</strong> – used to delete trees</li>
            <li><strong>Level Order</strong> – uses a queue, traverses level by level</li>
        </ul>

        <h3>Example (Inorder Traversal):</h3>
        <pre>
void inorder(TreeNode root) {
    if (root == null) return;
    inorder(root.left);
    System.out.print(root.val + " ");
    inorder(root.right);
}
        </pre>
    `,
    partialCode: `void inorder(TreeNode root) {
    if (root == null) return;
    // Fill the code to traverse left subtree
    System.out.print(root.val + " ");
    // Fill the code to traverse right subtree
}`,
    correctCode: `inorder(root.left); 
inorder(root.right);`,
    stepByStep: "First visit the left subtree with a recursive call, then print the node, and finally visit the right subtree.",
    quiz: [
        {
            question: "What is the time complexity of tree traversal in a binary tree?",
            options: ["O(log n)", "O(n log n)", "O(n)", "O(1)"],
            answer: "O(n)"
        },
        {
            question: "What traversal method should you use to print values in sorted order from a BST?",
            options: ["Preorder", "Inorder", "Postorder", "Level Order"],
            answer: "Inorder"
        },
        {
            question: "What is a tree in data structures?",
            options: ["A type of linked list", "A hierarchical data structure", "A circular structure", "A linear data structure"],
            answer: "A hierarchical data structure"
          },
          {
            question: "What is the root of a tree?",
            options: ["A leaf node", "The node with the highest value", "The topmost node", "A node with no children"],
            answer: "The topmost node"
          },
          {
            question: "What is a leaf node in a tree?",
            options: ["A node with only one child", "A node with no children", "A node at the root level", "A node that forms a cycle"],
            answer: "A node with no children"
          },
          {
            question: "Which traversal method visits nodes in the order: Left, Root, Right?",
            options: ["Preorder", "Postorder", "Inorder", "Level-order"],
            answer: "Inorder"
          },
          {
            question: "What is the maximum number of children a binary tree node can have?",
            options: ["1", "2", "3", "Unlimited"],
            answer: "2"
          }
    ]
},"Linked List": {
  "explanation": `
    <h3>What is a Linked List?</h3>
    <p>A Linked List is a linear data structure where each element is a separate object (node). Each node contains data and a reference (link) to the next node in the sequence.</p>

    <h3>Types of Linked Lists</h3>
    <ul>
      <li><strong>Singly Linked List:</strong> Each node points to the next node only.</li>
      <li><strong>Doubly Linked List:</strong> Each node points to both the next and previous nodes.</li>
      <li><strong>Circular Linked List:</strong> Last node points back to the first node.</li>
    </ul>

    <h3>How It Works?</h3>
    <p>In a singly linked list:</p>
    <ul>
      <li>The list starts with a head node.</li>
      <li>Each node has two parts: data and a pointer to the next node.</li>
      <li>Traversal continues by following the next pointer until null is reached.</li>
    </ul>

    <h3>Example Structure:</h3>
    <pre>
    class Node {
        int data;
        Node next;
        Node(int d) {
            data = d;
            next = null;
        }
    }

    class LinkedList {
        Node head;
    }
    </pre>

    <h3>Advantages</h3>
    <ul>
      <li>Dynamic size (unlike arrays).</li>
      <li>Efficient insertion/deletion from beginning or middle.</li>
    </ul>

    <h3>Disadvantages</h3>
    <ul>
      <li>No random access, slower traversal.</li>
      <li>Extra memory used for pointers.</li>
    </ul>

    <h3>Time Complexities</h3>
    <ul>
      <li><strong>Insertion:</strong> O(1) at head, O(n) at tail</li>
      <li><strong>Deletion:</strong> O(1) at head, O(n) at tail</li>
      <li><strong>Search:</strong> O(n)</li>
    </ul>
  `,
  "partialCode": `
    class Node {
        int data;
        Node next;
        Node(int d) {
            data = d;
            next = null;
        }
    }

    public void insertAtEnd(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
            return;
        }
        Node temp = head;
        while (temp.next != null) {
            temp = temp.next;
        }
        // Complete the linking of newNode at the end
    }
  `,
  "correctCode": `
    temp.next = newNode;
  `,
  "stepByStep": "To insert at the end, traverse the list until you reach the last node (where next is null), then set temp.next = newNode to link the new node at the end.",
  "quiz": [
    {
      "question": "What is the time complexity to insert at the beginning of a linked list?",
      "options": ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      "answer": "O(1)"
    },
    {
      "question": "Which of the following is true about Linked Lists?",
      "options": [
        "They allow random access of elements",
        "They use contiguous memory",
        "Each node contains data and a pointer to the next node",
        "They are faster than arrays in searching"
      ],
      "answer": "Each node contains data and a pointer to the next node"
    },
    {
        question: "What is a linked list?",
        options: ["A sequential collection of elements stored in an array", "A dynamic linear data structure", "A hierarchical structure", "A data structure that uses stacks"],
        answer: "A dynamic linear data structure"
      },
      {
        question: "What does each node in a singly linked list contain?",
        options: ["Only data", "Only address", "Data and a pointer to the next node", "Two pointers"],
        answer: "Data and a pointer to the next node"
      },
      {
        question: "What is the time complexity to insert a node at the beginning of a singly linked list?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
        answer: "O(1)"
      },
      {
        question: "Which type of linked list allows traversal in both directions?",
        options: ["Singly linked list", "Doubly linked list", "Circular linked list", "Linear linked list"],
        answer: "Doubly linked list"
      },
      {
        question: "What is the last node of a singly linked list usually linked to?",
        options: ["The head node", "The previous node", "NULL", "A random node"],
        answer: "NULL"
      }
  ]
},"Strings": {
  "explanation": `
    <h3>What are Strings?</h3>
    <p>In Java, a String is a sequence of characters. It is an object of the <code>String</code> class that is immutable, meaning once a string object is created, it cannot be changed.</p>

    <h3>How to Declare Strings in Java?</h3>
    <ul>
      <li>Using String literals: <code>String s = "hello";</code></li>
      <li>Using the <code>new</code> keyword: <code>String s = new String("hello");</code></li>
    </ul>

    <h3>Common String Operations</h3>
    <ul>
      <li><code>length()</code> – Returns the number of characters.</li>
      <li><code>charAt(index)</code> – Returns the character at specified index.</li>
      <li><code>substring(start, end)</code> – Extracts a substring.</li>
      <li><code>indexOf(ch)</code> – Finds the first index of a character.</li>
      <li><code>equals()</code> – Compares content of two strings.</li>
      <li><code>equalsIgnoreCase()</code> – Compares strings ignoring case.</li>
      <li><code>compareTo()</code> – Lexicographically compares two strings.</li>
      <li><code>concat()</code> – Concatenates two strings.</li>
      <li><code>replace(old, new)</code> – Replaces characters.</li>
      <li><code>toCharArray()</code> – Converts string to char array.</li>
      <li><code>split()</code> – Splits a string using a delimiter.</li>
      <li><code>trim()</code> – Removes leading/trailing spaces.</li>
    </ul>

    <h3>Why are Strings Immutable in Java?</h3>
    <ul>
      <li>Security: Especially when used in networking or file paths.</li>
      <li>Thread Safety: Immutable objects are automatically thread-safe.</li>
      <li>String Pool: Allows for efficient reuse of string literals.</li>
    </ul>

    <h3>Performance Tips</h3>
    <ul>
      <li>Use <code>StringBuilder</code> or <code>StringBuffer</code> when manipulating strings in loops or large data.</li>
      <li><code>StringBuilder</code> is not thread-safe but faster.</li>
    </ul>

    <h3>Example</h3>
    <pre>
String str = "hello";
System.out.println(str.length());  // Output: 5
System.out.println(str.charAt(1)); // Output: 'e'
    </pre>
  `,
  "partialCode": `
    String original = "hello world";
    String result = original.replace("world", "Java");
    System.out.println(result); // Output should be "hello Java"
    // Now convert result to uppercase and print it
  `,
  "correctCode": `
    System.out.println(result.toUpperCase());
  `,
  "stepByStep": "To convert a string to uppercase, use result.toUpperCase(), which returns the string in all capital letters. Then print it using System.out.println().",
  "quiz": [
    {
      "question": "Which of these is true about Java Strings?",
      "options": ["They are mutable", "They can be changed after creation", "They are stored in the heap only", "They are immutable"],
      "answer": "They are immutable"
    },
    {
      "question": "Which method is used to compare two strings in Java?",
      "options": ["compare()", "==", "equals()", "equalsTo()"],
      "answer": "equals()"
    },
    {
        question: "What is a string?",
        options: ["A data type that stores numbers", "A collection of characters", "A boolean variable", "A collection of integers"],
        answer: "A collection of characters"
      },
      {
        question: "Which method is used to find the length of a string in JavaScript?",
        options: ["length()", "size()", "getLength()", "length"],
        answer: "length"
      },
      {
        question: "What will 'Hello'.charAt(1) return in JavaScript?",
        options: ["H", "e", "l", "o"],
        answer: "e"
      },
      {
        question: "Which of these is an immutable data type in many programming languages?",
        options: ["Array", "Object", "String", "Set"],
        answer: "String"
      },
      {
        question: "Which method is used to concatenate two strings in JavaScript?",
        options: ["append()", "add()", "concat()", "combine()"],
        answer: "concat()"
      }
  ]
},"Loops": {
  "explanation": `
    <h3>What are Loops?</h3>
    <p>Loops are control flow statements that allow code to be executed repeatedly based on a condition. Java provides several types of loops to handle different repetition needs.</p>

    <h3>Types of Loops in Java</h3>
    <ul>
      <li><strong>For Loop:</strong> Used when the number of iterations is known.
        <pre>
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
        </pre>
      </li>
      <li><strong>While Loop:</strong> Used when the number of iterations is not known, and it depends on a condition.
        <pre>
int i = 0;
while (i < 5) {
    System.out.println(i);
    i++;
}
        </pre>
      </li>
      <li><strong>Do-While Loop:</strong> Similar to a while loop, but the loop body executes at least once.
        <pre>
int i = 0;
do {
    System.out.println(i);
    i++;
} while (i < 5);
        </pre>
      </li>
      <li><strong>Enhanced For Loop (For-Each):</strong> Used to iterate over arrays or collections.
        <pre>
int[] arr = {1, 2, 3, 4};
for (int num : arr) {
    System.out.println(num);
}
        </pre>
      </li>
    </ul>

    <h3>Loop Control Statements</h3>
    <ul>
      <li><code>break</code>: Exits the loop completely.</li>
      <li><code>continue</code>: Skips the current iteration and moves to the next.</li>
    </ul>

    <h3>Use Cases</h3>
    <ul>
      <li>Traversing arrays, lists, or strings.</li>
      <li>Repeating tasks like printing patterns, summing numbers, etc.</li>
      <li>Searching and filtering data.</li>
    </ul>
  `,
  "partialCode": `
    // Print even numbers from 1 to 10 using a for loop
    for (int i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            // Complete this line to print the number
        }
    }
  `,
  "correctCode": `
    System.out.println(i);
  `,
  "stepByStep": "You are checking if the number is even using i % 2 == 0. If it is, use System.out.println(i) to print the even number.",
  "quiz": [
    {
      "question": "Which loop guarantees at least one execution of the body?",
      "options": ["for loop", "while loop", "do-while loop", "None of the above"],
      "answer": "do-while loop"
    },
    {
      "question": "What is the output of: for (int i = 0; i < 3; i++) { System.out.print(i); }",
      "options": ["012", "123", "321", "None"],
      "answer": "012"
    },
    {
        question: "Which loop is guaranteed to execute at least once?",
        options: ["for loop", "while loop", "do-while loop", "foreach loop"],
        answer: "do-while loop"
      },
      {
        question: "What is the correct syntax for a `for` loop in JavaScript?",
        options: [
          "for (i <= 5; i++)",
          "for (i = 0; i <= 5; i++)",
          "for i = 0 to 5",
          "foreach (i in 5)"
        ],
        answer: "for (i = 0; i <= 5; i++)"
      },
      {
        question: "Which statement is used to exit a loop prematurely?",
        options: ["stop", "exit", "break", "return"],
        answer: "break"
      },
      {
        question: "Which loop is best suited when the number of iterations is known?",
        options: ["while loop", "do-while loop", "for loop", "infinite loop"],
        answer: "for loop"
      },
      {
        question: "What will happen if the condition in a loop is never false?",
        options: [
          "It will throw an error",
          "It will run once and stop",
          "It will cause an infinite loop",
          "It will skip the loop"
        ],
        answer: "It will cause an infinite loop"
      }
  ]
}
,"Patterns": {
  explanation: `
    <h3>What are Patterns in Java?</h3>
    <p>Pattern printing problems are common in programming and help build a strong understanding of loops and logic. These problems typically involve printing stars, numbers, or characters in a structured format using nested loops.</p>

    <h3>Why Learn Patterns?</h3>
    <ul>
      <li>Improves understanding of nested loops.</li>
      <li>Helps in logic building and dry-running code.</li>
      <li>Common in interviews and entrance tests.</li>
    </ul>

    <h3>Common Pattern Types</h3>
    <ul>
      <li><strong>Square Pattern:</strong>
        <pre>
*****
*****
*****
*****
*****
        </pre>
      </li>
      <li><strong>Right-Angled Triangle:</strong>
        <pre>
*
**
***
****
*****
        </pre>
      </li>
      <li><strong>Inverted Triangle:</strong>
        <pre>
*****
****
***
**
*
        </pre>
      </li>
      <li><strong>Pyramid Pattern:</strong>
        <pre>
    *
   ***
  *****
 *******
        </pre>
      </li>
      <li><strong>Number Patterns:</strong>
        <pre>
1
12
123
1234
        </pre>
      </li>
    </ul>

    <h3>Pattern Logic</h3>
    <p>Most pattern problems require nested loops:
    <ul>
      <li>The outer loop controls the number of rows.</li>
      <li>The inner loop controls the number of columns or the characters to be printed in each row.</li>
    </ul>

    Example:
    <pre>
for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print("*");
    }
    System.out.println();
}
    </pre>
  `,
  partialCode: `
    // Print a right-angled triangle pattern with stars
    for (int i = 1; i <= 5; i++) {
        for (int j = 1; j <= i; j++) {
            // Complete this line to print star
        }
        System.out.println();
    }
  `,
  correctCode: `
    System.out.print("*");
  `,
  stepByStep: "Use System.out.print(\"*\") inside the inner loop to print a star without a new line. The outer loop controls the number of rows. The System.out.println() after the inner loop moves to the next line.",
  quiz: [
    {
      question: "How many nested loops are typically required to print a triangle pattern?",
      options: ["0", "1", "2", "3"],
      answer: "2"
    },
    {
      question: "What does System.out.print(\"*\") do?",
      options: ["Prints star and moves to next line", "Prints star without newline", "Prints error", "Prints space"],
      answer: "Prints star without newline"
    },
    {
        question: "What type of loop is most commonly used to print pattern structures?",
        options: ["for loop", "while loop", "do-while loop", "foreach loop"],
        answer: "for loop"
      },
      {
        question: "How many nested loops are usually needed to print a triangle pattern?",
        options: ["1", "2", "3", "None"],
        answer: "2"
      },
      {
        question: "What does the following code print?\nfor(let i=1; i<=3; i++) {\n  console.log('*'.repeat(i));\n}",
        options: ["***", "*\n**\n***", "*\n*\n*", "*\n***"],
        answer: "*\n**\n***"
      },
      {
        question: "Which pattern is formed by printing decreasing number of stars?",
        options: [
          "Right-angled triangle",
          "Inverted triangle",
          "Diamond",
          "Pyramid"
        ],
        answer: "Inverted triangle"
      },
      {
        question: "To create a centered pyramid of stars, what is needed besides printing stars?",
        options: ["Extra loop", "Spaces", "Tabs", "Commas"],
        answer: "Spaces"
      }
  ]
}
,"Arrays": {
  explanation: `
    <h3>What is an Array?</h3>
    <p>An array is a data structure that can store a fixed-size sequential collection of elements of the same type. Arrays are used to store multiple values in a single variable.</p>

    <h3>Array Declaration and Initialization in Java</h3>
    <pre>
int[] numbers = new int[5]; // Declaration with size
int[] values = {1, 2, 3, 4, 5}; // Declaration and initialization
    </pre>

    <h3>Accessing Elements</h3>
    <p>Elements in an array are accessed using their index, which starts from 0.</p>
    <pre>
System.out.println(values[0]); // Output: 1
    </pre>

    <h3>Traversing an Array</h3>
    <p>We typically use loops to iterate through arrays:</p>
    <pre>
for (int i = 0; i < values.length; i++) {
    System.out.println(values[i]);
}
    </pre>

    <h3>Common Array Operations</h3>
    <ul>
      <li>Finding the maximum/minimum value</li>
      <li>Calculating sum or average</li>
      <li>Reversing an array</li>
      <li>Searching for an element (Linear or Binary Search)</li>
      <li>Sorting (Bubble, Selection, Insertion, etc.)</li>
    </ul>

    <h3>Example</h3>
    <p>Finding the sum of all elements in an array:</p>
    <pre>
int sum = 0;
for (int i = 0; i < values.length; i++) {
    sum += values[i];
}
System.out.println("Sum: " + sum);
    </pre>
  `,
  partialCode: `
    // Find the maximum value in the array
    int[] arr = {12, 45, 23, 67, 34};
    int max = arr[0];
    for (int i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            // Complete this line
        }
    }
    System.out.println("Maximum: " + max);
  `,
  correctCode: `
    max = arr[i];
  `,
  stepByStep: "To find the maximum, compare each element with the current max. If a larger element is found, assign it to max using max = arr[i];",
  quiz: [
    {
      question: "What is the index of the first element in an array?",
      options: ["1", "0", "length - 1", "-1"],
      answer: "0"
    },
    {
      question: "How do you find the length of an array in Java?",
      options: ["array.size()", "array.length()", "array.length", "length(array)"],
      answer: "array.length"
    },
    {
        question: "What is recursion?",
        options: [
          "A function that calls itself",
          "A loop inside a function",
          "A function that returns multiple values",
          "A function with no return statement"
        ],
        answer: "A function that calls itself"
      },
      {
        question: "What is a base case in recursion?",
        options: [
          "The first function call",
          "A condition where the function stops calling itself",
          "A loop inside a recursive function",
          "A syntax rule for recursion"
        ],
        answer: "A condition where the function stops calling itself"
      },
      {
        question: "What will happen if the base case is missing in a recursive function?",
        options: [
          "The function returns null",
          "The program crashes immediately",
          "Infinite recursion and stack overflow",
          "It behaves like a loop"
        ],
        answer: "Infinite recursion and stack overflow"
      },
      {
        question: "Which of the following problems is best solved using recursion?",
        options: [
          "Calculating factorial",
          "Sorting using bubble sort",
          "Finding largest number in array",
          "Simple arithmetic operations"
        ],
        answer: "Calculating factorial"
      },
      {
        question: "What is the output of: function fact(n) { if(n == 1) return 1; return n * fact(n - 1); } fact(4);",
        options: ["24", "4", "10", "12"],
        answer: "24"
      }
  ]
}
,
"Recursion": {
  explanation: `
    <h3>What is Recursion?</h3>
    <p>Recursion is a programming technique where a method calls itself to solve a smaller version of a problem. Each recursive call should bring the problem closer to a base case, which ends the recursion.</p>

    <h3>How It Works</h3>
    <ul>
      <li>A recursive function solves a small piece of the problem and calls itself to solve the remaining part.</li>
      <li>The recursion ends when a base condition is met.</li>
      <li>The function then returns, and previous calls resume execution.</li>
    </ul>

    <h3>Example: Factorial</h3>
    <pre>
int factorial(int n) {
    if (n == 0 || n == 1)
        return 1; // Base case
    return n * factorial(n - 1); // Recursive call
}
    </pre>

    <h3>Visual Flow</h3>
    <p>factorial(4) → 4 × factorial(3) → 4 × 3 × factorial(2) → 4 × 3 × 2 × factorial(1) → 4 × 3 × 2 × 1 = 24</p>

    <h3>Key Concepts</h3>
    <ul>
      <li><strong>Base Case:</strong> Condition that ends the recursion (e.g., n == 0).</li>
      <li><strong>Recursive Case:</strong> The function calls itself with a simpler problem (e.g., factorial(n - 1)).</li>
      <li>Recursive functions must approach the base case in each call to avoid infinite recursion.</li>
    </ul>

    <h3>Applications of Recursion</h3>
    <ul>
      <li>Factorial, Fibonacci numbers</li>
      <li>Tree traversal (Preorder, Inorder, Postorder)</li>
      <li>Backtracking problems (N-Queens, Maze Solving)</li>
      <li>Divide & Conquer (Merge Sort, Quick Sort)</li>
    </ul>

    <h3>Performance Note</h3>
    <p>Recursion can be memory intensive due to stack usage. Tail recursion or iteration is preferred in some cases to optimize performance.</p>
  `,
  partialCode: `
    // Recursive function to find nth Fibonacci number
    int fibonacci(int n) {
        if (n == 0)
            return 0;
        if (n == 1)
            return 1;
        return fibonacci(n - 1) + 
        // Complete the recursive call here
    }
  `,
  correctCode: `fibonacci(n - 2);`,
  stepByStep: "The Fibonacci series is calculated by adding the two previous terms. So, return fibonacci(n - 1) + fibonacci(n - 2);",
  quiz: [
    {
      question: "What is required to stop a recursive function?",
      options: ["A return statement", "A loop", "A base case", "A function call"],
      answer: "A base case"
    },
    {
      question: "What happens if a recursive function does not have a base case?",
      options: ["It works faster", "It ends immediately", "It causes infinite recursion", "It becomes a loop"],
      answer: "It causes infinite recursion"
    },
    {
        question: "What is recursion in programming?",
        options: [
          "A function that calls itself",
          "A loop that repeats infinitely",
          "Calling multiple functions at once",
          "A way to compile functions faster"
        ],
        answer: "A function that calls itself"
      },
      {
        question: "Which condition is essential to prevent infinite recursion?",
        options: [
          "Recursive case",
          "Loop termination",
          "Base case",
          "Function return type"
        ],
        answer: "Base case"
      },
      {
        question: "What is the output of this recursive function call: factorial(3)? (Assume correct factorial logic)",
        options: [
          "3",
          "6",
          "9",
          "1"
        ],
        answer: "6"
      },
      {
        question: "Which of the following problems is commonly solved using recursion?",
        options: [
          "Printing Hello World",
          "Sorting with Bubble Sort",
          "Solving Tower of Hanoi",
          "Calculating average"
        ],
        answer: "Solving Tower of Hanoi"
      },
      {
        question: "In recursion, what happens if the base case is never reached?",
        options: [
          "Program runs normally",
          "Function returns 0",
          "Function crashes due to stack overflow",
          "Compiler shows warning"
        ],
        answer: "Function crashes due to stack overflow"
      }
  ]
}





};

let currentTopic = null;
let quizIndex = 0;
let score = 0;

// Add custom alert div to the body
document.body.insertAdjacentHTML('beforeend', `
    <div id="custom-alert" style="
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #28a745;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        font-size: 18px;
        font-weight: 500;
        z-index: 9999;
        opacity: 0;
        pointer-events: none;
        transition: all 0.5s ease;
    "></div>
`);

// Custom Alert Function
function showCustomAlert(message, type = "success") {
    const alertBox = document.getElementById("custom-alert");
    alertBox.innerText = message;

    if (type === "success") {
        alertBox.style.backgroundColor = "#28a745"; // Green
    } else if (type === "error") {
        alertBox.style.backgroundColor = "#dc3545"; // Red
    } else {
        alertBox.style.backgroundColor = "#17a2b8"; // Info
    }

    alertBox.classList.add("show");
    alertBox.style.opacity = "1";
    alertBox.style.pointerEvents = "auto";

    setTimeout(() => {
        alertBox.classList.remove("show");
        alertBox.style.opacity = "0";
        alertBox.style.pointerEvents = "none";
    }, 3000);
}

// Search function
function searchTopic() {
    const searchInput = document.getElementById("search-box").value.trim().toLowerCase();

    if (!searchInput) {
        showCustomAlert("Please enter a topic name.", "error");
        return;
    }

    let foundTopic = Object.keys(topics).find(topic => topic.toLowerCase() === searchInput);

    if (!foundTopic) {
        let suggestedTopics = Object.keys(topics).filter(topic => topic.toLowerCase().includes(searchInput));
        if (suggestedTopics.length > 0) {
            document.getElementById("search-box").setAttribute("placeholder", "Search for the topic");
        }
        return;
    }

    currentTopic = topics[foundTopic];
    document.getElementById("topic-title").innerText = foundTopic.toUpperCase();
    document.getElementById("topic-explanation").innerHTML = currentTopic.explanation;
    document.getElementById("explanation-section").classList.remove("hidden");
    document.getElementById("code-section").classList.add("hidden");
    document.getElementById("quiz-section").classList.add("hidden");
}

// Show Partial Code
function showPartialCode() {
    document.getElementById("explanation-section").classList.add("hidden");
    document.getElementById("code-section").classList.remove("hidden");
    document.getElementById("partial-code").innerText = currentTopic.partialCode;
    document.getElementById("next-button").style.display = "none";
}

// Check Code
function checkCode() {
    const userCode = document.getElementById("user-code").value.trim();
    const correctCode = currentTopic.correctCode.trim();
    const normalize = str => str.replace(/\s+/g, ' ').trim();

    const feedbackBox = document.getElementById("code-feedback");
    feedbackBox.innerHTML = "";

    if (normalize(userCode) === normalize(correctCode)) {
        document.getElementById("code-section").classList.add("hidden");
        document.getElementById("quiz-section").classList.remove("hidden");
        startQuiz();
        showCustomAlert("Great job! Click 'Next' for the quiz.", "success");
    } else {
        feedbackBox.innerHTML = `
            ❌ Incorrect code!
            <br>
            <button id="show-answer-btn" class="animated-button">
                Show Correct Answer
            </button>
        `;

        document.getElementById("show-answer-btn").addEventListener("click", () => {
            const answerHtml = `
                <pre class="fade-in" style="margin-top: 10px;">${currentTopic.correctCode}</pre>
                <p class="fade-in">${currentTopic.stepByStep}</p>
            `;
            feedbackBox.insertAdjacentHTML("beforeend", answerHtml);
            document.getElementById("show-answer-btn").disabled = true;
            document.getElementById("show-answer-btn").innerText = "Answer Shown";
        });

        showCustomAlert("Incorrect code!", "error");
    }
}

// Start Quiz
function startQuiz() {
    quizIndex = 0;
    score = 0;
    document.getElementById("quiz-result").innerText = "";
    document.getElementById("save-progress-btn").classList.add("hidden");
    document.getElementById("progress-report-btn").classList.add("hidden");
    document.getElementById("next-topic-btn").classList.add("hidden");
    nextQuiz();
}

// Next Quiz Question
function nextQuiz() {
    const optionsList = document.getElementById("quiz-options");
    optionsList.innerHTML = "";

    if (quizIndex < currentTopic.quiz.length) {
        const questionData = currentTopic.quiz[quizIndex];
        document.getElementById("quiz-question").innerText = questionData.question;

        questionData.options.forEach(option => {
            const btn = document.createElement("button");
            btn.innerText = option;

            Object.assign(btn.style, {
                background: "transparent",
                border: "2px solid #ff4d6d",
                color: "#ff4d6d",
                padding: "10px 20px",
                borderRadius: "6px",
                margin: "5px",
                fontSize: "16px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                display: "inline-block"
            });

            btn.onmouseover = () => {
                btn.style.backgroundColor = "#ff4d6d";
                btn.style.color = "white";
            };

            btn.onmouseleave = () => {
                btn.style.backgroundColor = "transparent";
                btn.style.color = "#ff4d6d";
            };

            btn.classList.add("quiz-option");
            btn.onclick = () => checkAnswer(option, btn);
            optionsList.appendChild(btn);
        });

        quizIndex++;
    } else {
        document.getElementById("quiz-question").innerText = "🎉 Quiz Completed!";
        document.getElementById("quiz-result").innerText = `Your score: ${score}/${currentTopic.quiz.length}`;
        document.getElementById("save-progress-btn").classList.remove("hidden");
        document.getElementById("progress-report-btn").classList.remove("hidden");
        document.getElementById("next-topic-btn").classList.remove("hidden");
    }
}

// Check Answer
function checkAnswer(selected, button) {
    const currentQuestion = currentTopic.quiz[quizIndex - 1];
    const allOptions = document.querySelectorAll(".quiz-option");

    allOptions.forEach(opt => {
        opt.disabled = true;

        if (opt.innerText === currentQuestion.answer) {
            opt.style.backgroundColor = "#28a745"; // Correct
            opt.style.color = "white";
        } else {
            opt.style.backgroundColor = "#dc3545"; // Incorrect
            opt.style.color = "white";
        }

        opt.onmouseover = null;
        opt.onmouseleave = null;
    });

    if (selected === currentQuestion.answer) {
        score++;
    }

    setTimeout(() => {
        nextQuiz();
    }, 1000);
}

// Save Progress
function saveProgress() {
    if (!currentTopic) {
        showCustomAlert("No topic to save.", "error");
        return;
    }

    const topicName = document.getElementById("topic-title").innerText;
    const newEntry = {
        topic: topicName,
        portal: "Beginner",
        timestamp: new Date().toISOString()
    };

    let savedProgress = JSON.parse(localStorage.getItem("combinedProgress")) || [];
    const isAlreadySaved = savedProgress.some(entry => entry.topic === topicName && entry.portal === "Beginner");

    if (!isAlreadySaved) {
        savedProgress.push(newEntry);
        localStorage.setItem("combinedProgress", JSON.stringify(savedProgress));
        showCustomAlert("Progress saved successfully!", "success");
    } else {
        showCustomAlert("This topic is already saved.", "info");
    }
}

// Redirects
function loadProgress() {
    window.location.href = "progress.html";
}

function goBack() {
    window.location.href = "advanced.html";
}

function goBacktoDashboard() {
    window.location.href = "dashboard.html";
}
