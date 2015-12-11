/*
Matreshka.js custom binders
created by denyzhirkov@yandex.ru @dolphin4ik
v 1.3
*/

;(function (b) {
if(b){

//htmlSwitch(['first', 'second','third'],default) - Swithes between text values
//htmlSwitch({'one':'super-text','two':'ultra-text'},default) - Swithes between text
b.htmlSwitch = function(arr,dflt){
	return {
		setValue: function(v){
			this.innerHTML = arr[v] || dflt || '';
		}
	}
};

//cssSwitch(['first', 'second','third'],default) - Swithes between classes
//cssSwitch({'one':'super-class','two':'ultra-class'},default) - Swithes between classes
b.cssSwitch = function(arr,dflt){	
	function clear(el){
		if(dflt!==undefined){
			el.classList.remove(dflt);
		}
		for(var i in arr){
			el.classList.remove(arr[i]);
		}
	};
	return {
		setValue: function(v){
			clear(this);
			if(v!==undefined && arr[v]){
				this.classList.add(arr[v]);
			}else if(dflt){
				this.classList.add(dflt);
			}
		}
	}
};

//attrSwitch('attr',['first', 'second','third'],default) - Swithes between attr values
//attrSwitch('attr',{'one':'value1','two':'value2'},default) - Swithes between attr values
b.attrSwitch = function(attr,arr,dflt){	
	return {
		setValue: function(v){
			if(arr[v] || dflt){
				this.setAttribute(attr, arr[v] || dflt);
			}else{
				this.removeAttribute(attr);
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