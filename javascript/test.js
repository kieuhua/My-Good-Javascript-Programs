
   const OPERATORS = ['plus', 'minus', 'multiplied', 'divided'];
   var opIdx = OPERATORS.findIndex( (op) => op === 'multipl')
   console.log(opIdx)
   
   /*

   this is a great RegExp
   new RegExp("^What is (-?\\d+(?: (?:" + Object.keys(this.operators).join("|") + ") -?\\d+)+)\\?$");

   https://github.com/ThomasZumsteg/exercism-javascript/blob/master/wordy/wordy.js
   error
   n = 'Who is the president of the United States?';
   'What is 53 cubed?';

   What is -12 divided by 2 divided by -3?';

   'What is -3 plus 7 multiplied by -2?';

   'What is 17 minus 6 plus 3?';

   'What is 20 minus 4 minus 13?';

   hat is 1 plus 5 minus -2?';

   What is 33 divided by -3?';

   hat is -3 multiplied by 25?';

   'What is 123 plus 45678?';
   */