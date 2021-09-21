(function() {
	'use strict';

	// ========== #2 ==========
	// データを更新するとUIが更新される(その逆も然り)
	// two way data binding (to UI) -- 双方向データバインディング
	let vm = new Vue({
		el: '#app',
		data: {
			newItem: '',
			todos: [{
				// 完了しているかも確認したい
				// isDoneキーで完了しているか確認
				title: 'task 1',
				isDone: false
			},{
				title: 'task 2',
				isDone: false
			},{
				title: 'task 3',
				isDone: true
			}]
			// nameは#2で完了
			// name: 'taguchi'
		},
		methods: {
			// addItemについては下記の処理だよ
			addItem: function() {
				var item = {
					title: this.newItem,
					isDone: false
				};
			// addItem: function(e) {
				// e.preventDefault();  htmlで@submit.preventと同じ意味

				// data内のデータには this でアクセスできる
				// this.todos.pushの後にthis.newItemとすると
				// newItemに追加された内容がtodosの末尾に追加されて
				// 結果として<li>要素に反映されるはず
				this.todos.push(item);
				// 値が残るのが気持ち悪いから毎度空にする
				this.newItem = '';
			},
			deleteItem: function(index) {
				if (confirm('are you sure?'))
					this.todos.splice(index, 1);
			}
		}
	});
	// ========== /#2 ==========
})();