import intl from "react-intl-universal";
import EN from "../language/EN";
import CN from "../language/CN";

function initIntl(language, callback) {
  intl.init({
    currentLocale: language,
    locales: {
      en: EN,
      cn: CN
    },
  }).then(() => {
    localStorage.setItem('language', language);
    if (callback) {
      callback();
    }
  });
}

function getString(key) {
  return intl.get(key);
}

function getInitOptions() {
  return intl.getInitOptions();
}

module.exports = {
  initIntl,
  getString,
  getInitOptions,
};

