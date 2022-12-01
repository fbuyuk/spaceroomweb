<script>
	import { loginWithEmailAndPassword, getClientApp } from '$lib/firebase/client';
	import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

	const provider = new GoogleAuthProvider();

	import googleIcon from '$lib/images/google.svg.png';
	import logo from '$lib/images/logo.jpeg';
	import { goto } from '$app/navigation';

	// @ts-ignore
	const handleSubmit = async ({ currentTarget }) => {
		const email = new FormData(currentTarget).get('email');
		const password = new FormData(currentTarget).get('password');
		// @ts-ignore
		await loginWithEmailAndPassword(email, password);
	};

	const loginWithGoogle = () => {
		const auth = getAuth(getClientApp());
		signInWithPopup(auth, provider)
			.then((result) => {
				const credential = GoogleAuthProvider.credentialFromResult(result);
				// @ts-ignore
				const token = credential.accessToken;
				const user = result.user;
				// @ts-ignore
				localStorage.setItem('accessToken', token);
				console.log(user);
				goto('/profile');
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				const email = error.customData.email;
				const credential = GoogleAuthProvider.credentialFromError(error);
			});
	};
</script>

<form
	class="row justify-content-center h-100 align-items-center"
	on:submit|preventDefault={handleSubmit}
>
	<div class="col-md-5 col-lg-4 text-center">
		<div class="mb-4"><img class="mb-4" src={logo} alt="" width="160" /></div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click|preventDefault={loginWithGoogle}
			class="btn btn-lg btn-outline-dark fw-semibold py-3 mb-5 d-flex justify-content-center align-items-center"
		>
			<img class="me-2" src={googleIcon} width="24" alt="google" height="24" /> Google ile devam et
		</div>
		<div class="or mb-5">
			<span>veya</span>
		</div>

		<div class="form-floating mb-4">
			<input
				type="email"
				name="email"
				class="form-control shadow-none"
				id="floatingInput"
				placeholder="name@example.com"
			/>
			<label for="floatingInput">Email address</label>
		</div>
		<div class="form-floating mb-4">
			<input
				type="password"
				class="form-control shadow-none"
				name="password"
				id="floatingPassword"
				placeholder="Password"
			/>
			<label for="floatingPassword">Password</label>
		</div>
		<button class="w-100 btn py-3 btn-lg btn-custom-pink fw-bold text-white fs-3" type="submit"
			>Join Space</button
		>
		<p class="mt-5 mb-3 text-muted">&copy; 2022</p>
	</div>
</form>
