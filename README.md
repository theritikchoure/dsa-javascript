# Data Structures and Algorithms (DSA) in TypeScript

[![GitHub License](https://img.shields.io/badge/License-MIT-ff69b4.svg)](https://github.com/theritikchoure/dsa-typescript/blob/main/LICENSE)
[![Typescript](https://img.shields.io/badge/Typescript-Reference-0000.svg)](https://www.typescriptlang.org/docs/)


Welcome to the Data Structures and Algorithms (DSA) repository! This repository is dedicated to providing a collection of DSA problems and their solutions in a clear and well-documented format.

<!-- Badges -->
[![](https://img.shields.io/badge/LeetCode-000000?style=for-the-badge&logo=LeetCode&logoColor=#d16c06)](https://leetcode.com/ritikchourasiya/)
[![](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/ritikchourasiya/)
[![](https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@ritikchourasiya/)



> For me _great algorithms are the poetry of computation._ Just like verse, they can be terse, allusive, dense and even mysterious. But once unlocked, they cast a brilliant new light on some aspect of computing. <br><br> - Francis Sullivan

# Table of Contents

1. [Big O](#big-0)
2. [Different Complexities](#different-complexities)
3. [Running Tests](#running-tests)
5. [Questions](#questions)
5. [Other Resources](#other-resources)
6. [FAQ](#faq)


## Big O

Big O is a mathematical notation commonly used to describe the impact on time or space as input size `n` increases. We are mostly interested in discussing the worst case of an algorithm, but it is also beneficial to compare algorithms in their average and best case scenarios. Seven Big O notations commonly used in algorithm complexity analysis are discussed in the following sections.

```ASCII
[Figure 1] Schematic diagram of Big O for common run times from fastest to slowest.

              O(1)                       O(Log n)                         O(n)
 ▲                              ▲                              ▲
 │                              │                              │
 │                              │                              │                      .
 │                              │                              │                    .
 │                              │                              │                  .
 │                              │                              │                .
 │                              │                              │              .
t│                             t│                      ...    t│            .
 │                              │              .........       │          .
 │                              │         ......               │        .
 │                              │     .....                    │      .
 │                              │   ...                        │    .
 │.........................     │ ..                           │  .
 │                              │.                             │.
 └────────────────────────►     └────────────────────────►     └────────────────────────►
              n                              n                              n

           O(n*Log n)                    O(Log 2^n)                       O(2^n)
 ▲                     .        ▲            .                 ▲        .
 │                    ..        │            .                 │        .
 │                    .         │            .                 │        .
 │                    .         │            .                 │        .
 │                    .         │            .                 │        .
 │                   .          │            .                 │       .
 │                  ..          │           .                  │       .
t│                 ..          t│          .                  t│      .
 │               ..             │         .                    │     .
 │              ..              │        .                     │    .
 │           ....               │       .                      │    .
 │       . . .                  │     ..                       │   .
 │   .....                      │  ...                         │  .
 │...                           │...                           │..
 └────────────────────────►     └────────────────────────►     └────────────────────────►
              n                              n                              n

              O(n!)
 ▲    .
 │    .
 │    .
 │    .
 │    .
 │    .
 │    .
t│    .
 │    .
 │   .
 │  .
 │ .
 │.
 └────────────────────────►
              n
```
* This figure is taken from [Complexity Analysis by @Spring1843](https://github.com/spring1843/go-dsa/blob/main/complexity.md)


To understand the big O notation, let us focus on time complexity and specifically examine the O(n) diagram. This diagram depicts a decline in algorithm performance as the input size increases. In contrast, the O(1) diagram represents an algorithm that consistently performs in constant time, with input size having no impact on its efficiency. Consequently, the latter algorithm generally outperforms the former.

However, it is essential to note that this is not always the case. A O(1) algorithm with a single time-consuming operation might be slower than a O(n) algorithm with multiple operations if the single operation in the first algorithm requires more time to complete than the collective operations in the second algorithm.

The Big O notation of an algorithm can be simplified using the following two rules:

1. Remove the constants. `O(n) + 2*O(n*Log n) + 3*O(K) + 5` is simplified to `O(n) + O(n*Log n) + O(K)`.
2. Remove non-dominant or slower terms. `O(n) + O(n*Log n) + O(K)` is simplified to `O(n*Log n)` because `O(n*Log n)` is the dominant term.

## Different Complexities

| Data Structure / Algorithm        | Time Complexity (Average / Worst Case) | Space Complexity   |
|----------------------------------|----------------------------------------|--------------------|
| **Data Structures**              |                                        |                    |
|----------------------------------|----------------------------------------|--------------------|
| Array                            | Access: O(1), Search: O(n), Insert: O(n) | O(n)               |
| Linked List (Singly/Doubly)      | Access: O(n), Search: O(n), Insert: O(1) | O(n)               |
| Stack                            | Access: O(n), Search: O(n), Insert: O(1) | O(n)               |
| Queue (Array-based)              | Access: O(1), Search: O(n), Insert: O(1) | O(n)               |
| Queue (Linked List-based)        | Access: O(1), Search: O(n), Insert: O(1) | O(n)               |
| Hash Table                       | Insert/Delete/Search: O(1) ([amortized](./guide/amortized.md))   | O(n)               |
| Binary Search Tree (BST)         | Average: O(log n), Worst: O(n)           | O(n)               |
| AVL Tree (Balanced BST)          | Insert/Delete/Search: O(log n)          | O(n)               |
| Heap (Binary, Max/Min)           | Insert/Delete: O(log n), Max/Min: O(1)  | O(n)               |
| Trie                             | Insert/Search/Delete: O(L) (L is length)| O(ALPHABET_SIZE * L)|
| Graph (Adjacency Matrix)         | Access: O(1), Search: O(V^2), Space: O(V^2)| O(V^2)            |
| Graph (Adjacency List)           | Access: O(V + E), Search: O(V + E)      | O(V + E)           |
|----------------------------------|----------------------------------------|--------------------|
| **Algorithms**                   |                                        |                    |
|----------------------------------|----------------------------------------|--------------------|
| Linear Search                    | O(n)                                   | O(1)               |
| Binary Search                    | O(log n)                               | O(1)               |
| Merge Sort                       | O(n log n)                             | O(n)               |
| Quick Sort                       | Average: O(n log n), Worst: O(n^2)      | O(log n)           |
| Depth-First Search (DFS)         | O(V + E)                               | O(V)               |
| Breadth-First Search (BFS)       | O(V + E)                               | O(V)               |
| Dijkstra's Algorithm             | O(V^2) (with matrix), O((V + E) log V) (with min heap)| O(V) |
| Floyd-Warshall Algorithm         | O(V^3) (with matrix)                    | O(V^2)             |
| Binary Tree Traversal (in-order, pre-order, post-order) | O(n)               | O(h) (h is the height)|
| Traveling Salesman Problem (TSP)| O(n!) (Brute Force)                     | O(n)               |
|----------------------------------|----------------------------------------|--------------------|


## Running Tests
You can easily run the tests for this project using [Jest](https://jestjs.io/), a JavaScript testing framework.

### Prerequisites

Before running the tests, make sure you have installed the required packages. To install the required packages, run below command:

```shell
npm install
```

### Running All Tests

To run all the tests in the project, execute the following command in your terminal:

```shell
npm test
```


## Questions

The below table includes all the questions, which I have solved.

### Arrays

| S.No | Questions | 
| ------ | ------ | 
| 1 | [Two sum problem](./array/two_sum.js) | 
| 2 | [Sort array of 0s, 1s and 2s](./array/sort_0_1_2.js) | 
| 3 | [Find min and max element in array](./array/find_min_max.js) | 
| 4 | [Move negative element to the end of the array](./array/move_negative_element.js) | 
| 5 | [Merge sorted array (with and without extra space)](./array/mergeSortedArrays.js) | 
| 6 | [Reverse String)](./array/reverseString.js) | 
| 7 | [Spiral Matrix)](./spiral_matrix.js) | 
| 8 | [Reverse Integer)](./reverse_integer.js) | 
| 9 | [Print all divisors)](./print_all_divisors.js) | 
| 10 | [Find length of the longest substring without repeating characters)](./length_of_longest_substring.js) | 
| 11 | [Trapping Rain Water (google interview - hard)](./array/rain_water_trapping.js) | 
| 12 | [Alternate Swap](./array/alternate_swap.js) | 
| 13 | [Find array intersection](./array/find_array_intersection.js) | 

### Linked List
| S.No | Questions | 
| ------ | ------ | 
| 1 | [Implement Stack Using Linked List](./linkedinlist/stack_using_ll.js) | 
| 2 | [Find kth node from end of a Linked list](./linkedinlist/find_kth_node_from_end.js) | 
| 3 | [Linked List has loop or not](./linkedinlist/has_loop.js) | 
| 4 | [Insert in a sorted linked list](./linkedinlist/insert_in_sorted_ll.js) | 
| 5 | [Reverse linked list](./linkedinlist/reverse_ll.js) | 
| 6 | [Find mid point of LL](./linkedinlist/linkedlist_midpoint.js) | 
| 7 | [Remove duplicates from sorted LL](./linkedinlist/remove_duplicates_from_sorted_ll.js) | 

### Strings

| S.No | Questions | 
| ------ | ------ | 
| 1 | [Check number is armstrong number)](./check_armstrong_number.js) | 
| 2 | [Determine if the string is palindrome](./check_palindrome.js) | 
| 3 | [Count character/letter that is most commonly used in string](./max_chars.js) | 
| 4 | [The classic fizz buzz problem](./fizz_buzz.js) | 
| 5 | [Chunk the array](./array_chunking.js) | 
| 6 | [Check provided two strings are anagram of each others](./anagrams.js) | 
| 7 | [Find linked list midpoint](./linkedlist_midpoint.js) |

### Binary Search
| S.No | Questions | 
| ------ | ------ | 
| 1 | [First and last occurrence of element)](./binarysearch/first_last_occurrence.js) |
| 2 | [Peak index in a mountain array)](./binarysearch/peak_in_mountain_arr.js) |
| 3 | [Pivot in rotated sorted array)](./binarysearch/pivot_in_rotated_arr.js) |
| 4 | [Search in rotated sorted array)](./binarysearch/search_in_rotated_arr.js) |


### Patterns
| S.No | Pattern  | Level | Questions | 
| ------ | ------ | ------ | ------ | 
| 1 | Two Pointers | Easy | [Merge Two Sorted Lists](./patterns/two-pointers/merge-two-linked-lists.js) |
| 2 | Two Pointers | Easy | [two Sum](./patterns/two-pointers/two-sum.js) |
| 3 | Two Pointers | Easy | [Squares of a Sorted Array](./patterns/two-pointers/squares-of-a-sorted-array.js) |
| 3 | Two Pointers | Easy | [Squares of a Sorted Array](./patterns/two-pointers/squares-of-a-sorted-array.js) |
| 4 | Two Pointers | Easy | [Backspace String Compare](./patterns/two-pointers/backspace-string-compare.js) |
| 5 | Two Pointers | Easy | [Moves Zeroes](./patterns/two-pointers/move-zeroes.js) |
| 6 | Two Pointers | Easy | [Is Subsequence](./patterns/two-pointers/is-subsequence.js) |
| 7 | Two Pointers | Medium | [Find the duplicate numbers](./patterns/two-pointers/find-the-duplicate-number.js) |

## Other Resources

1. [Alogrithms - Part 1 By Coursera](https://www.coursera.org/learn/algorithms-part1)
2. [Alogrithms - Part 1 By Coursera](https://www.coursera.org/learn/algorithms-part2)
3. [Master the Coding Interview: Data Structures + Algorithms](https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/)
4. [Strivers A2Z DSA Course/Sheet](https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/)
5. [Study Guide by Subjects](https://leetcode.com/discuss/study-guide/1098600/TOPICS-WHICH-YOU-CAN'T-SKIP-INTERVIEW-PREPARATION-or-STUDY-PLAN-USING-LEETCODE)
6. [14 Patterns to Ace Any Coding Interview Question](./guide/14_patterns.md)
7. [Comprehensive Data Structure and Algorithm Study Guide](https://leetcode.com/discuss/study-guide/494279/Comprehensive-Data-Structure-and-Algorithm-Study-Guide)
8. [Object Oriented Programming](https://leetcode.com/discuss/study-guide/1852219/Object-Oriented-Programming-Made-Easy)
9. [Visualizing DSA through Animation](https://visualgo.net/en)

## FAQ

### 1. What is this repository for?

This repository is dedicated to Data Structures and Algorithms (DSA) problems and their solutions. It provides a collection of well-documented DSA problems with clear explanations and code samples.

### 2. What programming language is used in this repository?

The solutions are primarily provided in TypeScript, a statically typed superset of JavaScript. However, you can often adapt the concepts and logic to other programming languages.

### 3. How do I navigate through the DSA problems?

You can use the table of contents (TOC) at the beginning of this README to jump to specific sections. Each problem is listed with a link for easy access.

### 4. Can I contribute to this repository?

Absolutely! We welcome contributions from the community. If you have new problems to add, improvements to existing solutions, or suggestions for better explanations, please feel free to open a pull request.

### 5. Are there any recommended resources for learning DSA?

Yes, we have listed some additional resources in the "Other Resources" section. These include online courses and sheets that can help you deepen your understanding of DSA.

### 6. How can I get started with solving DSA problems?

We recommend starting with the "Questions" section, where you'll find a variety of problems to solve. Begin with the ones that match your skill level and gradually work your way up.

### 7. Are there any prerequisites for using this repository?

Basic knowledge of programming and data structures is helpful, but even if you're new to DSA, you can use this repository as a learning resource. The problems are organized from easy to more challenging.

### 8. How can I report issues or seek help?

If you encounter issues with the code or have questions about specific problems, feel free to open an issue in this repository. The community and maintainers will be happy to assist you.

### 9. Is there a license for this repository?

Yes, this repository is open-source and available under the [License](#license) mentioned in this README. Please review the license terms before using or contributing to the repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.