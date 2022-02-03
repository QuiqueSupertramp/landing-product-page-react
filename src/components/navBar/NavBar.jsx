import Flags from "../flags/Flags";
import styles from "./NavBar.module.css"

const NavBar = () => {
  return <div className={styles.navbar}>
      <h2>PC Online</h2>
      <Flags />
  </div>;
};

export default NavBar;
