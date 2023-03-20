

import { ReactElement } from "react";
import style from "./spinner.module.scss";

const LoadingSpinner = (): ReactElement => {
  return (
    <div className={style['spinner-container']}>
      <div className={style['loading-spinner']}>
      </div>
    </div>
  );
}

export default LoadingSpinner;
