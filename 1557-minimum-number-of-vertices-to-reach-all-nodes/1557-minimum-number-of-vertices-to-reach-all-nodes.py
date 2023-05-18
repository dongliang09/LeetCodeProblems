class Solution:
    def findSmallestSetOfVertices(self, n: int, edges: List[List[int]]) -> List[int]:
        heads = set()
        tails = set()

        for edge in edges: 
            heads.add(edge[0])
            tails.add(edge[1])
        

        # only wants the difference of heads and tails from heads
        difference = set(heads)
        for tail in tails:
            difference.discard(tail)
        

        return list(difference)