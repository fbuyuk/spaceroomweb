<script>
	import { page } from '$app/stores';
	import { logout } from '$lib/firebase/client';
	import logo from '$lib/images/logo.jpeg';
	import { isLoggedIn } from './stores/authStore';
</script>

<header>
	<div class="container-fluid py-2 px-lg-5">
		<div
			class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
		>
			<a
				href="/"
				class="d-flex align-items-center mb-2 mb-lg-0 text-dark fw-bold fs-1 text-decoration-none"
			>
				<img src={logo} width="120" alt="SpaceRoom" />
			</a>

			<ul class="nav gap-5 col-12 col-lg-auto mx-lg-auto mb-2 justify-content-center mb-md-0">
				<li><a href="/solutions" class="nav-link px-2 text-dark fw-bold">Solutions</a></li>
				<li><a href="/pricing" class="nav-link px-2 text-dark fw-bold">Pricing</a></li>
				<li><a href="/company" class="nav-link px-2 text-dark fw-bold">Company</a></li>
			</ul>

			<div class="text-end">
				{#if $isLoggedIn}
					<a
						href="/"
						on:click|preventDefault={logout}
						class="btn btn-custom-secondary px-5 py-3 fw-bold me-2 rounded-pill text-dark">Logout</a
					>
				{:else}
					<a
						href="/login"
						class="btn btn-custom-secondary px-5 py-3 fw-bold me-2 rounded-pill text-dark">Login</a
					>
					<a href="/login" class="btn btn-custom-pink fw-bold px-5 py-3 rounded-pill">Get started</a
					>
				{/if}
			</div>
		</div>
	</div>
</header>
