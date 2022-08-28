const boxes = document.querySelectorAll('.box')

/* we want an event to be triggered when we scroll down the page */
window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    /* where do we want the boxes to move to the center of the page? */
    const triggerBottom = window.innerHeight / 5 * 4
    /* we have a node list of boxes we can loop through */
    boxes.forEach( box => {
        const boxTop = box.getBoundingClientRect().top
        /* see if the top of the box is less than the triggerBottom - if it is we want to use the class of .show - if it isn't we want to remove the class of .show */
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        }else {
            box.classList.remove('show')
        }
    })
}