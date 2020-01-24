const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
// Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "A név mezőt ki kell tölteni";
  }
// Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Az email mezőt ki kell tölteni";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Az email érvénytelen";
  }
// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "A jelszó mezőt ki kell tölteni";
  }
if (Validator.isEmpty(data.password2)) {
    errors.password2 = "A jelszó megerősítése mezőt ki kell tölteni";
  }
if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "A jelszónak legalább 6 karakter hosszúnak kell lennie (és max 30)";
  }
if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "A jelszóknak egyezniük kell";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};