
function checkscore(answers) {
  score = 0;
  noanswer = 'You didn\'t choose an answer. Please try again.';
  pta = ' Please try again.';
  wd = 'That\'s right! Well done!';
  soz = 'Sorry, that is incorrect. ';



  // Question 1
  // correct answer

  if (answers.q1[0].checked) {

    feedback1 = wd;

    score++;
  }
  // wrong answers
  else if (answers.q1[1].checked) {

    feedback1 = soz + pta;
  }

  else if (answers.q1[2].checked) {

    feedback1 = soz + pta;
  }

  //no answer

  else {

    feedback1 = noanswer;

  }

  // Question 2
  // correct answers

  if (answers.q2[1].checked) {

    feedback2 = wd;

    score++;
  }
  // wrong answers
  else if (answers.q2[0].checked) {

    feedback2 = soz + pta;
  }

  else if (answers.q2[2].checked) {

    feedback2 = soz + pta;
  }

  //no answer

  else {

    feedback2 = noanswer;

  }

  // Question 3
  // correct answer

  if (answers.q3[2].checked) {

    feedback3 = wd;

    score++;
  }
  // wrong answers
  else if (answers.q3[0].checked) {

    feedback3 = soz + pta;
  }

  else if (answers.q3[1].checked) {

    feedback3 = soz + pta;
  }

  //no answer

  else {

    feedback3 = noanswer;

  }

  // Look at number4
  // correct answer

  if (answers.q4[0].checked) {

    feedback4 = wd;

    score++;
  }
  // wrong answers
  else if (answers.q4[1].checked) {

    feedback4 = soz + pta;
  }

  else if (answers.q4[2].checked) {

    feedback4 = soz + pta;
  }

  //no answer
  else {

    feedback4 = noanswer;

  }

  // Look at number 5
  // correct answer

  if (answers.q5[2].checked) {

    feedback5 = wd;

    score++;
  }
  // wrong answers
  else if (answers.q5[0].checked) {

    feedback5 = soz + pta;
  }

  else if (answers.q5[1].checked) {

    feedback5 = soz + pta;
  }

  //no answer

  else {

    feedback5 = noanswer;

  }

  // Look at number 6
  // correct answer

  if (answers.q6[1].checked) {

    feedback6 = wd;

    score++;
  }
  // wrong answers
  else if (answers.q6[0].checked) {

    feedback6 = soz + pta;
  }

  else if (answers.q6[2].checked) {

    feedback6 = soz + pta;
  }

  //no answer

  else {

    feedback6 = noanswer;

  }

  // Look at number 7
  // correct answer

  if (answers.q7[0].checked) {

    feedback7 = wd;

    score++;
  }
  // wrong answers
  else if (answers.q7[1].checked) {

    feedback7 = soz + pta;
  }

  else if (answers.q7[2].checked) {

    feedback7 = soz + pta;
  }


  //no answer

  else {

    feedback7 = noanswer;

  }

  // Look at number 8
  // correct answer

  if (answers.q8[1].checked) {

    feedback8 = wd;

    score++;
  }
  // wrong answers
  else if (answers.q8[0].checked) {

    feedback8 = soz + pta;
  }

  else if (answers.q8[1].checked) {

    feedback8 = soz + pta;
  }

  //no answer

  else {

    feedback8 = noanswer;

  }

  // Look at number 9
  // correct answer

  if (answers.q9[1].checked) {

    feedback9 = wd;

    score++;
  }
  // wrong answers
  else if (answers.q9[0].checked) {

    feedback9 = soz + pta;
  }

  else if (answers.q9[2].checked) {

    feedback9 = soz + pta;
  }

  //no answer

  else {

    feedback9 = noanswer;

  }

  // Look at number 10
  // correct answer

  if (answers.q10[2].checked) {

    feedback10 = wd;

    score++;
  }
  // wrong answers
  else if (answers.q10[0].checked) {

    feedback10 = soz + pta;
  }

  else if (answers.q10[1].checked) {

    feedback10 = soz + pta;
  }

  //no answer

  else {

    feedback10 = noanswer;

  }

  //add the week's topic/title here
  title = "<br /><b>Here are your results:</b>";
  // Get the screen width and height to center the popup
  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;

  // Set the popup width and height to 100% of the screen
  var popupWidth = screenWidth;
  var popupHeight = screenHeight;

  // Calculate the position of the popup to be centered
  var leftPos = 0;
  var topPos = 0;

  // Parameters for pop-up
  var newWindow = window.open('', 'newwin', `toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,width=${popupWidth},height=${popupHeight},left=${leftPos},top=${topPos}`);

  // Ensure the window is properly loaded before writing content
  if (newWindow) {
    // HTML content with embedded CSS
    newWindow.document.write(`
    <html>
        <head>
            <title>Your results:</title>
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                    background: linear-gradient(45deg, #4CAF50, #8BC34A);
                    color: #fff;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }

                .results-container {
                    background: rgba(255, 255, 255, 0.9);
                    padding: 20px;
                    border-radius: 12px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
                    width: 100%;
                    max-width: 500px;
                    text-align: center;
                    animation: fadeIn 0.5s ease-out;
                    overflow-y: auto; /* Allow scrolling if the content is too large */
                }

                h1 {
                    color: #4CAF50;
                    font-size: 26px;
                    margin-bottom: 20px;
                }

                .score {
                    font-size: 24px;
                    font-weight: bold;
                    color: #333;
                    margin-bottom: 20px;
                }

                .feedback {
                    font-size: 18px;
                    margin: 10px 0;
                    line-height: 1.6;
                    padding: 10px;
                    border-radius: 6px;
                    transition: background-color 0.3s;
                }

                .correct {
                    background-color: #4CAF50;
                    color: white;
                }

                .incorrect {
                    background-color: #F44336;
                    color: white;
                }

                .no-answer {
                    background-color: #FF9800;
                    color: white;
                }

                .close-btn {
                    display: inline-block;
                    background-color: #8BC34A;
                    color: white;
                    padding: 12px 24px;
                    margin-top: 20px;
                    text-decoration: none;
                    border-radius: 6px;
                    font-weight: bold;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                    transition: background-color 0.3s;
                }

                .close-btn:hover {
                    background-color: #7CB342;
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            </style>
        </head>
        <body>
            <div class="results-container">
                <h1>Your Results</h1>
                <p class="score">You scored <b>${score}</b> out of 10</p>
                <p class="feedback ${feedback1.includes("That\'s right!") ? 'correct' : feedback1.includes('Sorry') ? 'incorrect' : 'no-answer'}">1: ${feedback1}</p>
                <p class="feedback ${feedback2.includes("That\'s right!") ? 'correct' : feedback2.includes('Sorry') ? 'incorrect' : 'no-answer'}">2: ${feedback2}</p>
                <p class="feedback ${feedback3.includes("That\'s right!") ? 'correct' : feedback3.includes('Sorry') ? 'incorrect' : 'no-answer'}">3: ${feedback3}</p>
                <p class="feedback ${feedback4.includes("That\'s right!") ? 'correct' : feedback4.includes('Sorry') ? 'incorrect' : 'no-answer'}">4: ${feedback4}</p>
                <p class="feedback ${feedback5.includes("That\'s right!") ? 'correct' : feedback5.includes('Sorry') ? 'incorrect' : 'no-answer'}">5: ${feedback5}</p>
                <p class="feedback ${feedback6.includes("That\'s right!") ? 'correct' : feedback6.includes('Sorry') ? 'incorrect' : 'no-answer'}">6: ${feedback6}</p>
                <p class="feedback ${feedback7.includes("That\'s right!") ? 'correct' : feedback7.includes('Sorry') ? 'incorrect' : 'no-answer'}">7: ${feedback7}</p>
                <p class="feedback ${feedback8.includes("That\'s right!") ? 'correct' : feedback8.includes('Sorry') ? 'incorrect' : 'no-answer'}">8: ${feedback8}</p>
                <p class="feedback ${feedback9.includes("That\'s right!") ? 'correct' : feedback9.includes('Sorry') ? 'incorrect' : 'no-answer'}">9: ${feedback9}</p>
                <p class="feedback ${feedback10.includes("That\'s right!") ? 'correct' : feedback10.includes('Sorry') ? 'incorrect' : 'no-answer'}">10: ${feedback10}</p>
                <a href="#" class="close-btn" onClick="window.close();">Close this Window</a>
            </div>
        </body>
    </html>
  `);

    // Close the document after writing the content
    newWindow.document.close();
  } else {
    alert("Popup blocked! Please allow popups for this page.");
  }


}




