import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./Settings.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateSettings } from "../../slices/settingsSlice";
import Button from "../ui/Button";

const SettingsSchema = Yup.object().shape({
  pairs: Yup.number()
    .typeError("Must be a number")
    .integer("Must be an integer")
    .min(2)
    .max(40)
    .required("Вкажи кількість пар"),
  speed: Yup.number()
    .typeError("Must be a number")
    .integer("Must be an integer")
    .min(350)
    .max(2000)
    .required("Вкажи швидкість анімації"),
  cardSize: Yup.number()
    .typeError("Must be a number")
    .integer("Must be an integer")
    .min(50)
    .max(150)
    .required("Вкажи розмір карток"),
});

/**
 * Displays the configuration form for the memory game.
 * Uses Formik and Yup for state management and validation.
 * Updates the global Redux store upon submission.
 *
 * @function Settings
 * @param {Object} props - Component properties.
 * @param {Function} props.onClose - Callback executed to close the settings modal.
 * @returns {JSX.Element} The settings form interface.
 */
const Settings = ({ onClose, backgroundColor, textColor }) => {
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
        <Form
          className={styles.settingsForm}
          style={{
            "--settings-bg-color": backgroundColor,
            "--settings-text-color": textColor,
          }}
        >
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
            <Button type="submit">Зберегти</Button>

            <Button type="button" onClick={onClose}>
              Відміна
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Settings;
