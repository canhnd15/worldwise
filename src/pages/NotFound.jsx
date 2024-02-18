import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <section className={styles.page_404}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className="col-sm-12">
            <div className="text-center cover_sub">
              <div className={styles.four_zero_four_bg}>
                <h1 className="text-center">404</h1>
              </div>

              <div className={styles.contant_box_404}>
                <h3 className="h2">Look like you're lost</h3>

                <p>the page you are looking for not avaible!</p>

                <a href="http://localhost:5173/" className={styles.link_404}>
                  Go to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
