function Auth() {
  Auth.prototype.renderForm = function() {

    app.config.wrapper.innerHTML = '\
      <form id="login_form" name="contact_form">\
        <div class="login">\
          <label for="login">User Name</label>\
          <input type="text" id="login">\
          <div id="error_name">Pleas, enter your name!</div>\
        </div>\
        <div class="pass">\
          <label for="pass">User Password</label>\
          <input type="password" id="pass">\
          <div id="error_pass">Pleas, enter your password!</div>\
        </div>\
        <input type="submit" value="LOGIN" id="submit">\
      </form>\
    ';
    this.listenLogin();
    }

  Auth.prototype.validateForm = function() {
    valid = true;
    if(document.contact_form.login.value == '') {
        var errorName = document.getElementById('error_name');
        errorName.style.display = 'block';
        valid = false;
    }
    if(document.contact_form.pass.value == '') {
      var errorPass = document.getElementById('error_pass');
      errorPass.style.display = 'block';
      valid = false;
    }
    return valid;
  }

  Auth.prototype.listenLogin = function() {
    var _this = this;
    var form = document.getElementById('login_form');
    var submit = document.getElementById('submit');
    submit.addEventListener('click', function(event) {
      event.preventDefault();
      if (_this.validateForm()) {
      app.config.wrapper.removeChild(form);
      app.test.renderQuestion(0);
      }
  });
  }
}





