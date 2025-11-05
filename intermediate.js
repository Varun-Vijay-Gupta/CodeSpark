const topics = {
    "Bubble Sort": {
        explanation: `
            <h3>What is Bubble Sort?</h3>
            <p>Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.</p>
            <h3>How Does It Work?</h3>
            <ul>
                <li>Compare adjacent elements and swap if necessary.</li>
                <li>Repeat for the whole list, placing the largest unsorted element at the end.</li>
                <li>Continue until the entire list is sorted.</li>
            </ul>
        `,

        correctCode: `public void bubbleSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}`,

        stepByStep: `int temp = arr[j]; → Store the current element in temp.
        arr[j] = arr[j + 1]; → Move the smaller element to the left.
        arr[j + 1] = temp; → Place the larger element on the right.`,

        // Related Conceptual Questions
        relatedQuestions: [
            "Why is Bubble Sort inefficient for large datasets?",
            "How can you optimize Bubble Sort to stop early if the array is already sorted?",
            "Compare Bubble Sort with Quick Sort in terms of time complexity."
        ],

        // Coding Questions related to Bubble Sort
        codingQuestions: [
            {
                question: "Modify Bubble Sort to sort an array in descending order.",
                hint: "Swap condition should be reversed."
            },
            {
                question: "Implement an optimized version of Bubble Sort that stops if no swaps occur in a pass.",
                hint: "Use a flag to track if a swap happened."
            }
        ]
    },
    
        "Selection Sort": {
            explanation: `
               <h3>What is Selection Sort?</h3>
<p>Selection Sort is a simple sorting algorithm that repeatedly selects the smallest element from the unsorted portion of the list and swaps it with the first unsorted element. This process continues until the entire list is sorted.</p>
<h3>How Does It Work?</h3>
<ul>
    <li>Start by considering the entire list as unsorted.</li>
    <li>Find the smallest element in the unsorted portion of the list.</li>
    <li>Swap the smallest element with the first element of the unsorted portion.</li>
    <li>Move the boundary of the unsorted portion to the right, reducing the unsorted portion by one element.</li>
    <li>Repeat the process until the entire list is sorted.</li>
</ul>
            `,
            
            correctCode: `public void selectionSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
        int minIdx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        int temp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = temp;
    }
}
`,
            stepByStep: "Find the minimum element, swap it with the first unsorted element, and repeat until sorted.",
            relatedQuestions: [
                "What are the advantages of Selection Sort over other sorting algorithms?",
                "In what scenarios would Selection Sort be a good choice?",
                "How does Selection Sort perform on nearly sorted data?"
            ],
            codingQuestions: [
                {
                    question: "Modify Selection Sort to sort an array in descending order.",
                    hint: "Change the condition inside the inner loop."
                },
                {
                    question: "Modify Selection Sort to sort an array of strings alphabetically.",
                    hint: "Use the compareTo() method for string comparison."
                },
                {
                    question: "Optimize Selection Sort by adding an early exit condition.",
                    hint: "Track whether any swaps occur in a full pass."
                }
            ]
        },
    
        "Insertion Sort": {
            explanation: `
                <h3>What is Insertion Sort?</h3>
        <p>Insertion Sort works by building a sorted array one item at a time, taking each element and inserting it into its correct position relative to the already sorted part.</p>
        <h3>How Does It Work?</h3>
        <ul>
            <li>Start with the second element and compare it with the previous elements.</li>
            <li>Shift elements that are greater than the current element to the right.</li>
            <li>Insert the current element into its correct position.</li>
            <li>Repeat for all elements.</li>
        </ul>`,
            correctCode: `public void insertionSort(int[] arr) {
    int n = arr.length;
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}
`,
            stepByStep: "Shift all elements greater than key to the right, then insert key in its correct position.",
            relatedQuestions: [
                "Why is Insertion Sort preferred for small datasets?",
                "How does Insertion Sort compare with Selection Sort in efficiency?",
                "Can Insertion Sort be optimized?"
            ],
            codingQuestions: [
                {
                    question: "Modify Insertion Sort to sort an array in descending order.",
                    hint: "Reverse the comparison condition in the while loop."
                },
                {
                    question: "Implement Insertion Sort using recursion instead of loops.",
                    hint: "Base case: when the array size is 1."
                },
                {
                    question: "Optimize Insertion Sort to detect if the array is already sorted.",
                    hint: "Use a flag to check if swaps were made in an iteration."
                }
            ]
        },
    
        "Merge Sort": {
            explanation: `
                <h3>What is Merge Sort?</h3>
        <p>Merge Sort is a divide-and-conquer algorithm that divides the array into smaller subarrays, sorts them, and then merges them back together.</p>
        <h3>How Does It Work?</h3>
        <ul>
            <li>Divide the array into two halves.</li>
            <li>Recursively sort both halves.</li>
            <li>Merge the sorted halves.</li>
        </ul>`,
            correctCode: `public void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;
            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);
            merge(arr, left, mid, right);
        }
    }
        private void merge(int[] arr, int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;
    int[] leftArray = new int[n1];
    int[] rightArray = new int[n2];

    for (int i = 0; i < n1; i++)
        leftArray[i] = arr[left + i];
    for (int j = 0; j < n2; j++)
        rightArray[j] = arr[mid + 1 + j];

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

    while (i < n1) {
        arr[k] = leftArray[i];
        i++;
        k++;
    }
    while (j < n2) {
        arr[k] = rightArray[j];
        j++;
        k++;
    }
}`,
            
            stepByStep: "Recursively divide the array, sort each half, and then merge them back together.",
            relatedQuestions: [
                "How does Merge Sort differ from Quick Sort?",
                "Why is Merge Sort not an in-place sorting algorithm?",
                "Is Merge Sort always better than Quick Sort?"
            ],
            codingQuestions: [
                {
                    question: "Implement Merge Sort without recursion (iterative approach).",
                    hint: "Use a bottom-up approach with a loop."
                },
                {
                    question: "Modify Merge Sort to sort an array in descending order.",
                    hint: "Change the merge step logic to reverse the order."
                },
                {
                    question: "Count the number of inversions in an array using Merge Sort.",
                    hint: "Inversions are counted when an element is greater than another after merging."
                }
            ]
        },
    
        "Quick Sort": {
            explanation: `
                <h3>What is Quick Sort?</h3>
        <p>Quick Sort is a divide-and-conquer algorithm that selects a pivot, partitions the array around it, and recursively sorts the subarrays.</p>
        <h3>How Does It Work?</h3>
        <ul>
            <li>Choose a pivot element.</li>
            <li>Partition the array such that elements smaller than the pivot go to the left, and larger elements go to the right.</li>
            <li>Recursively apply Quick Sort to the subarrays.</li>
        </ul>`,
            correctCode: `public void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1); 
            quickSort(arr, pi + 1, high);
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
}`,
            stepByStep: "Partition the array around the pivot, then apply Quick Sort to left and right subarrays.",
            relatedQuestions: [
                "What is the best pivot selection strategy in Quick Sort?",
                "Why is Quick Sort often faster than Merge Sort in practice?",
                "What is the worst-case scenario for Quick Sort?"
            ],
            codingQuestions: [
                {
                    question: "Modify Quick Sort to use the first element as the pivot instead of the last.",
                    hint: "Swap the first element with the last before partitioning."
                },
                {
                    question: "Implement Quick Sort without recursion.",
                    hint: "Use an explicit stack data structure."
                },
                {
                    question: "Modify Quick Sort to sort an array of objects based on a custom comparator.",
                    hint: "Use a lambda function for comparison."
                }
            ]
        },
        "Linear Search": {
        explanation: `
            <h3>What is Linear Search?</h3>
        <p>Linear Search is a simple searching algorithm that checks each element in the list sequentially until the target element is found.</p>
        <h3>How Does It Work?</h3>
        <ul>
            <li>Start from the first element.</li>
            <li>Compare each element with the target.</li>
            <li>If found, return the index; otherwise, continue.</li>
        </ul>`,
        correctCode: `public int linearSearch(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
               return i;
            }
        }
        return -1;
    }`,
        
        stepByStep: "Start from the first element, check each element until you find the target, then return the index.",
        relatedQuestions: [
            "What is the best-case and worst-case time complexity of Linear Search?",
            "Why is Linear Search inefficient for large datasets?",
            "In what scenarios is Linear Search useful?"
        ],
        codingQuestions: [
            {
                question: "Modify Linear Search to return all indices of an element if it appears multiple times in an array.",
                hint: "Store indices in a list instead of returning immediately."
            },
            {
                question: "Implement Linear Search for a list of strings instead of integers.",
                hint: "Use the equals() method for string comparison."
            },
            {
                question: "Modify Linear Search to return true/false instead of an index.",
                hint: "Return 'true' when the element is found and 'false' otherwise."
            }
        ]
    },

    "Binary Search": {
        explanation: `
            <h3>What is Binary Search?</h3>
        <p>Binary Search is an efficient searching algorithm that works on sorted arrays by repeatedly dividing the search interval in half.</p>
        <h3>How Does It Work?</h3>
        <ul>
            <li>Find the middle element.</li>
            <li>If it matches the target, return the index.</li>
            <li>If the target is smaller, search in the left half.</li>
            <li>If the target is larger, search in the right half.</li>
            <li>Repeat until the target is found or the search space is empty.</li>
        </ul>`,
        correctCode: `public int binarySearch(int[] arr, int target) {
    int left = 0, right = arr.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) {
            return mid;
            
            
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1; 
}`,
       
        stepByStep: "Check the middle element. If it's the target, return its index. If the target is smaller, search the left half; otherwise, search the right half.",
        relatedQuestions: [
            "Why is Binary Search more efficient than Linear Search?",
            "What are the prerequisites for using Binary Search?",
            "Can Binary Search work on unsorted arrays?"
        ],
        codingQuestions: [
            {
                question: "Implement Binary Search using recursion instead of iteration.",
                hint: "Use a helper function with updated left and right boundaries."
            },
            {
                question: "Modify Binary Search to return the index of the first occurrence of a number in a sorted array with duplicates.",
                hint: "If arr[mid] == target, check the left half for earlier occurrences."
            },
            {
                question: "Modify Binary Search to find the smallest element greater than the target.",
                hint: "Track the last potential answer while searching."
            }
        ]
    },
    "Heap Sort": {
    explanation: `
        <h3>What is Heap Sort?</h3>
        <p>Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure. It converts the array into a max-heap and repeatedly extracts the largest element from the heap to sort the array.</p>
        <h3>How Does It Work?</h3>
        <ul>
            <li>Build a max heap from the input data.</li>
            <li>Swap the root (maximum value) with the last element.</li>
            <li>Reduce the heap size by one and heapify the root.</li>
            <li>Repeat the process until the heap size becomes one.</li>
        </ul>
    `,
    correctCode: `public void heapSort(int[] arr) {
    int n = arr.length;

    // Build max heap
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);

    // Extract elements from heap
    for (int i = n - 1; i >= 0; i--) {
        // Move current root to end
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // Heapify reduced heap
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
}`,
    stepByStep: "1. Build a max heap from the array. 2. Swap the first and last element. 3. Reduce heap size and call heapify on the root. 4. Repeat until the array is sorted.",
    relatedQuestions: [
        "What is the time complexity of Heap Sort?",
        "How does Heap Sort differ from Quick Sort?",
        "Is Heap Sort a stable sorting algorithm?",
        "What are the use cases of Heap Sort?",
        "Why do we build a max heap instead of a min heap for sorting in ascending order?"
    ],
    codingQuestions: [
        {
            question: "Implement Heap Sort for descending order using min-heap.",
            hint: "Modify the heapify logic to maintain a min-heap instead of a max-heap."
        },
        {
            question: "Use Heap Sort to sort an array of strings based on length.",
            hint: "Change the comparison logic inside heapify to compare string lengths."
        },
        {
            question: "Sort an almost sorted array using Heap Sort efficiently.",
            hint: "Use a min-heap of size k to sort an array where every element is at most k positions away."
        }
    ]
},
"DFS": {
    explanation: `
        <h3>What is Depth First Search (DFS)?</h3>
        <p>DFS is a graph traversal algorithm that explores as far along each branch as possible before backtracking. It uses a stack data structure, either explicitly or through recursion.</p>
        <h3>How Does It Work?</h3>
        <ul>
            <li>Start from a source node.</li>
            <li>Visit the node and mark it as visited.</li>
            <li>Recursively visit all unvisited adjacent nodes.</li>
            <li>Backtrack when no unvisited nodes remain in the current path.</li>
        </ul>
        <p>DFS can be used in topological sorting, cycle detection, path finding, and solving puzzles like mazes.</p>
    `,
    correctCode: `public void dfs(int v, boolean[] visited, List<List<Integer>> graph) {
    visited[v] = true;
    System.out.print(v + " ");
    for (int neighbor : graph.get(v)) {
        if (!visited[neighbor]) {
            dfs(neighbor, visited, graph);
        }
    }
}`,
    stepByStep: "1. Mark the current node as visited. 2. Explore all unvisited adjacent nodes recursively. 3. Backtrack when no unvisited neighbors are left.",
    relatedQuestions: [
        "What is the time complexity of DFS for a graph?",
        "How can DFS be used to detect cycles in a graph?",
        "How does DFS differ from BFS in terms of traversal?",
        "What data structure is used for DFS?",
        "Can DFS be used on disconnected graphs?"
    ],
    codingQuestions: [
        {
            question: "Implement DFS using an explicit stack instead of recursion.",
            hint: "Use a Stack data structure to simulate the call stack manually."
        },
        {
            question: "Detect a cycle in a directed graph using DFS.",
            hint: "Track nodes in the current path with a recursion stack."
        },
        {
            question: "Use DFS to perform topological sorting of a DAG.",
            hint: "Post-order traversal of DFS gives reverse topological order."
        }
    ]
},
"BFS": {
    explanation: `
        <h3>What is Breadth-First Search (BFS)?</h3>
        <p>Breadth-First Search is a graph traversal algorithm that explores all the neighbors at the current depth before moving on to the next level. It uses a queue to maintain the order of exploration.</p>
        <h3>Applications:</h3>
        <ul>
            <li>Finding the shortest path in unweighted graphs</li>
            <li>Web crawlers</li>
            <li>Social networks (finding connections)</li>
        </ul>
    `,
    correctCode: `public void bfs(int start, List<List<Integer>> adjList) {
    boolean[] visited = new boolean[adjList.size()];
    Queue<Integer> queue = new LinkedList<>();
    queue.add(start);
    visited[start] = true;

    while (!queue.isEmpty()) {
        int node = queue.poll();
        System.out.print(node + " ");
        for (int neighbor : adjList.get(node)) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.add(neighbor);
            }
        }
    }
}`,
    stepByStep: "Start from the source node, mark it as visited, enqueue it. Then, dequeue a node, process it, and enqueue all unvisited neighbors. Repeat until the queue is empty.",
    relatedQuestions: [
        "How does BFS differ from DFS in traversal order?",
        "Why is BFS preferred for shortest path in unweighted graphs?",
        "What data structure is used in BFS and why?"
    ],
    codingQuestions: [
        {
            question: "Implement BFS on a 2D grid to find the shortest path from top-left to bottom-right.",
            hint: "Use row-column pairs and mark visited cells."
        },
        {
            question: "Detect a cycle in an undirected graph using BFS.",
            hint: "Track parent nodes to detect cycles while traversing."
        },
        {
            question: "Print all nodes at k distance from the starting node using BFS.",
            hint: "Use a level counter while traversing the queue."
        }
    ]
},
"Graphs": {
    explanation: `
        <h3>What are Graphs?</h3>
        <p>A graph is a non-linear data structure consisting of nodes (vertices) and edges. Graphs can be directed or undirected, weighted or unweighted.</p>
        <h3>Types of Graph Representations:</h3>
        <ul>
            <li>Adjacency Matrix</li>
            <li>Adjacency List</li>
        </ul>
    `,
    correctCode: `List<List<Integer>> graph = new ArrayList<>();
for (int i = 0; i < n; i++) {
    graph.add(new ArrayList<>());
}
graph.get(0).add(1);
graph.get(1).add(2);`,
    stepByStep: "Use an adjacency list for space efficiency. Initialize a list of lists where each index represents a vertex and stores its neighbors.",
    relatedQuestions: [
        "Difference between directed and undirected graphs?",
        "Which is more space-efficient: adjacency list or matrix?",
        "What are some real-life uses of graphs?"
    ],
    codingQuestions: [
        {
            question: "Implement graph traversal using DFS.",
            hint: "Use recursion and visited array."
        },
        {
            question: "Find the number of connected components in an undirected graph.",
            hint: "Run DFS/BFS from unvisited nodes and count the number of such operations."
        },
        {
            question: "Detect cycle in a directed graph using DFS.",
            hint: "Track recursion stack to detect cycles."
        }
    ]
},
"Trees": {
    explanation: `
        <h3>What is a Tree?</h3>
        <p>A tree is a hierarchical data structure consisting of nodes with one root node and potentially many levels of children. Each node has at most one parent.</p>
        <h3>Properties:</h3>
        <ul>
            <li>Binary Tree: Each node has at most 2 children</li>
            <li>BST: Left < Root < Right</li>
            <li>Height, Depth, Leaf nodes, Internal nodes</li>
        </ul>
    `,
    correctCode: `class Node {
    int data;
    Node left, right;
    Node(int val) {
        data = val;
        left = right = null;
    }
}`,
    stepByStep: "Define a class for the node with data, left and right. Create objects and connect left and right references appropriately.",
    relatedQuestions: [
        "What is the difference between a binary tree and a binary search tree?",
        "What is a balanced binary tree?",
        "How is a tree different from a graph?"
    ],
    codingQuestions: [
        {
            question: "Write a program to perform in-order traversal of a binary tree.",
            hint: "Use recursion: left -> root -> right."
        },
        {
            question: "Find the height of a binary tree.",
            hint: "Use recursion to calculate max height of left and right subtrees."
        },
        {
            question: "Convert a sorted array to a balanced BST.",
            hint: "Use middle of array as root recursively."
        }
    ]
}
,"Linked List": {
    explanation: `
        <h3>What is a Linked List?</h3>
        <p>A Linked List is a linear data structure in which elements are stored in nodes, where each node points to the next node in the sequence. It is dynamic in nature and allows efficient insertion/deletion from any position.</p>
        <h3>Why Use Linked List?</h3>
        <ul>
            <li>Dynamic size (unlike arrays)</li>
            <li>Efficient insertion and deletion</li>
            <li>Used to implement stacks, queues, and graphs</li>
        </ul>
        <h3>Types of Linked Lists:</h3>
        <ul>
            <li><strong>Singly Linked List:</strong> Node has data and next pointer</li>
            <li><strong>Doubly Linked List:</strong> Node has data, next and prev pointer</li>
            <li><strong>Circular Linked List:</strong> Last node points to head</li>
        </ul>
    `,
    correctCode: `class Node {
    int data;
    Node next;
    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

public class LinkedList {
    Node head;

    public void insert(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
            return;
        }
        Node temp = head;
        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = newNode;
    }

    public void display() {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.data + " -> ");
            temp = temp.next;
        }
        System.out.println("null");
    }
}`,
    stepByStep: `
        1. Define a Node class with data and next.
        2. In insert(), check if the head is null. If yes, make new node the head.
        3. Else, traverse to the end and append the new node.
        4. In display(), traverse and print all nodes.
    `,
    relatedQuestions: [
        "What are the advantages of linked lists over arrays?",
        "How do you reverse a linked list?",
        "How to detect and remove a cycle in a linked list?"
    ],
    codingQuestions: [
        {
            question: "Write a function to reverse a singly linked list.",
            hint: "Use three pointers: prev, curr, and next."
        },
        {
            question: "Write code to detect a loop in a linked list.",
            hint: "Use Floyd’s cycle detection algorithm."
        }
    ]
}
,"Strings": {
    explanation: `
        <h3>What is a String?</h3>
        <p>A string is a sequence of characters. In Java, strings are objects that are immutable, meaning once created, they cannot be changed.</p>
        <h3>Important String Operations:</h3>
        <ul>
            <li>Length, charAt, substring, indexOf</li>
            <li>StringBuilder for mutable strings</li>
            <li>String comparison and conversion</li>
        </ul>
    `,
    correctCode: `public class StringDemo {
    public static void main(String[] args) {
        String str = "hello";
        System.out.println("Length: " + str.length());
        System.out.println("First char: " + str.charAt(0));
        System.out.println("Substring: " + str.substring(1, 4));
        System.out.println("Index of 'e': " + str.indexOf('e'));
    }
}`,
    stepByStep: `
        1. Use length() to get number of characters.
        2. Use charAt(index) to get character at a position.
        3. Use substring(start, end) to get part of string.
        4. Use indexOf() to find position of character.
    `,
    relatedQuestions: [
        "What is the difference between String and StringBuilder?",
        "Why are strings immutable in Java?",
        "How do you reverse a string without using built-in methods?"
    ],
    codingQuestions: [
        {
            question: "Write a function to check if a string is a palindrome.",
            hint: "Compare characters from both ends."
        },
        {
            question: "Count the frequency of each character in a string.",
            hint: "Use a HashMap."
        }
    ]
}
,"Arrays": {
    explanation: `
        <h3>What is a 2D/3D Array?</h3>
        <p>A 2D array is an array of arrays, useful for representing matrices. A 3D array is an array of 2D arrays and can represent 3D spaces or grids.</p>
        <h3>Use Cases:</h3>
        <ul>
            <li>Matrix operations</li>
            <li>Dynamic programming grids</li>
            <li>Game boards or cube simulations</li>
        </ul>
    `,
    correctCode: `public class MultiArrayDemo {
    public static void main(String[] args) {
        int[][] matrix = {{1, 2}, {3, 4}};
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }

        int[][][] cube = new int[2][2][2]; // 3D array
        cube[0][0][0] = 5;
        System.out.println("cube[0][0][0]: " + cube[0][0][0]);
    }
}`,
    stepByStep: `
        1. Define a 2D array using "int[][]".
        2. Use nested loops to access each cell.
        3. For 3D, use triple-nested loops or direct indexing.
    `,
    relatedQuestions: [
        "What is the difference between 2D and 3D arrays?",
        "How do you transpose a matrix?",
        "Explain row-major and column-major order."
    ],
    codingQuestions: [
        {
            question: "Write code to transpose a matrix.",
            hint: "Swap rows with columns."
        },
        {
            question: "Multiply two matrices.",
            hint: "Use three nested loops."
        }
    ]
}
,"Recursion": {
    explanation: `
        <h3>What is Recursion?</h3>
        <p>Recursion is a method where a function calls itself to solve smaller instances of the same problem.</p>
        <h3>Key Concepts:</h3>
        <ul>
            <li>Base Case: when recursion stops</li>
            <li>Recursive Case: function calls itself with smaller input</li>
            <li>Call Stack: system maintains track of recursive calls</li>
        </ul>
    `,
    correctCode: `public class RecursionDemo {
    public static int factorial(int n) {
        if (n == 0) return 1; // base case
        return n * factorial(n - 1); // recursive call
    }

    public static void main(String[] args) {
        System.out.println(factorial(5)); // 120
    }
}`,
    stepByStep: `
        1. Define base case (n == 0).
        2. In recursive case, multiply n with factorial(n-1).
        3. Execution stack keeps track of return values.
    `,
    relatedQuestions: [
        "What is the difference between recursion and iteration?",
        "When should recursion be avoided?",
        "Explain stack overflow error in recursion."
    ],
    codingQuestions: [
        {
            question: "Write a recursive function to calculate Fibonacci numbers.",
            hint: "Use base cases for 0 and 1."
        },
        {
            question: "Find sum of digits of a number using recursion.",
            hint: "Use num % 10 and num / 10."
        }
    ]
}
,"Patterns": {
    explanation: `
        <h3>What Are Patterns?</h3>
        <p>Patterns involve printing characters (like *, numbers) in a specific shape using nested loops. They are great for practicing loop logic and conditions.</p>
        <h3>Common Pattern Types:</h3>
        <ul>
            <li>Triangle</li>
            <li>Pyramid</li>
            <li>Diamond</li>
            <li>Hollow Shapes</li>
        </ul>
    `,
    correctCode: `public class Pattern {
    public static void main(String[] args) {
        int rows = 5;
        for (int i = 1; i <= rows; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}`,
    stepByStep: `
        1. Outer loop controls the number of rows.
        2. Inner loop prints stars according to current row.
        3. Use println to move to next line after each row.
    `,
    relatedQuestions: [
        "How do you create a hollow diamond pattern?",
        "What is the time complexity of printing a pattern with nested loops?",
        "Can you print patterns without nested loops?"
    ],
    codingQuestions: [
        {
            question: "Print a pyramid pattern of numbers.",
            hint: "Use spaces before numbers in each row."
        },
        {
            question: "Print a hollow square using asterisks.",
            hint: "Use conditions inside the inner loop."
        }
    ]
}


    
};

let currentTopic = null;

document.addEventListener("DOMContentLoaded", () => {
    const alertBox = document.createElement("div");
    alertBox.id = "custom-alert";
    alertBox.style.position = "fixed";
    alertBox.style.bottom = "30px";
    alertBox.style.left = "50%";
    alertBox.style.transform = "translateX(-50%) translateY(30px)";
    alertBox.style.backgroundColor = "#28a745"; // default green
    alertBox.style.color = "#ffffff";
    alertBox.style.padding = "15px 30px";
    alertBox.style.borderRadius = "8px";
    alertBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    alertBox.style.fontSize = "16px";
    alertBox.style.zIndex = "1000";
    alertBox.style.opacity = "0";
    alertBox.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    alertBox.style.display = "none";

    document.body.appendChild(alertBox);
});

// Reusable custom alert function with type
function showCustomAlert(message, type = "success") {
    const alertBox = document.getElementById("custom-alert");
    alertBox.innerText = message;
    alertBox.style.backgroundColor = type === "error" ? "#dc3545" : "#28a745";
    alertBox.style.display = "block";

    requestAnimationFrame(() => {
        alertBox.style.opacity = "1";
        alertBox.style.transform = "translateX(-50%) translateY(0)";
    });

    setTimeout(() => {
        alertBox.style.opacity = "0";
        alertBox.style.transform = "translateX(-50%) translateY(30px)";
    }, 4000);

    setTimeout(() => {
        alertBox.style.display = "none";
    }, 4500);
}

function showAlert(message, type = "success") {
    showCustomAlert(message, type);
}

// Search function
function searchTopic() {
    const searchInput = document.getElementById("search-box").value.trim().toLowerCase();

    if (!searchInput) {
        showAlert("Please enter a topic name.", "error");
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
    currentTopic.name = foundTopic;
    document.getElementById("topic-title").innerText = foundTopic.toUpperCase();
    document.getElementById("topic-explanation").innerHTML = currentTopic.explanation;
    document.getElementById("explanation-section").classList.remove("hidden");
    document.getElementById("code-section").classList.add("hidden");
    document.getElementById("questions-section").classList.add("hidden");
}

function showPartialCode() {
    if (!currentTopic) {
        showAlert("No topic selected!", "error");
        return;
    }

    document.getElementById("explanation-section").classList.add("hidden");
    document.getElementById("code-section").classList.remove("hidden");

    document.getElementById("code-prompt").innerText = `Write code for ${currentTopic.name}`;
    document.getElementById("user-code").setAttribute("placeholder", `Write code for ${currentTopic.name} here...`);
}

// Code Validation
function checkCode() {
    const userCode = document.getElementById("user-code").value.trim();
    const correctCode = currentTopic.correctCode.trim();

    const normalize = str => str.replace(/\s+/g, ' ').trim();

    const feedbackBox = document.getElementById("code-feedback");
    feedbackBox.innerHTML = "";

    if (normalize(userCode) === normalize(correctCode)) {
        document.getElementById("code-section").classList.add("hidden");
        document.getElementById("questions-section").classList.remove("hidden");
        showQuestions();
        showAlert("Great job! Check out the related and coding questions.", "success");
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
            const btn = document.getElementById("show-answer-btn");
            btn.disabled = true;
            btn.innerText = "Answer Shown";
        });

        showAlert("Incorrect code! Click 'Show Correct Answer' to learn.", "error");
    }
}

// Show Questions
function showQuestions() {
    const relatedQList = document.getElementById("related-questions");
    const codingQList = document.getElementById("coding-questions");

    relatedQList.innerHTML = "";
    codingQList.innerHTML = "";

    currentTopic.relatedQuestions.forEach((question) => {
        const li = document.createElement("li");
        li.style.textAlign = "left";
        li.innerHTML = `${question}`;
        relatedQList.appendChild(li);
    });

    currentTopic.codingQuestions.forEach((question) => {
        const li = document.createElement("li");
        li.style.textAlign = "left";
        li.innerHTML = `${question.question} <br><em>${question.hint}</em>`;
        codingQList.appendChild(li);
    });
}

// Save Progress
function saveProgress() {
    if (!currentTopic) {
        showAlert("No topic to save.", "error");
        return;
    }

    const topicName = document.getElementById("topic-title").innerText;
    const newEntry = {
        topic: topicName,
        portal: "Intermediate",
        timestamp: new Date().toISOString()
    };

    let savedProgress = JSON.parse(localStorage.getItem("combinedProgress")) || [];
    const isAlreadySaved = savedProgress.some(entry => entry.topic === topicName && entry.portal === "Intermediate");

    if (!isAlreadySaved) {
        savedProgress.push(newEntry);
        localStorage.setItem("combinedProgress", JSON.stringify(savedProgress));
        showAlert("Progress saved successfully!", "success");
    } else {
        showAlert("This topic is already saved.", "error");
    }
}

// Load Progress
function loadProgress() {
    window.location.href = "progress.html";
}

function goBack() {
    window.location.href = "intermediate.html";
}

function goBacktoDashboard() {
    window.location.href = "dashboard.html";
}
