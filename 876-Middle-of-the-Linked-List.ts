function middleNode(head: ListNode | null): ListNode | null {
    if(!head || !head.next) return head;
    let slow = head, fast = head.next;
    while(fast) {
        slow = slow.next;
        fast = fast.next && fast.next.next;
    }
    return slow;
};