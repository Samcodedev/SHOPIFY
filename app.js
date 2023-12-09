let plan = document.querySelector('#plan')
let accordion = document.getElementsByClassName('container-head')
let accordionBody = document.getElementsByClassName('container-content')
let accordionImg = document.getElementsByClassName('img-div')
let toggle

let checkButton = document.getElementsByClassName('tick-icons')
let progressValue = document.getElementById('progress-value')


// close plan div
function closePlan(){
    plan.style.display='none'
}

// creating a function for each drop down
for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        for (let j = 0; j < accordion.length; j++) {
            if (j !== i) {
                accordionBody[j].style.display = "none";
                accordionImg[j].style.display = "none";
            }
        }

        if (toggle === i || accordionBody[i].style.display === "block") {
            accordionBody[i].style.display = "none";
            accordionImg[i].style.display = "none";
            toggle = -1;
        } else {
            accordionBody[i].style.display = "block";
            accordionImg[i].style.display = "flex";
            toggle = i;
        }
    });
}


// created a function for the check-button progress-bar
for (let i = 0; i < checkButton.length; i++) {
    checkButton[i].addEventListener('click', function () {
        let icon1 = checkButton[i].querySelector('#' + 'icon-1');
        let icon2 = checkButton[i].querySelector('#' + 'icon-2');
        let icon3 = checkButton[i].querySelector('#' + 'icon-3');
        let icon4 = checkButton[i].querySelector('#' + 'icon-4');

        if (icon4.style.display === 'block') {
            icon2.style.display = 'none'
            icon4.style.display = 'none'
            icon3.style.display = 'block'
            setTimeout(() => {
                icon3.style.display = 'none'
                icon1.style.display = 'block'
            }, 1000);
        }
        else{
            icon1.style.display = 'none'
            icon2.style.display = 'none'
            icon3.style.display = 'block'
            setTimeout(() => {
                icon2.style.display = 'none'
                icon3.style.display = 'none'
                icon4.style.display = 'block'
            }, 1000);
        }
    })
}


// created a function for the check-button marking
function updateProgress(value, button) {
    const progressBar = document.getElementById('progress');

    if (progressBar) {
        const currentWidth = parseFloat(progressBar.style.width) || 0;

        if (button.classList.contains('active')) {
            const newWidth = Math.max(currentWidth - value, 0);
            progressBar.style.width = newWidth + '%';
            button.classList.remove('active');
            progressValue.innerText = newWidth / 20            
        } else {
            const newWidth = Math.min(currentWidth + value, 100);
            progressBar.style.width = newWidth + '%';
            button.classList.add('active');
            progressValue.innerText = newWidth / 20
        }
    }
}