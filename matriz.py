import numpy as np
import random as r

def verify_collumn(array, i, new_collumn):
    for j in range(i, -1, - 1):
        if array[(j, new_collumn)] == 1:
            return False
          
    return True

def verify_right(array, i, new_collumn):
    x = new_collumn + 1
    y = i - 1
    
    while x < len(array) and y >= 0:
        if array[(y, x)] == 1:
            return False
        
        x += 1
        y -= 1
    
    return True

def verify_left(array, i, new_collumn):
    x = new_collumn - 1
    y = i - 1
    
    while x >= 0 and y >= 0:
        if array[(y, x)] == 1:
            return False
        
        x -= 1
        y -= 1
    
    return True

def new_queen(n):
    return r.randint(0, n - 1)

def nqueens(n):
    array = np.zeros((n,n))
    
    first_line = new_queen(n)
    array[(0, first_line)] = 1
    
    for i in range(1, n):
        while True:
            new_collumn = new_queen(n)
            
            if verify_collumn(array, i, new_collumn) and verify_right(array, i, new_collumn) and verify_left(array, i, new_collumn):
                break
        
        array[(i, new_collumn)] = 1
    
    print(array)
    
nqueens(5)