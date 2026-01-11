// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Tab navigation
const tabs = document.querySelectorAll('[data-tab]');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetTab = tab.dataset.tab;
        
        // Update active states
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        tab.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
        
        // Update URL hash
        history.replaceState(null, '', `#${targetTab}`);
        localStorage.setItem('activeTab', targetTab);
    });
});

// Load saved tab or from URL hash
window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.slice(1);
    const savedTab = localStorage.getItem('activeTab');
    const targetTab = hash || savedTab || 'home';
    
    document.querySelector(`[data-tab="${targetTab}"]`)?.click();
});
