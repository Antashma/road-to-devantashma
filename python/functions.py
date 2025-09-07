# Functions

def hello(name, age):
    print(f"Hello, {name}, you are {str(age)} years old.")

hello("Sam", 35)
hello("Sabu", 36)


def change1(value):
    value = 2

val = 1
change1(val)
print(val)

def change2(value):
    value["lucky_number"] = 2

val2 = {"lucky_number":1}
change2(val2)
print(val2)


def hello(name):
    if not name:
        return
    print(f"Hello, {name}!")
    return name, "Lucky!", 2

hello(False)
result = hello("Beau")

#nested functions
def talk(phrase):
    def say(word):
        print(word)

    words = phrase.split(" ")
    for word in words:
        say(word)

talk("i am going to buy the milk")

def counter():
    count = 0

    def increment():
        nonlocal count #access variable from outter function 
        count = count + 1
        return count
    
    return increment

increment = counter()

print(increment()) # 1
print(increment()) # 2
print(increment()) # 3
