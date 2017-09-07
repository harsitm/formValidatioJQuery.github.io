
var f1,f2,f3,f4,f5,f6;
$("#ipnew").keyup(function(){
		var x=$("#ipnew").val();
		console.log(x);
		var regex=/^[a-zA-Z]+$/;
		if(x.length<3)
		{
			$("#ipnew").css({"border":"5px solid red","color":"red"});
			f1=false;
		}
		else{
		$("#ipnew").css({"border":"5px solid red","color":"black"});
		}
		if(x.length==0){
		
		$("#tooltiptext").css({"opacity":"0","visibility":"hidden"});
		f1=false;
		}
		
		if(x.match(regex))
		{
		$("#ipnew").css({"border":"1px solid white","color":"black"});
		$("#tooltiptext").css({"opacity":"0","visibility":"hidden"});
		f1=true;
		}
		
		else if(x.length>1)
		{
		$("#ipnew").css({"border":"5px solid red","color":"black"});
		$("#tooltiptext").css({"opacity":"1","visibility":"visible"});
		
		}
		else{
		$("#ipnew").css({"border":"1px solid white","color":"black"});
			f1=true;
		}
		});			
		
		
$("#ip1new").keyup(function(){
		var x=$("#ip1new").val();
		console.log(x);
		var regex=/^[a-zA-Z]+$/;
		if(x.length<3)
		{
			$("#ip1new").css({"border":"5px solid red","color":"red"});
			f1=false;
		}
		else{
		$("#ip1new").css({"border":"5px solid red","color":"black"});
		}
		if(x.length==0){
		
		$("#tooltiptext1").css({"opacity":"0","visibility":"hidden"});
		f1=false;
		}
		
		if(x.match(regex))
		{
		$("#ip1new").css({"border":"1px solid white","color":"black"});
		$("#tooltiptext1").css({"opacity":"0","visibility":"hidden"});
		f1=true;
		}
		
		else if(x.length>1)
		{
		$("#ip1new").css({"border":"5px solid red","color":"black"});
		$("#tooltiptext1").css({"opacity":"1","visibility":"visible"});
		
		}
		else{
		$("#ip1new").css({"border":"1px solid white","color":"black"});
			f1=true;
		}
		});			
		
		
		
$("#pass1").keyup(function(){
		var p1=$("#pass1").val();
	var regxp=/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
	if(p1.match(regxp)){
		$("#pass1").css({"border":"1px solid white","color":"black"});
			$("#tooltiptext2").css({"opacity":"0","visibility":"hidden"});
		console.log("Matched");
		f3=true;
	}
	else
	{
	$("#pass1").css({"border":"5px solid red","color":"black"});
		$("#tooltiptext2").css({"opacity":"1","visibility":"visible"});
		console.log("Not Matched");
		f3=false;
	}
	if(p1.length==0){
	$("#pass1").css({"border":"1px solid white","color":"black"});
			$("#tooltiptext2").css({"opacity":"0","visibility":"hidden"});
		f3=false;
	}
	});
	
	
	
$("#pass2").keyup(function(){
		var p1=$("#pass1").val();
		var p2=$("#pass2").val();
		if(p1===p2){
		$("#pass2").css({"border":"1px solid white","color":"black"});
			$("#tooltiptext3").css({"opacity":"0","visibility":"hidden"});
		f4=true;
		}
		else{
		$("#pass2").css({"border":"5px solid red","color":"black"});
		$("#tooltiptext3").css({"opacity":"1","visibility":"visible"});
		console.log("Not Matched");
		f4=false;
		}
		if(p2.length==0){
			$("#pass2").css({"border":"1px solid white","color":"black"});
			$("#tooltiptext3").css({"opacity":"0","visibility":"hidden"});
		f4=false;
		}
	});
		

$("#email1").keyup(function(){
var e1=$("#email1").val();
var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//copied from stackoverflow.com
if(e1.match(re)){
$("#email1").css({"border":"1px solid white","color":"black"});
		$("#tooltiptextemail").css({"opacity":"0","visibility":"hidden"});
		f6=true;
}
else{
$("#email1").css({"border":"5px solid red","color":"black"});
		$("#tooltiptextemail").css({"opacity":"1","visibility":"visible"});
		f6=false;
}
if(e1.length==0)
{
$("#email1").css({"border":"1px solid white","color":"black"});
		$("#tooltiptextemail").css({"opacity":"0","visibility":"hidden"});
		f6=false;
}
});



$("#email2").keyup(function(){
var e1=$("#email1").val();
var e2=$("#email2").val();

if(e1===e2){
$("#email2").css({"border":"1px solid white","color":"black"});
		$("#tooltiptext4").css({"opacity":"0","visibility":"hidden"});
		f5=true;
}

else{
$("#email2").css({"border":"5px solid red","color":"black"});
		$("#tooltiptext4").css({"opacity":"1","visibility":"visible"});
		f5=false;
}
});
	

	
function nextpage(){
console.log("f1="+f1+" "+"f2="+f2+" "+"f3="+f3+" "+"f4="+f4+" "+"f5="+f5+" "+"f6="+f6+" ");
//if(f1==true && f2==true && f3==true && f4==true && f5==true && f6==true)
//{
//$("#form1").slideUp(500);
//
//}
$("#box1a").slideUp(500);
$("#box2").slideDown(1000);
//$("#box1a").css("display="none";
//$("#box2").css("display="block";
}


$("#cnumber").keyup(function(){
var numcv=$("#cnumber").val();
var regexp=/^\d\d\d\d\d\d\d\d\d\d$/;
console.log(numcv);
if(numcv.match(regexp)){
console.log("Match");
	$("#cnumber").css({"border":"1px solid white","color":"black"});
		$("#tooltiptext5").css({"opacity":"0","visibility":"hidden"});
}
else{
console.log("No Match");
$("#cnumber").css({"border":"5px solid red","color":"black"});
		$("#tooltiptext5").css({"opacity":"1","visibility":"visible"});
}
if(numcv.length==0){
$("#cnumber").css({"border":"1px solid white","color":"black"});
		$("#tooltiptext5").css({"opacity":"0","visibility":"hidden"});
}
});





$("#cbm").click(function(){
	if($(this)["0"].checked==true){
		$("#cityname2").attr("value",$("#cityname1").val());
		$("#zip2id").attr("value",$("#zip1id").val());
		$("#pstate").attr("value",$("#cstate").val());
		$("#pcountry").attr("value",$("#ccountry").val());
	}
	else
	{
	$("#cityname2").attr("value","");
		$("#zip2id").attr("value","");
		$("#pstate").attr("value","");
		$("#pcountry").attr("value","");	
	}
});
/*
function samedisp(){
console.log("called");
var cname1=$("#cityname1").value;
$("#cityname2").value=cname1;
console.log(cname1);
var zip1=$("#zip1id").value;
$("#zip2id").value=zip1;

var st1=$("#cstate").value;
$("#pstate").value=st1;

var ct1=$("#ccountry").value;
$("#pcountry").value=ct1;
}

*/


$("#zip1id").keyup(function(){
var zc=$("#zip1id").val();
if(zc.length==6){
$("#zip1id").css({"border":"1px solid white","color":"black"});
		$("#tooltiptext6").css({"opacity":"0","visibility":"hidden"});
}
else{
$("#zip1id").css({"border":"5px solid red","color":"black"});
		$("#tooltiptext6").css({"opacity":"1","visibility":"visible"});
}

if(zc.length==0)
{
$("#zip1id").css({"border":"1px solid white","color":"black"});
		$("#tooltiptext6").css({"opacity":"0","visibility":"hidden"});
}
});

$("#zip2id").keyup(function(){
var zc=$("#zip2id").val();
if(zc.length==6){
$("#zip2id").css({"border":"1px solid white","color":"black"});
		$("#tooltiptext7").css({"opacity":"0","visibility":"hidden"});
}
else{
$("#zip2id").css({"border":"5px solid red","color":"black"});
		$("#tooltiptext7").css({"opacity":"1","visibility":"visible"});
}

if(zc.length==0)
{
$("#zip2id").css({"border":"1px solid white","color":"black"});
		$("#tooltiptext7").css({"opacity":"0","visibility":"hidden"});
}
});



function nextpage1(){

$("#box2").slideUp(500);
$("#box3").slideDown(1000);

//$("#box2").css("display="none";
//$("#box3").css("display="block";
}

//Captcha copied from original file
var flag=0;
	var resor=0;
	var flags=0;
	var n1=0;
var n2=0;
function captcha(){
var x=$("#captchan1");
	$("#captchaeq").innerHTML="=";
	var z=$("#captchan2");
	var y=$("#captchasym");
	n1=Math.floor((Math.random()*(100-1+1))+1);
	n2=Math.floor((Math.random()*(100-1+1))+1);
	x.text(n1);
	z.text(n2);
	
	if(n1>n2)
	{
		flag=1;
		var o1=Math.floor((Math.random()*(2-1+1))+1);
		if(o1==1){
			flags=1;
		y.text("/");	
		}
		if(o1==2){
			flags=2;
			y.text("-");
		}
		
	}
	else
	{
		flag=2;
	var o2=Math.floor((Math.random()*(2-1+1))+1);
		if(o2==1){
			flags=3;
		y.text("*");	
		}
		if(o2==2){
			flags=4;
			y.text("+");
		}
	}
	
}
function checkres(){
	
	if(flag==1){
		if(flags==1){
				resor=Math.floor(n1/n2);
		}
		if(flags==2){
			resor=n1-n2;
			
		}
	}
	if(flag==2){
		if(flags==3){
			resor=n1*n2;
			
		}
		if(flags==4){
			resor=n1+n2;
		}
	}
	var res=$("#captchares").val();
	console.log(resor);
	console.log(res);
	if(res!=resor)
	{
		
		$("#validorinvalid").text("Inorrect Captcha");
		captcha();
	}
	else{
		$("#validorinvalid").text("Correct");
		
	}
}

captcha();


//Weather API to be integrated here!
function wc(){
var cname="Bhubaneswar";
var handler=new XMLHttpRequest();
var link="http://api.apixu.com/v1/current.json?key=481d45110351424ebc3104644170409&q="+cname+"";//paste here with proper api
handler.open("GET",link,true);
handler.onreadystatechange=function(){
	if(this.status==200 && this.readyState==4){
	var jsondata=JSON.parse(this.responseText);
	console.log(jsondata);
	var fout=jsondata.location.name+" |";
	fout+="  Humidity:"+jsondata.current.humidity+"%"+" |Temrature:"+jsondata.current.temp_c+"deg"+"   |Windspeed: "+jsondata.current.wind_kph+"kph";
	$("#headerp2").text(fout);
		
	}
};
handler.send();
}
wc();

function nextpagelol(){
$("#box3").slideUp(1000);
$("#box4").slideDown(1000);
}



$("#additemtolist").click(function(){
	var x=$("#itemadd").val();
	var m="<input type='checkbox'checked name='int' value="+x+">"+x+"";
	$(".cbsitem").prepend(m);
	console.log(m);
});