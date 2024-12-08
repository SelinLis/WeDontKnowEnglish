function checkscore(answers) {
  score = 0;
  noanswer = 'You didn\'t choose an answer. Please try again.';
  pta = ' Please try again.';
  wd = 'That\'s right! Well done!';
  soz = 'Sorry, that is incorrect. ';

  // Question 1
  if (answers.q1[0].checked) {
    feedback1 = wd;
    score++;
  } else if (answers.q1[1].checked || answers.q1[2].checked) {
    feedback1 = soz + pta;
  } else {
    feedback1 = noanswer;
  }

  // Question 2
  if (answers.q2[1].checked) {
    feedback2 = wd;
    score++;
  } else if (answers.q2[0].checked || answers.q2[2].checked) {
    feedback2 = soz + pta;
  } else {
    feedback2 = noanswer;
  }

  // Question 3
  if (answers.q3[2].checked) {
    feedback3 = wd;
    score++;
  } else if (answers.q3[0].checked || answers.q3[1].checked) {
    feedback3 = soz + pta;
  } else {
    feedback3 = noanswer;
  }

  // Question 4
  if (answers.q4[1].checked) {
    feedback4 = wd;
    score++;
  } else if (answers.q4[0].checked || answers.q4[2].checked) {
    feedback4 = soz + pta;
  } else {
    feedback4 = noanswer;
  }

  // Question 5
  if (answers.q5[0].checked) {
    feedback5 = wd;
    score++;
  } else if (answers.q5[1].checked || answers.q5[2].checked) {
    feedback5 = soz + pta;
  } else {
    feedback5 = noanswer;
  }

  title = "<br /><b>Here are your results:</b>";
  // Get the screen width and height to make the popup fullscreen
  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;

  // Set the popup width and height to be 100% of the screen size
  var popupWidth = screenWidth;
  var popupHeight = screenHeight;

  // Parameters for full-screen pop-up
  var newWindow = window.open('', 'newwin', `toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,width=${popupWidth},height=${popupHeight},left=0,top=0`);

  // Ensure the window is properly loaded before writing content
  if (newWindow) {
    // HTML content with embedded CSS
    newWindow.document.write(`
   <html>
       <head>
           <title>Your results:</title>
           <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
           <style>
               body {
                   font-family: 'Arial', sans-serif;
                   background-color: #ffffff; /* Change background color to white */
                   color: #333;
                   margin: 0;
                   padding: 0;
                   display: flex;
                   justify-content: center;
                   align-items: center;
                   height: 100vh;
                   overflow: hidden; /* Prevent scrolling */
               }

               .results-container {
                   background: rgba(255, 255, 255, 0.9);
                   padding: 20px;
                   border-radius: 12px;
                   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
                   width: 90%; /* Set width to 90% of the popup */
                   max-width: 600px;
                   height: 90%; /* Set height to 90% of the popup */
                   text-align: center;
                   animation: fadeIn 0.5s ease-out;
                   overflow-y: auto; /* Allow scrolling if content is too large */
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
              .space-for-fucking-iphone {
                height: 50px;
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
               
               <a href="#" class="close-btn" onClick="window.close();">Close this Window</a>
               <div class="space-for-fucking-iphone"></>
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