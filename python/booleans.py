#booleans

done = True

if done:
    print("yes")
else:
    print("no")

print(type(done))

#any()
book_1_read = True
book_2_read = False

any_books_read = any([book_1_read, book_2_read])
print(any_books_read)

#all()
ingredients_purchased = True
meal_cooked = False

ready_to_serve = all([ingredients_purchased, meal_cooked])
print(ready_to_serve)
