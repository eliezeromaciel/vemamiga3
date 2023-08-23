<script lg="ts">
	import { send, receive } from './transition.ts';

	export let store;
	export let done;
</script>

<ul class="p-0">
	{#each $store.filter((todo) => todo.done === done) as todo (todo.id)}
		<ul class="p-0"
			class:done
			in:receive={{ key: todo.id }}
			out:send={{ key: todo.id }}
		>
			<label class="container p-0 fluid">
				<div style="outline: solid 1px rgb(218, 210, 210)">{todo.description}</div>
				<input
					type="checkbox"
					style="display: none;"
					checked={todo.done}
					on:change={(e) => store.mark(todo, e.currentTarget.checked)}
				/>
			</label>
		</ul>
	{/each}
</ul>
