print(["#"+''.join([__import__('random').choice('0123456789ABCDEF') for i in range(6)]) for _ in range(50)])
