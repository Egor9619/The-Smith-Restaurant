function firstSlideAnim(entry){
    entry.forEach(change => {
        if(change.isIntersecting){
            change.target.classList.add('slide-one-show');
        }
    });
}
let option = {threshold: [0.5] };
let observes = new IntersectionObserver(firstSlideAnim, option);
let elementor = document.querySelectorAll('.slide-one-entry-anim');
for (let elm of elementor){
    observes.observe(elm);
}