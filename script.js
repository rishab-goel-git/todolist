let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnClear = $('#btnClear')
let inpNewTask = $('#inpNewTask')

btnAdd.click(()=>{
   let listItem = $('<li>',{
        'class': 'list-group-item',
       text : inpNewTask.val()
    })
    ulTasks.append(listItem)
    listItem.click(()=>{
        listItem.toggleClass('done')
    })


})

btnClear.click(()=>{
    inpNewTask.val("")
})