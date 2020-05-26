let Tasks = $('#Tasks')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let btnSort = $('#btnSort')
let btnCleanUp = $('#btnCleanUp')
let inpNewTask = $('#inpNewTask')

function addItem(){
    let listItem = $('<li>',{
        'class' : 'list-group-item',
        text : inpNewTask.val()
    })
    listItem.click(()=>{
        listItem.toggleClass('done')
    })
    Tasks.append(listItem)
    inpNewTask.val('')

}

function sortTasks(){
    $('#Tasks .done').appendTo(Tasks)
    //$('#Tasks .done').appendTo(Tasks)
}

function clearDone(){
    $('#Tasks .done').remove()
}

btnAdd.click(addItem)

inpNewTask.keypress((e)=>{
    if(e.which==13){
        addItem()
    }
})

btnReset.click(()=>{
    inpNewTask.val('')
})

btnSort.click(sortTasks)
btnCleanUp.click(clearDone)