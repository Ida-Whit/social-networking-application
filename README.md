## Social Networking Application

## Description
Social media has become an important method of communication among people in this day and age. This application is the back-end begginings of a social media platform. This program allows a user to create new users, add friends, share their thoughts, and comment on others thoughts. This program also comes with the ability to delete users, thoughts, friends, and comments.

## Visuals
<img src='/vs_code_layout.png'>
<img src='/insomnia_screenshot.png'>
Video Walkthrough: https://drive.google.com/file/d/1v8t0j2bIZZ5oZC4W0v1Pt98kSFOokwq1/view

## Installation
In order to use this program, you must ensure that you have access to Insomnia and your github is properly connected. Next you should pre-seed your database. In order to do this, open the terminal and run command "npm run seed". Once you have done this, you can open your terminal and run the command, "npm index.js" in order to start your back-end server. You can now go to Insomnia and run any commands to interact with your database.

## Usage
If you want to see how many users are in your database currently, you would enter "http://localhost:3001/api/users" and run it as a GET request. Your response to this should be a list of all current users and their associated thoughts and friends.

If you want to add a thought, you can enter "http://localhost:3001/api/thoughts" and enter something like the following in the body of Insomnia (remember to set the body to JSON). Run this as a POST request.
{
	"thoughtText": "Book suggestions: My Sisters Keeper.",
	"userId": "65d3e9e8146c2fffde669d8d",
	"username": "Bily"
}
In this example, thoughtText is the new thought you want to enter, userId is the Id number of the user entering the thought, and the username is the corresponding name for that userId. Response to this inquiry would be all associated information with this thought. This includes username, thoughtId, time thought was created at, and any reactions to that thought (if it was just created, this will be an empty array).

Lastly, if you want to add a friend for any of the existing users, you would enter "http://localhost:3001/api/users/:userId/friends/:friendId". Where 'userId' is the user id number of the person you want to add a friend to, and the friend id is the user id number of the person you want to add as a friend. Run this as a POST request and write something like the following in the body of the request (again, making sure to set the body to JSON).
{
	"username": "Rhysand",
	"email": "rhysand@gmail.com"
}
This information corresponds to the user you are adding as a friend.

## Contributing
N/A

## Authors and acknowledgment
This program was written by myself, Ida Whitcomb.

## License
N/A

## Project status
This project is complete.