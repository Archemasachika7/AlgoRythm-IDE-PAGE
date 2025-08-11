// --- RIVE ANIMATION SETUP ---
const riveCanvas = document.getElementById('rive-background');
const riveAnimation = new rive.Rive({
    src: 'https://public.rive.app/community/runtime-files/2191-4322-animated-background.riv',
    canvas: riveCanvas,
    autoplay: true,
    stateMachines: 'State Machine 1',
    onLoad: () => {
        riveAnimation.resizeToCanvas();
    },
});

// --- AUTH FORM TOGGLE LOGIC ---
const container = document.getElementById('container');
const registerBtn = document.getElementById('register-btn');
const loginBtn = document.getElementById('login-btn');

if(registerBtn && loginBtn) {
    registerBtn.addEventListener('click', () => {
        container.classList.add('active');
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove('active');
    });
}

// --- FIREBASE READY FORM SUBMISSION ---

// Login Form
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const errorElement = document.getElementById('login-error');
    
    console.log('Login attempt:', email, password);
    
    // ** FIREBASE INTEGRATION: **
    // import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
    // const auth = getAuth();
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     console.log('User signed in:', user);
    //     window.location.href = '/dashboard'; // Redirect on success
    //   })
    //   .catch((error) => {
    //     errorElement.textContent = error.message;
    //   });
});

// Registration Form
const registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const errorElement = document.getElementById('register-error');

    console.log('Register attempt:', name, email, password);

    // ** FIREBASE INTEGRATION: **
    // import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
    // const auth = getAuth();
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed up
    //     const user = userCredential.user;
    //     console.log('User created:', user);
    //     // You might want to update the profile with the name here
    //     // Then redirect or show a success message
    //     container.classList.remove('active'); // Switch to login view
    //   })
    //   .catch((error) => {
    //     errorElement.textContent = error.message;
    //   });
});

// Social Logins (Example for Google)
const googleLoginBtn = document.querySelector('.social-google');
googleLoginBtn.addEventListener('click', (e) => {
     e.preventDefault();
     console.log('Google login clicked');

    // ** FIREBASE INTEGRATION: **
    // import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
    // const auth = getAuth();
    // const provider = new GoogleAuthProvider();
    // signInWithPopup(auth, provider)
    //   .then((result) => {
    //      const user = result.user;
    //      console.log('Signed in with Google:', user);
    //      window.location.href = '/dashboard';
    //   }).catch((error) => {
    //      document.getElementById('login-error').textContent = error.message;
    //   });
});
