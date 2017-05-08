var button = document.getElementById("down")

// function down(){
// 		document.body.scrollTop = 2000;
		
// };

button.onclick = down;

var returnUp;

function down() {
		returnUp = setInterval(function() {
		document.body.scrollTop += 20;

			if(document.body.scrollTop >= 2000) {
				clearInterval(returnUp);
			}
	}, 5);
};