// ---------- // Navigation Bar // ---------- // 

var navLinks = document.getElementById("navLinks");

    function showMenu() {
        navLinks.style.right = "0";
    }

    function hideMenu() {
        navLinks.style.right = "-100%";
    }

// ---------- // Fade In On Scroll // ---------- //

const columns = document.querySelectorAll('.section-col');
const col_options = {
    root: null,
    rootMargin: '0px',
    threshold: .0001
}

const col_callbacks = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('active');
        }
    
    });
}
let col_observer = new IntersectionObserver(col_callbacks, col_options);
    columns.forEach(col_columns => {
    col_observer.observe(col_columns);
});




// ---------- // Fade In On Scroll - CTA Banner // ---------- //

const cta_columns = document.querySelectorAll('.cta .section-col');
        const cta_options = {
        root: null,
        rootMargin: '0px',
        threshold: .0001
        }
        const cta_callbacks = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
            entry.target.classList.add('active');

            // ---------- // START Statistics Counter // ---------- // 
            const counters = document.querySelectorAll('.counter')

            counters.forEach(counter => {
                counter.innerTexts = '0'

                const upddateCoutner = () => {
                    const target = +counter.getAttribute('data-target')
                    const c = +counter.innerText

                    const increment = target / 500

                    if(c < target){
                        counter.innerText = `${Math.ceil(c + increment)}`
                        setTimeout(upddateCoutner, 1)
                    } else  {
                        counter.innerText = target
                    }
                }

                upddateCoutner()
            })

            // ---------- // END Statistics Counter // ---------- //

            }
        });
        }
        let cta_observer = new IntersectionObserver(cta_callbacks, cta_options);
        cta_columns.forEach(cta_column => {
        cta_observer.observe(cta_column);
        });

// ---------- // Fade In On Scroll - Footer Section // ---------- //

const footer_columns = document.querySelectorAll('.footer .section-col');
        const footer_options = {
        root: null,
        rootMargin: '0px',
        threshold: .0001
        }
        const footer_callbacks = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
            entry.target.classList.add('active');
            }
        });
        }
        let footer_observer = new IntersectionObserver(footer_callbacks, footer_options);
        footer_columns.forEach(footer_column => {
        footer_observer.observe(footer_column);
        });

        

// ---------- // Accordian FAQ Section // ---------- // 

const items = document.querySelectorAll(".accordion button");

    function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
        
    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }
        
    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
    }

    items.forEach(item => item.addEventListener('click', toggleAccordion));

// ---------- // Projects Changing Content // ---------- // 

const btns = document.querySelectorAll(".nav-btn");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});