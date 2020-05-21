let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnClear = $('#btnClear')
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

btnClear.click(()=>{
    inpNewTask.val("")
})