# Tuples
#note: cannot modify original Tuple
names = ("Lola", "Ada", "Errol")

# names[2] = "Wren" #will cause error

names += ("Thalassa", "Reynard")

print("names[0]:", names[0])
print("names[-1]:", names[-1])
print("index of Lola:", names.index("Lola"))

print("length:", len(names))

print("Is Ada in names?", "Ada" in names)

print("names[0:2]:", names[0:2])


sorted = sorted(names)
print("sorted: ", sorted)
print("sorted type: ", type(sorted))

new_tuple = names + ("Lucian", "Cadfael")
print(new_tuple)