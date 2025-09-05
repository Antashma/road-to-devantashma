things = ["luxray", 151, "Sam", True]
empty = []

print("luxray" in things)
print("pikachu" in things)

print("something" in empty)

pals = ["cattiva", "blazamut", "sparkit", "elphidran", "bushi", "beakon"]

pals[2] = "jetdragon"

print("pals[2] =", pals[2])
print("pals[-1] =", pals[-1])

print("pals[2:4] =", pals[2:4])

print("pals list length =", len(pals))

pals.append("orserk")
pals.extend(["xenovader", "daedream"])
pals += ["depresso", "lovander"]

pals.remove("jetdragon")

popped = pals.pop()
print("popped = ", popped)


pals.insert(4, "omascul")

pals[1:1] =  ["leezpunk", "Katress"]

palscopy = pals[:]
palscopy.sort()
print(palscopy)

palscopy.sort(key=str.lower)
print(palscopy)

print(sorted(pals, key=str.lower))
print(pals)