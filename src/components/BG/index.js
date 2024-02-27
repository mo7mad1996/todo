import img from "../../assets/images/bg.jpg";
import css from "./BG.module.css";

export default function BG() {
  return (
    <div className={css.bg}>
      <img src={img} alt="background" />
    </div>
  );
}
