document.addEventListener("DOMContentLoaded", function() {

	console.log(`ENTRE EM NOSSO SERVIDOR DO DISCORD http://youtube.com!`)
			
	function showMessage(message, duration) {
	var messageBox = document.getElementById("box");
	var messageSpan = messageBox.querySelector(".mensagem");


	messageBox.classList.add('box-aparece')

	setTimeout(function() {
		messageBox.classList.remove('box-aparece');
	}, duration);

	}

	showMessage("entre em nosso servidor do discord", 5000)
})