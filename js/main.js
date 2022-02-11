

let count = 0;
document.getElementById('add-button').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputValue = inputField.value;

    if(inputValue == ''){
        alert(`Please Type Something`)
    }
    else{
        count++;
        // Add Value In Table
    const contentContainer = document.getElementById('content-container');
    const tableContainer = document.createElement('tr');
    tableContainer.innerHTML =`<th scope="row">${count}</th>
    <td>${inputValue}</td>
    <td id ="progress">In Progress</td>
    <td><button id= "confirm-button" class ="confirm-button bg-success me-2 rounded px-4 py-2 text-white fw-bold "> Confirm</button><button id="delete-btn" class="delete-btn bg-danger fw-bold text-white rounded px-4 py-2"
    >Remove</button></td>`;
    contentContainer.appendChild(tableContainer);


    var confirmButton= document.getElementsByClassName('confirm-button');
    for (const button of confirmButton) {
        button.addEventListener('click', function(e){
            e.target.parentNode.previousSibling.previousSibling.innerText= "Alhamdulillah. Done ";
            e.target.style.display = "none"
        //    console.log(e.target.parentNode.previousSibling.previousSibling)
        });

    }
    
    const deleteButton= document.getElementsByClassName('delete-btn');
    for (const button of deleteButton) {
        button.addEventListener('click', function(e){
            // console.log(e.target.parentNode.parentNode)
             e.target.parentNode.parentNode.style.display= "none";
             
            
        });

    }
    inputField.value = '';
    }

})