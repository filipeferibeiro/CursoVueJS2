<template>
	<aside v-show="isMenuVisible" class="menu">
		<div class="menu-filter">
			<i class="fa fa-search fa-lg"></i>
			<input class="filter-field" type="text" placeholder="Digite para filtrar..." v-model="treeFilter" />
		</div>
		<Tree :data="treeData" :options="treeOptions" :filter="treeFilter" ref="tree" />
	</aside>
</template>

<script>
import { mapState } from "vuex";
import Tree from "liquor-tree";
import { baseApiUrl } from "@/global";
import axios from "axios";

export default {
	name: "AppMenu",
	components: { Tree },
	computed: mapState(["isMenuVisible"]),
	data: function () {
		return {
			treeFilter: "",
			treeData: this.getTreeData(),
			treeOptions: {
				propertyNames: { text: "name" },
				filter: {
					emptyText: "Categoria não encontrada",
				},
			},
		};
	},
	methods: {
		getTreeData() {
			const url = `${baseApiUrl}/categories/tree`;
			return axios.get(url).then((res) => res.data);
		},
		onNodeSelect(node) {
			this.$router.push({
				name: "articlesByCategory",
				params: { id: node.id },
			});

			if (this.$mq === "xs" || this.$mq === "sm") {
				this.$store.commit("toggleMenu", false);
			}
		},
	},
	mounted() {
		this.$refs.tree.$on("node:selected", this.onNodeSelect);
	},
};
</script>

<style>
.menu {
	grid-area: menu;
	background: linear-gradient(to right, #232526, #414345);

	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
}
.menu .tree-anchor,
.menu .tree-anchor:hover {
	color: #fff !important;
	text-decoration: none;
}
.menu .tree .tree-root .tree-node .tree-content {
	padding: 10px 0;
}
.menu .tree .tree-root .tree-node.selected > .tree-content,
.menu .tree .tree-root .tree-node .tree-content:hover {
	background-color: rgba(255, 255, 255, 0.2);
	border-radius: 10px;
}
.menu .tree .tree-root .tree-node.has-child .tree-content .tree-arrow {
	filter: brightness(3);
}
.menu .tree .tree-filter-empty {
	color: #ccc;
	font-size: 1.3rem;
	display: flex;
	justify-content: center;
	align-items: center;
}

.menu .menu-filter {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20px;
	padding-bottom: 8px;
	border-bottom: 1px solid #aaa;
	gap: 10px;
}
.menu .menu-filter i {
	color: #aaa;
}
.menu input {
	color: #ccc;
	font-size: 1.3rem;
	border: 0;
	outline: 0;
	width: 100%;
	background-color: transparent;
}
</style>
