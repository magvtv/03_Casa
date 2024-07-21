function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header')
    }
    else {
        header.classList.remove('scroll-header')
    }
}

window.addEventListener('scroll', scrollHeader)

document.addEventListener('DOMContentLoaded', () => {
    fetch('assets/content/data.json')
        .then(response => response.json)
        .then(data => {
            const heroTitle = document.getElementById('heroTitle')
            const heroDetails = document.getElementById('heroDetails')

            heroTitle.textContent = data.hero.title
            heroDetails.textContent = data.hero.details

        })
        .catch(error => {
            console.error('Error in fetching and parsing data', error)
        })
})