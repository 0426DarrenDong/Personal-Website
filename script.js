function getDay(){
  let date = new Date().getDay(); 
  let string; 
  switch (date){
    case 0: 
      string = "Happy Sunday! Welcome to my Webpage!";
      break; 
    case 1: 
      string = "Happy Monday! Welcome to my Webpage";
      break; 
    case 2:
      string = "Happy Tuesday! Welcome to my Webpage";
      break; 
    case 3: 
      string = "Happy Wednesday! Welcome to my Webpage";
      break; 
    case 4:
      string = "Happy Thursday! Welcome to my Webpage";
      break; 
    case 5: 
      string = "Happy Friday! Welcome to my Webpage";
      break; 
    case 6: 
      string = "Happy Saturday! Welcome to my Webpage";
      break; 
  }
  document.getElementById("day").innerHTML = string; 
}

function checkInputs(){
  if (fname.value == ""){
    alert("Enter your first name!");
  }
  else if (lname.value == ""){
    alert("Enter your last name!");
  }
  else if(comments.value == ""){
    alert("Please give feedback!"); 
  }
  else {
    sendEmail() 
  }
} 

function hoverColor(link){
  switch(link){
    case "link1": 
      document.getElementById("link1").style.color = "lightgreen";
      break;
    case "link2":
      document.getElementById("link2").style.color = "lightgreen";
      break;
    case "link3":
      document.getElementById("link3").style.color = "lightgreen";
      break;
    case "link4":
      document.getElementById("link4").style.color = "lightgreen";
      break;
    case "link5":
      document.getElementById("link5").style.color = "lightgreen";
      break;
    case "program":
      document.getElementById("H" + link).style.color = "lightgreen";
      break;
    case "elementary":
      document.getElementById("H" + link).style.color = "lightgreen";
      break;
    case "middle":
      document.getElementById("H" + link).style.color = "lightgreen";
      break;
    case "current":
      document.getElementById("H" + link).style.color = "lightgreen";
      break;
    case "gaming": 
      document.getElementById("H" + link).style.color = "lightgreen";
      break; 
    case "sport": 
      document.getElementById("H" + link).style.color = "lightgreen";
      break;
    case "video": 
      document.getElementById("H" + link).style.color = "lightgreen";
      break;
    case "hobbies_program":
      document.getElementById("H" + link).style.color = "lightgreen";
      break;
  }
}

function unHoverColor(link){
  switch(link){
    case "link1": 
      document.getElementById("link1").style.color = "white";
      break;
    case "link2":
      document.getElementById("link2").style.color = "white";
      break;
    case "link3":
      document.getElementById("link3").style.color = "white";
      break;
    case "link4":
      document.getElementById("link4").style.color = "white";
      break;
    case "link5":
      document.getElementById("link5").style.color = "white";
      break;
    case "program":
      document.getElementById("H" + link).style.color = "white";
      break;
    case "elementary":
      document.getElementById("H" + link).style.color = "white";
      break;
    case "middle":
      document.getElementById("H" + link).style.color = "white";
      break;
    case "current":
      document.getElementById("H" + link).style.color = "white";
      break;
    case "gaming": 
      document.getElementById("H" + link).style.color = "white";
      break;
    case "video": 
      document.getElementById("H" + link).style.color = "white";
      break;
    case "sport": 
      document.getElementById("H" + link).style.color = "white";
      break;
    case "hobbies_program":
      document.getElementById("H" + link).style.color = "white";
      break;
  }
}

function enlarge(img){
  switch(img){
    case "insta":
      document.getElementById('insta').height = 80; 
      document.getElementById('insta').width = 80; 
      break;
    case "linked":
      document.getElementById('linked').height = 80; 
      document.getElementById('linked').width = 80; 
      break;
    case "git":
      document.getElementById('github').width = 80;
      document.getElementById('github').height = 80;  
      break; 
  }
}

function enshort(img){
  switch(img){
    case "insta":
      document.getElementById('insta').height = 40; 
      document.getElementById('insta').width = 40; 
      break;
    case "linked":
      document.getElementById('linked').height = 40; 
      document.getElementById('linked').width = 40; 
      break;
    case "git":
      document.getElementById('github').width = 40;
      document.getElementById('github').height = 40;  
      break; 
  }
}

function reveal(head){
  if (head == 'program'){
    if (document.getElementById('program.edu').innerHTML !== ""){
      document.getElementById('program.edu').innerHTML = "";
    }
    else{
      document.getElementById('program.edu').innerHTML = 'I started coding 2 years ago in sophmore year of high school when I took one semester of an introductory course in Python. The very much enjoyed that class from the logic behind the codes to the team work behind debugging. Consequently, that summer, I took an algorithm class which focused on search and sorting algorithms using Python. The year after, I took AP Computer Science A class, which focused on Java. The score has yet to be released, but regardless, I still enjoyed learning Java and creating programs. It was during this class that I realized that I may pursue a career in computer science. Now, here I am in the TKH fellowship learning web development using HTML, CSS, and JavaScript, increasing my knowledge in the world of programming.'; 
    }
  }
  if (head == 'elementary'){
    if (document.getElementById('elementary').innerHTML !== ""){
      document.getElementById('elementary').innerHTML = "";
    }
    else{
      document.getElementById('elementary').innerHTML = 'The first elementary school I attended was in China where I was in pre-k. After, I moved back to the United States and lived with my aunts and uncle in Georgia where I attended kindegarden. The final act of my elementary life occured when I moved to the Bronx in NY where I graduated from elementary school. I was care free and admittedly, not the hardcore student in class.'; 
    }
  }
  if (head == 'middle'){
    if (document.getElementById('middle').innerHTML !== ""){
      document.getElementById('middle').innerHTML = "";
    }
    else{
      document.getElementById('middle').innerHTML = 'After I graduated from elementary school in the Bronx, I attended a nearby middle school also in the Bronx. However, that was short-lived. Halfway through the year, my parent decides to move to Queens and thus, I switched middle school. It was that time when I started trying harder in school. My parent brough up specialized high schools exam and made me prepare for it throughout middle school. Spoiler alert: I got in the Bonx High School of Science, which is a top specialized high school.'; 
    }
  }
  if (head == 'current'){
    if (document.getElementById('current').innerHTML !== ""){
      document.getElementById('current').innerHTML = "";
    }
    else{
      document.getElementById('current').innerHTML = "Now, I am in the Bronx High School of Science, soon to graduate in 2022. Freshman year, I was getting to know high school life and did not take many hard classes except honors geometry and one extra curricular. Sophomore year, I incrased the difficulty by taking my first AP class in biology as well as honors spanish and honors algebra 2. I didn't do so well in AP bio exam (only got a 3) and biology has become my least favorite science course. I also ioncreased my clubs to 2 that is Key Club and Desktop Robotics Club. In junior year, I took a huge leap into 5 AP courses in english language and composition, calculus BC, physics 1, us history, and computer science A. So far, only physics score has been released (got a 4). Hopefully, the rest will be well too. I also maintained my two clubs except I joined Hackers club instead of Key Club.  Senior year can arguably be the hardest year given colleges, but I plan to take post Ap courses in mathematics and computer science as well as AP courses in economics and physics. Hoepfully, I don't bite more than what I can chew."; 
    }
  }
  if (head == 'hobbies_program'){
    if (document.getElementById('hobbies_program.edu').innerHTML !== ""){
      document.getElementById('hobbies_program.edu').innerHTML = "";
    }
    else{
      document.getElementById('hobbies_program.edu').innerHTML = "One of my hobby is programming. After I learned Java and was recommended to get a hobby my several people, I decided to do my own programming projects. I created a mini project on a simulation of gacha of a game I played using Java GUI. However, I stopped the project after AP exams started and I lack the information to make the simulation accurate. Another project I started was another personal website. Again, I stopped because of AP exam and now because I have this project that is much better. Finally, a project I created using Python is a discord bot on information of a game. I have yet to finish that as college become the main goal right now. Hopefully, I have some time this summer to resume that project."; 
    }
  }
  if (head == 'video'){
    if (document.getElementById('video').innerHTML !== ""){
      document.getElementById('video').innerHTML = "";
    }
    else{
      document.getElementById('video').innerHTML = "I mostly watch Youtube since I do not own any streaming platforms. On Youtube, I watch Minecraft or other random videos since they are mostly used for background noise rather than for enjoyment. If I plan to watch any shows or movies, I would pirate it. I recently watched the marvels shows Wandavision, The Falcon and the Winter Soldier, and Loki. they were great and I'm waiting for the Marvel movies and season 2 of Loki. I also watch anime. I finished all of Pokemon last summer (which technically is an anime) and finished two more anime during quarantine that is the Promised Neverland and Fullmetal Alchemist: Brotherhood. I plan to watch other anime after I get my life organized with colleges. Any anime suggestions are welcome and can be submitted in the Contacts section of the website."; 
    }
  }
  if (head == 'gaming'){
    if (document.getElementById('gaming').innerHTML !== ""){
      document.getElementById('gaming').innerHTML = "";
    }
    else{
      document.getElementById('gaming').innerHTML = "I played mostly mobile game. A major one was Clash Royale. I started the game in my last few months of middle school and ocntinued playing til sophomore year. The strategy game was fun with playing with friends. However, the game started to die out form lack of content and eventually I stopped playing. Another game that was big was Brawl Star. Same situation as clash royale, the game became boring and depended more on luck than skill and strategy and I stopped playing that too. The current game I'm playing is Genshin Impact. It's a rpg game in a new world that keeps me entertain and accompany me in times of loneliness during the pandemic. I play it on mobile and PC although my mobile phone is getting fried from the game. Downside of the game would have to be the size on mobile. It takes up 1/3 of my iphone's storage. I plan to get a new phone with more storage and/or get my own laptop where I can play freely and without crashes."
    }
  }
  if (head == 'sport'){
    if (document.getElementById('sport').innerHTML !== ""){
      document.getElementById('sport').innerHTML = "";
    }
    else{
      document.getElementById('sport').innerHTML = "I enjoy playing all sorts of sports with friends. I'm not a hardcore player but might be consider beginner or intermural. I played basketball throughout middle school and even now in the summer in playgrounds occasionally. In elementary school and middle school, I played soccer with my friends in the park or afterschool. I also played football in middle school during recess with my friends. In high school, my firneds and I may go to Badminton club to play badminton. Overall, sports are a fun way for me to engage with my friends while also exercising."
    }
  }
}

var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

function sendEmail() {
      Email.send({
        Host: "smtp.gmail.com",
        Username: "sender@email_address.com",
        Password: "Enter your password",
        To: '2015ddon@gmail.com',
        From: "dongd@bxscience.edu.com",
        Subject: "Sending Comments from Website",
        Body: "Well that was easy!!",
      })
        .then(function (message) {
          location.href = "thanks.html"; 
        });
}
