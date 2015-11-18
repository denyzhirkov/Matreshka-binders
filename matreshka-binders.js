;(function (b) {
if(b){

//htmlSwitch(['first', 'second','third']) - Swithes between text values
b.htmlSwitch = function(arr){
	return {
		setValue: function(v){
			this.innerHTML = arr[v] || '';
		},
		getValue: function(){
			return arr.indexOf(this.innerHTML);
		}
	}
};

//cssSwitch(['first', 'second','third']) - Swithes between classes
b.cssSwitch = function(arr){	
	function clear(el){
		for (var i = arr.length - 1; i >= 0; i--) {
				el.classList.remove(arr[i]);
			};
	};
	return {
		setValue: function(v){
			clear(this);
			if(v!==undefined && v!=-1 && arr[v]){
				this.classList.add(arr[v]);
			}
		},
		getValue: function(){
			for (var i = this.classList.length - 1; i >= 0; i--) {
				if(arr.indexOf(this.classList[i])){
					return arr.indexOf(this.classList[i]);
				}
			};
			return -1;
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