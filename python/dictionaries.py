# Dictionaries

pokemon = { "name": "Raichu", "dex_id": 26, "type": "electric", "ability": "static", "in_party": True } 

print(pokemon["name"])

pokemon["name"] = "Pichu"
print("updated:", pokemon)

print("dex no.", pokemon.get("dex_id"))
print("type:", pokemon.get("type", "unknown"))
print("color: ", pokemon.get("color", "n/a"))

popped = pokemon.pop("dex_id")
print(f"removed {popped}", pokemon)

poppeditem = pokemon.popitem()
print(f"removed {poppeditem}:", pokemon)

print("ability" in pokemon)
print("color" in pokemon)

print(pokemon.keys())
print(list(pokemon.keys()))

print(pokemon.values())
print(list(pokemon.values()))

print(pokemon.items())
print(list(pokemon.items()))

print("length:", len(pokemon))

pokemon["moves"] = ["thunder wave", "double team", "dig", "thunderbolt"]

print("added moves:", pokemon)

del pokemon["type"]
print("removed type key", pokemon)

pokemon_copy = pokemon.copy()
print("copy:", pokemon_copy)