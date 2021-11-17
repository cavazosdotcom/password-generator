# What does my application need to function

- List for all needed numbers (0-9)
- List for all lowercase letter (a-z)
- List for all uppercase letter (A-Z)
- List for all special characters (!-*)

# What does my application need to get from the user

For each of the following, `Declare` a variable to store the value.

- Password length - verifdy that it's between 8 and 128
- Should numbers be included
- Should lowercase letters be included
- Should uppercase letters be included
- Should special characters be included 

# What steps are needed to build a password

- ASking the user for the criteria

- Make list that onlt has the type of characters matching the requested options

- Randomly select a character from my list

- Add our randomly selected character to our password

- Repeat until the password reaches the requested length

# Pseudocode

- numbers list ['1','2','3','4','5'...]
- upper list ['A','B','C','D'...]
- lower list ['a','b','c','d'...]
- special list ['!','@','#','$'...]

- on generate password, `prompt("Please choose a number of characters between 8 and 128.)`
    if (userNum < 8 or userNum > 128) 
    then prompt(Must be between 8 and 128)
     
        if else (userNum = not a number)
        then prompt(please enter valid number)

        else 
        confirmNum = confirm(any numbers?)
        confirmLow = confirm(any lowercase?)
        confirmUp = confirm(any uppercase?)
        confirmSpecial = confirm(any special char.?)
    
    
    






