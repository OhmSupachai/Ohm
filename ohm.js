console.log('Hi');

setTimeout(function(){
	console.log('My name is Ohm.');
},2000);

function ohm(callback) {
	setTimeout(function(){
		var r = 'I like Japanese food.';
		callback(r);
	},3000);
}

function main () {
	ohm(function(r) {
		console.log(r);
	});
}
//555555

main();
