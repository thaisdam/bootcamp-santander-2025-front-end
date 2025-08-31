async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/thaisdam/bootcamp-santander-2025-front-end/main/data/profile.json';
    const response = await fetch(url);
    const profileData = await response.json();
    return profileData;
}
