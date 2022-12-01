<script>
	import banner from '$lib/images/banner.jpg';
	import map from '$lib/images/map.jpg';
	import jquery from 'jquery';
	import Swal from 'sweetalert2';
	import { isLoggedIn } from '../stores/authStore';
	import { logout } from '$lib/firebase/client';

	function editProfile() {
		jquery('#name').addClass('d-none');
		jquery('#editNameInput').removeClass('d-none');
		jquery('#editProfileBtn').addClass('d-none');
		jquery('#editProfileSettings').removeClass('d-none');
	}

	function saveProfile() {
		Swal.fire({
			icon: 'success',
			title: 'Your work has been saved',
			showConfirmButton: false,
			timer: 1500
		});
	}

	function cancelEditProfile() {
		jquery('#name').removeClass('d-none');
		jquery('#editNameInput').addClass('d-none');
		jquery('#editProfileBtn').removeClass('d-none');
		jquery('#editProfileSettings').addClass('d-none');
	}

	function deleteProfile() {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
			}
		});
	}
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="d-flex justify-content-between align-items-center mt-5 border-bottom pb-4">
	<h1 class="fw-semibold display-4">Profile</h1>
	<a
		href="/"
		on:click|preventDefault={logout}
		class="btn btn-custom-secondary fs-6 fw-semibold rounded-3 py-2 px-3">Sign Out</a
	>
</div>
<section class="row mt-5 border-bottom pb-4">
	<div class="col-lg-6 border-end">
		<h2 class="text-custom-dark fw-bold mb-5">Account</h2>
		<div class="d-flex align-items-center">
			<img class="rounded-5" src={banner} width="180" height="180" alt="banner" />
			<div class="ms-4 fw-semibold">
				<div class="">Name</div>
				<div id="name" class="fs-4">Fatih Büyük</div>
				<input
					id="editNameInput"
					class="form-control shadow-none d-none fs-4"
					value="Fatih Büyük"
					type="text"
				/>
				<div class="mt-2">Email</div>
				<div class="fs-4">fbuyukx@gmail.com</div>
			</div>
		</div>
		<div>
			<button
				id="editProfileBtn"
				on:click={editProfile}
				type="button"
				class="btn btn-custom-secondary fw-bold me-2 text-dark rounded-3 mt-4 py-2 px-3"
				>Edit profile</button
			>
			<div
				id="editProfileSettings"
				class="d-flex d-none justify-content-between align-items-center mt-4"
			>
				<div>
					<button
						on:click={saveProfile}
						type="button"
						class="btn btn-custom-pink fw-bold text-dark rounded-3 me-3 py-2 px-3">Save</button
					>
					<button
						on:click={cancelEditProfile}
						type="button"
						class="btn btn-custom-secondary fw-bold text-dark rounded-3 py-2 px-3">Cancel</button
					>
				</div>
				<div>
					<button
						on:click={deleteProfile}
						type="button"
						class="btn btn-outline-dark fw-bold me-2 rounded-3 py-2 px-3"
						><i class="bi bi-trash-fill text-danger" /> Delete Account</button
					>
				</div>
			</div>
		</div>
	</div>
	<div class="col-lg-6 mt-4 mt-md-0">
		<h5>You're using</h5>
		<h2 class="text-custom-dark fw-bold mb-5">Kumospace Free</h2>
		<p>Upgrade your space for:</p>
		<ul>
			<li>Advanced broadcast and presentation tools</li>
			<li>Flexible privacy settings and access controls</li>
			<li>Priority support</li>
			<li>Capacity can be upgraded to up to 1,000 concurrent participants</li>
		</ul>
		<button type="button" class="btn btn-custom-pink fw-bold px-3 py-2 rounded-3"
			>Upgrade Plan</button
		>
	</div>
</section>
<section>
	<div class="d-flex justify-content-between align-items-center mt-5 pb-4">
		<h2 class="text-custom-dark fw-bold mb-5">Your Space</h2>
		<a
			href="/"
			class="btn btn-outline-secondary text-custom-dark fs-6 fw-semibold rounded-3 py-2 px-3"
			>View Recently Visited</a
		>
	</div>
	<div class="d-flex align-items-center border shadow rounded-3">
		<img src={map} width="240" alt="map" />
		<div class="ps-4">
			<h3 class="fw-bold">fbuyuk</h3>
			<p>https://www.kumospace.com/fbuyuk</p>
			<div class="mt-5 d-flex align-items-center">
				<button type="button" class="btn btn-custom-pink fw-bold px-3 py-2 rounded-3"
					>Join Space</button
				>
				<div class="dropdown ms-2">
					<button
						class="btn btn-outline-secondary py-2 dropdown-toggle"
						type="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Menage Space
					</button>
					<ul class="dropdown-menu">
						<li>
							<button class="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal"
								>Edit Space</button
							>
						</li>
						<li><button on:click={deleteProfile} class="dropdown-item">Delete Space</button></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
<div
	class="modal fade"
	id="exampleModal"
	tabindex="-1"
	aria-labelledby="exampleModalLabel"
	aria-hidden="true"
>
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content">
			<div class="modal-header">
				<h1 class="modal-title fs-5" id="exampleModalLabel">Edit Space</h1>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
			</div>
			<div class="modal-body">
				<div>
					<div class="text-custom-dark fw-bold">Space name</div>
					<input class="rounded-3 p-2" name="name" value="fbuyuk" />
					<div>Space name</div>
					www.spaceroom.co/<input class="rounded-3 p-2" name="name" value="fbuyuk" />
				</div>
			</div>
			<div class="modal-footer">
				<button
					type="button"
					class="btn btn-outline-secondary py-3 px-4 fw-bold"
					data-bs-dismiss="modal">Cancel</button
				>
				<button type="button" class="btn btn-custom-pink py-3 px-4 fw-bold">Save</button>
			</div>
		</div>
	</div>
</div>
