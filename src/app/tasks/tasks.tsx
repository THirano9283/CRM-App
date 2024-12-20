import styles from './tasks.module.css';
import createClassTransformer from '../style-utils';

export default function Tasks() {
  const classes = createClassTransformer(styles);

  return (
    <>
      <div className={classes("row-layout tasks-container")}></div>
    </>
  );
}
