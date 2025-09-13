Starts 100 values

The user will see two cards one card will be one value and the other will be the other value.
The user will click the value for the value that they think is more important.

The goal is to end up with 8 values that are the most important of the 100 to the user.

This will broken up into rounds and each round the user will have three options;

1. Click 1 card
2. Click card 2
3. Click both

Each round the user will have 10% of whatever the number of values round starts with

Round 1:
Values 100
Both Count: 10

Round 2:
If they chose 0 both from round 1:
Values 50
Both count: 5

If they chose 10 both count from round 1:
Values 60
Both count: 6

If it' a odd number we round up the count and values and pull a loser from the last round to it's always even.

Ending logic
If the values is 10 or below stop the game. Show a screen disiplaying the result with the values
if the value count is below 16 and above 10, then pick enough losers to get to 16. They will still have 2 boths that they can use, so they always end up with 10 or below.

The both function is a ceiling function always round up.

Save the results to localstorage and restore it if they go back to the page

The starting screen will show instructions of what to do
They will enter a name, this name will show in the end results.
Button to start the process.

The card screen / evaluation screen. Will show the two cards
it will show a button for clicking both
it will show a count of both for that round
we will not say round, but we will have a progress bar that displays how far they are into a round so that they can know how to distribute their both's

Lets keep the technically very simple, just html, css, and javascript. Lets keep the esign very clean but also modern, maybe have some nice shadows on the cards, the buttons should have a nice hover state. Basically follow modern design principles but doesn't get too crazy with it.
