var sender1, receiver1, amount1;

function transaction1() {
  sender1 = document.getElementById("sender1").value;
  receiver1 = document.getElementById("receiver1").value;
  amount1 = document.getElementById("amount1").value;
  console.log(sender1);
  setTimeout(() => {
    document.getElementById("loading").innerHTML = "<h4>Loading...</h4>";
  }, 2000);
  alert("Transaction Successfull");
  setTimeout(() => {
    document.getElementById("display1").style.border = "3px solid red";
    document.getElementById("display1").style.marginTop = "5%";
    document.getElementById("display1").style.padding = "5%";
    document.getElementById("display1").style.backgroundColor = "#FCA091";
    document.getElementById("display1").style.boxShadow = "2px 2px 2px 2px grey";
    document.getElementById("display1").innerHTML = "<p>Block Number :2 <br> Block created by : 'd05a059a0b71678bbd45ac<br>1485c713828bf7eb982f0ebdf<br>36d29a47697c2729e' <br> Block Size :2 <br> Timestamp: Fri Jun 24 11:53:38 2022 <br> Total Size:  10 <br> Transaction {</p><p> Sender :" + sender1 + "</p><p> Receiver :" + receiver1 + "</p>  <p> Amount :" + amount1 + "}</p> <h3>Difficulty : 15</h3>";

    document.getElementById("display2").style.border = "3px solid red";
    document.getElementById("display2").style.marginTop = "5%";
    document.getElementById("display2").style.padding = "5%";
    document.getElementById("display2").style.backgroundColor = "#FCA091";
    document.getElementById("display2").style.boxShadow = "2px 2px 2px 2px grey";
    document.getElementById("display2").innerHTML = "<p>Block Number :2 <br> Block created by : 'd05a059a0b71678bbd45ac<br>1485c713828bf7eb982f0ebdf<br>36d29a47697c2729e' <br> Block Size :2 <br> Timestamp: Fri Jun 24 11:53:38 2022 <br> Total Size:  10 <br> Transaction {</p><p> Sender :" + sender1 + "</p><p> Receiver :" + receiver1 + "</p>  <p> Amount :" + amount1 + "}</p> <h3>Difficulty : 15</h3>";


    document.getElementById("display3").style.border = "3px solid red";
    document.getElementById("display3").style.marginTop = "5%";
    document.getElementById("display3").style.padding = "5%";
    document.getElementById("display3").style.backgroundColor = "#FCA091";
    document.getElementById("display3").style.boxShadow = "2px 2px 2px 2px grey";
    document.getElementById("display3").innerHTML = "<p>Block Number :2 <br> Block created by : 'd05a059a0b71678bbd45ac<br>1485c713828bf7eb982f0ebdf<br>36d29a47697c2729e' <br> Block Size :2 <br> Timestamp: Fri Jun 24 11:53:38 2022 <br> Total Size:  10 <br> Transaction {</p><p> Sender :" + sender1 + "</p><p> Receiver :" + receiver1 + "</p>  <p> Amount :" + amount1 + "}</p> <h3>Difficulty : 15</h3>";
    document.getElementById("loading").innerHTML = "<h4>Transaction Successful!</h4>";



  }, 3000);
}

var sender2, receiver2, amount2;
function transaction2() {
  sender2 = document.getElementById("sender2").value;
  receiver2 = document.getElementById("receiver2").value;
  amount2 = document.getElementById("amount2").value;
  setTimeout(() => {
    document.getElementById("load").innerHTML = "<h4>Loading...</h4>";
  }, 2000);
  alert("Transaction Successfull");
  setTimeout(() => {
    document.getElementById("display4").style.border = "3px solid red";
    document.getElementById("display4").style.marginTop = "5%";
    document.getElementById("display4").style.padding = "5%";
    document.getElementById("display4").style.backgroundColor = "#FCA091";
    document.getElementById("display4").style.boxShadow = "2px 2px 2px 2px grey";
    document.getElementById("display4").innerHTML = "<p>Block Number :2 <br> Block created by : 'd05a059a0b71678bbd45ac<br>1485c713828bf7eb982f0ebdf<br>36d29a47697c2729e' <br> Block Size :2 <br> Timestamp: Fri Jun 24 11:53:38 2022 <br> Total Size:  10 <br> Transaction {</p><p> Sender :" + sender2 + "</p><p> Receiver :" + receiver2 + "</p>  <p> Amount :" + amount2 + "}</p>  <h3>Difficulty : 30</p>";

    document.getElementById("display5").style.border = "3px solid red";
    document.getElementById("display5").style.marginTop = "5%";
    document.getElementById("display5").style.padding = "5%";
    document.getElementById("display5").style.backgroundColor = "#FCA091";
    document.getElementById("display5").style.boxShadow = "2px 2px 2px 2px grey";
    document.getElementById("display5").innerHTML = "<p>Block Number :2 <br> Block created by : 'd05a059a0b71678bbd45ac<br>1485c713828bf7eb982f0ebdf<br>36d29a47697c2729e' <br> Block Size :2 <br> Timestamp: Fri Jun 24 11:53:38 2022 <br> Total Size:  10 <br> Transaction {</p><p> Sender :" + sender2 + "</p><p> Receiver :" + receiver2 + "</p>  <p> Amount :" + amount2 + "}</p>  <h3>Difficulty : 30</h3>";


    document.getElementById("display6").style.border = "3px solid red";
    document.getElementById("display6").style.marginTop = "5%";
    document.getElementById("display6").style.padding = "5%";
    document.getElementById("display6").style.backgroundColor = "#FCA091";
    document.getElementById("display6").style.boxShadow = "2px 2px 2px 2px grey";
    document.getElementById("display6").innerHTML = "<p>Block Number :2 <br> Block created by : 'd05a059a0b71678bbd45ac<br>1485c713828bf7eb982f0ebdf<br>36d29a47697c2729e' <br> Block Size :2 <br> Timestamp: Fri Jun 24 11:53:38 2022 <br> Total Size:  10 <br> Transaction {</p><p> Sender :" + sender2 + "</p><p> Receiver :" + receiver2 + "</p>  <p> Amount :" + amount2 + "}</p>  <h3>Difficulty : 30</h3>";
    document.getElementById("load").innerHTML = "<h4>Transaction Successfull</h4>";
   
  }, 7000);
}