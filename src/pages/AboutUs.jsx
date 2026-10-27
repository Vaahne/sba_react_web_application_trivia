
export default function AboutUs() {
    return (
        <div className="aboutUs">
            <div>
                <h1>Welcome to the Trivia App!</h1>

                <p>
                    Trivia App is a fun and interactive quiz platform
                    designed to challenge your knowledge across a variety
                    of categories. Whether you're interested in science,
                    history, entertainment, or general knowledge, there's
                    something for everyone!
                </p>

                <p>
                    Test your knowledge, explore new topics, and see how
                    much you know by answering exciting multiple-choice
                    questions.
                </p>
            </div>

            <div>
                <h2>Why You'll Love This App</h2>

                <ul>
                    <li>
                        Choose your favorite trivia category or start a
                        random quiz.
                    </li>
                    <li>
                        Challenge yourself with multiple-choice questions.
                    </li>
                    <li>
                        Explore a variety of topics and test your knowledge.
                    </li>
                    <li>
                        View your results on the scoreboard after completing
                        a quiz.
                    </li>
                    <li>
                        See correct answers highlighted in green.
                    </li>
                    <li>
                        Track your total score and learn from your answers.
                    </li>
                </ul>
            </div>

            <div>
                <h2>Powered by Open Trivia DB</h2>

                <p>
                    Our quiz questions are fetched from the{" "}
                    <a
                        href="https://opentdb.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Open Trivia Database
                    </a>
                    , a free trivia question API covering a wide range of
                    topics and difficulty levels.
                </p>
            </div>

            <div>
                <h2>Ready to Play?</h2>

                <p>
                    Pick a category, start a random quiz, and see how many
                    questions you can answer correctly. Have fun learning
                    and challenging yourself!
                </p>
            </div>
        </div>
    );
}
