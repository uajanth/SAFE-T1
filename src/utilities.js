export const drawRect = (detections, ctx) => {
	// Loop through each prediction
	detections.forEach((prediction) => {
		console.log(212121, prediction);
		let color = "";

		if (prediction.class === "person") {
			color = "008000";
		}

		if (prediction.class === "cell phone") {
			color = "FF0000";
		}
		// Extract boxes and classes
		const [x, y, width, height] = prediction["bbox"];
		const text = prediction["class"];

		// Set styling
		ctx.strokeStyle = "#" + color;
		ctx.font = "18px Arial";

		// Draw rectangles and text
		ctx.beginPath();
		ctx.fillStyle = "#" + color;
		ctx.fillText(text, x, y);
		ctx.rect(x, y, width, height);
		ctx.stroke();
	});
};
