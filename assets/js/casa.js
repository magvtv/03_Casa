function headerScroll() {
    const header = document.getElementById('header');
    this.scrollY >= 30 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', headerScroll);



const accordionItem = document.querySelectorAll('.accordion-item');
accordionItem.forEach((item) => {
    const accordionHeader = item.querySelector('.about-accordion-header');
    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open');
        toggleItem(item);

        if (openItem && openItem !== item) {
            toggleItem(openItem)
        }  
            
            
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.accordion - content');
    if (item.classList.contain('accordion-open')) { 
        accordionContent.removeAttribute('style');
        item.classList.remove('accordion-open');
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
        item.classList.add('accordion-open');
    }
}
