const all = document.getElementById('all');
const ptinfo = document.getElementById('ptinfo');
const charts = document.getElementById('charts');
const consults = document.getElementById('consults');
const consultsall = document.getElementById('consultsall');
const consultsselect = document.getElementById('consultsselect');
const consultdatefrom = document.getElementById('consultdatefrom');
const consultdateto = document.getElementById('consultdateto');
const consultimages = document.getElementById('consultimages');
const printexp = document.getElementById('printexp');
const submit = document.getElementById('submit');

all.addEventListener('change', (e) => {
    if (all.checked) {
        ptinfo.disabled = true; 
        charts.disabled = true;
        consults.disabled = true;
        consultsall.disabled = true;
        consultsselect.disabled = true;
        consultdatefrom.disabled = true;
        consultdateto.disabled = true;
        consultimages.disabled = true;
        ptinfo.checked = false; 
        charts.checked = false;
        consults.checked = false;
        consultsall.checked = false;
        consultsselect.checked = false;
        consultdatefrom.checked = false;
        consultdateto.checked = false;
        consultimages.checked = false;
    }
    else {
        ptinfo.disabled = false; 
        charts.disabled = false;
        consults.disabled = false;
        consultsall.disabled = false;
        consultsselect.disabled = false;
        consultdatefrom.disabled = false;
        consultdateto.disabled = false;
        consultimages.disabled = false;
    }
});
document.getElementById('optionform').addEventListener('change', (e) => {
    printc = printexp.value != 'select';
    optselect = all.checked || ptinfo.checked || charts.checked || consults.checked;
    optvalid = printc && optselect;
    if (consults.checked) {
        conselect = consultsall.checked || consultsselect.checked;
        conimage = consultimages.value != 'select';
        consultvalid = conselect && conimage;
        if (consultsselect.checked) {
            confrom = consultdatefrom.value;
            conto = consultdateto.value;
            condatecomp = confrom <= conto;
            consultselectvalid = confrom && conto && condatecomp;
        }
    }
    if (optvalid) {
        if (consults.checked) {
            if (consultvalid) {
                if (consultsselect.checked) {
                    if (consultselectvalid) {
                        submit.disabled = false;
                    }
                    else {
                        submit.disabled = true;
                    }
                }
                else {
                    submit.disabled = false;
                }
            }
            else {
                submit.disabled = true;
            }
        }
        else {
            submit.disabled = false;
        }
    }
    else {
        submit.disabled = true;
    }
    console.log('validating');
});

document.getElementById('submit').addEventListener('click', (e) => {
    if (document.getElementById('submit').disabled == false) {
        document.getElementById('linknext').click();
    }
})