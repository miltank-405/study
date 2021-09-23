(function() {
	'use strict';

	// Components
	let likeComponent = Vue.extend({
		// props: ['message'],
		props: {
			message: {
				type: String,
				default: 'Like'
			}
		},
		data: function() {
			return {
				count: 0
			}
		},
		template: '<button @click="countUp">{{ message }} {{ count }}</button>',
		// 複数の要素を含める場合は、何らかの親要素で囲ってあげる必要がある
		// template: '<div><button>Like</button><button>Like</button></div>'
		methods: {
			countUp: function() {
				this.count++;
				// totalイベント発火
				this.$emit('increment');
			}
		}
	});

	let app = new Vue({
		el: '#app',
		components: {
			'like-component': likeComponent
		},
		data: {
			total: 0
		},
		methods: {
			incrementTotal: function() {
				this.total++;
			}
		}
	});

})();