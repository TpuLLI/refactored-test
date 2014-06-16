function Config() {
  this.questions = [
    {
      question: 'Cycle:',
      answers: ['for', 'var', 'while/do whil', 'typeof', 'function'],
      correct_answer: ['correct', 'incorrect', 'correct', 'incorrect', 'incorrect'],
      position: 0
    },
     {
      question: 'Search for DOM-items:',
      answers: ['search', 'document.getElementById', 'window', 'document.getElementsByClass', 'document.getElementByClass'],
      correct_answer: ['incorrect', 'correct', 'incorrect', 'correct', 'incorrect'],
      position: 1
    },
    {
      question: '(function(){\
                  return typeof arguments;\
                })();',
      answers: ['"object"', '"array"', '"arguments"', '"undefined"'],
      correct_answer: ['correct', 'incorrect', 'incorrect', 'incorrect'],
      position: 2
    },
    {
      question: 'var f = function g(){ return 23; };\
                typeof g();',
      answers: ['"number"', '"undefined"', '"function"', 'Error'],
      correct_answer: ['incorrect', 'incorrect', 'incorrect', 'correct'],
      position: 3
    },
    {
      question: '(function(x){\
               delete x;\
               return x;\
              })(1);',
      answers: ['1', 'null', 'undefined', 'Error'],
      correct_answer: ['correct', 'incorrect', 'incorrect', 'incorrect'],
      position: 4
    },
    {
      question: 'var y = 1, x = y = typeof x;\
              x;',
      answers: ['1', '"number"', 'undefined', '"undefined"'],
      correct_answer: ['incorrect', 'incorrect', 'incorrect', 'correct'],
      position: 5
    },
    {
      question: '(function f(f){\
                    return typeof f();\
                })(function(){ return 1; });',
      answers: ['"number"', '"undefined"', '"function"', 'Error'],
      correct_answer: ['correct', 'incorrect', 'incorrect', 'incorrect'],
      position: 6
    },
    {
      question: 'var f = (function f(){ return "1"; }, function g(){ return 2; })();\
                 typeof f;',
      answers: ['"string"', '"number"', '"function"', '"undefined"'],
      correct_answer: ['incorrect', 'correct', 'incorrect', 'incorrect'],
      position: 7
    },
    {
      question: '(function f(){\
                    function f(){ return 1; }\
                  return f();\
                function f(){ return 2; }\
                })();',
      answers: ['1', '2', 'Error (e.g. "Too much recursion")', 'undefined'],
      correct_answer: ['incorrect', 'correct', 'incorrect', 'incorrect'],
      position: 8
    },
  ];

  Config.prototype.createWrapper = function() {
    this.wrapper = document.createElement('div');
    this.wrapper.className = 'wrapper';
    document.body.appendChild(this.wrapper);
  }
}




