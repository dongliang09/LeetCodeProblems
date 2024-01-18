import random

class RandomizedCollection:

    # same as original problem except keep track of list of indices in hasmap
    
    def __init__(self):
        self.array = []
        self.hashmap = defaultdict(set)

    def insert(self, val: int) -> bool:
        self.array.append(val)
        self.hashmap[val].add(len(self.array)-1)
        return len(self.hashmap[val]) == 1

    def remove(self, val: int) -> bool:
        if val not in self.hashmap:
            return False
        
        last_val = self.array[-1]
        i = self.hashmap[val].pop()
        
        self.array[i] = last_val
        
        self.hashmap[last_val].add(i)
        self.hashmap[last_val].discard(len(self.array) - 1)
        self.array.pop()
        
        
        if len(self.hashmap[val]) == 0:
            del self.hashmap[val]
        
        return True
        

    def getRandom(self) -> int:
        return random.choice(self.array)



# Your RandomizedCollection object will be instantiated and called as such:
# obj = RandomizedCollection()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()


# ["RandomizedCollection","remove","remove","insert","getRandom","remove","insert"]
# [[],[0],[0],[0],[],[0],[0]]

# ["RandomizedCollection","insert","insert","remove","insert","remove","getRandom"]
# [[],[0],[1],[0],[2],[1],[]]

# ["RandomizedCollection","insert","remove","insert","remove","getRandom","getRandom","getRandom","getRandom","getRandom","getRandom","getRandom","getRandom","getRandom","getRandom"]
# [[],[0],[0],[-1],[0],[],[],[],[],[],[],[],[],[],[]]