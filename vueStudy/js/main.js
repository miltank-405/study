(function() {
	'use strict';

	// ========== #2 ==========
	// データを更新するとUIが更新される(その逆も然り)
	// two way data binding (to UI) -- 双方向データバインディング
	var vm = new Vue({
		el: '#app',
		data: {
			todos: [
				'task 1',
				'task 2',
				'task 3'
			]
			// nameは#2で完了
			// name: 'taguchi'
		}
	});
	// ========== /#2 ==========
})();