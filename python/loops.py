# Loops
# while loop
count = 0

while count < 10:
    print("The condition is True")
    count+=1

# for loop
items = [1, 2, 3, 4]
for item in items:
    print(item)

for num in range(15):
    print(num)

items = ["pinkie pie", "fluttershy", "discord", "moonstone"]
for index, item in enumerate(items):
    print(index, item)

#breaks and continues

items = [1, 2, 3, 4]
for item in items:
    if item == 2:
        #will not do anything here and continue
        continue
    print(item)

for item in items:
    if item == 2:
        #will end loop here
        break
    print(item)