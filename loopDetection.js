class Node
{
    constructor(key)
    {
        this.key=key;
        this.next=null;
    }
}
function printList(head)
{
    while (head != null)
  {
    console.log(head.key + " ");
    head = head.next;
  }
  console.log("<br>");
}
function detectAndRemoveLoop(head)
{
    // If list is empty or has
  // only one node without loop
  if (head == null || head.next == null)
    return null;
  
  let slow = head, fast = head;
  

  slow = slow.next;
  fast = fast.next.next;
  
  // Search for loop
  while (fast != null &&
         fast.next != null)
  {
    if (slow == fast)
      break;
    slow = slow.next;
    fast = fast.next.next;
  }
  
  // If loop does not exist
  if (slow != fast)
    return null;
  
  // If loop exists. Start slow from
  // head and fast from meeting point.
  slow = head;
  while (slow != fast)
  {
    slow = slow.next;
    fast = fast.next;
  }
  
  return slow;
}
 
//
let head = new Node(50);
  head.next = new Node(20);
  head.next.next = new Node(15);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(10);
  
  // Create a loop
  head.next.next.next.next.next = head.next.next;
  
  let res = detectAndRemoveLoop(head);
  if (res == null)
    console.log("Loop does not exist");
  else
    console.log("Loop starting node is " +  res.key);
 