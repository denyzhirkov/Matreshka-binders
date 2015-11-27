/*
Matreshka.js custom binders
created by denyzhirkov@yandex.ru @dolphin4ik
v 1.1
*/

;(function (b) {
if(b){

//htmlSwitch(['first', 'second','third']) - Swithes between text values
//htmlSwitch({'one':'super-text','two':'ultra-text'}) - Swithes between text
b.htmlSwitch = function(arr){
	return {
		setValue: function(v){
			this.innerHTML = arr[v] || '';
		}
	}
};

//cssSwitch(['first', 'second','third']) - Swithes between classes
//cssSwitch({'one':'super-class','two':'ultra-class'}) - Swithes between classes
b.cssSwitch = function(arr){	
	function clear(el){
		for(var i in arr){
			el.classList.remove(arr[i]);
		}
	};
	return {
		setValue: function(v){
			clear(this);
			if(v!==undefined && arr[v]){
				this.classList.add(arr[v]);
			}
		}
	}
};

//numRange([{min,max,f(value,this)},{min,max,f(value,this)}])
b.numRange = function(c){
	return {
		setValue: function(v){
			for (var i = c.length - 1; i >= 0; i--) {
				if(v>=c[i].min && v<=c[i].max){
					return c[i].f(v,this);
				}
			};
			console.log('The value is out of ranges');
		}
	};
};

}
}(MK.binders));