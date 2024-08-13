//your code here
let images = document.querySelectorAll(".image")
let count = 1;
images.forEach((image) => {
	image.id = "div"+ count++
})

images.forEach((image) => {
    image.addEventListener("dragstart", (event) => {
        image.style.opacity = '0.5';
        event.dataTransfer.setData("text", image.id);
    });

    image.addEventListener("dragend", (event) => {
        image.style.opacity = '1';
    });

    image.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    image.addEventListener("drop", (event) => {
        event.preventDefault();
        let imageId = event.dataTransfer.getData("text");
        let draggedImage = document.getElementById(imageId);
        let tempImage = event.target.style.backgroundImage;
        event.target.style.backgroundImage = draggedImage.style.backgroundImage;
        draggedImage.style.backgroundImage = tempImage;
    });
});