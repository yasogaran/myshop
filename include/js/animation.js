const flyin = document.querySelectorAll(".flyin");

const observe = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        entry.target.classList.toggle("show", entry.isIntersecting);
        
        if(entry.isIntersecting){
            observe.unobserve(entry.target);
        }
    })
},{threshold:0.6}
)

flyin.forEach((fly)=>{
    observe.observe(fly);
})