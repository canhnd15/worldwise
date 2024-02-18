import { Link } from "react-router-dom";

import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";
import { useAuth } from "../contexts/FakeAuthContext";
import DialogMessage from "../components/DialogMessage";
import { useState } from "react";

export default function Homepage() {
  const { isAuthenticated } = useAuth();
  const [isClosedDialog, setIsClosedDialog] = useState(false);

  return (
    <main className={styles.homepage}>
      <PageNav />
      {!isAuthenticated && !isClosedDialog ? (
        <DialogMessage setIsClosedDialog={setIsClosedDialog} />
      ) : (
        ""
      )}
      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link to="/app" className="cta">
          Start Tracking Now
        </Link>
      </section>
    </main>
  );
}
