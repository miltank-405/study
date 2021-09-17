(function() {
	'use strict';

	// ========== #2 ==========
	// データを更新するとUIが更新される(その逆も然り)
	// two way data binding (to UI)
	var vm = new Vue({
		el: '#app',
		data: {
			name: 'taguchi'
		}
	});
	// ========== /#2 ==========
})();