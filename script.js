//add GO!-button
let btn_go = document.querySelector('#btn_go');
btn_go.addEventListener('click', show_inptags);

//Pressing the Enter button will trigger the 'Go' button
document.addEventListener('keydown', function show_inptags_too(e) {
    if (e.keyCode === 13) {
        show_inptags();
    }
});

//work with inputed text
function show_inptags(){
    let inp = document.querySelector('.tag-input');
    let inptags = document.querySelector('.tag-input').value;
    let inptags_arr = inptags.split(" ");

    //remove dots '·' from tags (such dots uses habr.career).
    inptags_arr = inptags_arr.filter(function(item){
        return item !=='·'
    });
    //

    let result = document.querySelector('.result');
    let result_to_copy = result.innerHTML = inptags_arr.join(', ');
    result.style.color = 'black';
    inp.value = '';
    //add Copy the result button
    let btn_copy = document.querySelector('#btn_copy');
    btn_copy.addEventListener('click', copy_all_tags);

    //Pressing the Enter button will trigger the 'Copy the result' button
    document.addEventListener('keydown', function show_inptags_too(e) {
        if (e.keyCode === 13) {
            copy_all_tags();
        }
    });

    function copy_all_tags() {
        navigator.clipboard.writeText(result_to_copy).then(function(){
            //the better solution would be a func which shows modal with warning like 'ok'
            location.reload()
        }, function(err){
            alert('Could not copy the text: ', err);
            }
        )
    }

}



