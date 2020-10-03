
class TodoItemModel {
    constructor(item,isTicked){
        this.item=item;
        this.isTicked=isTicked;
    }

    /*toggle(){
        this.isTicked=!this.isTicked;
    }*/
}
class AppModel {
    constructor(){
        this.toDoCollection=[];
        this.category="all";
    }

    addToDoItem(toDoItem){
        this.toDoCollection.push(toDoItem);
    }

    render(){
        var self=this;
        document.getElementById('list').innerHTML='';
        for(var i in this.toDoCollection){
            var itemDOM=document.createElement('li');

            var item=document.createElement('span');
            item.innerHTML=this.toDoCollection[i].item;

            var itemCheckBox=document.createElement('input');
            itemCheckBox.type='checkbox';

            var deleteBtn=document.createElement('button');
            deleteBtn.innerHTML='x';
    
            itemDOM.appendChild(itemCheckBox);
            itemDOM.appendChild(item);
            itemDOM.appendChild(deleteBtn);

            document.getElementById('list').appendChild(itemDOM);

            if(self.toDoCollection[i].isTicked==true)
            {
                itemCheckBox.checked=true;
            }
            else if(self.toDoCollection[i].isTicked==false)
            {
                itemCheckBox.checked=false;
            }


            deleteBtn.onclick=function(x){
                self.toDoCollection.splice(x,1);
                self.render();
            }.bind(null,i);


            itemCheckBox.onclick=function(x){
                if(self.toDoCollection[x].isTicked==true)
                {
                    self.toDoCollection[x].isTicked=false;
                }
                else if(self.toDoCollection[x].isTicked==false)
                {
                    self.toDoCollection[x].isTicked=true;
                }
            }.bind(null,i);
        }
    }

    renderSmall(temp){
        var self=this;
        document.getElementById('list').innerHTML='';
        for(var i in this.toDoCollection){
            if(self.toDoCollection[i].isTicked==temp)
            {
                var itemDOM=document.createElement('li');

                var item=document.createElement('span');
                item.innerHTML=this.toDoCollection[i].item;

                var itemCheckBox=document.createElement('input');
                itemCheckBox.type='checkbox';

                var deleteBtn=document.createElement('button');
                deleteBtn.innerHTML='x';
        
                itemDOM.appendChild(itemCheckBox);
                itemDOM.appendChild(item);
                itemDOM.appendChild(deleteBtn);

                document.getElementById('list').appendChild(itemDOM);

                if(self.toDoCollection[i].isTicked==true)
                {
                    itemCheckBox.checked=true;
                }
                else if(self.toDoCollection[i].isTicked==false)
                {
                    itemCheckBox.checked=false;
                }

                deleteBtn.onclick=function(x){
                    self.toDoCollection.splice(x,1);
                    self.renderSmall(temp);
                }.bind(null,i);

                itemCheckBox.onclick=function(x){
                    if(self.toDoCollection[x].isTicked==true)
                    {
                        self.toDoCollection[x].isTicked=false;
                        self.renderSmall(true);
                    }
                    else if(self.toDoCollection[x].isTicked==false)
                    {
                        self.toDoCollection[x].isTicked=true;
                        self.renderSmall(false);
                    }
                }.bind(null,i);
            }
        }
    }
}
