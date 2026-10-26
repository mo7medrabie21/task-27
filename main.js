// First Task

function leftText() {

    document.getElementById("title").style.textAlign = "left";

}


function centerText() {

    document.getElementById("title").style.textAlign = "center";

}


function rightText() {

    document.getElementById("title").style.textAlign = "right";

}



// To Do List

function addWork() {

    var work = document.getElementById("work").value;

    var tableBody = document.getElementById("tableBody");


    if (work == "") {

        alert("Please enter your work");

    }

    else {

        tableBody.innerHTML +=
        `
        <tr>
            <td>${work}</td>

            <td>
                <button
                    class="btn btn-danger"
                    onclick="deleteWork(this)">
                    Delete
                </button>
            </td>
        </tr>
        `;


        document.getElementById("work").value = "";

    }

}


function deleteWork(button) {

    button.parentElement.parentElement.remove();

}