import random
print(["#"+''.join([random.choice('0123456789ABCDEF') for i in range(6)]) for _ in range(int(input()))])
