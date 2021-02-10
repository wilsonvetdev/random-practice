import math

# By Wilson Ng

# Exercise 1.1
# print("hello world")

# Exercise 1.2
blanks = "   |   |   "
line = "-----------"
# print(blanks)
# print(line)
# print(blanks)
# print(line)

# Exercise 1.3
a = "Hello, world!"
# print(a)

a = "and goodbye..."
# print(a)

# Exercise 1.4

# print( (3 * 5) / (2 + 3) )
# print( (math.sqrt(7 + 9) * 2) )
# print( (4 - 7)**3 )
# print( (6 % 4) )

# Exercise 1.5

# first_name = input("What's your first name? ")
# last_name = input("What's your last name? ")

# print("What's your birthdate?:")

# month = input("Month? ")
# day = input("Day? ")
# year = input("Year? ")

# print(f"{first_name} {last_name} was born on {month} {day}, {year}.")

# Rock, Paper, Scissor 

player_input_a = input('Player A: rock, paper, or scissor? ')
player_input_b = input('Player B: rock, paper, or scissor? ')

def rock_paper_scissor(player_input_a, player_input_b):


    if player_input_a == 'rock' and player_input_b == 'rock': 
        print('The game is a tie')
    if player_input_a == 'rock' and player_input_b == 'scissor': 
        print('Player A won')
    if player_input_a == 'rock' and player_input_b == 'paper': 
        print('Player B won')
    if player_input_a == 'paper' and player_input_b == 'paper':
        print('The game is a tie')
    if player_input_a == 'paper' and player_input_b == 'rock':
        print('Player A won')
    if player_input_a == 'paper' and player_input_b == 'scissor':
        print('Player B won')
    if player_input_a == 'scissor' and player_input_b == 'scissor':
        print('The game is a tie')
    if player_input_a == 'scissor' and player_input_b == 'paper':
        print('Player A Won')
    if player_input_a == 'scissor' and player_input_b == 'rock':
        print('Player B won')

rock_paper_scissor(player_input_a, player_input_b)

