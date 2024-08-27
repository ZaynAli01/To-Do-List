


let input = document.getElementById('input')
        let addTaskBtn = document.getElementById('add-task-btn')
        let modal = document.getElementById('modal')
        let modalCloseBtn = document.getElementById('modal-close-btn')
        let tableBoby = document.getElementById('task-list')
        let updateTask = document.getElementById('update-btn')
        let taskSize = 0


        modalCloseBtn.addEventListener('click', () => {
            modal.style.display = 'none'
        })

        input.addEventListener('keypress',(event)=>{
            if (event.key === "Enter") {
    
                event.preventDefault();
                
                if (updateTask.style.display === 'none'){
                  addTaskBtn.click(); 
                }  
                else{
                    updateTask.click()
                }
            }
        })


        addTaskBtn.addEventListener('click', () => {
            
            if (input.value.length == 0) {
                modal.style.display = 'block'
            }
            else {
                let inputTask = input.value
                let row = document.createElement('tr')
                let indexColumn = document.createElement('th')
                let taskNameColumn = document.createElement('td')
                let actionBtnColumn = document.createElement('td')
                let editBtn = document.createElement('button')
                let deleteBtn = document.createElement('button')


                indexColumn.innerHTML = taskSize += 1

                taskNameColumn.innerHTML = inputTask
                editBtn.innerHTML = 'Edit'
                deleteBtn.innerHTML = 'Delete'
                editBtn.className = 'btn btn-secondary text-light'
                deleteBtn.className = 'btn btn-danger text-light'
                editBtn.id = `id- ${taskSize - 1}`
                deleteBtn.id = taskSize - 1

                actionBtnColumn.append(editBtn, deleteBtn)

                row.append(indexColumn, taskNameColumn, actionBtnColumn)

                tableBoby.appendChild(row)
                input.value = ''
                input.focus()
                
                deleteBtn.addEventListener('click', (e)=>{
                    debugger
                    let deleteBtnId = e.target.id
                    tableBoby.deleteRow(deleteBtnId)
                   
                    let rows = tableBoby.getElementsByTagName('tr')
                    for (let index = 0; index < rows.length; index++) {
                        debugger
                        rows[index].firstChild.innerHTML = index + 1
                        let actionColumn = rows[index].children[2]
                        actionColumn.children[0].id = `id- ${index}`
                        actionColumn.children[1].id = index
                    }
                    taskSize = taskSize - 1
                })


                editBtn.addEventListener('click', (e)=>{

                    addTaskBtn.style.display = 'none'
                    updateTask.style.display = 'block'
                    let editBtnId = parseInt((e.target.id).split('-')[1])
                    updateTask.setAttribute('data-id',editBtnId)
                    input.value = tableBoby.children[editBtnId].children[1].innerHTML
                    input.focus()
                })

            }
        })            
        updateTask.addEventListener('click', ()=>{
            debugger
            let updateBtnId = updateTask.dataset.id
            
            let updatedValue = input.value
           
            tableBoby.children[updateBtnId].children[1].innerHTML = updatedValue
            updateTask.style.display = 'none'
            addTaskBtn.style.display = 'block'
            input.value = ''
            input.focus()
        })
