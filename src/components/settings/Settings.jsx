import React from "react";
import { useGameSettings } from "../../context/GameContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SettingsSchema = Yup.object().shape({
  pairs: Yup.number().min(2).max(20).required("Вкажи кількість пар"),
  speed: Yup.number().min(100).max(2000).required("Вкажи швидкість анімації"),
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
          <label>Кількість пар</label>
          <Field type="number" name="pairs" />
          <ErrorMessage name="pairs" component="div" className="error" />

          <label>Швидкість (мс)</label>
          <Field type="number" name="speed" />
          <ErrorMessage name="speed" component="div" className="error" />

          <label>Розмір карток ()</label>
          <Field type="number" name="cardSize" />
          <ErrorMessage name="cardSize" component="div" className="error" />

          <button type="submit">Зберегти</button>
          <button type="button" onClick={onClose}>
            Відміна
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Settings;
