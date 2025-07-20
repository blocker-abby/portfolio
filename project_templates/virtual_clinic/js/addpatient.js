document.addEventListener('DOMContentLoaded', (e) => {
    document.getElementById('newprofilepic').addEventListener('change', (e) => {
        const new_image = document.getElementById('newprofilepic').files[0];
        document.getElementById('profilepic').src = URL.createObjectURL(new_image)
    })    
})
// Expanding and contracting the different sections on the add patient page

// Personal information section
function expandPI() {
    state = document.getElementById("PI").style.display;
    if (state == 'flex') {
        document.getElementById("PI").style.display = 'none';
        document.getElementById("exlePI").style.display = 'none';
        document.getElementById("exmoPI").style.display = 'flex';
    }
    else {
        document.getElementById("PI").style.display = 'flex';
        document.getElementById("exlePI").style.display = 'flex';
        document.getElementById("exmoPI").style.display = 'none';
    }
}

// Contact information section
function expandCI() {
    state = document.getElementById("CI").style.display;
    if (state == 'flex') {
        document.getElementById("CI").style.display = 'none';
        document.getElementById("exleCI").style.display = 'none';
        document.getElementById("exmoCI").style.display = 'flex';
    }
    else {
        document.getElementById("CI").style.display = 'flex';
        document.getElementById("exleCI").style.display = 'flex';
        document.getElementById("exmoCI").style.display = 'none';
    }
}

// Medical historty section
function expandMH() {
    state = document.getElementById("MH").style.display;
    if (state == 'flex') {
        document.getElementById("MH").style.display = 'none';
        document.getElementById("exleMH").style.display = 'none';
        document.getElementById("exmoMH").style.display = 'flex';
    }
    else {
        document.getElementById("MH").style.display = 'flex';
        document.getElementById("exleMH").style.display = 'flex';
        document.getElementById("exmoMH").style.display = 'none';
    }
}
// Previous doctor section
function expandAH() {
    state = document.getElementById("AH").style.display;
    if (state == 'none') {

    }
    else {
        document.getElementById("AH").style.display = 'flex';
    }
}

// Emergency contact section
function expandAC() {
    state = document.getElementById("AC").style.display;
    if (state == 'none') {

    }
    else {
        document.getElementById("AC").style.display = 'flex';
    }
}

const buttons = document.getElementsByClassName('submit');
for (let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
        alert('Patient added successfully.');
        window.location.reload();
    })
}