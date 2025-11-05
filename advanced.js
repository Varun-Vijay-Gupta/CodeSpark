const topics = {
    "Bubble Sort": {
        explanation: `
            <h3>Advanced Understanding of Bubble Sort</h3>
            <p>Bubble Sort is a fundamental comparison-based algorithm. While inefficient for large datasets due to its O(n²) time complexity, it serves as a gateway to understanding sorting principles such as in-place operations, stability, and optimization techniques.</p>
            <p>In Bubble Sort, adjacent elements are compared and swapped to sort the array. Though mostly academic, it teaches algorithm analysis well.</p>
            <h4>Algorithm Characteristics:</h4>
            <ul>
                <li><strong>Time Complexity:</strong> Best - O(n), Average/Worst - O(n²)</li>
                <li><strong>Space Complexity:</strong> O(1)</li>
                <li><strong>Stable Sort:</strong> Yes</li>
                <li><strong>Use Case:</strong> Educational or small input size only.</li>
            </ul>
            <h4>Optimization Tip:</h4>
            <p>Use a swapped flag to break early if the array becomes sorted before all passes.</p>
        `,

        externalLinks: [
            { title: "Bubble Sort | Practice - GeeksforGeeks", url: "https://practice.geeksforgeeks.org/problems/bubble-sort/1" },
            { title: "Bubble Sort Implementation - GeeksforGeeks", url: "https://www.geeksforgeeks.org/bubble-sort/" },
            { title: "Bubble Sort (Java) - HackerRank Discussion", url: "https://www.hackerrank.com/challenges/ctci-bubble-sort/forum/comments/303404" },
            { title: "Sort Colors (Java Solution) - LeetCode", url: "https://leetcode.com/problems/sort-colors/description/" },
            { title: "Sort an Array (Java) - LeetCode", url: "https://leetcode.com/problems/sort-an-array/description/" },
            { title: "Minimum Swaps 2 (Java) - HackerRank", url: "https://www.hackerrank.com/challenges/minimum-swaps-2/problem" },
            { title: "Count Inversions (Java) - GeeksforGeeks", url: "https://www.geeksforgeeks.org/counting-inversions/" },
            { title: "Java Sorting - HackerRank 10 Days of JavaScript (applies to Java logic too)", url: "https://www.hackerrank.com/challenges/js10-arrays/problem" },
            { title: "Java Sorting Comparator - HackerRank", url: "https://www.hackerrank.com/challenges/java-comparator/problem" }
        ]
    },
    "Insertion Sort": {
    explanation: `
        <h3>Advanced Understanding of Insertion Sort</h3>
        <p>Insertion Sort builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort or merge sort. However, it performs well for small or nearly sorted datasets and has several advantages such as simplicity, stability, and in-place sorting.</p>
        <p>In each iteration, the algorithm removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there—hence the name "insertion".</p>
        <h4>Algorithm Characteristics:</h4>
        <ul>
            <li><strong>Time Complexity:</strong> Best - O(n), Average/Worst - O(n²)</li>
            <li><strong>Space Complexity:</strong> O(1) (in-place)</li>
            <li><strong>Stable Sort:</strong> Yes</li>
            <li><strong>Use Case:</strong> Efficient for small or nearly sorted datasets</li>
        </ul>
        <h4>Optimization Tip:</h4>
        <p>To optimize insertion sort, you can use binary search to find the correct insertion point, reducing comparisons to O(log n), but insertion still takes O(n) time due to data shifting.</p>
    `,

    externalLinks: [
        { title: "Insertion Sort | Practice - GeeksforGeeks", url: "https://practice.geeksforgeeks.org/problems/insertion-sort/1" },
        { title: "Insertion Sort Explained - GeeksforGeeks", url: "https://www.geeksforgeeks.org/insertion-sort/" },
        { title: "Java Program for Insertion Sort - GeeksforGeeks", url: "https://www.geeksforgeeks.org/java-program-for-insertion-sort/" },
        { title: "Insertion Sort Implementation (Java) - Coding Ninjas", url: "https://www.codingninjas.com/codestudio/library/insertion-sort-in-java" },
        { title: "Sorting: Insertion Sort - HackerRank", url: "https://www.hackerrank.com/challenges/insertionsort1/problem" },
        { title: "Insertion Sort | HackerRank Discussions (Java)", url: "https://www.hackerrank.com/challenges/insertionsort2/forum/comments/308082" },
        { title: "Insertion Sort Explained in Java - Programiz", url: "https://www.programiz.com/java-programming/examples/insertion-sort" },
        { title: "Insertion Sort (Java) - Javatpoint", url: "https://www.javatpoint.com/insertion-sort-in-java" },
        { title: "Java Sorting Algorithms - Baeldung", url: "https://www.baeldung.com/java-sorting-arrays" }
    ]
},
"Selection Sort": {
    explanation: `
        <h3>Advanced Understanding of Selection Sort</h3>
        <p>Selection Sort is an in-place comparison sorting algorithm that divides the input list into two parts: a sorted sublist of items already placed at the beginning and a sublist of the remaining unsorted items. The algorithm repeatedly selects the smallest (or largest) element from the unsorted sublist and moves it to the end of the sorted sublist.</p>
        <p>While it's not suitable for large data sets due to its O(n²) time complexity, it performs well when memory writes are more expensive than reads since it makes at most O(n) swaps.</p>
        <h4>Algorithm Characteristics:</h4>
        <ul>
            <li><strong>Time Complexity:</strong> Best/Average/Worst - O(n²)</li>
            <li><strong>Space Complexity:</strong> O(1)</li>
            <li><strong>Stable Sort:</strong> No (can be made stable with extra steps)</li>
            <li><strong>Use Case:</strong> Useful where memory write is a costly operation</li>
        </ul>
        <h4>Optimization Tip:</h4>
        <p>To make Selection Sort stable, instead of swapping, shift elements and insert the minimum at the correct position. However, this adds overhead and negates its simplicity.</p>
    `,

    externalLinks: [
        { title: "Selection Sort | Practice - GeeksforGeeks", url: "https://practice.geeksforgeeks.org/problems/selection-sort/1" },
        { title: "Selection Sort Algorithm - GeeksforGeeks", url: "https://www.geeksforgeeks.org/selection-sort/" },
        { title: "Java Program for Selection Sort - GeeksforGeeks", url: "https://www.geeksforgeeks.org/java-program-for-selection-sort/" },
        { title: "Selection Sort in Java - Programiz", url: "https://www.programiz.com/java-programming/examples/selection-sort" },
        { title: "Selection Sort in Java - Coding Ninjas", url: "https://www.codingninjas.com/studio/library/selection-sort-in-java" },
        { title: "Selection Sort (Java Example) - Javatpoint", url: "https://www.javatpoint.com/selection-sort-in-java" },
        { title: "Java Sorting Algorithms Guide - Baeldung", url: "https://www.baeldung.com/java-sorting" },
        { title: "Sorting: Selection Sort Logic - PrepInsta", url: "https://prepinsta.com/selection-sort/" },
        { title: "Selection Sort Visualization & Practice - VisuAlgo", url: "https://visualgo.net/en/sorting" }
    ]
},
"Merge Sort": {
    explanation: `
        <h3>Advanced Understanding of Merge Sort</h3>
        <p>Merge Sort is a divide-and-conquer algorithm that divides the input array into two halves, recursively sorts them, and finally merges the sorted halves. It is known for its predictable O(n log n) performance and stability.</p>
        <p>Unlike Quick Sort, Merge Sort guarantees the worst-case time complexity of O(n log n), making it suitable for large datasets and linked lists. However, it requires additional memory for merging, which makes it less space-efficient than in-place algorithms.</p>
        <h4>Algorithm Characteristics:</h4>
        <ul>
            <li><strong>Time Complexity:</strong> Best/Average/Worst - O(n log n)</li>
            <li><strong>Space Complexity:</strong> O(n) due to auxiliary space used in merging</li>
            <li><strong>Stable Sort:</strong> Yes</li>
            <li><strong>Use Case:</strong> Ideal for sorting linked lists and large arrays where guaranteed performance is required</li>
        </ul>
        <h4>Optimization Tip:</h4>
        <p>For small subarrays (e.g., size < 7), switching to Insertion Sort can improve performance due to lower overhead. Also, avoid unnecessary copying when one half is already in place.</p>
    `,

    externalLinks: [
        { title: "Merge Sort | Practice - GeeksforGeeks", url: "https://practice.geeksforgeeks.org/problems/merge-sort/1" },
        { title: "Merge Sort Algorithm - GeeksforGeeks", url: "https://www.geeksforgeeks.org/merge-sort/" },
        { title: "Java Program for Merge Sort - GeeksforGeeks", url: "https://www.geeksforgeeks.org/java-program-for-merge-sort/" },
        { title: "Merge Sort in Java - Programiz", url: "https://www.programiz.com/java-programming/examples/merge-sort" },
        { title: "Merge Sort Explained with Code - Coding Ninjas", url: "https://www.codingninjas.com/studio/library/merge-sort-in-java" },
        { title: "Merge Sort in Java - Javatpoint", url: "https://www.javatpoint.com/merge-sort-in-java" },
        { title: "Sorting Algorithms in Java - Baeldung", url: "https://www.baeldung.com/java-sorting" },
        { title: "Merge Sort for Linked Lists - GeeksforGeeks", url: "https://www.geeksforgeeks.org/merge-sort-for-linked-list/" },
        { title: "Visual Merge Sort - VisuAlgo", url: "https://visualgo.net/en/sorting" }
    ]
},
"Quick Sort": {
    explanation: `
        <h3>Advanced Understanding of Quick Sort</h3>
        <p>Quick Sort is a divide-and-conquer algorithm that picks a pivot element and partitions the array around the pivot, such that elements less than the pivot come before it, and elements greater come after. This process is recursively applied to the subarrays.</p>
        <p>Despite a worst-case time complexity of O(n²), Quick Sort is often faster in practice than Merge Sort and Heap Sort due to better cache performance and no additional space overhead for merging. The worst case can be mitigated using randomized or median-of-three pivot selection.</p>
        <h4>Algorithm Characteristics:</h4>
        <ul>
            <li><strong>Time Complexity:</strong> Best/Average - O(n log n), Worst - O(n²)</li>
            <li><strong>Space Complexity:</strong> O(log n) (due to recursion stack)</li>
            <li><strong>Stable Sort:</strong> No</li>
            <li><strong>Use Case:</strong> Preferred for large in-memory datasets due to its speed and in-place sorting</li>
        </ul>
        <h4>Optimization Tip:</h4>
        <p>Use randomized pivot or median-of-three to avoid the worst-case performance. Tail recursion optimization can also reduce the recursive stack depth.</p>
    `,

    externalLinks: [
        { title: "Quick Sort | Practice - GeeksforGeeks", url: "https://practice.geeksforgeeks.org/problems/quick-sort/1" },
        { title: "QuickSort Algorithm - GeeksforGeeks", url: "https://www.geeksforgeeks.org/quick-sort/" },
        { title: "Quick Sort in Java - Programiz", url: "https://www.programiz.com/java-programming/examples/quick-sort" },
        { title: "Quick Sort Java Tutorial - Javatpoint", url: "https://www.javatpoint.com/quick-sort" },
        { title: "Quick Sort Explained - Coding Ninjas", url: "https://www.codingninjas.com/studio/library/quick-sort-in-java" },
        { title: "Java QuickSort Example - Baeldung", url: "https://www.baeldung.com/java-quicksort" },
        { title: "QuickSort in Java - TutorialsPoint", url: "https://www.tutorialspoint.com/java-program-for-quicksort" },
        { title: "Visual Quick Sort - VisuAlgo", url: "https://visualgo.net/en/sorting" },
        { title: "Sorting Algorithms in Java - Java Guides", url: "https://www.javaguides.net/2020/04/sorting-algorithms-in-java.html" }
    ]
},
"Linear Search": {
    explanation: `
        <h3>Advanced Understanding of Linear Search</h3>
        <p>Linear Search is the simplest searching algorithm, where each element in the array is checked one-by-one until the desired element is found or the array ends. It's also called sequential search.</p>
        <p>While it's not efficient for large datasets, it shines when:</p>
        <ul>
            <li>The dataset is small or unsorted.</li>
            <li>You’re checking data in linked lists or streaming inputs.</li>
            <li>You want to find all matching values instead of just one.</li>
        </ul>
        <h4>Algorithm Characteristics:</h4>
        <ul>
            <li><strong>Time Complexity:</strong> Best - O(1), Average/Worst - O(n)</li>
            <li><strong>Space Complexity:</strong> O(1)</li>
            <li><strong>Use Case:</strong> Suitable for small, unsorted datasets or data structures that don't allow random access</li>
        </ul>
        <h4>Optimization Tip:</h4>
        <p>If the data is static and searched frequently, sort the data and use Binary Search instead for O(log n) performance.</p>
    `,

    externalLinks: [
        { title: "Linear Search | Practice - GeeksforGeeks", url: "https://practice.geeksforgeeks.org/problems/searching-a-number0324/1" },
        { title: "Linear Search Explained - GeeksforGeeks", url: "https://www.geeksforgeeks.org/linear-search/" },
        { title: "Java Linear Search Program - Programiz", url: "https://www.programiz.com/java-programming/examples/linear-search" },
        { title: "Linear Search Java Example - Javatpoint", url: "https://www.javatpoint.com/linear-search-in-java" },
        { title: "Linear Search in Java - Coding Ninjas", url: "https://www.codingninjas.com/studio/library/linear-search-in-java" },
        { title: "Searching Techniques in Java - Baeldung", url: "https://www.baeldung.com/java-searching-arrays" },
        { title: "Linear Search - Java Guides", url: "https://www.javaguides.net/2021/05/java-program-to-implement-linear-search.html" },
        { title: "Linear Search Algorithm - Scaler Topics", url: "https://www.scaler.com/topics/data-structures/linear-search/" },
        { title: "Search an Element - HackerRank Discussions (Java)", url: "https://www.hackerrank.com/challenges/java-1d-array-introduction/forum" }
    ]
},
"Binary Search": {
    explanation: `
        <h3>Advanced Understanding of Binary Search</h3>
        <p>Binary Search is a highly efficient algorithm used to search for elements in a sorted array or list. It works on the divide-and-conquer principle: the search space is halved with each comparison, making it exponentially faster than Linear Search for large datasets.</p>
        <p>It's widely used in real-world applications such as databases, libraries, and system-level indexing, where sorted data structures are common.</p>
        <h4>Algorithm Characteristics:</h4>
        <ul>
            <li><strong>Time Complexity:</strong> Best - O(1), Average/Worst - O(log n)</li>
            <li><strong>Space Complexity:</strong> Iterative - O(1), Recursive - O(log n) due to call stack</li>
            <li><strong>Use Case:</strong> Efficient for large sorted datasets</li>
        </ul>
        <h4>Key Tip:</h4>
        <p>Be cautious with integer overflow when calculating mid: use <code>mid = low + (high - low) / 2</code> instead of <code>(low + high) / 2</code>.</p>
    `,

    externalLinks: [
        { title: "Binary Search | Practice - GeeksforGeeks", url: "https://practice.geeksforgeeks.org/problems/binary-search-1587115620/1" },
        { title: "Binary Search Explained - GeeksforGeeks", url: "https://www.geeksforgeeks.org/binary-search/" },
        { title: "Binary Search in Java - Programiz", url: "https://www.programiz.com/java-programming/examples/binary-search" },
        { title: "Java Binary Search - Javatpoint", url: "https://www.javatpoint.com/binary-search-in-java" },
        { title: "Binary Search in Java - Coding Ninjas", url: "https://www.codingninjas.com/studio/library/binary-search-in-java" },
        { title: "Binary Search Tree Traversal - Baeldung Java", url: "https://www.baeldung.com/java-binary-tree" },
        { title: "Binary Search Implementation - Java Guides", url: "https://www.javaguides.net/2021/05/java-program-to-implement-binary-search.html" },
        { title: "Java.util.Arrays.binarySearch() Method - Oracle Docs", url: "https://docs.oracle.com/javase/8/docs/api/java/util/Arrays.html#binarySearch-int:A-int-" },
        { title: "Binary Search - HackerRank Discussions (Java)", url: "https://www.hackerrank.com/challenges/tutorial-intro/forum/comments/551988" },
        { title: "Java Binary Search - Scaler Topics", url: "https://www.scaler.com/topics/binary-search-in-java/" }
    ]
},
"Heap Sort": {
    explanation: `
        <h3>Advanced Understanding of Heap Sort</h3>
        <p>Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure to sort elements. It builds a Max-Heap from the input data and then repeatedly extracts the maximum element, placing it at the end of the array.</p>
        <p>Unlike Merge Sort, Heap Sort is not stable, but it sorts in place and doesn't require additional memory. It's suitable for environments with strict memory constraints and when constant-time maximum element access is needed.</p>
        <h4>Algorithm Characteristics:</h4>
        <ul>
            <li><strong>Time Complexity:</strong> Best/Average/Worst - O(n log n)</li>
            <li><strong>Space Complexity:</strong> O(1) (In-place)</li>
            <li><strong>Stable Sort:</strong> No</li>
            <li><strong>Use Case:</strong> Large datasets where in-place sorting is required</li>
        </ul>
        <h4>Key Tip:</h4>
        <p>Understanding the heap structure (Max-Heap or Min-Heap) is crucial. Java's <code>PriorityQueue</code> implements a Min-Heap by default.</p>
    `,

    externalLinks: [
        { title: "Heap Sort | Practice - GeeksforGeeks", url: "https://practice.geeksforgeeks.org/problems/heap-sort/1" },
        { title: "Heap Sort in Java - GeeksforGeeks", url: "https://www.geeksforgeeks.org/heap-sort/" },
        { title: "Heap Sort Java Implementation - Programiz", url: "https://www.programiz.com/dsa/heap-sort" },
        { title: "Heap Sort Algorithm in Java - Javatpoint", url: "https://www.javatpoint.com/heap-sort" },
        { title: "Java Heap Sort - Coding Ninjas", url: "https://www.codingninjas.com/studio/library/heap-sort-in-java" },
        { title: "Heap Sort Using PriorityQueue - Java Guides", url: "https://www.javaguides.net/2021/05/java-program-to-implement-heap-sort.html" },
        { title: "Heap Sort - Scaler Topics", url: "https://www.scaler.com/topics/heap-sort-in-java/" },
        { title: "Heap Sort Algorithm - Baeldung Java", url: "https://www.baeldung.com/java-heap" },
        { title: "Sorting Using Heap - HackerEarth", url: "https://www.hackerearth.com/practice/algorithms/sorting/heap-sort/tutorial/" },
        { title: "Heap Sort Algorithm - Techie Delight", url: "https://www.techiedelight.com/heapsort/" }
    ]
},
"DFS": {
        explanation: `
            <h3>Advanced Understanding of DFS</h3>
            <p>Depth First Search (DFS) is a recursive algorithm for traversing or searching tree or graph data structures. It uses a stack-based approach (via recursion or explicit stack). DFS explores as far as possible along a branch before backtracking, making it useful for pathfinding, cycle detection, and topological sorting.</p>
            <ul>
                <li><strong>Time Complexity:</strong> O(V + E)</li>
                <li><strong>Space Complexity:</strong> O(V)</li>
                <li><strong>Applications:</strong> Cycle detection, Connected components, Topological sort, Solving puzzles</li>
            </ul>
        `,
        externalLinks: [
            { title: "DFS of Graph - GFG", url: "https://practice.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1" },
            { title: "Number of Provinces (DFS) - LeetCode", url: "https://leetcode.com/problems/number-of-provinces/" },
            { title: "Connected Components - HackerRank", url: "https://www.hackerrank.com/challenges/connected-cell-in-a-grid/problem" },
            { title: "Clone Graph - LeetCode", url: "https://leetcode.com/problems/clone-graph/" },
            { title: "Graph Valid Tree - LeetCode", url: "https://leetcode.com/problems/graph-valid-tree/" },
            { title: "Detect Cycle (Directed Graph) - GFG", url: "https://practice.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1" },
            { title: "Topological Sort (DFS) - GFG", url: "https://practice.geeksforgeeks.org/problems/topological-sort/1" },
            { title: "Path Between Two Nodes - GFG", url: "https://www.geeksforgeeks.org/find-paths-given-source-destination/" }
        ]
    },

    "BFS": {
        explanation: `
            <h3>Advanced Understanding of BFS</h3>
            <p>Breadth First Search (BFS) explores neighbors level by level using a queue. It's commonly used in shortest path algorithms on unweighted graphs and tree level order traversals.</p>
            <ul>
                <li><strong>Time Complexity:</strong> O(V + E)</li>
                <li><strong>Space Complexity:</strong> O(V)</li>
                <li><strong>Applications:</strong> Shortest path, Peer-to-peer networks, GPS navigation</li>
            </ul>
        `,
        externalLinks: [
            { title: "BFS of Graph - GFG", url: "https://practice.geeksforgeeks.org/problems/bfs-traversal-of-graph/1" },
            { title: "Shortest Path in Binary Matrix - LeetCode", url: "https://leetcode.com/problems/shortest-path-in-binary-matrix/" },
            { title: "Rotten Oranges - GFG", url: "https://practice.geeksforgeeks.org/problems/rotten-oranges2536/1" },
            { title: "Course Schedule (BFS) - LeetCode", url: "https://leetcode.com/problems/course-schedule/" },
            { title: "Snakes and Ladders - LeetCode", url: "https://leetcode.com/problems/snakes-and-ladders/" },
            { title: "Nearest 1 in Matrix - GFG", url: "https://practice.geeksforgeeks.org/problems/distance-of-nearest-cell-having-1/1" },
            { title: "Level Order Traversal - GFG", url: "https://practice.geeksforgeeks.org/problems/level-order-traversal/1" },
            { title: "Walls and Gates - LeetCode", url: "https://leetcode.com/problems/walls-and-gates/" }
        ]
    },

    "Graphs": {
        explanation: `
            <h3>Advanced Understanding of Graphs</h3>
            <p>A graph is a collection of nodes (vertices) and edges. It may be directed or undirected, weighted or unweighted. Graphs are widely used in computer science for modeling relationships, dependencies, and connections.</p>
            <ul>
                <li><strong>Representations:</strong> Adjacency List, Adjacency Matrix</li>
                <li><strong>Traversal:</strong> BFS, DFS</li>
                <li><strong>Applications:</strong> Maps, Network Routing, Dependency Resolution</li>
            </ul>
        `,
        externalLinks: [
            { title: "Graph Representation - GFG", url: "https://practice.geeksforgeeks.org/problems/graph-representation/1" },
            { title: "Detect Cycle in Graph - GFG", url: "https://practice.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1" },
            { title: "Dijkstra’s Algorithm - GFG", url: "https://practice.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1" },
            { title: "Minimum Spanning Tree (Kruskal) - GFG", url: "https://practice.geeksforgeeks.org/problems/minimum-spanning-tree/1" },
            { title: "Alien Dictionary (Graph) - GFG", url: "https://practice.geeksforgeeks.org/problems/alien-dictionary/1" },
            { title: "Bellman-Ford Algorithm - GFG", url: "https://practice.geeksforgeeks.org/problems/distance-from-the-source-bellman-ford-algorithm/1" },
            { title: "Strongly Connected Components - GFG", url: "https://practice.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1" },
            { title: "Topological Sorting - GFG", url: "https://practice.geeksforgeeks.org/problems/topological-sort/1" }
        ]
    },

    "Trees": {
        explanation: `
            <h3>Advanced Understanding of Trees</h3>
            <p>A Tree is a hierarchical data structure with a root node and children nodes. Binary Trees, Binary Search Trees, and N-ary Trees are popular variants used in various problems.</p>
            <ul>
                <li><strong>Traversal Types:</strong> Inorder, Preorder, Postorder, Level-order</li>
                <li><strong>Applications:</strong> Hierarchical storage, Search trees, Expression parsing</li>
                <li><strong>Time Complexity:</strong> O(log n) for balanced trees; O(n) for traversal</li>
            </ul>
        `,
        externalLinks: [
            { title: "Binary Tree Inorder Traversal - LeetCode", url: "https://leetcode.com/problems/binary-tree-inorder-traversal/" },
            { title: "Height of Binary Tree - GFG", url: "https://practice.geeksforgeeks.org/problems/height-of-binary-tree/1" },
            { title: "Balanced Binary Tree - LeetCode", url: "https://leetcode.com/problems/balanced-binary-tree/" },
            { title: "Check for BST - GFG", url: "https://practice.geeksforgeeks.org/problems/check-for-bst/1" },
            { title: "Lowest Common Ancestor - LeetCode", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
            { title: "Diameter of Binary Tree - GFG", url: "https://practice.geeksforgeeks.org/problems/diameter-of-binary-tree/1" },
            { title: "Symmetric Tree - LeetCode", url: "https://leetcode.com/problems/symmetric-tree/" },
            { title: "Serialize and Deserialize Binary Tree - LeetCode", url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" }
        ]
    },
    "Linked List": {
    "explanation": `
        <h3>Advanced Understanding of Linked Lists</h3>
        <p>A Linked List is a dynamic data structure consisting of nodes where each node contains data and a reference to the next node in the sequence. Unlike arrays, linked lists allow for efficient insertion and deletion operations without the need to reorganize the entire structure.</p>
        <h4>Key Characteristics:</h4>
        <ul>
            <li><strong>Dynamic Size:</strong> Can easily grow or shrink in size during the execution of a program.</li>
            <li><strong>Efficient Insertions/Deletions:</strong> Particularly efficient when performing insertions or deletions at the beginning or middle of the list.</li>
            <li><strong>Sequential Access:</strong> Unlike arrays, linked lists do not allow direct access to elements; traversal starts from the head node.</li>
        </ul>
        <h4>Types of Linked Lists:</h4>
        <ul>
            <li><strong>Singly Linked List:</strong> Each node points to the next node; traversal is unidirectional.</li>
            <li><strong>Doubly Linked List:</strong> Each node has references to both the next and previous nodes; allows bidirectional traversal.</li>
            <li><strong>Circular Linked List:</strong> The last node points back to the head node, forming a circle.</li>
        </ul>
        <h4>Use Cases:</h4>
        <ul>
            <li>Implementation of stacks and queues.</li>
            <li>Management of dynamic memory allocation.</li>
            <li>Navigation systems (e.g., music playlists, image viewers).</li>
        </ul>
    `,
    "externalLinks": [
        { "title": "Linked List in Java: All You Need to Know About it - Simplilearn", "url": "https://www.simplilearn.com/tutorials/java-tutorial/linked-list-in-java" },
        { "title": "A Comprehensive Guide to LinkedList in Java - Medium", "url": "https://medium.com/@YodgorbekKomilo/a-comprehensive-guide-to-linkedlist-in-java-a64a4584a3dd" },
        { "title": "Java LinkedList - W3Schools", "url": "https://www.w3schools.com/java/java_linkedlist.asp" },
        { "title": "Linked list cheatsheet for coding interviews - Tech Interview Handbook", "url": "https://www.techinterviewhandbook.org/algorithms/linked-list/" }
    ]
}
,"Strings": {
    "explanation": `
        <h3>Advanced Understanding of Strings in Java</h3>
        <p>In Java, a <code>String</code> is an immutable sequence of characters. This immutability means that once a <code>String</code> object is created, it cannot be changed. Any operation that appears to modify a <code>String</code> actually creates a new <code>String</code> object.</p>
        <h4>Key Characteristics:</h4>
        <ul>
            <li><strong>Immutability:</strong> Ensures thread safety and can lead to performance benefits in certain scenarios.</li>
            <li><strong>String Pool:</strong> Java maintains a special memory region called the string pool to store string literals, which helps in reusing instances and saving memory.</li>
            <li><strong>Rich API:</strong> The <code>String</code> class provides a comprehensive set of methods for string manipulation, including searching, concatenation, replacement, and splitting.</li>
        </ul>
        <h4>Performance Considerations:</h4>
        <ul>
            <li>For extensive string manipulations, such as in loops, using <code>StringBuilder</code> or <code>StringBuffer</code> is recommended over <code>String</code> due to their mutability and better performance.</li>
        </ul>
        <h4>Common Operations:</h4>
        <ul>
            <li>Concatenation using <code>concat()</code> or the <code>+</code> operator.</li>
            <li>Substring extraction using <code>substring()</code>.</li>
            <li>Pattern matching with regular expressions using <code>matches()</code> and <code>replaceAll()</code>.</li>
            <li>Trimming whitespace with <code>trim()</code>.</li>
        </ul>
    `,
    "externalLinks": [
        { "title": "Chapter 12: Advanced String Concepts - Kevin's Guides", "url": "https://kevinsguides.com/guides/code/java/javaintro/ch12-adv-strings/" },
        { "title": "Java String Methods - W3Schools", "url": "https://www.w3schools.com/java/java_ref_string.asp" },
        { "title": "Manipulating Characters in a String - Oracle Docs", "url": "https://docs.oracle.com/javase/tutorial/java/data/manipstrings.html" },
        { "title": "Mastering Java String Manipulation: Your Ultimate Guide - Dev.to", "url": "https://dev.to/aanshojha/mastering-java-string-manipulation-your-ultimate-guide-38gc" }
    ]
}
,
"Arrays": {
    explanation: `
        <h3>Advanced Understanding of Arrays</h3>
        <p>An <strong>array</strong> is a linear data structure used to store a fixed-size sequential collection of elements of the same data type. Arrays are stored in contiguous memory locations and support fast access via indexing (O(1) time complexity).</p>

        <h4>Key Characteristics:</h4>
        <ul>
            <li><strong>Fixed Size:</strong> Once declared, the size of the array cannot be changed.</li>
            <li><strong>Indexed Access:</strong> Elements can be accessed directly using their index.</li>
            <li><strong>Efficient Read:</strong> Accessing an element by index is very fast (O(1)).</li>
            <li><strong>Inefficient Insert/Delete:</strong> Inserting or deleting in the middle requires shifting (O(n)).</li>
        </ul>

        <h4>Use Cases:</h4>
        <ul>
            <li>Used when the number of elements is known beforehand.</li>
            <li>Efficient for random access operations.</li>
            <li>Foundational structure for building advanced data structures like heaps, matrices, hash tables, etc.</li>
        </ul>

        <h4>Limitations:</h4>
        <ul>
            <li><strong>Fixed Size:</strong> Cannot grow or shrink dynamically (use ArrayList/LinkedList in Java for flexibility).</li>
            <li><strong>Homogeneous Data:</strong> Can only hold elements of one data type.</li>
        </ul>

        <h4>Multidimensional Arrays:</h4>
        <p>Arrays of arrays used to represent matrices and grids. For example, <code>int[][] matrix = new int[3][3];</code> creates a 3x3 matrix.</p>
    `,

    externalLinks: [
        { title: "Array Basics in Java - GeeksforGeeks", url: "https://www.geeksforgeeks.org/arrays-in-java/" },
        { title: "Array Practice Problems - GeeksforGeeks", url: "https://practice.geeksforgeeks.org/explore/?category%5B%5D=Arrays&page=1&sortBy=submissions" },
        { title: "Java Arrays - W3Schools", url: "https://www.w3schools.com/java/java_arrays.asp" },
        { title: "Rotate Array - LeetCode", url: "https://leetcode.com/problems/rotate-array/" },
        { title: "Two Sum - LeetCode", url: "https://leetcode.com/problems/two-sum/" },
        { title: "Move Zeroes - LeetCode", url: "https://leetcode.com/problems/move-zeroes/" },
        { title: "Arrays - HackerRank", url: "https://www.hackerrank.com/domains/tutorials/10-days-of-javascript" }
    ]
}
,"Recursion": {
    explanation: `
        <h3>Advanced Understanding of Recursion</h3>
        <p><strong>Recursion</strong> is a problem-solving technique where the solution to a problem depends on solving smaller instances of the same problem. In Java, recursion is implemented by having a method call itself with a modified parameter until a base condition is met.</p>

        <h4>Core Concepts:</h4>
        <ul>
            <li><strong>Base Case:</strong> The condition at which the recursion ends.</li>
            <li><strong>Recursive Case:</strong> The part where the function calls itself with new parameters.</li>
            <li><strong>Stack Memory:</strong> Every recursive call adds a new frame to the call stack, which can lead to stack overflow if not handled carefully.</li>
        </ul>

        <h4>When to Use Recursion:</h4>
        <ul>
            <li>Problems that can be divided into similar sub-problems (e.g., factorial, Fibonacci, tree/graph traversal).</li>
            <li>When the recursive solution is more intuitive or readable than its iterative counterpart.</li>
        </ul>

        <h4>Drawbacks:</h4>
        <ul>
            <li>Can lead to stack overflow on large input sizes.</li>
            <li>Slower due to repeated computations (unless optimized with memoization).</li>
        </ul>

        <h4>Optimization:</h4>
        <p>Use <strong>tail recursion</strong> (if supported by the language) or apply <strong>memoization</strong> or <strong>dynamic programming</strong> to improve performance.</p>

        <h4>Example Use Case - Factorial:</h4>
        <pre><code>int factorial(int n) {
    if (n == 0 || n == 1)
        return 1;
    return n * factorial(n - 1);
}</code></pre>
    `,

    externalLinks: [
        { title: "Recursion in Java - GeeksforGeeks", url: "https://www.geeksforgeeks.org/recursion/" },
        { title: "Recursion Practice Problems - GFG", url: "https://practice.geeksforgeeks.org/explore/?category%5B%5D=Recursion&page=1&sortBy=submissions" },
        { title: "Java Recursion - W3Schools", url: "https://www.w3schools.com/java/java_recursion.asp" },
        { title: "Recursion Challenges - HackerRank", url: "https://www.hackerrank.com/domains/tutorials/10-days-of-recursion" },
        { title: "Recursion Patterns - LeetCode", url: "https://leetcode.com/tag/recursion/" },
        { title: "Tail Recursion Explained - Baeldung", url: "https://www.baeldung.com/java-tail-recursion" },
        { title: "Memoization in Recursion - GFG", url: "https://www.geeksforgeeks.org/memoization-1d-2d-and-3d/" }
    ]
}
,"Patterns": {
    explanation: `
        <h3>Advanced Understanding of Pattern Printing in Java</h3>
        <p>Pattern problems help in developing logical thinking, mastery over nested loops, and understanding how to manipulate indices and conditions. They are crucial for coding interviews and building foundational algorithmic logic.</p>

        <h4>Types of Patterns:</h4>
        <ul>
            <li><strong>Star Patterns:</strong> Square, Triangle, Pyramid, Diamond, etc.</li>
            <li><strong>Number Patterns:</strong> Incremental/Decremental numbers in rows and columns.</li>
            <li><strong>Character Patterns:</strong> Alphabet-based shapes and sequences.</li>
            <li><strong>Mirror/Inverse Patterns:</strong> Using spacing and alignment techniques.</li>
        </ul>

        <h4>Why Learn Patterns?</h4>
        <ul>
            <li>Sharpen nested loop skills (especially for loops).</li>
            <li>Improve condition handling and dry-run capabilities.</li>
            <li>Acts as a gateway to recursion, backtracking, and matrix problems.</li>
        </ul>

        <h4>Tips:</h4>
        <ul>
            <li>Draw the pattern on paper to understand the row-column relation.</li>
            <li>Observe symmetry and repetition to reduce code complexity.</li>
            <li>Use functions for reusable sub-patterns.</li>
        </ul>

        <h4>Example - Diamond Star Pattern</h4>
        <pre><code>public void printDiamond(int n) {
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n - i; j++) System.out.print(" ");
        for (int k = 1; k <= (2 * i - 1); k++) System.out.print("*");
        System.out.println();
    }
    for (int i = n - 1; i >= 1; i--) {
        for (int j = 1; j <= n - i; j++) System.out.print(" ");
        for (int k = 1; k <= (2 * i - 1); k++) System.out.print("*");
        System.out.println();
    }
}</code></pre>
    `,

    externalLinks: [
        { title: "Pattern Problems Practice - GeeksforGeeks", url: "https://practice.geeksforgeeks.org/explore/?category%5B%5D=Pattern&page=1&sortBy=submissions" },
        { title: "Star Patterns in Java - GeeksforGeeks", url: "https://www.geeksforgeeks.org/printing-patterns-java/" },
        { title: "Java Pattern Programs - StudyTonight", url: "https://www.studytonight.com/java/pattern-programs-in-java" },
        { title: "Pattern Programs - JavaTPoint", url: "https://www.javatpoint.com/pattern-programs-in-java" },
        { title: "Pattern Problems (Loop Mastery) - HackerRank", url: "https://www.hackerrank.com/challenges/printing-pattern-2/problem" },
        { title: "LeetCode Matrix Patterns", url: "https://leetcode.com/tag/matrix/" }
    ]
}

};

let currentTopic = null;

document.addEventListener("DOMContentLoaded", () => {
    // Create custom toast alert box
    const alertBox = document.createElement("div");
    alertBox.id = "custom-alert";
    alertBox.style.position = "fixed";
    alertBox.style.bottom = "30px";
    alertBox.style.left = "50%";
    alertBox.style.transform = "translateX(-50%) translateY(30px)";
    alertBox.style.backgroundColor = "#28a745";
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

// Reusable custom alert function
function showCustomAlert(message) {
    const alertBox = document.getElementById("custom-alert");
    alertBox.innerText = message;
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

function showAlert(message) {
    showCustomAlert(message);
}

function searchTopic() {
    const searchInput = document.getElementById("search-box").value.trim().toLowerCase();

    if (!searchInput) {
        showAlert("Please enter a topic name.");
        return;
    }

    let foundTopic = Object.keys(topics).find(topic => topic.toLowerCase() === searchInput);

    if (!foundTopic) {
        let suggestedTopics = Object.keys(topics).filter(topic => topic.toLowerCase().includes(searchInput));
        if (suggestedTopics.length > 0) {
            document.getElementById("search-box").setAttribute("placeholder", "Try 'Bubble Sort'");
        }
        return;
    }

    currentTopic = topics[foundTopic];
    document.getElementById("topic-title").innerText = foundTopic.toUpperCase();
    document.getElementById("topic-explanation").innerHTML = currentTopic.explanation;
    document.getElementById("explanation-section").classList.remove("hidden");
    document.getElementById("external-resources-section").classList.add("hidden");
}
function showExternalResources() {
    if (!currentTopic || !currentTopic.externalLinks) {
        showAlert("No external links available.");
        return;
    }

    document.getElementById("explanation-section").classList.add("hidden");
    document.getElementById("external-resources-section").classList.remove("hidden");

    const resourceList = document.getElementById("external-links-list");
    resourceList.innerHTML = "";

    currentTopic.externalLinks.forEach(link => {
        const li = document.createElement("li");
        li.style.textAlign = "left";

        // Create the link element
        const a = document.createElement("a");
        a.href = link.url;
        a.target = "_blank";
        a.textContent = link.title;
        a.classList.add("external-link");

        // Check if already visited
        if (localStorage.getItem(link.url) === 'visited') {
            a.classList.add("visited");
        }

        // Add click event to mark as visited
        a.addEventListener("click", function () {
            a.classList.add("visited");
            localStorage.setItem(link.url, 'visited');
        });

        li.appendChild(a);
        resourceList.appendChild(li);
    });
}


function saveProgress() {
    if (!currentTopic) {
        showAlert("No topic to save.");
        return;
    }

    const topicName = document.getElementById("topic-title").innerText;
    const newEntry = {
        topic: topicName,
        portal: "Advanced",
        timestamp: new Date().toISOString()
    };

    let savedProgress = JSON.parse(localStorage.getItem("combinedProgress")) || [];
    const isAlreadySaved = savedProgress.some(entry => entry.topic === topicName && entry.portal === "Advanced");

    if (!isAlreadySaved) {
        savedProgress.push(newEntry);
        localStorage.setItem("combinedProgress", JSON.stringify(savedProgress));
        showAlert("Progress saved successfully!");
    } else {
        showAlert("This topic is already saved.");
    }
}

function loadProgress() {
    window.location.href = "progress.html";
}

function goBack() {
    window.location.href = "advanced.html";
}

function goBacktoDashboard() {
    window.location.href = "dashboard.html";
}
