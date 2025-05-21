## Trivia APP
A fun and interactive quiz application built with React where users can test their knowledge across various categories. Users can choose a specific category or jump into a random quiz. After completing the quiz, the app displays a scoreboard with detailed results.
**Live Demo:** [Click here to try the app on Netlify](https://triviaquizs.netlify.app/)
## Features
+ Multiple Categories to choose from
+ Random Quiz Mode to jump straight into a surprise challenge
+  React Modal Confirmation before starting a selected quiz
+  Interactive Quiz Flow: questions answering
+  Answer Review: correct answers are highlighted in green
+  Scoreboard Table with: Each Question , your answer , correct answer and final score
## App Flow
1. Home Page
+ random Quiz
+ start quiz
2. Start Confirmation
+ If a category is selected, a React modal appears asking for confirmation before starting
3. Quiz Page
+ Multiple-choice questions are displayed 
+ Users can select and submit answers
4. Score Board
+ After the final question, results are displayed in a table
+ Correct answers are shown in green
+ Final score is displayed at the bottom
## Trivia Data Powered by Open Trivia DB (https://opentdb.com/)
This app fetches quiz questions in real-time from the Open Trivia Database API:
+ Wide range of categories (e.g., General Knowledge, Science, History)
+ Multiple Choice Questions
## Tech Stack
- React
- React Router Dom
- React Modal
- css modules
- Open Trivia DB API
- useState, useContext, useEffect , useNavigate , useLocation