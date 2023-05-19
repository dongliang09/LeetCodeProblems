class Solution:
    def checkStraightLine(self, coordinates: List[List[int]]) -> bool:
        
        slope = (coordinates[1][1] - coordinates[0][1]) / (coordinates[1][0] - coordinates[0][0]) if coordinates[1][0] - coordinates[0][0] != 0 else "vertical"
        
        for i in range(2,len(coordinates)):
            if coordinates[i][0] - coordinates[i-1][0] != 0:                                                         
                if (coordinates[i][1] - coordinates[i-1][1]) / (coordinates[i][0] - coordinates[i-1][0]) != slope:
                    return False
            else:
                if slope != "vertical":
                    return False
            
        return True