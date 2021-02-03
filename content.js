chrome.runtime.onMessage.addListener(function (msg, sender, response) {
		inputboxesObj = document.querySelectorAll('.form-control');
		var result = ''
		for (let i = 0; i < inputboxesObj.length; i++) {
			let item = inputboxesObj[i];
			result += `${i+1} ${item.name} <br />`
		}
		console.log(result)
		response(result)
})

