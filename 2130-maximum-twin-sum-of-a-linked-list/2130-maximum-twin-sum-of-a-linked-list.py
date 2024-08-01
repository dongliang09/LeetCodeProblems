# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def pairSum(self, head: Optional[ListNode]) -> int:
        
        # approach 1: convert into a list
        # approach 2: mutate nodes to have a prev pointer
        # approach 3: fast and slow pointer to find the middle of linked list
        #             then reverse the second half of linked list, then traverse both 
        
        slow, fast = head, head
        max_sum = 0
        prev = None
        
        # find the middle of the linked list
        # when fast is out of bound, slow is second half of linked list
        # since linked list is even, we don't need to check if fast.next is NOne
        while fast:
            slow = slow.next
            fast = fast.next.next
        
        #reverse second half of the linked list
        while slow:
            temp = slow.next
            slow.next = prev
            prev = slow
            slow = temp
            
        #run two linked list together
        while prev:
            twin_sum = head.val + prev.val
            max_sum = max(max_sum, twin_sum)
            
            prev = prev.next
            head = head.next
            
        return max_sum
        