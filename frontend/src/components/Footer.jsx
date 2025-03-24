import { FaGithub } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <section className={styles.aboutFooterSection}>
        <FaGithub />
        <small>
          <a href="https://www.github.com/AirDevil188/">AirDevil188</a>
        </small>
      </section>
    </footer>
  );
};

export default Footer;
