document.addEventListener('DOMContentLoaded', () => {
		// input boxes (incl text)
		const inputBoxes = document.getElementById('inputs');    
		window.addEventListener('DOMContentLoaded', function () {
			chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
				chrome.tabs.sendMessage(tabs[0].id, {}, function (result) {
					inputBoxes.innerHTML = result
				})
			})
		})
		// Resume JSON Data
		document.getElementById('getResume').addEventListener('click', function(){
			var url = chrome.runtime.getURL('data/resume.json');
			fetch(url)
				.then((response) => response.json()) //assuming file contains json
				.then((json) => {
						var resumeEl = document.getElementById("json-renderer")
						var json1 = {"Root":"Parent","Children":{"Children1":{"ChildName":"Child - 1","Children":{"GrandChildren1":{"ChildName":"Grand Child - 1","Children":null},"GrandChildren2":{"ChildName":"Grand Child - 2","Children":null}}},"Children2":{"ChildName":"Child - 2","Children":{"GrandChildren1":{"ChildName":"Grand Child - 1","Children":null},"GrandChildren2":{"ChildName":"Grand Child - 2","Children":null},"GrandChildre3":{"ChildName":"Grand Child - 3","Children":null}}}}}  
						
						function renderTree(tree) {
							var html = "<ul>";
							if( tree instanceof Object) {
								for(var i in tree) {
									html += "<li>" + i;
									html += renderTree(tree[i]);
									html += "</li>";
								}
							}
							else {
								html += "<li>" + tree + "</li>";
							}
							html += "</ul>";
							return html;
						}
					
						document.write(renderTree(json));
						  
						
						
					// for (i in json) {
					// 	// document.getElementById('Resume').innerHTML += i
					// 	// chrome.tabs.executeScript({
					// 		// 	file:"skillinjector.js"
					// 		// })
					// 	// chrome.tabs.executeScript({
					// 	// 	file:"skillinjector.js"
					// 	// })
					// }
					
				})
			
		})
		
		// Get all forms
		document.getElementById('fillForm').addEventListener('click', function(){
			chrome.tabs.executeScript({
				file: "injector.js"
			})
		  })
		})

		