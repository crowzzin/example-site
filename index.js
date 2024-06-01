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

function ipcopi() {

	const ipText = document.getElementById('server-ip').innerText;
	navigator.clipboard.writeText(ipText).then(() => {
		return
	}).catch(err => {
		console.error('Erro ao copiar o IP: ', err);
	});
		
	function showMessage(message, duration) {
	var messageBox = document.getElementById("ip");
	var messageSpan = messageBox.querySelector(".ip");

	messageBox.classList.add('box-aparece')

	setTimeout(function() {
		messageBox.classList.remove('box-aparece');
	}, duration);

	}

	showMessage("Ip copiado!", 5000)
}

