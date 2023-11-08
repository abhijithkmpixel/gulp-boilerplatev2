$("#contactForm").validate({
  ignore: ".ignore",
  errorElement: 'span',
  rules: {
    contact_first_name: {
      required: true,
      minlength: 2,
      maxlength: 30,
      namefield: true,
    },
    contact_last_name: {
      required: true,
      minlength: 2,
      maxlength: 30,
      namefield: true,
    },
    contact_email: {
      required: true,
      maxlength: 35,
      email: true
    },
    contact_phone: {
      required: true,
      phonefield: true,
      maxlength: 15
    },

    contact_message: {
      required: true,
      maxlength: 500,
    },
  },
  errorPlacement: function (error, element) {
    error.appendTo($(element).parent()); 
  },
  messages: {
    contact_first_name: {
      required: "This field is required",
      namefield: "Please enter valid characters"
    },
    contact_last_name: {
      required: "This field is required",
      namefield: "Please enter valid characters"
    },
    contact_email: {
      required: "This field is required",
      email: "Please enter valid email. (example. email@example.com)"
    },
    contact_phone: {
      required: "This field is required",
      phonefield: "Please enter valid phone. (example. 971-500000000)"
    },
  },
  submitHandler: function() {
    // $(".submission-wrap").addClass('show');
    // $('#contactForm')[0].reset();
    // $('.error').remove();
    // return false; 
  }
});