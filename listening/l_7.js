
function checkscore(answers) {
score = 0;
noanswer= 'You didn\'t choose an answer. Please try again.';
pta=' Please try again.';
wd='That\'s right! Well done!';
soz='Sorry, that is incorrect. ';

     

// Question 1
// correct answer

  if (answers.q1[2].checked) {

		feedback1= wd;

score++; 
  } 
// wrong answers
else if (answers.q1[0].checked) {

feedback1= soz+pta;   
  }

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
else if (answers.q2[2].checked) {

feedback2= soz+pta;
}

//no answer

else {

feedback2= noanswer;

}

// Question 3
// correct answer

  if (answers.q3[2].checked) {

		feedback3= wd;

score++; 
  } 
// wrong answers
else if (answers.q3[0].checked) {

feedback3= soz+pta;   
  }

else if (answers.q3[1].checked) {

feedback3= soz+pta;
}

//no answer

else {

feedback3= noanswer;

  }

// Look at number4
// correct answer

  if (answers.q4[0].checked) {

		feedback4= wd;

score++; 
  } 
// wrong answers
else if (answers.q4[1].checked) {

feedback4= soz+pta;   
  }

else if (answers.q4[2].checked) {

feedback4= soz+pta;
}

//no answer
else   {

feedback4= noanswer;

}

// Look at number 5
// correct answer

  if (answers.q5[1].checked) {

		feedback5= wd;

score++; 
  } 
// wrong answers
else if (answers.q5[0].checked) {

feedback5= soz+pta;   
  }

else if (answers.q5[2].checked) {

feedback5= soz+pta;
}

//no answer

else {

feedback5= noanswer;

}
 
  
//add the week's topic/title here
title="<br /><b>Business English Listening Comprehension Practice - Your Results:</b>";
          
//this code creates the new page and adds the title and text from above

//parameters for pop-up
newWindow=window.open('','newwin','toolbar=no,menubar=no,location=no,scrollbars=yes, resizable=yes,width=450,height=450,left=+leftPos+,top=0')

//HTML head + body
newWindow.document.write("<html><head><title>Your results:</title><link rel='stylesheet'type='text/css'href='bes.css' /></head><body>")

//variable content
newWindow.document.write('<span class="black">'+title);
newWindow.document.write('<p>You scored <b>'+score+'</b> out of 5');
newWindow.document.write('<p>1: '+feedback1);
newWindow.document.write('<p>2: '+feedback2);
newWindow.document.write('<p>3: '+feedback3);
newWindow.document.write('<p>4: '+feedback4);
newWindow.document.write('<p>5: '+feedback5);


//close window link and end of HTML
newWindow.document.write("<p>&nbsp;<p>&nbsp;<a href='#dummy' onClick='window.close();'>Close this Window<\/a><\/span><\/body><\/html>");

//stops page being written to more than once
newWindow.document.close()
}

function mailinglist() {
window.open("../joinlist.asp", "mailinglist", "fullscreen=no,toolbar=no,status=yes,menubar=yes,scrollbars=yes,resizable=no,directories=yes,location=no,width=300,height=300")
}




