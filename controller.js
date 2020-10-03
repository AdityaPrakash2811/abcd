var app=new AppModel();
var input;

document.getElementById('add').addEventListener('click',function(){
    input=document.getElementById('input').value;
    var item1=new TodoItemModel(input,false);
    //var item2=new TodoItemModel('second',true);
    app.addToDoItem(item1);
    //app.addToDoItem(item2);
    document.getElementById('input').value='';
    app.render();
});

document.getElementById('all').addEventListener('click',function(){
    app.render();
});

document.getElementById('active').addEventListener('click',function(){
    app.renderSmall(false);
});

document.getElementById('done').addEventListener('click',function(){
    app.renderSmall(true);
});


