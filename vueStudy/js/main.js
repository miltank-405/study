(function() {
	'use strict';

	// ========== #2 ==========
	// データを更新するとUIが更新される(その逆も然り)
	// two way data binding (to UI) -- 双方向データバインディング
	var vm = new Vue({
		el: '#app',
		data: {
			newItem: '',
			todos: [
				'task 1',
				'task 2',
				'task 3'
			]
			// nameは#2で完了
			// name: 'taguchi'
		},
		methods: {
			// addItemについては下記の処理だよ
			addItem: function() {

			// addItem: function(e) {
				// e.preventDefault();  htmlで@submit.preventと同じ意味

				// data内のデータには this でアクセスできる
				// this.todos.pushの後にthis.newItemとすると
				// newItemに追加された内容がtodosの末尾に追加されて
				// 結果として<li>要素に反映されるはず
				this.todos.push(this.newItem);
				// 値が残るのが気持ち悪いから毎度空にする
				this.newItem = '';
			}
		}
	});
	// ========== /#2 ==========
})();