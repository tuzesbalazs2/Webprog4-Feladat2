const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (Validator.isEmpty(data.email)) {
    errors.email = "Az email mezőt ki kell tölteni";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Az email érvénytelen";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "A jelszó mezőt ki kell tölteni";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};