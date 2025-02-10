const fileInput = document.querySelector('.file-input');
const logoContainer = document.querySelector('.logo-container');

fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const url = URL.createObjectURL(file);
        
        // Remove existing placeholder or image
        logoContainer.innerHTML = '';
        
        // Create and add new image
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Uploaded logo';
        img.className = 'logo-image';
        
        logoContainer.appendChild(img);
    }
});