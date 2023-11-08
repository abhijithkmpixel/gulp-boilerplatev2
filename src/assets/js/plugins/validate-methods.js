// Validate Methods
$.validator.addMethod(
  "namefield",
  function (value, element) {
    return this.optional(element) || /^[a-z\'-\s]+$/i.test(value);
  },
  "Invalid Characters"
);
$.validator.addMethod(
  "phonefield",
  function (value, element) {
    return this.optional(element) || /^(?:\971-|00971|0)((?:3|4|5|6|7|9|50|51|52|55|56)[0-9]{7,})$/i.test(value);
  },
  "Invalid phone number"
);
$.validator.addMethod(
  "msgfield",
  function (value, element) {
    return this.optional(element) || /^[a-z\0-9\,.'"!()+@\s]+$/i.test(value);
  },
  "Invalid Characters"
);
$.validator.addMethod(
  "email",
  function (value, element) {
    return this.optional(element) || /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(value);
  },
  "Invalid Characters"
);
// $.validator.setDefaults({
//   debug: true,
//   success: "valid"
// });
