console.log('Script starts')



console.log('Declaring function to calculate circumference of circle')

function circumference( ){
    
 
    var circum = document.getElementById('r').value;
    var result = circum*2*3.1415;
    document.getElementById("outputElement").innerHTML= result;
    

}




console.log('Defined circumference = ' + circumference)

console.log('Declaring event listeners')
    window.addEventListener('load', (event) => {
      console.log('  Starting initialization ')
      
      if (localStorage.getItem('sideElement')) {
        document.getElementById('sideElement').value = localStorage.getItem('sideElement')
        console.log(`  Stored sideElement = ${localStorage.sideElement}`)
      }
      
      console.log('  Initialization Finished ')
    })
    const b = document.getElementById('volumeButton')
    if (b){
      b.addEventListener('click', () => {
      console.log('  Starting CalculateVolume button click handler')
      const originalCount = parseInt(localStorage.getItem('countOfClicks')) || 0
      const inputElement = document.getElementById('sideElement').value
      console.log('Side =' + inputElement)
      
      const ct = originalCount + 1
      const result = 'The volume of cube is: ' +volumeOfCube(inputElement)
      document.getElementById('outputElement').innerHTML = result
      localStorage.setItem('countOfClicks', ct) 
      localStorage.setItem('sideElement', inputElement)
      
      console.log(' CalculateCircumference button click handler ended ')
    })
}
const r = document.getElementById('resetButton')
if(r){

    r.addEventListener('click', () => {
      console.log('  resetButton click handler started ')
      localStorage.removeItem('countOfClicks')
      localStorage.removeItem('sideElement')
      
      console.log('  resetButton click handler finished - localStorage entries removed')
    })
}

function ajax_example() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("ajax_demo").innerHTML = this.responseText;
    }
  };
  
  xhttp.open("GET", "./ajax.txt", true);
  xhttp.send();
}

$(document).ready(function(){
  $(".btn1").click(function(){
    $("p").hide();
  });
  $(".btn2").click(function(){
    $("p").show();
  });
});

  console.log('SCRIPT ENDED')
