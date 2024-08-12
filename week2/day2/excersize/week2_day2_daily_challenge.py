class Pagination:
    def __init__(self, items=None, pageSize=10):
        self.items = items if items is not None else []
        self.pageSize = int(pageSize)
        self.totalItems = len(self.items)
        self.totalPages = (self.totalItems + self.pageSize - 1) // self.pageSize
        self.currentPage = 1

    def getVisibleItems(self):
        start = (self.currentPage - 1) * self.pageSize
        end = start + self.pageSize
        return self.items[start:end]
    
    def prevPage(self):
        if self.currentPage > 1:
            self.currentPage -= 1
        return self
    
    def nextPage(self):
        if self.currentPage < self.totalPages:
            self.currentPage += 1
        return self
    
    def firstPage(self):
        self.currentPage = 1
        return self
    
    def lastPage(self):
        self.currentPage = self.totalPages
        return self
    
    def goToPage(self, pageNum):
        if pageNum < 1:
            self.currentPage = 1
        elif pageNum > self.totalPages:
            self.currentPage = self.totalPages
        else:
             self.currentPage = int(pageNum)
        return self
    
alphabetList = list('abcdefghijklmnopqrstuvwxyz')
p = Pagination(alphabetList, 4)

print(p.getVisibleItems())  # ["a", "b", "c", "d"]

p.nextPage()
print(p.getVisibleItems())  # ["e", "f", "g", "h"]

p.lastPage()
print(p.getVisibleItems())  # ["y", "z"]

p.firstPage()
print(p.getVisibleItems())  

p.goToPage(3)
print(p.getVisibleItems())  

p.goToPage(0)
print(p.getVisibleItems())  

p.goToPage(4)
print(p.getVisibleItems())  