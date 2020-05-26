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
    toggleInputButtons()

}

function sortTasks(){
    $('#Tasks .done').appendTo(Tasks)


}

function clearDone(){
    $('#Tasks .done').remove()
    toggleInputButtons()
}

function toggleInputButtons(){
    // if(!valIsEmpty){
    //     btnAdd.prop('disabled',false)
    //     btnReset.prop('disabled',false)
    // }
    // else{
    //     btnAdd.prop('disabled',true)
    //     btnReset.prop('disabled',true)
    // }

    btnAdd.prop('disabled',inpNewTask.val()=='')
    btnReset.prop('disabled',inpNewTask.val()=='')
    btnSort.prop('disabled',Tasks.children().length<1)
    btnCleanUp.prop('disabled',Tasks.children().length<1)

}
btnAdd.click(addItem)

inpNewTask.keypress((e)=>{
    if(e.which==13){
        addItem()
    }
})
inpNewTask.on('input',()=>{
    toggleInputButtons()
})
btnReset.click(()=>{
    inpNewTask.val('')
    toggleInputButtons()
})

btnSort.click(sortTasks)
btnCleanUp.click(clearDone)