//your code here
let images = document.querySelectorAll(".image")
let count = 1;
images.forEach((image) => {
	image.id = "div"+ count++
})

images.forEach((image) => {
		image.addEventListner("dragstart", (event) => {
		  image.style.opacity = '0.5'
		  event.dataTransfer.setData("text", image.id)  
	})

	image.addEventListener("dragend", (event) => {
		 image.style.opacity = '1'
	})

	let dragEvents = ['dragover', 'dragout', 'drop']
          dragEvents.forEach((drag) => {
                if(drag == 'drop'){
					let imageId = event.dataTransfer.getData("text")
					let draggedImage = document.getElementById(imageId)
					let imageToBeMoved = event.target
				       imageToBeMoved.appendChild(draggedImage)
				}
		  })
})