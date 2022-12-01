<script>
	import banner from '$lib/images/banner.jpg';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="row align-items-center justify-content-between mt-5 pt-3">
	<div class="col-lg-5">
		<h1 class="text-custom-dark fw-bold mb-5 pb-5 display-2">The best way to meet remotely</h1>
		<h3 class="text-custom-dark fw-semibold">Build digital SpaceRooms for your team to make virtual interactions in more human</h3>
		<div class="mt-5 pt-3">
			<a href="/login" class="btn btn-custom-pink fw-bold px-5 py-3 rounded-pill">Try it free</a>
			<a href="/login" class="btn btn-custom-secondary px-5 py-3 fw-bold me-2 rounded-pill text-dark">Book a call</a>
		</div>
	</div>
	<div class="col-lg-6 mt-5 mt-md-0">
		<img src={banner} class="rounded-5 w-100" alt="banner"/>
	</div>
</section>