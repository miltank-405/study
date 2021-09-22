(function() {
	'use strict';
	let vm = new Vue({
		el: '#app',
		data: {
			newItem: '',
			todos: []
		},
		methods: {
			addItem: function() {
				var item = {
					title: this.newItem,
					isDone: false
				};
				this.todos.push(item);
				this.newItem = '';
			},
			deleteItem: function(index) {
				if (confirm('are you sure?'))
					this.todos.splice(index, 1);
			}
		},
		// todoの残数を表示していく
		// computedはデータから動的にプロパティを計算してくれる算出プロパティ
		computed: {
			remaining: function() {
				let items = this.todos.filter(function(todo){
					return !todo.isDone;
				});
				return items.length;
			}
		}
	});
})();