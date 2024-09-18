function reverseLinkedList(linkedList){
  // Write your code here
  let curr = linkedList
  let prev = null
  let next

  while (curr !== null) {
    //store next
    next = curr.next
    
    // swap next pointer to previous
    curr.next = prev

    // move forward
    prev = curr
    curr = next
  }

  return prev
}
