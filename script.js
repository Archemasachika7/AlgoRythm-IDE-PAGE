document.addEventListener('DOMContentLoaded', () => {

    // --- MATRIX RAIN ANIMATION SETUP ---
    const canvas = document.getElementById('matrix-bg');
    if (canvas) {
        const ctx = canvas.getContext('2d');

        // Set canvas to full screen
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Characters to use for the rain
        const characters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789';
        const charactersArray = characters.split('');

        const fontSize = 16;
        const columns = Math.floor(canvas.width / fontSize);

        // An array to store the y-position of each rain drop
        const drops = [];
        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }

        function draw() {
            // Set a semi-transparent background to create the fading trail effect
            ctx.fillStyle = 'rgba(12, 12, 14, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Set the color for the falling characters to match the theme
            ctx.fillStyle = '#ff9800'; // Amber color
            ctx.font = `${fontSize}px monospace`;

            // Loop through each column
            for (let i = 0; i < drops.length; i++) {
                // Get a random character
                const text = charactersArray[Math.floor(Math.random() * charactersArray.length)];
                
                // Draw the character
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // Reset the drop to the top randomly after it goes off screen
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                // Move the drop down
                drops[i]++;
            }
        }
        
        // Animate the rain
        setInterval(draw, 33);

        // Adjust canvas size if window is resized
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // Recalculate columns on resize might be needed for perfect fit, but this is often sufficient
        });
    }


    // --- AUTH FORM TOGGLE LOGIC ---
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register-btn');
    const loginBtn = document.getElementById('login-btn');

    if (registerBtn && loginBtn && container) {
        registerBtn.addEventListener('click', () => {
            container.classList.add('active');
        });

        loginBtn.addEventListener('click', () => {
            container.classList.remove('active');
        });
    }

    // --- FORM SUBMISSION LOGIC ---
    // (This part remains unchanged)
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            console.log('Login Form Submitted', { email, password });
        });
    }

    const registerForm = document.getElementById('register-form');
    if(registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            console.log('Register Form Submitted', { name, email, password });
        });
    }

    const socialButtons = document.querySelectorAll('.social-icons a');
    socialButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Social login button clicked:', button.className);
        });
    });
});
