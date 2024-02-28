import img from "../../assets/images/bg.jpg";
import css from "./BG.module.css";

import { memo } from "react";

export default memo(function BG() {
  return (
    <div className={css.bg}>
      <img src={img} alt="background" />
    </div>
  );
});
