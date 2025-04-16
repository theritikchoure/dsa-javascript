/* You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted linked list. The list should be made by splicing together the nodes of the first two lists.

Input: 
  list1 = [1, 2, 4]
  list2 = [1, 3, 4]

Output: 
  [1, 1, 2, 3, 4, 4]
*/

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function createLinkedList(arr) {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

function printLinkedList(head) {
  let current = head;
  const values = [];
  while (current) {
    values.push(current.val);
    current = current.next;
  }
  console.log(values);
}

/**
 * Merge two sorted linked lists and return it as a new sorted list.
 * The new list should be made by splicing together the nodes of the first two lists.
 *
 * @param {ListNode} list1 - The head of the first sorted linked list.
 * @param {ListNode} list2 - The head of the second sorted linked list.
 * @return {ListNode} - The head of the merged sorted linked list.
 */
var mergeTwoLists = function (list1, list2) {
    let i = list1;
    let j = list2;

    let list3 = [];

    while (i !== null && j !== null) {
        if (i.val > j.val) {
            list3.push(j.val);
            j = j.next;
        } else {
            list3.push(i.val);
            i = i.next;
        }
    };

    while (i !== null) {
        list3.push(i.val);
        i = i.next;
    }

    while (j !== null) {
        list3.push(j.val);
        j = j.next;
    }

    return createLinkedList(list3)
}

const list1 = createLinkedList([1, 2, 4]);
const list2 = createLinkedList([1, 3, 4]);

const merged = mergeTwoLists(list1, list2);
printLinkedList(merged); // Should print: [1, 1, 2, 3, 4, 4] (after implementation)

// console.log(list1)
