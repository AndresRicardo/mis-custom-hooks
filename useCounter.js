import { useState } from "react";

export const useCounter = (initialValue = 1, initialStep = 1) => {
	const [counter, setCounter] = useState(initialValue);
	const [step, setStep] = useState(initialStep);

	const increment = (value = 1) => {
		setCounter(counter + value);
	};

	const decrement = (value = 1) => {
		if (counter <= 0) return;

		setCounter(counter - value);
	};

	const reset = () => {
		setCounter(initialValue);
	};

	const incrementStep = (value = 1) => {
		setStep(step + value);
	};

	return {
		counter,
		step,
		increment,
		decrement,
		incrementStep,
		reset,
	};
};
