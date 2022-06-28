<template>
	<div class="user-dropdown">
		<div class="user-button">
			<div class="user-dropdown-img">
				<Gravatar :email="user.email" alt="user" />
			</div>
			<span class="user-dropdown-name d-none d-sm-block">
				{{ user.name }}
			</span>
			<i class="fa fa-angle-down"></i>
		</div>
		<div class="user-dropdown-content">
			<router-link to="/admin">
				<i class="fa fa-cogs" /> Administração
			</router-link>
			<a href=""><i class="fa fa-sign-out" /> Sair</a>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";
import Gravatar from "vue-gravatar";
export default {
	name: "UserDropdown",
	components: { Gravatar },
	computed: mapState(["user"]),
};
</script>

<style>
.user-dropdown {
	position: relative;
	height: 100%;
}
.user-button {
	display: flex;
	align-items: center;
	color: #fff;
	font-weight: 100;
	height: 100%;
	padding: 0 4px;
	border-radius: 10px;
	transition: all 0.2s;
}
.user-button:hover {
	background-color: rgba(0, 0, 0, 0.2);
}
.user-dropdown-name {
	margin: 0 10px;
}
.user-dropdown-img > img {
	max-height: 37px;
	border-radius: 5px;
}
.user-dropdown-content {
	position: absolute;
	right: 0;
	background-color: #f9f9f9;
	min-width: 170px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

	border-radius: 10px;
	padding: 10px;
	z-index: 1;

	display: flex;
	flex-direction: column;
	flex-wrap: wrap;

	visibility: hidden;
	opacity: 0;

	transition: visibility 0s, opacity 0.3s linear;
}
.user-dropdown:hover .user-dropdown-content {
	visibility: visible;
	opacity: 1;
}
.user-dropdown-content a {
	text-decoration: none;
	border-radius: 10px;
	color: #000;
	padding: 10px;
	transition: all 0.2s;

	display: flex;
	gap: 8px;
	align-items: center;
}
.user-dropdown-content a:hover {
	background-color: #dedede;
}
</style>
