const avatar = document.getElementById('avatar');
const switchBtn = document.getElementById('switch-btn');
const photoMode = document.getElementById('photo-mode');

const primaryPhoto = 'assets/Profile.webp';
const secondaryPhoto = 'assets/formal.webp'; 

let isPrimary = true;

switchBtn.addEventListener('click', () => {

    avatar.style.opacity = '0.3';
    
    setTimeout(() => {
        if (isPrimary) {
            avatar.src = secondaryPhoto;
            avatar.alt = "Secondary Profile Photo";
            photoMode.textContent = "SECONDARY_AVATAR";
        } else {
            avatar.src = primaryPhoto;
            avatar.alt = "Primary Profile Photo";
            photoMode.textContent = "PRIMARY_AVATAR";
        }
        isPrimary = !isPrimary;
        avatar.style.opacity = '1';
    }, 200);
});
