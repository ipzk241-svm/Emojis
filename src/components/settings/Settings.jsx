import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./Settings.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateSettings } from "../../slices/settingsSlice";

const SettingsSchema = Yup.object().shape({
  pairs: Yup.number().min(2).max(40).required("Вкажи кількість пар"),
  speed: Yup.number().min(350).max(2000).required("Вкажи швидкість анімації"),
  cardSize: Yup.number().min(40).max(120).required("Вкажи розмір карток"),
});

const Settings = ({ onClose }) => {
  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  return (
    <Formik
      enableReinitialize
      initialValues={settings}
      validationSchema={SettingsSchema}
      onSubmit={(values) => {
        dispatch(updateSettings(values));
        onClose();
      }}
    >
      {() => (
        <Form className={styles.settingsForm}>
          <h2>⚙️ Налаштування гри</h2>

          <div className={styles.formGroup}>
            <label>Кількість пар</label>
            <Field type="number" name="pairs" className={styles.formInput} />
            <ErrorMessage
              name="pairs"
              component="div"
              className={styles.error}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Швидкість (мс)</label>
            <Field type="number" name="speed" className={styles.formInput} />
            <ErrorMessage
              name="speed"
              component="div"
              className={styles.error}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Розмір карток (px)</label>
            <Field type="number" name="cardSize" className={styles.formInput} />
            <ErrorMessage
              name="cardSize"
              component="div"
              className={styles.error}
            />
          </div>

          <div className={styles.formActions}>
            <button type="submit" className="button">
              Зберегти
            </button>
            <button type="button" className="button" onClick={onClose}>
              Відміна
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Settings;
