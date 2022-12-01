<script>
	import { onMount } from 'svelte';
	import Header from './Header.svelte';
	import { getAuth, onAuthStateChanged, signInWithCustomToken } from 'firebase/auth';
	import './styles.css';
	import { goto } from '$app/navigation';
	import { getClientApp } from '$lib/firebase/client';
	import { isLoggedIn } from './stores/authStore';

	onMount(() => {
		const auth = getAuth(getClientApp());

		const token = localStorage.getItem('accessToken');
		if (token) {
			signInWithCustomToken(auth, token)
				.then((userCredential) => {
					const user = userCredential.user;
					console.log(user);
				})
				.catch((err) => console.error(err));
		}

		onAuthStateChanged(auth, (user) => {
			if (user) {
				isLoggedIn.update(() => true);
			} else {
				isLoggedIn.update(() => false);
				goto('/login');
			}
		});
	});
</script>

<div class="app">
	<Header />

	<main class="container-fluid px-lg-5">
		<slot />
	</main>
</div>
