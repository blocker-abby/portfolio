const media_toggles = document.querySelectorAll('.mediaToggle');
let toggle_states = [false, false, true, true];
const positive_toggles = ['mic', 'videocam', 'toggle_on', 'headset'];
const negative_toggles = ['mic_off', 'videocam_off', 'toggle_off', 'headset_off'];

for (let i=0; i<media_toggles.length; i++) {
    media_toggles[i].addEventListener('click', (e) => {
        if (toggle_states[i]) {
            const toggleIcon = media_toggles[i].getElementsByTagName('i');
            toggleIcon.innerHTML = positive_toggles[i];
            toggle_states[i] = false;
        }
        else {
            const toggleIcon = media_toggles[i].getElementsByTagName('i');
            toggleIcon.innerHTML = negative_toggles[i];
            toggle_states[i] = true;
        }
    });
}

document.getElementById('medcamToggle').addEventListener('click', (e) => {
    if (!toggle_states[2]) {
        document.getElementById('samplevid').src = '../media/medcam_demo.mp4';
    }
    else {
        document.getElementById('samplevid').src = '../media/sampledoctor.mp4';
    }
});

const notes_panel = document.getElementById('measurements');
const translate_panel = document.getElementById('translate');
const helpdesk_panel = document.getElementById('helpdesk');
const middle_panel = document.getElementById('video_toolbar_panel');
const ecg_panel = document.getElementById('ecg_panel');
const ecg_close = document.getElementById('ecgClose')
const user_view = document.getElementById('userview');
const videos = document.getElementById('videos');

const translateToggle = document.getElementById('translateToggle');
const notesToggle = document.getElementById('notesToggle');
const recordingToggle = document.getElementById('video_recording');
const audioToggle = document.getElementById('audioToggle');
const videoToggle = document.getElementById('videoToggle');
const medcamToggle = document.getElementById('medcamToggle');
const stethoscopeToggle = document.getElementById('stethoscopeToggle');
const ecgToggle = document.getElementById('ecgToggle');
const helpdeskToggle = document.getElementById('helpdeskToggle');
const button_count = 9;
const toolbar_text = document.getElementById('hollowtoolbar').getElementsByTagName('div');
const toolbar_divwidth = String(((document.body.clientWidth - 15) * 0.74) / button_count).concat('px');

for (let i = 0; i < toolbar_text.length; i++) {
    toolbar_text[i].style.width = toolbar_divwidth;
}

ecg_close.addEventListener('click', (e) => {
    ecg_panel.style.display = 'none';
    videos.style.height = '80vh';
});

ecgToggle.addEventListener('click', (e) => {
    const ecg_panel_state = ecg_panel.style.display;
    if (ecg_panel_state == 'block') {
        ecg_panel.style.display = 'none';
        videos.style.height = '80vh';
    }
    else {
        ecg_panel.style.display = 'block';
        videos.style.height = '40vh';
        ecg_panel.style.height = '39vh';
    }
});

document.getElementById('notesClose').addEventListener('click', (e) => {
    notes_panel.style.display = 'none';
    middle_panel.style.width = '100vw';
    document.getElementById('notesToggleText').innerHTML = 'Open Patient Notes';
    changeHollowToolbar();
    if (ecg_panel.style.display != 'none') {
        ecg_panel.style.width = '100vw';
    }
});

document.getElementById('notesToggle').addEventListener('click', (e) => {
    const notes_panel_state = notes_panel.style.display;
    if (notes_panel_state == 'none') {
        notes_panel.style.display = 'flex';
        translate_panel.style.display = 'none';
        helpdesk_panel.style.display = 'none';
        middle_panel.style.width = '74vw';
        document.getElementById('notesToggleText').innerHTML = 'Close Patient Notes';
        document.getElementById('translateToggleText').innerHTML = 'Open Language Translator';
        document.getElementById('helpdeskToggleText').innerHTML = 'Open Helpdesk';
        changeHollowToolbar();
    }
    else {
        notes_panel.style.display = 'none';
        middle_panel.style.width = '100vw';
        if (ecg_panel.style.display != 'none') {
            ecg_panel.style.width = '100vw';
        }
        document.getElementById('notesToggleText').innerHTML = 'Open Patient Notes';
        changeHollowToolbar();
    }
});

document.getElementById('translateClose').addEventListener('click', (e) => {
    translate_panel.style.display = 'none';
    middle_panel.style.width = '100vw';
    document.getElementById('translateToggleText').innerHTML = 'Open Language Translator';
    changeHollowToolbar();
    if (ecg_panel.style.display != 'none') {
        ecg_panel.style.width = '100vw';
    }
});

document.getElementById('translateToggle').addEventListener('click', (e) => {
    const translate_panel_state = translate_panel.style.display;
    if (translate_panel_state == 'none') {
        translate_panel.style.display = 'flex';
        notes_panel.style.display = 'none';
        helpdesk_panel.style.display = 'none';
        middle_panel.style.width = '74vw';
        document.getElementById('translateToggleText').innerHTML = 'Close Language Translator';
        document.getElementById('notesToggleText').innerHTML = 'Open Patient Notes';
        document.getElementById('helpdeskToggleText').innerHTML = 'Open Helpdesk';
        changeHollowToolbar();
    }
    else {
        translate_panel.style.display = 'none';
        middle_panel.style.width = '100vw';
        document.getElementById('translateToggleText').innerHTML = 'Open Language Translator';
        changeHollowToolbar();
        if (ecg_panel.style.display != 'none') {
            ecg_panel.style.width = '100vw';
        }
    }
});

document.getElementById('helpdeskClose').addEventListener('click', (e) => {
    helpdesk_panel.style.display = 'none';
    middle_panel.style.width = '100vw';
    document.getElementById('helpdeskToggleText').innerHTML = 'Open Helpdesk';
    changeHollowToolbar();
    if (ecg_panel.style.display != 'none') {
        ecg_panel.style.width = '100vw';
    }
});

document.getElementById('helpdeskToggle').addEventListener('click', (e) => {
    const helpdesk_panel_state = helpdesk_panel.style.display;
    if (helpdesk_panel_state == 'none') {
        helpdesk_panel.style.display = 'flex';
        notes_panel.style.display = 'none';
        middle_panel.style.width = '74vw';
        document.getElementById('helpdeskToggleText').innerHTML = 'Close Helpdesk';
        document.getElementById('notesToggleText').innerHTML = 'Open Patient Notes';
        changeHollowToolbar();
    }
    else {
        helpdesk_panel.style.display = 'none';
        middle_panel.style.width = '100vw';
        document.getElementById('helpdeskToggleText').innerHTML = 'Open Helpdesk';
        changeHollowToolbar();
        if (ecg_panel.style.display != 'none') {
            ecg_panel.style.width = '100vw';
        }
    }
});

translateToggle.addEventListener('mouseover', (e) => {
    document.getElementById('translateToggleText').style.display = 'inline';
});

translateToggle.addEventListener('mouseout', (e) => {
    document.getElementById('translateToggleText').style.display = 'none';
});

notesToggle.addEventListener('mouseover', (e) => {
    document.getElementById('notesToggleText').style.display = 'inline';
});

notesToggle.addEventListener('mouseout', (e) => {
    document.getElementById('notesToggleText').style.display = 'none';
});

recordingToggle.addEventListener('mouseover', (e) => {
    document.getElementById('recordingToggleText').style.display = 'inline';
});

recordingToggle.addEventListener('mouseout', (e) => {
    document.getElementById('recordingToggleText').style.display = 'none';
});

audioToggle.addEventListener('mouseover', (e) => {
    document.getElementById('audioToggleText').style.display = 'inline';
});

audioToggle.addEventListener('mouseout', (e) => {
    document.getElementById('audioToggleText').style.display = 'none';
});

videoToggle.addEventListener('mouseover', (e) => {
    document.getElementById('videoToggleText').style.display = 'inline';
});

videoToggle.addEventListener('mouseout', (e) => {
    document.getElementById('videoToggleText').style.display = 'none';
});

medcamToggle.addEventListener('mouseover', (e) => {
    document.getElementById('medcamToggleText').style.display = 'inline';
});

medcamToggle.addEventListener('mouseout', (e) => {
    document.getElementById('medcamToggleText').style.display = 'none';
});

stethoscopeToggle.addEventListener('mouseover', (e) => {
    document.getElementById('stethoscopeToggleText').style.display = 'inline';
});

stethoscopeToggle.addEventListener('mouseout', (e) => {
    document.getElementById('stethoscopeToggleText').style.display = 'none';
});

ecgToggle.addEventListener('mouseover', (e) => {
    document.getElementById('ecgToggleText').style.display = 'inline';
});

ecgToggle.addEventListener('mouseout', (e) => {
    document.getElementById('ecgToggleText').style.display = 'none';
});

helpdeskToggle.addEventListener('mouseover', (e) => {
    document.getElementById('helpdeskToggleText').style.display = 'inline';
});

helpdeskToggle.addEventListener('mouseout', (e) => {
    document.getElementById('helpdeskToggleText').style.display = 'none';
});

function changeHollowToolbar() {
    const toolbar_text = document.getElementById('hollowtoolbar').getElementsByTagName('div');
    const toolbar_divwidth = document.getElementById('video_toolbar_panel').offsetWidth / button_count;
    for (let i = 0; i < toolbar_text.length; i++) {
        toolbar_text[i].style.width = toolbar_divwidth;
    }
}

document.getElementById('ecgStart').addEventListener('click', (e) => {
    document.getElementById('ecgStart').disabled = true;
    document.getElementById('ecgStart').innerHTML = 'ECG Reading in Progress';
    setTimeout(ecgData, 4000);
});

let even = true;
function ecgData() {
    if (even) {
        document.getElementById('ecgchart').src = '../media/demo_ecg1.png';
    }
    else {
        document.getElementById('ecgchart').src = '../media/demo_ecg2.png';
    }
    document.getElementById('ecgchart').style.display = 'block';
    even = !even;
    document.getElementById('ecgStart').disabled = false;
    document.getElementById('ecgStart').innerHTML = 'StartECG';
}