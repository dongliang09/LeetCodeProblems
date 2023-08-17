class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:

        if k == 0: return False

        window = set()
        left, right = 0,0

        while right <= len(nums) - 1:
            if right - left > k:
                window.discard(nums[left])
                left += 1

            if nums[right] in window:
                return True
            window.add(nums[right])
            right += 1

        return False