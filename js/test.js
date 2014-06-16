function Test() {
  Test.prototype.renderQuestion = function(position) {
    this.activeQuestion = app.config.questions[position];

    app.config.wrapper.innerHTML = '\
        <div id="question_wrapper">\
          <div id="question">' + this.activeQuestion.question + '</div>\
          <div id="answer">\
          </div>\
          <div id="buttons">\
            <a href="#" id="previous"><< Previous</a>\
            <a href="#" id="next">Next >></a>\
          </div>\
        </div>\
    ';
    this.renderAnswers();
    this.previousEvent();
    this.nextEvent();
  }

  Test.prototype.renderAnswers = function() {
    var answerDom = document.getElementById('answer');
    for (var index in this.activeQuestion.answers) {
      answerDom.innerHTML += '<div><label><input type="checkbox" name="checkbox_name" id="checkbox_names">' + this.activeQuestion.answers[index] + '</label></div>'
    }
  }

  Test.prototype.previousEvent = function() {
    var _this = this;
    var previous = document.getElementById('previous');
    if (this.activeQuestion.position != 0) {
      previous.addEventListener ('click', function(event) {
        event.preventDefault();
        _this.renderQuestion(_this.activeQuestion.position - 1);
      });
    }
    else {
      previous.setAttribute('class', 'disabled');
    }
  }

  Test.prototype.nextEvent = function() {
    var next = document.getElementById('next');
    var _this = this;
    next.addEventListener ('click', function(event) {
      event.preventDefault();
      var nextPosition = _this.activeQuestion.position + 1;
      var checkboxArr = document.getElementsByName('checkbox_name');

      _this.activeQuestion.user_answers = [];

      for (var i = 0; i < checkboxArr.length; i++) {
        if (checkboxArr[i].checked == true) {
          _this.activeQuestion.user_answers.push('setted');
        }
        else {
          _this.activeQuestion.user_answers.push('notsetted');
        }
      }
      if (app.config.questions[nextPosition] == undefined) {
        _this.finishTest();
        return;
      }
      else {
        // console.log(_this.activeQuestion);

        _this.renderQuestion(_this.activeQuestion.position + 1);
      }
    });
  }

  Test.prototype.finishTest = function() {
    app.config.wrapper.innerHTML = '<div id="all"></div>';
    var all = document.getElementById('all');
    for (var index in app.config.questions) {
      all.innerHTML += '<div id="question">\
                        <div id="question_title">' + app.config.questions[index].question + '</div>\
                        <div id="question_answers' + index + '"></div>\
                        </div>\
      ';

      var question_answers = document.getElementById('question_answers' + index);
      for (var i in app.config.questions[index].answers) {
        var correctAnswerAr = app.config.questions[index].correct_answer;
        var userAnswerAr = app.config.questions[index].user_answers;
        if (userAnswerAr[i] == 'setted' && correctAnswerAr[i] == 'correct') {
          question_answers.innerHTML += '<div class="correct">' + app.config.questions[index].answers[i] + '<img src="img/yes.jpg"></div>';
        }
        else if (userAnswerAr[i] == 'setted' && correctAnswerAr[i] == 'incorrect') {
          question_answers.innerHTML += '<div class="incorrect">' + app.config.questions[index].answers[i] + '<img src="img/no.jpg"></div>';
        }
        else if (userAnswerAr[i] == 'notsetted' && correctAnswerAr[i] == 'correct') {
          question_answers.innerHTML += '<div class="correct">' + app.config.questions[index].answers[i] + '</div>';
        }
        else if (userAnswerAr[i] == 'notsetted' && correctAnswerAr[i] == 'incorrect') {
          question_answers.innerHTML += '<div class="grey">' + app.config.questions[index].answers[i] + '</div>';
        }
      }
    }
  }
}




