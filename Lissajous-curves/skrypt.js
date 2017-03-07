function showPic() {
	var ddl = document.getElementById("ltype");
	var selectedValue = ddl.options[ddl.selectedIndex].value;

	if (selectedValue == "selectcard")
	{
		alert("Wbierz zestaw danych!");
	}
	else
		document.getElementById("lissajous").setAttribute("src", "lissajous/" + selectedValue + ".png");
}

var q=0;
var a, b, delta, canvas;
var color;

function drawStroke() {

	canvas = document.getElementById("canvasShape");

	var A=val;
	var B=val;
	var x, y;


	if (canvas.getContext) {
		var ctx = canvas.getContext("2d");
		ctx.strokeStyle=color;
		ctx.lineWidth=3;
		ctx.beginPath();
		if (q<=Math.PI*2)
		{
		    ctx.moveTo(A+A*Math.sin(a*q+delta), B+B*Math.sin(b*q));
		    q += Math.PI/200;
		    ctx.lineTo(A+A*Math.sin(a*q+delta), B+B*Math.sin(b*q));
		}
		ctx.closePath();
		ctx.stroke();
		if (q<=Math.PI*2)
			startAnimation();
	}
	if (q>=Math.PI*2)
		q=0;
}

function validate()
{
	if (q==0)
	{
		a=document.getElementById("paramA").value;
		b=document.getElementById("paramB").value;
		delta=document.getElementById("delta").value;
		color="#"+document.getElementById("picker").value;
		if (a.length==0 || b.length==0 || delta.length==0)
		{
			alert("Podaj wartości parametrów!");
			return false;
		}
		delta*=Math.PI/180;
	}
	return true;
}

function startAnimation() {

	if (validate())
	{
		if (q==0)
		{
			var canvas = document.getElementById("canvasShape");
			if (canvas.getContext) {
				var ctx = canvas.getContext("2d");
				ctx.clearRect(0, 0, canvas.width, canvas.height);
			}
		}
		setTimeout(drawStroke, 10);
	}
}

function clearCanvas() {

	var canvas = document.getElementById("canvasShape");
	if (canvas.getContext) {
		var ctx = canvas.getContext("2d");
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}
}



function glowna()
{
    document.getElementById("glowna").style.display = "block";
    document.getElementById("definicja").style.display = "none";
    document.getElementById("rodzaje").style.display = "none";
    document.getElementById("przyklady").style.display = "none";
    document.getElementById("stworzkrzywa").style.display = "none";
    document.getElementById("controls").style.display = "none";
    document.getElementById("dokumentacja").style.display = "none";
}

function definicja()
{
    document.getElementById("glowna").style.display = "none";
    document.getElementById("definicja").style.display = "block";
    document.getElementById("rodzaje").style.display = "none";
    document.getElementById("przyklady").style.display = "none";
    document.getElementById("stworzkrzywa").style.display = "none";
    document.getElementById("controls").style.display = "none";
    document.getElementById("dokumentacja").style.display = "none";
}

function rodzaje()
{
    document.getElementById("glowna").style.display = "none";
    document.getElementById("definicja").style.display = "none";
    document.getElementById("rodzaje").style.display = "block";
    document.getElementById("przyklady").style.display = "none";
    document.getElementById("stworzkrzywa").style.display = "none";
    document.getElementById("controls").style.display = "none";
    document.getElementById("dokumentacja").style.display = "none";
}

function przyklady()
{
    document.getElementById("glowna").style.display = "none";
    document.getElementById("definicja").style.display = "none";
    document.getElementById("rodzaje").style.display = "none";
    document.getElementById("przyklady").style.display = "block";
    document.getElementById("stworzkrzywa").style.display = "none";
    document.getElementById("controls").style.display = "none";
    document.getElementById("dokumentacja").style.display = "none";
}

function stworzkrzywa()
{
    document.getElementById("glowna").style.display = "none";
    document.getElementById("definicja").style.display = "none";
    document.getElementById("rodzaje").style.display = "none";
    document.getElementById("przyklady").style.display = "none";
    document.getElementById("stworzkrzywa").style.display = "block";
    document.getElementById("controls").style.display = "block";
    document.getElementById("dokumentacja").style.display = "none";
}

function dokumentacja()
{
    document.getElementById("glowna").style.display = "none";
    document.getElementById("definicja").style.display = "none";
    document.getElementById("rodzaje").style.display = "none";
    document.getElementById("przyklady").style.display = "none";
    document.getElementById("stworzkrzywa").style.display = "none";
    document.getElementById("controls").style.display = "none";
    document.getElementById("dokumentacja").style.display = "block";
}

