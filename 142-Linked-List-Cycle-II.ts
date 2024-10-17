function detectCycle(head: ListNode | null): ListNode | null {
    let slow = head, fast = head;
    while (fast) {
        slow = slow.next;
        fast = fast.next && fast.next.next;
        if (slow === fast && fast !== null) {
            slow = head;
            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null
};

//When you reset one pointer to head, 
//both pointers are at same distance from LL start and cycle start.
