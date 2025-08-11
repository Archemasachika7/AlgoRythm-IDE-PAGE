document.addEventListener('DOMContentLoaded', () => {
    // --- RIVE ANIMATION SETUP ---
    const riveCanvas = document.getElementById('rive-background');
    if (riveCanvas) {
        new rive.Rive({
            src: 'https://public.rive.app/community/runtime-files/2191-4322-animated-background.riv',
            canvas: riveCanvas,
            autoplay: true,
            stateMachines: 'State Machine 1',
            onLoad: (event) => {
                const riveInstance = event.data;
                riveInstance.resizeToCanvas();
            },
        });
    }

    // --- AUTH FORM TOGGLE LOGIC ---
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register-btn');
    const loginBtn = document.getElementById('login-btn');

    // This logic is for the desktop view with the sliding overlay
    if (registerBtn && loginBtn && container) {
        registerBtn.addEventListener('click', () => {
            container.classList.add('active');
        });

        loginBtn.addEventListener('click', () => {
            container.classList.remove('active');
        });
    }

    // --- FORM SUBMISSION LOGIC ---

    // Login Form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevents the page from reloading
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            
            console.log('Login Form Submitted');
            console.log('Email:', email);
            console.log('Password:', password);
        });
    }

    // Registration Form
    const registerForm = document.getElementById('register-form');
    if(registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevents the page from reloading
            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            
            console.log('Register Form Submitted');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Password:', password);
        });
    }

    // Social Login Buttons
    const socialButtons = document.querySelectorAll('.social-icons a');
    socialButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Social login button clicked:', button.className);
        });
    });
});
