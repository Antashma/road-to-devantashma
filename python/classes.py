# Classes
class Animal:
    def walk(self):
        print("Walking...")


class Pokemon(Animal):
    def __init__(self, name, dex_id):
        self.name = name
        self.dex_id = dex_id
    def cry(self):
        print("pikachu!")

pikachu = Pokemon("Pikachu", 25)
print(type(pikachu))

print(pikachu.name)
print(pikachu.dex_id)
pikachu.cry()
pikachu.walk()