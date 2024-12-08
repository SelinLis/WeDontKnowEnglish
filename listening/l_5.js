
function checkscore(answers) {
score = 0;
noanswer= 'You didn\'t choose an answer. Please try again.';
pta=' Please try again.';
wd='That\'s right! Well done!';
soz='Sorry, that is incorrect. ';

     

// Question 1
// correct answer

  if (answers.q1[0].checked) {

		feedback1= wd;

score++; 
  } 
// wrong answers
else if (answers.q1[1].checked) {

feedback1= soz+pta;   
  }

//no answer

else {

feedback1= noanswer;

 }

// Question 2
// correct answers

  if (answers.q2[1].checked) {

		feedback2= wd;

score++; 
  } 
// wrong answers
else if (answers.q2[0].checked) {

feedback2= soz+pta;   
  }

//no answer

else {

feedback2= noanswer;

}

// Question 3
// correct answer

  if (answers.q3[0].checked) {

		feedback3= wd;

score++; 
  } 
// wrong answers
else if (answers.q3[1].checked) {

feedback3= soz+pta;   
  }


//no answer

else {

feedback3= noanswer;

  }

// Look at number4
// correct answer

  if (answers.q4[1].checked) {

		feedback4= wd;

score++; 
  } 
// wrong answers
else if (answers.q4[0].checked) {

feedback4= soz+pta;   
  }

//no answer
else   {

feedback4= noanswer;

}

// Look at number 5
// correct answer

  if (answers.q5[0].checked) {

		feedback5= wd;

score++; 
  } 
// wrong answers
else if (answers.q5[1].checked) {

feedback5= soz+pta;   
  }

//no answer

else {

feedback5= noanswer;

}

// Look at number 6
// correct answer

  if (answers.q6[1].checked) {

		feedback6= wd;

score++; 
  } 
// wrong answers
else if (answers.q6[0].checked) {

feedback6= soz+pta;
  }

//no answer

else {

feedback6= noanswer;

  }

// Look at number 7
// correct answer

  if (answers.q7[1].checked) {

		feedback7= wd;

score++; 
  } 
// wrong answers
else if (answers.q7[0].checked) {

feedback7= soz+pta;
  }

//no answer

else {

feedback7= noanswer;

  }  

// Look at number 8
// correct answer

  if (answers.q8[1].checked) {

		feedback8= wd;

score++; 
  } 
// wrong answers
else if (answers.q8[0].checked) {

feedback8= soz+pta;
  }

//no answer

else {

feedback8= noanswer;

  }

// Look at number 9
// correct answer

  if (answers.q9[0].checked) {

		feedback9= wd;

score++; 
  } 
// wrong answers
else if (answers.q9[1].checked) {

feedback9= soz+pta;
  }

//no answer

else {

feedback9= noanswer;

  }  
  
// Look at number 10
// correct answer

  if (answers.q10[1].checked) {

		feedback10= wd;

score++; 
  } 
// wrong answers
else if (answers.q10[0].checked) {

feedback10= soz+pta;
  }

//no answer

else {

feedback10= noanswer;

  }  
  
//add the week's topic/title here
title="<br /><b>HERE ARE YOUR RESULTS:</b>";
          
//this code creates the new page and adds the title and text from above

//parameters for pop-up
newWindow=window.open('','newwin','toolbar=no,menubar=no,location=no,scrollbars=yes, resizable=yes,width=450,height=450,left=+leftPos+,top=0')

//HTML head + body
newWindow.document.write("<html><head><title>BusinessEnglishSite.com - Exercise Results</title><link rel='stylesheet'type='text/css'href='fsm.css' /></head><body>")

//variable content
newWindow.document.write('<span class="black"><span class="blackbold">'+title+'</span>');
newWindow.document.write('<p>You scored <b>'+score+'</b> out of 10');
newWindow.document.write('<p>1: '+feedback1);
newWindow.document.write('<p>2: '+feedback2);
newWindow.document.write('<p>3: '+feedback3);
newWindow.document.write('<p>4: '+feedback4);
newWindow.document.write('<p>5: '+feedback5);
newWindow.document.write('<p>6: '+feedback6);
newWindow.document.write('<p>7: '+feedback7);
newWindow.document.write('<p>8: '+feedback8);
newWindow.document.write('<p>9: '+feedback9);
newWindow.document.write('<p>10: '+feedback10);

//close window link and end of HTML
newWindow.document.write("<p>&nbsp;<p>&nbsp;<a href='#dummy' onClick='window.close();'>Close this Window<\span><\/a><\/font><\/body><\/html>");

//stops page being written to more than once
newWindow.document.close()

}
function mailinglist() {
window.open("joinlist.asp", "mailinglist", "fullscreen=no,toolbar=no,status=yes,menubar=yes,scrollbars=yes,resizable=no,directories=yes,location=no,width=300,height=300")
}





