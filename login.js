document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
    const loginForm = document.querySelector('#login form');
    const signupForm = document.querySelector('#signup form');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.getElementById(tab.dataset.tab);

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            tabContents.forEach(tc => tc.classList.remove('active'));
            target.classList.add('active');
        });
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Simulate a successful login
        localStorage.setItem('loggedIn', 'true');
        showWelcomePopup();
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Simulate a successful signup and login
        localStorage.setItem('loggedIn', 'true');
        showWelcomePopup();
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    });

    function showWelcomePopup() {
        const popup = document.createElement('div');
        popup.className = 'welcome-popup';
        popup.textContent = 'Welcome back to Sharpy Store!';
        document.body.appendChild(popup);

        setTimeout(() => {
            popup.remove();
        }, 3000);
    }
});
