let audio = new Audio();
audio.src = ('./sounds/hollowCoves.mp3');


function myFunction() {
    audio.play();
  }




$("#close").click(function(event){
    audio.pause();
    audio.src = ('./sounds/greenteaPeng.mp3');
    $('#advert').hide();
    $('#dateNight').hide();
    $('#downer').show();
    $('#clickHere').show();
});

$("#clickHere").click(function(event){
    audio.play();
    $('#downer').hide();
    $('#clickHere').hide();
    $('#formContainer').show();
});



$("#checkAnswer").click(function(event){
    let value = document.getElementById("answer").value;
    console.log(value);

    function myFunction() {
        if (value == "bp") {
            $('#formContainer').hide();
            $('#parrottForm').show();
         }else {
            window.alert("Try again")
         }
      }
    myFunction()
});

$("#checkBar").click(function(event){
    let dog = document.getElementById("dogAnswer").value;
    console.log(dog);

    function myFunction() {
        if (dog == "parrotdog") {
            $('#parrottForm').hide();
            $('#lastOne').show();
         }else {
            window.alert("Try again")
         }
      }
    myFunction()
});
