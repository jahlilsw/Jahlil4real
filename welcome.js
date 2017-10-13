//the document.onload is an event that trigger
      //the function myFunction() when the documents is loaded 
      document.onload = myFunction();

      //myFunction now searchs for the id 
      function myFunction(){
      	var messageList = ["Happy Friday", " Party night", "pay day"];
         var randomNumber = Math.floor(Math.random() * messageList.length);
        document.getElementById("welcomeMsg").innerHTML =  messageList[randomNumber];
       }