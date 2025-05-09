// script.js
// Event Handling
document.getElementById('clickButton').addEventListener('click', function() {
    this.classList.toggle('clicked');
});

document.getElementById('hoverArea').addEventListener('mouseover', function() {
    this.style.backgroundColor = '#b3e5fc';
});

document.getElementById('hoverArea').addEventListener('mouseout', function() {
    this.style.backgroundColor = 'lightgray';
});

document.addEventListener('keypress', (e) => {
    document.getElementById('keyDisplay').textContent = `Last key pressed: ${e.key}`;
});

// Long press handler
let pressTimer;
document.getElementById('longPressBtn').addEventListener('mousedown', () => {
    pressTimer = setTimeout(() => {
        alert('Long press detected! 🎉');
    }, 1000);
});

document.getElementById('longPressBtn').addEventListener('mouseup', () => {
    clearTimeout(pressTimer);
});

// Double click handler
document.body.addEventListener('dblclick', () => {
    document.getElementById('secretMessage').classList.remove('hidden');
});

// Slideshow
const images = [
    'https://picsum.photos/400/300?1',
    'https://picsum.photos/400/300?2',
    'https://picsum.photos/400/300?3'
];
let currentImage = 0;

document.getElementById('nextBtn').addEventListener('click', () => {
    currentImage = (currentImage + 1) % images.length;
    document.getElementById('slideImage').src = images[currentImage];
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentImage = (currentImage - 1 + images.length) % images.length;
    document.getElementById('slideImage').src = images[currentImage];
});

// Tabs
function openTab(evt, tabName) {
    const tabContents = document.getElementsByClassName('tab-content');
    const tabButtons = document.getElementsByClassName('tab-button');

    Array.from(tabContents).forEach(content => 
        content.style.display = 'none');
    Array.from(tabButtons).forEach(button => 
        button.classList.remove('active'));

    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.classList.add('active');
}

// Form Validation
document.getElementById('name').addEventListener('input', function() {
    const error = document.getElementById('nameError');
    error.textContent = this.value.trim() ? '' : 'Name is required';
});

document.getElementById('email').addEventListener('input', function() {
    const error = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    error.textContent = emailRegex.test(this.value) ? '' : 'Invalid email format';
});

document.getElementById('password').addEventListener('input', function() {
    const error = document.getElementById('passwordError');
    error.textContent = this.value.length >= 8 ? '' : 'Password must be at least 8 characters';
});

document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted successfully!');
});