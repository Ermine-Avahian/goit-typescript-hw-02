import { ClipLoader } from "react-spinners";
import css from "./Loader.module.css";

const Loader = () => (
  <div className={css.loader}>
    <ClipLoader loading={true} size={50} />
  </div>
);

export default Loader;
