import { goto } from '$app/navigation';
import { initializeApp, getApp, getApps } from 'firebase/app';
import { signOut } from 'firebase/auth';
import {
	getAuth,
	inMemoryPersistence,
	setPersistence,
	signInWithEmailAndPassword
} from 'firebase/auth';

const firebaseConfig = {
	apiKey: "AIzaSyBwAA0-uGQeQibsErdmIT07mrQAGxwpqzU",
	authDomain: "test-bf931.firebaseapp.com",
	projectId: "test-bf931",
	storageBucket: "test-bf931.appspot.com",
	messagingSenderId: "382515767373",
	appId: "1:382515767373:web:efab46cb4cf5b681319404"
	/*
	apiKey: 'AIzaSyACsaY3VjxJkumib4VxCeQof2lucR3NJ4M',
	authDomain: 'spaceroomsauth.firebaseapp.com',
	projectId: 'spaceroomsauth',
	storageBucket: 'spaceroomsauth.appspot.com',
	messagingSenderId: '1009710434249',
	appId: '1:1009710434249:web:f6c61b1153f6139d1bca18',
	measurementId: 'G-64Q6MN12HX'
	*/
};

export const getClientApp = () => {
	if (getApps().length) return getApp();
	const app = initializeApp(firebaseConfig);

	const auth = getAuth(app);
	setPersistence(auth, inMemoryPersistence);

	return app;
};

export const loginWithEmailAndPassword = (email: string, password: any) => {
	const auth = getAuth(getClientApp());
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// @ts-ignore
			const {accessToken} = userCredential.user;
		
			localStorage.setItem('accessToken',accessToken);
			goto('/profile');

		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
		});
};

export const logout=()=>{
	signOut(getAuth(getClientApp()))
	.then(()=>{
		localStorage.removeItem('accessToken');
		goto("/");
	})
	.catch((err)=>{
		console.error(err);
	})
}
