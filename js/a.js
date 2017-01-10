const seuil=200;
var stop;

stop = prompt("donner le nombre de case souhaité")
stop = parseInt(stop, 10)
/*alert(stop)*/

for (var i = 1; i <= seuil; i++)
	{
		document.getElementById('liste').innerHTML += "<li>"+i+"</li>";
		if (i==stop){i+=200
		}
	
}

