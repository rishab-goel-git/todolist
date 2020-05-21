let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let inpNewTask = $('#inpNewTask')

function addItem(){
    let listItem=$('<li>',{
        'class' : 'list-group-item',
        text: inpNewTask.val(),
    })
    ulTasks.append(listItem)
    listItem.click(()=>{
        listItem.toggleClass('done')
    })
}

inpNewTask.keypress((e)=>{
    if(e.which==13){
        addItem()
    }
})

btnAdd.click(addItem)

btnReset.click(()=>{
    inpNewTask.val("")
})