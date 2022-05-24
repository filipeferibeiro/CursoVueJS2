<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<!-- <hr />
		<b-button variant="primary" class="mb-4" @click="exibir = !exibir"
			>Mostrar Mensagem</b-button
		> -->
		<!-- <transition name="fade" appear>
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
		</transition>
		<transition name="slide" type="animation" appear>
			<b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
		</transition>
		<transition
			enter-active-class="animated bounce"
			leave-active-class="animated shake"
		>
			<b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
		</transition> -->
		<!-- <hr />
		<b-select v-model="tipoAnimacao" class="mb-4">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</b-select>
		<transition :name="tipoAnimacao" mode="out-in">
			<b-alert variant="info" show v-if="exibir" key="info">{{
				msg
			}}</b-alert>
			<b-alert variant="warning" show v-else key="warn">{{
				msg
			}}</b-alert>
		</transition>
		<hr />
		<b-button variant="primary" @click="exibir2 = !exibir2"
			>Alternar</b-button
		>
		<transition
			:css="false"
			@before-enter="beforeEnter"
			@enter="enter"
			@before-leave="beforeLeave"
			@leave="leave"
		>
			<div class="caixa" v-if="exibir2"></div>
		</transition>
		<hr />
		<div class="mb-4">
			<b-button
				variant="primary"
				class="mr-2"
				@click="componenteSelecionado = 'AlertaInfo'"
				>Info</b-button
			>
			<b-button
				variant="secondary"
				@click="componenteSelecionado = 'AlertaAdvertencia'"
				>Advertência</b-button
			>
		</div>
		<transition name="slide" mode="out-in">
			<component :is="componenteSelecionado"></component>
		</transition> -->
		<hr />
		<b-button @click="adicionarAluno" class="mb-4" variant="primary"
			>Adicionar Aluno</b-button
		>
		<b-list-group>
			<transition-group name="slide" tag="div">
				<b-list-group-item
					v-for="(aluno, i) in alunos"
					:key="aluno"
					@click="removerAluno(i)"
				>
					{{ aluno }}
				</b-list-group-item>
			</transition-group>
		</b-list-group>
	</div>
</template>

<script>
import AlertaInfo from "./AlertaInfo.vue";
import AlertaAdvertencia from "./AlertaAdvertencia.vue";
export default {
	data: () => ({
		msg: "Uma mensagem de informação para o usuário!",
		exibir: false,
		tipoAnimacao: "fade",
		exibir2: true,
		larguraBase: 0,
		componenteSelecionado: "AlertaInfo",
		alunos: ["Roberto", "Julia", "Teresa", "Filipe"],
	}),
	methods: {
		adicionarAluno() {
			this.alunos.push(Math.random().toString(32).substring(2));
		},
		removerAluno(index) {
			this.alunos.splice(index, 1);
		},
		animar(el, done, negativo) {
			let rodada = 1;
			const temporizador = setInterval(() => {
				const novaLargura =
					this.larguraBase + (negativo ? -rodada * 10 : rodada * 10);
				el.style.width = `${novaLargura}px`;
				rodada++;
				if (rodada > 30) {
					clearInterval(temporizador);
					done();
				}
			}, 20);
		},
		beforeEnter(el) {
			this.larguraBase = 0;
			el.style.width = `${this.larguraBase}px`;
		},
		enter(el, done) {
			this.animar(el, done, false);
		},
		/* afterEnter(el) {
            console.log("afterEnter");
        },
        enterCancelled(el) {
            console.log("enterCancelled");
        }, */
		beforeLeave(el) {
			this.larguraBase = 300;
			el.style.width = `${this.larguraBase}px`;
		},
		leave(el, done) {
			this.animar(el, done, true);
		},
		/* afterLeave(el) {
            console.log("afterLeave");
        },
        leaveCancelled() {
            console.log("leaveCancelled");
        }, */
	},
	components: { AlertaInfo, AlertaAdvertencia },
};
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.5rem;
}

.caixa {
	height: 100px;
	width: 300px;
	margin: 30px auto;
	background-color: lightgreen;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 1s;
}
/* .fade-enter-to {
	opacity: 1;
}
.fade-leave {
	opacity: 1;
} */

@keyframes slide-in {
	from {
		transform: translateY(40px);
	}
	to {
		transform: translateY(0);
	}
}

@keyframes slide-out {
	from {
		transform: translateY(0);
	}
	to {
		transform: translateY(40px);
	}
}

.slide-enter,
.slide-leave-to {
	opacity: 0;
}
.slide-enter-active {
	animation: slide-in 2s ease;
	transition: opacity 2s;
}

.slide-leave-active {
	position: absolute;
	width: 100%;
	animation: slide-out 2s ease;
	transition: opacity 2s;
}
.slide-move {
	transition: transform 2s;
}
</style>
