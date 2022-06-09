<template>
	<div class="calculator">
		<CDisplay :value="displayValue" />
		<CButton label="AC" triple @onClick="clearMemory" />
		<CButton label="/" operation @onClick="setOperation" />
		<CButton label="7" @onClick="addDigit" />
		<CButton label="8" @onClick="addDigit" />
		<CButton label="9" @onClick="addDigit" />
		<CButton label="*" operation @onClick="setOperation" />
		<CButton label="4" @onClick="addDigit" />
		<CButton label="5" @onClick="addDigit" />
		<CButton label="6" @onClick="addDigit" />
		<CButton label="-" operation @onClick="setOperation" />
		<CButton label="1" @onClick="addDigit" />
		<CButton label="2" @onClick="addDigit" />
		<CButton label="3" @onClick="addDigit" />
		<CButton label="+" operation @onClick="setOperation" />
		<CButton label="0" double @onClick="addDigit" />
		<CButton label="." @onClick="addDigit" />
		<CButton label="=" operation @onClick="setOperation" />
	</div>
</template>

<script>
import CDisplay from "../components/CDisplay.vue";
import CButton from "../components/CButton.vue";

export default {
	data: () => ({
		displayValue: "0",
		clearDisplay: false,
		operation: null,
		values: [0, 0],
		current: 0,
	}),
	components: { CDisplay, CButton },
	methods: {
		clearMemory() {
			Object.assign(this.$data, this.$options.data());
		},
		setOperation(operation) {
			if (this.current === 0) {
				this.operation = operation;
				this.current = 1;
				this.clearDisplay = true;
			} else {
				const equals = operation === "=";
				const currentOperation = this.operation;

				try {
					this.values[0] = eval(
						`${this.values[0]} ${currentOperation} ${this.values[1]}`
					);
				} catch (e) {
					this.$emit("onError", e);
				}

				this.values[1] = 0;

				this.displayValue = this.values[0];
				this.operation = equals ? null : operation;
				this.current = equals ? 0 : 1;
				this.clearDisplay = !equals;
			}
		},
		addDigit(n) {
			if (n === "." && this.displayValue.includes(".")) {
				return;
			}

			const clearDisplay = this.displayValue === "0" || this.clearDisplay;
			const currentValue = clearDisplay ? "" : this.displayValue;
			const displayValue = currentValue + n;

			this.displayValue = displayValue;
			this.clearDisplay = false;
			this.values[this.current] = displayValue;
		},
	},
};
</script>

<style>
.calculator {
	height: 320px;
	width: 235px;
	border-radius: 5px;
	overflow: hidden;

	display: grid;
	grid-template-columns: repeat(4, 25%);
	grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>
