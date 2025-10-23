# CAFE GAME

## 1. Core Game Loop
1. Player receives a customer order.
2. Player assembles a drink to match that order.
3. Player serves it, gets a rating + coins.
4. Queue advances; repeat until day ends.

### Acceptance checks (MVP):
- You can start a “day,” complete 3 orders, and reach a results screen with earnings and accuracy.

## 2. Lock the Menu Rules (so the game knows what’s legal)

### MENU
Sizes: small ($1.50), medium ($2.50), large($3.00)
Types: hot, iced (+$0.25)
Brews: light, medium, dark, decaf
Milks: nonfat, whole, 2%, almond (+$0.50), oat (+$0.50), soy (+$0.50)
Syrups (+$0.25/pump): caramel, vanilla, hazelnut, mocha, raspberry
Toppings: cinnamon, whipped cream, caramel drizzle

### Rules to codify:
- Price model: Base price by size; add-ons modify price (milk premium? syrups per pump? toppings flat fee?).
- Validity:
    - Cinnamon + mocha? Allowed. Any forbidden combos?
    - Max # syrups per drink? Max toppings?
    - Temperature logic: “Hot” vs “Iced” should meaningfully affect prep time or customer preference.

### Acceptance checks:
Given a combo, the game can say “valid/invalid,” compute price, and describe the drink in plain text.

## 3. Order Generator (what customers actually ask for)
Start simple, then spice it up:
- Phase 1: Orders pick 1 type, 1 size, 1 brew, 0 or 1 milk, ≤1 syrup, ≤1 topping.
- Phase 2: Allow multiple syrups/toppings with rarity weights (vanilla common, raspberry rare).
- Personality weights: Some customers prefer iced + oat + caramel; others hate whipped cream.
### Acceptance checks:
You can generate 10 orders at day start that respect your rules and look varied.

## MVP Milestones (in order)
1. **Rulebook complete**: Valid combos, pricing, penalties.
2. **Order generator v1**: Simple, balanced tickets.
3. **Prep & Ticket UI (wireframe)**: Click selections → live summary.
4. **Recipe checker & scoring**: Deterministic, tested.
5. **Serve flow & results screen**: Coins, accuracy, next day.
6. **Day loop & queue**: Timers, spawn cadence, end-of-day.
7. **Persistence**: Save coins/unlocks/settings.
8. **Accessibility pass**: Keyboard, contrast, text.
9. **Balancing pass**: Play 10 minutes; tweak prices/timers.
10. **Polish sprinkles**: Soft sounds, tiny animations, warm palette.

## NOTES:
coffe game mechanics

- order station
    - customers
    - name + order
- brew station
    - cookbook
    - gather ingredients
    - mixing 
- handoff
    - give order to customer
    - evaluation (pay & tips)

game over
