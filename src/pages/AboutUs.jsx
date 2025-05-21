export default function AboutUs(){
    return <div className="aboutUs">
        <div >
            <h1>Welcome to the Trivia App!</h1>

            Trivia App is a fun and interactive quiz platform designed to challenge your knowledge across a variety of categories. Whether you're into science, history, pop culture, or just want to test your general knowledge, this app offers something for everyone.

        </div>
        <ul>Why We Built This
            <li>Choose a trivia category or start with a random quiz</li>
            <li>Answer a series of multiple-choice questions</li>
            <li><ul>At the end of the quiz, view your results in a scoreboard table
                    <li>Correct answers are shown in green</li>
                    <li>Your total score is displayed clearly</li>
                </ul>
            </li>
        </ul>
        <div>
            <h1>Powered By Open Trivia DB</h1>
            All questions are fetched from the <a href="https://opentdb.com/">Open Trivia Database</a> , a free and open-source trivia question API covering a wide range of topics and difficulty levels.
        </div>
    </div>
}