let addtask=document.getElementById('addtask');
let addtaskbtn=document.getElementById('addtaskbtn');
let table=document.querySelector('table');
addtaskbtn.addEventListener('click',function()
{
    let addtolist=addtask.value;
    if(addtolist=="")
    {
        alert("Empty Task Cannot be Added")
    }
    else
    {

        let numRows=table.querySelectorAll('tr').length;
        if(numRows>=7)
        {
            alert("You Can Only Add Upto 7 Tasks")
        }
        else
        {
            let newRow=document.createElement('tr');
            let taskCell=document.createElement('td');
            // taskCell.textContent=addtolist;
        
            let inputCell = document.createElement('td');
            let inputElement = document.createElement('input');
            inputElement.type = 'text'; // You can set other attributes as needed
            inputElement.value=addtolist
            inputElement.readOnly=true
            inputCell.appendChild(inputElement);
        
            let deletecell=document.createElement('td');
            let deleteButton=document.createElement('Button');
            deleteButton.textContent="Delete";
            deleteButton.style.backgroundColor="#e81010";
            deleteButton.style.color="White";
            deleteButton.addEventListener('click',function()
            {
                newRow.remove();
                addtask.value="";
            });
            deletecell.appendChild(deleteButton);
        
            let editCell = document.createElement('td');
            let editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.style.color="White";
            editButton.style.backgroundColor="#2db504";
            newRow.appendChild(taskCell);
            newRow.appendChild(inputCell)
            newRow.appendChild(deleteButton);
            newRow.appendChild(editButton);
            table.appendChild(newRow);
            editButton.addEventListener('click',function()
            {
                inputElement.readOnly=false
                editButton.textContent="Apply"
                editButton.style.backgroundColor="#4287f5"
                editButton.addEventListener('click',function()
                {
                    inputElement.readOnly=true
                    editButton.textContent="Edit"    
                    editButton.style.backgroundColor="#2db504";
                    alert("Changes Applied")
                    addtask.value=("");
                });
            });
        }
    }
    addtask.value="";
});
