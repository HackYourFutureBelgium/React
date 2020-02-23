# Extra state hook exercices

## Ex1

Component with one header tag (h1) and one button
The initial text of the h1 tag should be "0"
The initial text of the button should be "Click me!"
Each time we click on the button, the text of the h1 tag
should increase by 1. That means it should show the total number of times the button was clicked

## Ex2

Component with one header tag (h1) and two buttons
The initial text of the h1 tag should be "0"
The initial text of the first button should be "Click me!"
The initial text of the second button should be "Reset"
Same as for Ex1, but when we click the "Reset" button, the count comes back to "0"

## Ex3

Component with one p tag and one button
Same as Component 1, (the p tag should show the number of times clicked)
except that for numbers multiple of 3, the p tag should show "Fizz" instead of the number.
same for numbers multiple of 5, the p tag should show "Buzz" instead of the number.
And finally, for number multiple of both 3 and 5 (e.g. 15), the p tag should show "FizzBuzz"

## Ex4

Component with one header tag (h1) and one button
The initial text of the h1 tag should be the current time in the format HH:MM:SS
The initial text of the button should be "Refresh"
Each time we click on the button, the time should be updated to the current time

## Ex5

Component with one header tag (h1) and one button
The initial text of the h1 tag should be "Out"
The initial text of the button should be "Hover over me"
Each time the mouse goes over the button (no need for clicking), the text of the h1 tag
should change to "In".
When the mouse is not over the button anymore, it should go back to "Out"

## Ex6

Component with one header tag (h1) and one button
The initial text of the h1 tag should be "0"
The initial text of the button should be "Hover over me"
Each time the mouse goes over the button area (no need for click), then out of the button area,
the text of the h1 tag should increase by 1. 
That means it should show the total number of times the button was hovered over.

## Ex7

Component with one p tag and three buttons
The initial tet of the p tag should be "" (none)
The initial text of the 3 buttons should be "yellow", "green" and "blue".
When we click on a button the p tag changes its text to the text of the button but uppercase
Example: click on "blue" button -> Text on the p tag is "BLUE"

## Ex8

Component with one p tag and two buttons
The initial text of the button should be the first word of a string that is passed as a prop ("sentence" prop)
The text of one button is "Previous" and of the other "Next"
When we click on "Next" button, the p tag should display 
the next word of a sentence passed as a prop
together with the previous one.
When we click on "Previous", it should remove the last word of the sentence

Example: <Ex8 sentence="The pigs were insulted that they were named hamburgers." />
Initial value of p tag: "The"
After a click on "Next" button: "The pigs"
After a second click on "Next" button: "The pigs were"
After a click on "Previous" button: "The pigs"
etc...

## Ex9

Same as exercice 8
Let's add to the component, that if we reach the end of the sentence,
the "Next" should not be clickable anymore.
If we are at the beginning of the sentence,
the "Previous" button should not be clickable

