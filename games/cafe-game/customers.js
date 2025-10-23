const customers = [
  {
    id: 0,
    name: "Errol",
    profile: "His honesty is his most loved quality by friends.",
    patienceSeconds: 30,
    tipMultiplier: 1.0,
    strictness: "exact",
    faveDrink: {
      size: "large",
      temp: "hot",
      brew: "dark",
      milks: [],                
      syrups: ["caramel"],
      toppings: ["cinnamon", "caramel drizzle"]
    },
    quotes: {
      enter: "What's up?",
      rightOrder: "Thanks.",
      wrongOrder: "Not what I wanted.",
      timeExpired: "Nevermind. Gotta go.",
      exit: "See ya."
    }
  },
  {
    id: 1,
    name: "Lola",
    profile: "She comes from a small town but feels the big city life was meant for her.",
    patienceSeconds: 35,
    tipMultiplier: 1.2,
    strictness: "lenient", 
    faveDrink: {
      size: "medium",
      temp: "iced",
      brew: "light",
      milks: ["almond"],
      syrups: ["vanilla"],     
      toppings: []
    },
    quotes: {
      enter: "Hello hello!",
      rightOrder: "Thank you so much.",
      wrongOrder: "Um...is this really mine?",
      timeExpired: "Sorry, can you cancel that?",
      exit: "Bye-bye!"
    }
  },
  {
    id: 2,
    name: "Lucian",
    profile: "Even though he is a professor, his aura is like that of a prince.",
    patienceSeconds: 25,
    tipMultiplier: 1.1,
    strictness: "exact",
    faveDrink: {
      size: "medium",
      temp: "hot",
      brew: "medium",
      milks: [],
      syrups: [],
      toppings: []
    },
    quotes: {
      enter: "Hello.",
      rightOrder: "Much appreciated.",
      wrongOrder: "This is not what I ordered.",
      timeExpired: "I'm afraid I can't wait any longer.",
      exit: "Farewell."
    }
  }
];

export default customers;