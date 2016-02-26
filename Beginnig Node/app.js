function placeAnOrder(number) {
	// body...
	console.log("Customer Orders",number);

	Deliver(function () {
		// body...
	console.log("Delivered Orders Order number :",number);
	}
		);
}
function Deliver(callback) {
	// body...
	setTimeout(callback,5000);
}
//Simulate Web Orders
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);