function dis(val){
    const display = document.getElementById('inputbox')
    display.value+=val
}

function solve(){
    const display = document.getElementById('inputbox')
    let x=display.value
    let y = eval(x)
    display.value=y
}


function cl(){
    const display = document.getElementById('inputbox');

   display.value = ''
}

function del(){
    const display = document.getElementById('inputbox');
    display.value = display.value.slice(0,-1);

}

function per(){
    const display = document.getElementById('inputbox');
    display.value = display.value/100
}

function x2(){
    const display = document.getElementById('inputbox')
    display.value = Math.pow(display.value,2);   
}

function sin(){
    const display = document.getElementById('inputbox')
    display.value = Math.sin(display.value*(Math.PI/180))
}

function cos(){
    const display = document.getElementById('inputbox')
    display.value = Math.cos(display.value*(Math.PI/180))
}

function tan(){
    const display = document.getElementById('inputbox')
    display.value = Math.tan(display.value*(Math.PI/180))
}

function log(){
    const display = document.getElementById('inputbox')
    display.value = Math.log10(display.value)
}

function root(){
    const display = document.getElementById('inputbox')
    display.value = Math.sqrt(display.value);   
}

function cube(){
    const display = document.getElementById('inputbox')
      display.value = Math.pow(display.value,3);   
    
      
}

function x3(){
    const display = document.getElementById('inputbox')
    display.value = Math.cbrt(display.value);   
}

    function e(){

     const display = document.getElementById('inputbox')
     
    
      display.value = (2.71828182846*display.value);

   
}

  function pi(){
    const display = document.getElementById('inputbox')
     display.value = Math.PI;  
}

function fact(){
    const display = document.getElementById('inputbox')
    
    var i , num , f;
    f=1;

    num = display.value;
    for(i=1; i<=num; i++){
        f = f*i;
    }
    i = i-1;

    display.value = f;
    
}

function rad(){

    const display = document.getElementById('inputbox')
    var radian = Math.rad(display.value*180)/Math.PI;
     radian = display.value;
}
 
function asin(){
    const display = document.getElementById('inputbox')
    display.value = Math.asin(display.value*(Math.PI/180))
}

function acos(){
    const display = document.getElementById('inputbox')
    display.value = Math.acos(display.value*(Math.PI/180))
}

function atan(){
    const display = document.getElementById('inputbox')
    display.value = Math.atan(display.value*(Math.PI/180))
}

function logln(){
    const display = document.getElementById('inputbox')
    display.value = Math.log(display.value)
}

//displa trigonometry function
let snav = document.querySelector('.s-nav')
let showsci = document.querySelector('.btns');
let sd = document.querySelector('.sd');
let hd = document.querySelector('.hd');
let isshow = true;
let isrev = true;
let snav1 = document.querySelector('.snav1')
let rotate = document.querySelector('.rotate');
let rotaterev = document.querySelector('.rotaterev');


function showtrg(){
           showsci.style.display = "grid";
           snav.style.display = "none";
           rotate.style.display = "none";
           rotaterev.style.display = "block";
}
  

  function hidetrg(){
  location.reload()
}


  function inv(){ 
       if(isshow){
        hd.style.display = "none";
        sd.style.display = "grid";
        isshow= false;
       }

       else{
        hd.style.display = "grid";
        sd.style.display = "none";
        isshow = true;

       }
   
  }

// display more function:
let morebutton = document.getElementById('morebutton');
let morefunc = document.querySelector('.morefunction');
let calculator = document.querySelector('.calculator');
let closebtn = document.getElementById('closebtn');
  let back = document.querySelector('.back')
  let siback = document.querySelector('.siback');
  let clbtn = document.querySelector('.clbtn');
  let conbtn = document.querySelector('.conbtn');


 function showmore(){
    calculator.style.display = "none";
    morefunc.style.display= "block";
  
 }

 function hidemore(){
    calculator.style.display = "block";
    morefunc.style.display = "none";
    
 }

 //for unit converter:

 let currency = document.getElementById('currencyconverter');
 let temperature = document.getElementById('tempertureconverter');
 let area = document.getElementById('areaconverter');
  let timeconverter = document.getElementById('timeconverter');
  let pressure = document.getElementById('pressureconverter');
  let weight = document.getElementById('weightconverter');
  let power = document.getElementById('powerconverter');
  let volume = document.getElementById('volumeconverter')
   let discount = document.getElementById('discountcalculator')
   let lengthconverter = document.getElementById('lengthconverter');
   let sipcalculator = document.getElementById('sipcalculator');
   let emical = document.getElementById('emical');

  
  function showln(){
    calculator.style.display = "none";
    morefunc.style.display = "none";
    lengthconverter.style.display = "block";

  }

    function hideln(){
        calculator.style.display = "none";
        morefunc.style.display = "block";
        lengthconverter.style.display = "none";
      
   }
    
   function showsip(){
    calculator.style.display = "none";
    morefunc.style.display = "none";
    sipcalculator.style.display = "block";  
   }

  function hidesip(){
    calculator.style.display = "none";
        morefunc.style.display = "block";
        sipcalculator.style.display = "none";
  } 

  function showemi(){
    calculator.style.display = "none";
    morefunc.style.display = "none";
    emical.style.display = "block";  
  }

  function hideemi(){
    calculator.style.display = "none";
        morefunc.style.display = "block";
        emical.style.display = "none";
  } 

  function showarea(){
    calculator.style.display = "none";
    morefunc.style.display= "none";
    area.style.display = "block";

  
 }

 function hidearea(){
    calculator.style.display = "none";
    morefunc.style.display = "block";
    area.style.display = "none";
 }

 
  
  function showcurr(){
    calculator.style.display = "none";
    morefunc.style.display = "none";
    currency.style.display = "block";

  }

    function hidecurr(){
        calculator.style.display = "none";
        morefunc.style.display = "block";
        currency.style.display = "none";
      
   }
    
   function showtemp(){
    calculator.style.display = "none";
    morefunc.style.display = "none";
    temperature.style.display = "block";  
   }

  function hidetemp(){
    calculator.style.display = "none";
        morefunc.style.display = "block";
        temperature.style.display = "none";
  } 

  function showvol(){
    calculator.style.display = "none";
    morefunc.style.display = "none";
    volume.style.display = "block";  
  }

  function hidevol(){
    calculator.style.display = "none";
        morefunc.style.display = "block";
        volume.style.display = "none";
  } 

  function showpr(){
    calculator.style.display = "none";
    morefunc.style.display = "none";
    pressure.style.display = "block";  
   }

  function hidepr(){
    calculator.style.display = "none";
        morefunc.style.display = "block";
        pressure.style.display = "none";
  } 

  function showpw(){
    calculator.style.display = "none";
    morefunc.style.display = "none";
    power.style.display = "block";  
  }

  function hidepw(){
    calculator.style.display = "none";
        morefunc.style.display = "block";
        power.style.display = "none";
  } 
  

  function showtime(){
    calculator.style.display = "none";
    morefunc.style.display = "none";
    timeconverter.style.display = "block";  
   }

  function hidetime(){
    calculator.style.display = "none";
        morefunc.style.display = "block";
        timeconverter.style.display = "none";
  } 

  function showweight(){
    calculator.style.display = "none";
    morefunc.style.display = "none";
    weight.style.display = "block";  
  }

  function hideweight(){
    calculator.style.display = "none";
        morefunc.style.display = "block";
        weight.style.display = "none";
  } 
  
  function showdiscount(){
    calculator.style.display = "none";
    morefunc.style.display = "none";
    discount.style.display = "block";  
  }

  function hidediscount(){
    calculator.style.display = "none";
        morefunc.style.display = "block";
        discount.style.display = "none";
  } 





// cureency converter:
//to inout :
function sh(val){
    var input_currency = document.getElementById('input_currency')
    input_currency.value+=val
}

//to calculate:
var select = document.querySelectorAll('.currency');
input_currency = document.getElementById('input_currency');
output_currency = document.getElementById('output_currency');

const host = 'api.frankfurter.app';
fetch(`https://${host}/currencies`)
.then((data) => data.json())
.then((data)=>{
    const entries = Object.entries(data);
    // console.log(entries)
    //alert(`10 GBP = ${data.rates.USD}USD`);
      for(i=0; i<entries.length; i++){
        select[0].innerHTML +=` <option value="${entries[i][0]}">${entries[i][0]}</option>`
        select[1].innerHTML +=` <option value="${entries[i][0]}">${entries[i][0]}</option>`

      }
});

function converter(){
    var input_currency_val = input_currency.value;
    if(select[0].value != select[1].value){
        const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${input_currency_val}&from=${select[0].value}&to=${select[1].value}`)
   .then((val) => val.json())
     .then((val)=>{
        output_currency.value = Object.values(val.rates)[0]


     })
    }else{
        alert('please select two different currend')
    }
    }

    //for delete:

function delcurr(){
    var display = document.getElementById('input_currency')
    display.value = display.value.slice(0,-1);
}

function delallcurr(){
    const display = document.getElementById('input_currency')
    display.value ='';
    output_currency.value = ''
}




//temperature converter:
function distem(val){
    var inputTemp = document.getElementById('inputtemp')
    inputTemp.value+=val
}


var inputTemp = document.getElementById('inputtemp')

var resultTemp = document.getElementById('resulttemp')

var inputTempType = document.getElementById('inputTempType')

var resultTempType = document.getElementById('resultTempType')

var optiontem_form , optiontem_to;



inputTemp.addEventListener("keyup",tempResult);
inputTempType.addEventListener("change",tempResult);

resultTempType.addEventListener("change",tempResult);

optiontem_form = inputTempType.value;
optiontem_to = resultTempType.value;

function tempResult(){
optiontem_form  = inputTempType.value;
optiontem_to = resultTempType.value;

if(optiontem_form === "Celsius" && optiontem_to === "Celsius"){
    resultTemp.value = Number(inputTemp.value);
}

else if(optiontem_form  === "Celsius" && optiontem_to === "Fahrenheit"){
    resultTemp.value = Number((inputTemp.value*9/5)+32);
}

else if(optiontem_form  === "Celsius" && optiontem_to === "Kelvin"){
    resultTemp.value = Number(inputTemp.value)+273.15;
}


if(optiontem_form  === "Fahrenheit" && optiontem_to === "Celsius"){
    resultTemp.value = Number((inputTemp.value-32)*5/9);
}

else if(optiontem_form  === "Fahrenheit" && optiontem_to=== "Fahrenheit"){
    resultTemp.value = Number(inputTemp.value);
}

else if(optiontem_form  === "Fahrenheit" && optiontem_to === "Kelvin"){
    resultTemp.value = Number((inputTemp.value-32)*5/9)+273.15;
}


if(optiontem_form  === "Kelvin" && optiontem_to === "Celsius"){
    resultTemp.value = Number((inputTemp.value)-273.15);
}

else if(optiontem_form  === "Kelvin" && optiontem_to === "Fahrenheit"){
    resultTemp.value = Number(((inputTemp.value)-273.15)*9/5)+32;
}

else if(optiontem_form  === "Kelvin" && optiontem_to === "Kelvin"){
    resultTemp.value = Number(inputTemp.value);
}
}

    //for delete:
    function deltem(){
        var inputTemp = document.getElementById('inputtemp')
        inputTemp.value = inputTemp.value.slice(0,-1);
    }

    function delalltem(){
        const inputTemp = document.getElementById('inputtemp')
        inputTemp.value ='';
        resultTemp.value=''
    }
    


// area calculator
//to input :
function disar(val){
    var inputValue = document.getElementById('areaInput')
    inputValue.value+=val
}
  
  
function convertArea(){
    
  // Get the input value and selected units
 
    var inputValue = parseFloat(document.getElementById("areaInput").value);
   var fromUnit = document.getElementById("fromAreaUnit").value;
  var toUnit = document.getElementById("toAreaUnit").value;
  var areaResult  =document.getElementById("areaResult")


    // Define conversion factors for various units 
    const conversionFactors = {
        sqMeter: 1,
        sqKilometer: 0.000001,
        sqCentimeter: 10000,
        sqMillimeter: 1000000,
        acre: 0.000247105,
        hectare: 0.0001,
        sqMile: 3.861e-7,
        sqYard: 1.19599,
        sqFoot: 10.7639,
        sqInch: 1550.0031
    };

    // Perform the conversion
     result = inputValue * (conversionFactors[toUnit] / conversionFactors[fromUnit]);

    //  result
     document.getElementById("areaResult").textContent = `${result.toFixed(2)}`;

}
//for delete:

function delarea(){
    var display = document.getElementById('areaInput')
    display.value = display.value.slice(0,-1);
}

function delallarea(){
    const display = document.getElementById('areaInput')
    display.value ='';
    areaResult.innerText = ''
}


//convert time
//to input :
function disti(val){
    var inputValue = document.getElementById('timeInput')
    inputValue.value+=val
}

function convertTime() {
    // Get the input value, and selected units
    const inputValue = parseFloat(document.getElementById("timeInput").value);
    const fromUnit = document.getElementById("fromTimeUnit").value;
    const toUnit = document.getElementById("toTimeUnit").value;
    const timeResult =   document.getElementById("timeResult");

    // Define conversion factors for various units 
    const conversionFactors = {
        second: 1,
        millisecond: 1000,
        minute: 1 / 60,
        hour: 1 / 3600,
        day: 1 / 86400,
        week: 1 / 604800,
        month: 1 / 2628000,
        year: 1 / 31536000
    };

    // Perform the conversion
    const result = inputValue * (conversionFactors[toUnit] / conversionFactors[fromUnit]);

    // Display the result
    document.getElementById("timeResult").textContent = `${result.toFixed(2)}`;
}

//for delete:

function deltime(){
    var display = document.getElementById('timeInput')
    display.value = display.value.slice(0,-1);
}

function delalltime(){
    const display = document.getElementById('timeInput')
    display.value ='';
    timeResult.innerText=''
}



// Weight Conversion
function diswe(val){
    var inputValue = document.getElementById('weightInput')
    inputValue.value+=val
}

function convertWeight() {
    // Get the input value and selected units
    const inputValue = parseFloat(document.getElementById("weightInput").value);
    const fromUnit = document.getElementById("fromWeightUnit").value;
    const toUnit = document.getElementById("toWeightUnit").value;
    const weightResult =   document.getElementById("weightResult");

    // Define conversion factors for various units 
    const conversionFactors = {
        gram: 1,
        kilogram: 0.001,
        milligram: 1000,
        metricTon: 0.000001,
        longTon: 0.000984207,
        shortTon: 0.00110231,
        pound: 0.00220462,
        ounce: 0.03527396,
        carat: 5
    };

    // Perform the conversion
    const result = inputValue * (conversionFactors[toUnit] / conversionFactors[fromUnit]);

    // Display the result
    document.getElementById("weightResult").textContent = `${result.toFixed(2)}`;
}

//for delete:

function delwe(){
    var display = document.getElementById('weightInput')
    display.value = display.value.slice(0,-1);

}

function delallwe(){
    const display = document.getElementById('weightInput')
    display.value ='';
    weightResult.innerText = ''
}


// volume Conversion
function disvl(val){
    var inputValue = document.getElementById('volumeInput')
    inputValue.value+=val
}

function convertVolume() {
    // Get the input value and selected units
    const inputValue = parseFloat(document.getElementById("volumeInput").value);
    const fromUnit = document.getElementById("fromVolumeUnit").value;
    const toUnit = document.getElementById("toVolumeUnit").value;
    const volumeResult =  document.getElementById("volumeResult");

    // Define conversion factors for various units 
    const conversionFactors = {
        cubicmeter: 1,
        cubiccentimeter:.000001,
        cubicmilimeter:.000000001,
        acrefoot:1233.482,
        barrel:.1589873,
        cubicFoot:.02831685,
        Gallon:.004546087,
        Liter:.001
    };

    // Perform the conversion
    const result = inputValue * (conversionFactors[toUnit] / conversionFactors[fromUnit]);

    // Display the result
    document.getElementById("volumeResult").textContent = `${result.toFixed(2)}`;
}
//for delete:

function delvol(){
    var display = document.getElementById('volumeInput')
    display.value = display.value.slice(0,-1);
}

function delallvol(){
    const display = document.getElementById('volumeInput')
    display.value ='';
    volumeResult.innerText = ''
}

//power converter:
function dispw(val){
    var inputValue = document.getElementById('powerInput')
    inputValue.value+=val
}

function convertPower() {
    // Get the input value and selected units
    const inputValue = parseFloat(document.getElementById("powerInput").value);
    const fromUnit = document.getElementById("fromPowerUnit").value;
    const toUnit = document.getElementById("toPowerUnit").value;
     const powerResult =  document.getElementById("powerResult");

    // Define conversion factors for various units 
    const conversionFactors = {
          watt:1,
          kilowatt:1000,
          megawatt:1000000,
          milliwatt: .001,
          footpoundforcesec:1.355818,
          horsepower:745.7,
          kilocaloriesec:4184,
          caloriesec:4.184
    };

    // Perform the conversion
    const result = inputValue * (conversionFactors[toUnit] / conversionFactors[fromUnit]);

    // Display the result
    document.getElementById("powerResult").textContent = `${result.toFixed(2)}`;
}
//for delete:

function delpw(){
    var display = document.getElementById('powerInput')
    display.value = display.value.slice(0,-1);
}

function delallpw(){
    const display = document.getElementById('powerInput')
    display.value ='';
    powerResult.innerText=''
}




//presure conversion:
//take input:
function dispr(val){
    var inputValue = document.getElementById('pressureInput')
    inputValue.value+=val
}

function convertPressure() {
    // Get the input value and selected units
    const inputValue = parseFloat(document.getElementById("pressureInput").value);
    const fromUnit = document.getElementById("fromPressureUnit").value;
    const toUnit = document.getElementById("toPressureUnit").value;
    const pressureResult =  document.getElementById("pressureResult");

    // Define conversion factors for various units 
    const conversionFactors = {
        newtonsqmeter:1,
        atmosphere:101325,
        bar: 100000,
        centimetermercury:1333.22,
        kgrforcesqmeter:9.80665,
        millibar:100,
        pascal:1,
        kilopascal:1000,
        torr:133.322

    };

    // Perform the conversion
    const result = inputValue * (conversionFactors[toUnit] / conversionFactors[fromUnit]);

    // Display the result
    document.getElementById("pressureResult").textContent = `${result.toFixed(2)}`;
}
//for delete:

function delpr(){
    var display = document.getElementById('pressureInput')
    display.value = display.value.slice(0,-1);
}

function delallpr(){
    const display = document.getElementById('pressureInput')
    display.value ='';
    pressureResult.innerText=''
}


// Length Conversion

//to input:
function show(val){
    var input = document.getElementById('lengthInput')
    input.value+=val
}


function convertLength() {
    // Get the input value, and selected units
    const inputValue = parseFloat(document.getElementById("lengthInput").value);
    const fromUnit = document.getElementById("fromLengthUnit").value;
    const toUnit = document.getElementById("toLengthUnit").value;
    const lengthResult = document.getElementById("lengthResult");

    // Define conversion factors for various units
    const conversionFactors = {
        meter: 1,
        kilometer: 0.001,
        centimeter: 100,
        millimeter: 1000,
        micrometer: 1000000,
        mile: 0.000621371,
        yard: 1.09361,
        foot: 3.28084,
        inch: 39.3701
    };

    // Perform the conversion
    const result = inputValue * (conversionFactors[toUnit] / conversionFactors[fromUnit]);

    // Display the result
    document.getElementById("lengthResult").textContent = `${result.toFixed(2)}`;
}

//for deltee
function delln(){
    const display = document.getElementById('lengthInput');
    display.value = display.value.substring(0, display.value.length-1);
}   

function delallln(){
    const display = document.getElementById('lengthInput');
    display.value = '';
    lengthResult.innerText=''
}



//calculate sip:

var sipslider = document.querySelector('.sipslider');
  var sipsliderrate = document.querySelector('.sipsliderrate');
  var sipslideryears = document.querySelector('.sipslideryears');
 var amountInvested = document.getElementById('sipamount');
var rateOfReturn = document.getElementById('rate')
var time = document.getElementById('years')

      var outputamount = document.getElementById('amountI') 
  var outputfutureamount = document.getElementById('futureValue')

  amountInvested.value = sipslider.value;
  rateOfReturn.value = sipsliderrate.value;
  time.value = sipslideryears.value;
    
    sipslider.oninput = function(){
        amountInvested.value = this.value;
    }

    sipsliderrate.oninput = function(){
        rateOfReturn.value= this.value;
    }

    sipslideryears.oninput = function(){
        time.value = this.value;
    }

    function sipreset(){
     
        amountInvested.value = ''
        rateOfReturn.value = ''
        time.value = ''
        outputamount.innerText= ''
        outputfutureamount.innerText = '' 
        sipslider.value=0 
        sipsliderrate.value=0
        sipslideryears.value=0
    }

function calculateSIP(){
    var monthlyRate = rate.value/12/100;
    var months = time.value*12;
    var futureValue = 0;

    futureValue = amountInvested.value*(Math.pow(1+monthlyRate, months)-1)/monthlyRate;
     var amountTotalInvested = amountInvested.value*months;

     document.getElementById("amountI").innerHTML = amountTotalInvested;
     document.getElementById("futureValue").innerHTML = Math.round(futureValue>0?futureValue:0);
}

// calculate emi:

  var slider = document.querySelector('.slider');
  var sliderrate = document.querySelector('.sliderrate');
  var slideryears = document.querySelector('.slideryears');
  var loanAmount = document.getElementById("amount");
  var interestRate = document.getElementById("interest");
  var loanDuration = document.getElementById("loantenure");

  var outputemi = document.getElementById("emi");
  var outputtotalinterest =  document.getElementById("totalinterest");
  var outputotalpayment =  document.getElementById("totalpayment");


    loanAmount.value = slider.value;
    interestRate.value = sliderrate.value;
    loanDuration.value = slideryears.value;
    
    slider.oninput = function(){
        loanAmount.value = this.value;
    }

    sliderrate.oninput = function(){
        interestRate.value= this.value;
    }

    slideryears.oninput = function(){
        loanDuration.value = this.value;
    }


 
 let submit = document.getElementById("calculate");

    submit.addEventListener('click', (e)=>{
       e.preventDefault();
        calculateEMI();
    })


    function calculateEMI(){      
         
//      //calculate the total number of months in loan tenure if selected year
        let isYear = document.getElementById("year").checked;
        let isMonth = document.getElementById("month").checked;
         let noOfMonths = 0;

     if(isYear == ""&& isMonth==""){
            alert("please select loan tenure type -> Month or Year");
      } else{
          if(isYear==true){
              noOfMonths = loanDuration.value*12;
            }else{
                noOfMonths = loanDuration.value;
            }

           let r = parseFloat(interestRate.value)/12/100;
          let p = loanAmount.value;

           let n = noOfMonths;

           //formula emi = (p*r*(1+r)^n)/((1+r^n-1))

            let EMI = (p*r*Math.pow((1+r),n)) / (Math.pow((1+r),n)-1);

            let totalInterest = (EMI*n) - p;

           let totalPayment = totalInterest + parseFloat(p);

         document.getElementById("emi").innerText = "₹" + Math.round(EMI);
         document.getElementById("totalinterest").innerText= "₹" + Math.round(totalInterest);
          document.getElementById("totalpayment").innerText= "₹" + Math.round(totalPayment); 

      } 
  } 
  function emireset(){ 
    loanAmount.value = ''
    interestRate.value = ''
    loanDuration.value = ''
    outputemi.innerText = ''
    outputtotalinterest.innerText = ''
    outputotalpayment.innerText = ''
    slider.value =0
    sliderrate.value=0
    slideryears.value=0
    
}


//for discount:
function disdcoamount(){
    var screen = document.getElementById('bill-amount');
    var btn = document.querySelectorAll('.btn');

    for(item of btn){
       item.addEventListener('click', (e)=>{
           btnText = e.target.innerText;
        
           screen.value += btnText;
       })
       
    }
 }

//calculate discount:
const calculate = document.getElementById('caldis');
let billAmount = document.getElementById('bill-amount').value;
let percentage = document.getElementById('discount_per').value;
let discountAmt = document.getElementById('discount-amount');
let finalpay = document.getElementById('pay');

caldis.addEventListener('click',(e)=>{
    e.preventDefault();

     let billAmount = document.getElementById('bill-amount').value;
      let percentage = document.getElementById('discount_per').value;
      let discountAmt = document.getElementById('discount-amount');
     let finalpay = document.getElementById('pay');

    discountAmt.value = (billAmount*percentage)/100;
    finalpay.value = billAmount- discountAmt.value;
})

function redic(){
   billAmount.value = ''
   percentage.value= ''
   discountAmt.value =''
   finalpay.value=''
}

function remdic(){
    const display = document.getElementById('bill-amount');
    display.value = display.value.slice(0,-1);
}


