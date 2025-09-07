# Sets
# simliar to tuples but are not ordered and are mutable
# there is an immmutable version of a set called a "Frozen Set"
# a set cannot have 2 of the same item

set1 = {"Ada", "Cadfael", "Iolynd"}

set2 = {"Ada", "Lola"}

intersect = set1 & set2
print(intersect) # {"Ada"}

mod = set1 | set2
print(mod) # {'Lola', 'Cadfael', 'Ada', 'Iolynd'}

diff1 =  set1 - set2
diff2 =  set2 - set1
print(diff1) # {'Iolynd', 'Cadfael'}
print(diff2) # {'Lola'}

#superset or subset?
# Does this set have everything in the other?
mod = set1 < set2
print(mod) #False
mod = set1 > set2
print(mod) #False

print(list(set1))

#can use to remove duplicates from a list
pokemon = ["pikachu", "magikarp", "zubat", "metapod", "zubat"]
print(set(pokemon)) # {'pikachu', 'metapod', 'magikarp', 'zubat'}    