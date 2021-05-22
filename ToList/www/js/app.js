function ajouterElement(){
    let task = document.getElementById('task');
    if(task.value.trim() != ''){
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(task.value));

        $(item).on('swiperight', function(){
            if(item.className.indexOf("done") != -1){
                item.className = item.className.replace('done','').trim();
            }
            else item.className += " done";
        });
        $(item).on('swipeleft', function(){
            $(this).slideUp("slow", function(){
                $(this).remove();
            });
        })
        let taskList = document.getElementById('taskList');
        taskList.appendChild(item);
        task.value='';
        $(taskList).listview('refresh');
    }
}