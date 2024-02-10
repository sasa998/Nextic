import Test from "./components/Test";
import styles from "./page.module.css";

export default function Home() {

  console.log('renderovao HOME')

  return (
    <main className={styles.main}>
      <h2>Dashboard</h2>
      <Test />
    </main>
  );
}
