const lineProgress = document.getElementById('line-progress');

document.querySelectorAll('.step').forEach(function(step) {
    step.addEventListener('click', function() {
        this.classList.add('active');
        let previousSiblings = getPreviousSiblings(this);
        previousSiblings.forEach(sib => sib.classList.add('active'));

        let nextSiblings = getNextSiblings(this);
        nextSiblings.forEach(sib => sib.classList.remove('active'));
    });
});

document.querySelector('.step01').addEventListener('click', function() {
    document.getElementById('line-progress').style.width = '3%';
    setActiveClass(document.querySelector('.discovery'));
});

document.querySelector('.step02').addEventListener('click', function() {
    document.getElementById('line-progress').style.width = '25%';
    setActiveClass(document.querySelector('.strategy'));
});

document.querySelector('.step03').addEventListener('click', function() {
    document.getElementById('line-progress').style.width = '50%';
    setActiveClass(document.querySelector('.creative'));
});

document.querySelector('.step04').addEventListener('click', function() {
    document.getElementById('line-progress').style.width = '75%';
    setActiveClass(document.querySelector('.production'));
});

document.querySelector('.step05').addEventListener('click', function() {
    document.getElementById('line-progress').style.width = '100%';
    setActiveClass(document.querySelector('.analysis'));
});

function setActiveClass(element) {
    element.classList.add('active');
    let siblings = getSiblings(element);
    siblings.forEach(sib => sib.classList.remove('active'));
}

function getSiblings(element) {
    let siblings = [];
    let sibling = element.parentNode.firstChild;
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== element) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
}

function getPreviousSiblings(element) {
    let siblings = [];
    while (element === element.previousElementSibling) {
        siblings.push(element);
    }
    return siblings;
}

function getNextSiblings(element) {
    let siblings = [];
    while (element === element.nextElementSibling) {
        siblings.push(element);
    }
    return siblings;
}
