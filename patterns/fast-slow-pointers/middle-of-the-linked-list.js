/*
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

Example 1:
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Example 2:
Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow;
};

var createLinkedList = (nums) => {
  let head = new ListNode(nums[0]);
  let current = head;

  nums.forEach((num, index) => {
    if (index !== 0) {
      let newNode = new ListNode(num);
      current.next = newNode;
      current = newNode;
    }
  });
  return head;
};

var printLinkedList = (head) => {
  let current = head;
  while (current) {
    console.log(current.val + " ");
    current = current.next;
  }
};

let head = createLinkedList([1, 2, 3, 4, 5, 6]);

let mid = middleNode(head);
printLinkedList(mid);
