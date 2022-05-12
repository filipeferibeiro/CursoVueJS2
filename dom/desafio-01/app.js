new Vue({
	el: "#desafio",
	data: {
		nome: "Filipe",
		idade: 23,
		image: "http://s2.glbimg.com/jsaPuF7nO23vRxQkuJ_V3WgouKA=/e.glbimg.com/og/ed/f/original/2014/06/10/461777879.jpg",
	},
	methods: {
		getRandom() {
			return Math.random();
		},
	},
});
