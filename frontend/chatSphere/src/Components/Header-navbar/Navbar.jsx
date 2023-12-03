import styles from './Navbar.module.css';
const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.image__container}>
          {/* <img src="/src/assets/logo.png" alt="logo" /> */}
        </div>
        <h1>chatSphere</h1>
      </nav>
    </header>
  );
}

export default Navbar
