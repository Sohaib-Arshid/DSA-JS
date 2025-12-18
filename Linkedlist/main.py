class node:
    def __init__(self,item=None,next=None):
        self.item=item
        self.next=next

class SLL:
    def __init__(self,start=None):
        self.start=start
        
    def insert_at_start(self,x):
        n=node(x,None)
        if self.start is None:
            self.start=n
        else:
            n.next=self.start
            self.start=n
            
    def insert_at_last(self,x):
        n=node(x,None)
        if self.start is None:
            self.start=n
        else:
            current=self.start
            
            while current.next is not None:
                current=current.next
            current.next=n
            
    def print_list(self):
        current=self.start
        while current is not None:
            print(current.item,end=" ")
            current=current.next
        
s=SLL()
s.insert_at_start(20)
s.insert_at_start(10)
s.insert_at_last(40)
s.insert_at_last(30)
s.print_list()
    
    