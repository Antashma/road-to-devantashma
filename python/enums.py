from enum import Enum
#used to create constants so no one can reassign a value

class State(Enum):
    INACTIVE = 0
    ACTIVE = 1

print(State.ACTIVE)
print(State.ACTIVE.value)
print(State(1))
print(State["ACTIVE"])

print(State)

print(list(State))
print(len(State))
