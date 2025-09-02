def is_adult(age):
    return True if age > 18 else False #ternary


#multiline string
print("""Sam is
39
years old    
""")

#string method example
message = "sAM is a peRson"
print(message.lower()) #creates new str
print(message) #remains unchanged

#get the length of string
print(len(message))

print("son" in message) #True

#escape character
full_name = "Sam\"antha"
print(full_name)

#new line
some_name = "Be\nau"
print(some_name)
