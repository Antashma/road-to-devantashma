#
Welcome. Please answer the following questions.

# getName
::prompt
What is your name? -> store playerName

#
::choice
What are your pronouns?
1. She/Her -> store playerPronouns
2. He/Him -> store playerPronouns
3. They/Them -> store playerPronouns

#
::choice
So your name is {{playerName}} and your pronouns are {{playerPronouns}}. Is this correct?
1. Looks good! -> goto scene:introP1
2. Not quite right... -> goto line:getName
