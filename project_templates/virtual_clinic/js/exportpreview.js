document.getElementById('printbutton').addEventListener('click', (e) => {
    document.getElementById('printbutton').style.display = 'none';
    window.print();
    document.getElementById('printbutton').style.display = 'block';
});
function create_ADT() {
    msh = 'MSH|^';
}
function create_ORU() {

}