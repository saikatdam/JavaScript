import numpy as np



def insertionSort(num):
    for i in range(1,len(num-1)):
        key=num[i]
        j=i-1
        while(j>=0 and key<num[j]):
            num[j+1]=num[j]
            j-=1
        num[j+1]=key
    return num





num=np.array([4,3,2,1])
print(num)



print(insertionSort(num))

