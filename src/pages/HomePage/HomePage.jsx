
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const nav = useNavigate();

  function handleClick(type) {
    if (type === "random") {
      const random = Math.floor(Math.random() * 24) + 9;
      nav(`/questions/${random}`);
    } else {
      nav("/category");
    }
  }

  return (
    <main className={styles.homeContent}>
      {/* Left side: Learning */}
      <aside className={styles.sideContent}>
        <div className={`${styles.decorCard} ${styles.leftCardOne}`}>
          <span className={styles.decorLabel}>01 / EXPLORE</span>
          <h3>Discover<br />New Topics.</h3>
          <div className={styles.decorLine} />
          <p>Explore interesting subjects and expand your knowledge.</p>
        </div>

        <div className={`${styles.decorCard} ${styles.leftCardTwo}`}>
          <span className={styles.decorLabel}>02 / LEARN</span>
          <h3>Stay Curious.</h3>
          <div className={styles.decorLine} />
          <p>Every question is a chance to learn something new.</p>
        </div>
      </aside>

      {/* Center: Main actions */}
      <section className={styles.centerContent}>
        <p className={styles.eyebrow}>THINK · PLAY · DISCOVER</p>

        <h1>
          Ready to Test
          <span>Your Knowledge?</span>
        </h1>

        <p className={styles.description}>
          Challenge yourself with fun trivia questions.
          Choose a category or try a random quiz and see how much you know!
        </p>

        <div className={styles.homeButtons}>
          <button
            className={styles.primaryButton}
            onClick={() => handleClick("start")}
          >
            Start Quiz <span aria-hidden="true">→</span>
          </button>

          <button
            className={styles.secondaryButton}
            onClick={() => handleClick("random")}
          >
            Random Quiz <span aria-hidden="true">↗</span>
          </button>
        </div>

        <p className={styles.tagline}>
          Every question brings a new challenge.
        </p>
      </section>

      {/* Right side: Challenges */}
      <aside className={styles.sideContent}>
        <div className={`${styles.decorCard} ${styles.rightCardOne}`}>
          <span className={styles.decorLabel}>03 / CHALLENGE</span>
          <h3>Trust Your<br />Knowledge.</h3>
          <div className={styles.decorLine} />
          <p>Put your knowledge to the test, one answer at a time.</p>
        </div>

        <div className={`${styles.decorCard} ${styles.rightCardTwo}`}>
          <span className={styles.decorLabel}>04 / ACHIEVE</span>
          <h3>Make It Count.</h3>
          <div className={styles.decorLine} />
          <p>Keep playing, improve your score, and celebrate progress.</p>
        </div>
      </aside>
    </main>
  );
}
