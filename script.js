btn.onclick = () => {
	event.preventDefault();
	fetch('https://omdbapi.com/?t='+ champ.value  +'&page=1&apikey=')
	.then(response => response.json())
	.then(data => {
		output.textContent = ""
		output.innerHTML = `
		<div>
		<b>Film:</b> ${data.Title}<br>
		<img src="${data.Poster}" width="100rem" id="image"><br>
		<b>Year:</b> ${data.Year}<br>
		<b>Actors:</b> ${data.Actors}<br>
		<b>Released:</b> ${data.Released}<br>
		<b>Runtime:</b> ${data.Runtime}<br>
		</div>
		`

		image.onclick = () => {
			console.log('hey')
			output.innerHTML = `
		<div>
		<b>Film:</b> ${data.Title}<br>
		<img src="${data.Poster}" width="100rem" id="image"><br>
		<b>Year:</b> ${data.Year}<br>
		<b>Actors:</b> ${data.Actors}<br>
		<b>Released:</b> ${data.Released}<br>
		<b>Runtime:</b> ${data.Runtime}<br>
		<b>Plot:</b> ${data.Plot}<br>
		<b>Genre:</b> ${data.Genre}<br>
		<b>Director:</b> ${data.Director}<br>
		</div>
		`
		}
		console.log(data)
	})
}

