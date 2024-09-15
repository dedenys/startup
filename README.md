# Calender Review Application
[notes for this project](notes.md)
## Specification Deliverable
### Elevator Pitch
Are you a busy student who is always forgetting everything you learn?  Are you always studying the night before a test? Do you wish  there was a better way to memorize information? Introducing the Calender Review Application, the easy way for you to retain the information you need to know, all while conveniently accessible on the go.  The Calender Review Application has you login and input new concepts that you learn each day.  After a concept is added to your calender, our state-of-the-art algorithm will generate specific days for revision of that concept--maximizing memory retention.  The Calender Review Application also includes a global tally of concepts reviewed by all members, keeping you motivated to learn.
### Design
![screenshot](page1_design.png)
![screenshot](page2_design.png)
### Key Features
- Login feature with stored calender account data
- Ability to add concepts
- Algorithm which spaces concept revision
- UI showing current day and a few days ahead
- Ability to check-off concepts after they are reviewed
- Global revision tally
### Technologies
The required technologies will be utilizated in the following manner:

- **HTML** - The structure of two main HTML pages (login page and calender page)
- **CSS** - The style of web pages (simple palette consisting of white and one other color, font and font-size)
- **JavaScript** - Button functionality and login page
-  **React** - React could to used to create the UI for each day listed on the calender
-  **Service** - Services could be used for login, current global revision status, and an API relating to some calender event (e.g. is the current day a holiday)
-  **Authentication** - The login page will have users login with their credentials
-  **Database Data** - Store users and user calender data
-  **Websocket** - The global revision tally will broadcast to all users as it is updated
