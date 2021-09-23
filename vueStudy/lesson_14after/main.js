(function() {
	'use strict';

	// Components

	let likeComponent = Vue.extend({
		template: '<button>Like</button>'
		// 複数の要素を含める場合は、何らかの親要素で囲ってあげる必要がある
		// template: '<div><button>Like</button><button>Like</button></div>'
	});

	let app = new Vue({
		el: '#app',
		components: {
			'like-component': likeComponent
		}
	});

})();