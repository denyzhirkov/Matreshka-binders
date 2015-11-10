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
				if(v!==undefined && v!='-1' && arr[v]){
					this.classList.add(arr[v]);
				}
			},
			getValue: function(){
				for (var i = this.classList.length - 1; i >= 0; i--) {
					if(arr.indexOf(this.classList[i])){
						return this._arr.indexOf(this.classList[i]);
					}
				};
				return '-1';
			}
		}
	};

}
}(MK.binders));