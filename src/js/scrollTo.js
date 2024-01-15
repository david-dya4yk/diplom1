export function scrollTo(id) {
    const el = document.getElementById(id)

    if(el === null) return
    
    const offset = -100;
    const y = el.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({
        top: y,
        behavior: 'smooth'
    });
}