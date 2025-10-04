import React from "react";
import { useGameSettings } from "../../context/GameContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../../styles/settings.css"; // підключаємо стилі

const SettingsSchema = Yup.object().shape({
  pairs: Yup.number().min(2).max(40).required("Вкажи кількість пар"),
  speed: Yup.number().min(350).max(2000).required("Вкажи швидкість анімації"),
  cardSize: Yup.number().min(40).max(120).required("Вкажи розмір карток"),
});

const Settings = ({ onClose }) => {
  const { settings, updateSettings } = useGameSettings();

  return (
    <Formik
      initialValues={settings}
      validationSchema={SettingsSchema}
      onSubmit={(values) => {
        updateSettings(values);
        onClose();
      }}
    >
      {() => (
        <Form className="settings-form">
          <h2>⚙️ Налаштування гри</h2>

          <div className="form-group">
            <label>Кількість пар</label>
            <Field type="number" name="pairs" className="form-input" />
            <ErrorMessage name="pairs" component="div" className="error" />
          </div>

          <div className="form-group">
            <label>Швидкість (мс)</label>
            <Field type="number" name="speed" className="form-input" />
            <ErrorMessage name="speed" component="div" className="error" />
          </div>

          <div className="form-group">
            <label>Розмір карток (px)</label>
            <Field type="number" name="cardSize" className="form-input" />
            <ErrorMessage name="cardSize" component="div" className="error" />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Зберегти
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Відміна
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Settings;
