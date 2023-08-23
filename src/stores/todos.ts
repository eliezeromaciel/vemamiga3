import { writable } from 'svelte/store';

export function createStore(initial) {
	let uid = 1;

	const todos = initial.map(({ done, description }) => {
		return {
			id: uid++,
			done,
			description
		};
	});

	const { subscribe, update } = writable(todos);

	return {
		subscribe,
			
		mark: (todo, done) => {
			update($todos => [
				...$todos.filter((t) => t !== todo),
				{ ...todo, done }
			]);
		}
	};
}
