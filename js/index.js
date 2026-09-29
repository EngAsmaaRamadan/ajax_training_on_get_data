function getData(){
	let xhr = new XMLHttpRequest();
	xhr.open("GET","https://jsonplaceholder.typicode.com/users");
	xhr.setRequestHeader('Content-Type','application/json');
	//Authentication
	//Authorization
	xhr.onload = function(){
		if(xhr.status == 200){
			console.log(JSON.parse(xhr.responseText));
		}
	};
	xhr.onerror = function(){//why error and not print 'error'
		console.log('error');
	};
	xhr.send();
}

function getDataByJQuery(){
	let myData = null;
	$.ajax({
		url:"https://jsonplaceholder.typicode.com/users",
		type:'GET',
		data:"",
		success:function(data){
			console.log(data);
			myData = data;
		},
		error:function(error){
			console.log(error);
		},
	});
	console.log(myData);
}

function callBackFnHell(){
	setTimeout(function(){
		console.log('Hello 1');
		setTimeout(function(){
			console.log('Hello 2');
			setTimeout(function(){
				console.log('Hello 3');
				setTimeout(function(){
					console.log('Hello 4');
				},1000);
			},1000);
		},1000);
	},1000);
	setTimeout(function(){
		console.log('Hello 111');
	},1000);
}

function promiseTry(){
	let myPromise = new Promise(function(resolve,reject){
		myData = ["Asmaa"];//myData = [];
		if(myData.length > 0){
			resolve(myData);
		}else{
			reject('error');
		}
	});
	console.log(myPromise);
	myPromise
	.then(function(res){
		console.log(res);
		return "Hi 1";
	})
	.then(function(data){
		console.log(data);
		return "Hi 2";
	})
	.then(function(data){
		console.log(data);
		return "Hi 3";
	})
	.then(function(data){
		console.log(data);
		return "Hi 4";
	})
	.then(function(data){
		console.log(data);
	})
	.catch(function(msg){
		console.log(msg);
	});
}

function delayLog(status){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
			if(status != 'Hello 3'){
			resolve(status);				
			}else{
				reject('Error');
			}
		},1000);
	});
}

/*
delayLog('Hello')
	.then(function(res){
		console.log(res);
		return delayLog('Hello 11');
	})
	.then(function(data){
		console.log(data);
});
*/

/*
delayLog('Hello 1').then(function(res){
	console.log(res);
	return delayLog('Hello 2');
})
.then(function(res){
	console.log(res);
	return delayLog('Hello 3');
})
.then(function(res){
	console.log(res);
	return delayLog('Hello 4');
})
.then(function(res){
	console.log(res);
})
.catch(function(msg){
	console.log(msg);
});
*/

/*
let myPromise = new Promise(function(resolve,reject){
	let xhr = new XMLHttpRequest();
	xhr.open('GET','https://jsonplaceholder.typicode.com/posts');
	xhr.onload = function(){
		if(xhr.status == 200){
			resolve(JSON.parse(xhr.responseText));
		}else{
			reject('Error');
		}
	};
	xhr.send();
});

myPromise.then(function(res){
	console.log(res);
}).catch(function(msg){
	console.log(msg);
});
*/

function getDataByJQuery2(){
	$.ajax({
		url:'https://jsonplaceholder.typicode.com/users',//why error???
		type:'GET',
		data:'',
		success:function(res){
			console.log(res);
		},
		error:function(res){
			console.log(res);
		},
	}).then(function(){
		console.log('done');
	});
}

/*
$.ajax({
		url:'https://jsonplaceholder.typicode.com/users',
		type:'GET',
		data:'',
		success:function(res){
			console.log(res);
		},
		error:function(res){
			console.log(res);
		},
	}).then(function(){
		console.log('done');
	});
	*/

function fetchFn(){
	fetch("https://jsonplaceholder.typicode.com/users").then(function(data){
		console.log(data);
		return data.json();
	}).then(function(res){
		console.log(res);
	});
}

fetch("https://jsonplaceholder.typicode.com/users").then(function(data){
		console.log(data);
		return data.json();
	}).then(function(res){
		console.log(res);
	});