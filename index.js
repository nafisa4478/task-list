let arr = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-button")
const ulEl = document.getElementById("ulel")
const deleteEl = document.getElementById("delete")
const filterEl = document.getElementById("filter")

const local = JSON.parse(localStorage.getItem("tasks"))
if ( local ){
    arr = local
}

inputBtn.addEventListener("click", function(){
    if( inputEl.value ===""){
        alert("Add a task!!!")
    }else{
        arr.push(inputEl.value) 
        inputEl.value =""
        localStorage.setItem("tasks", JSON.stringify(arr))
        // console.log(arr)
        render(arr)
    }
})

function render(arr){
    let arr_items = ""
    for( let i= 0; i< arr.length; i++){
        arr_items += `
        <li>
            ${arr[i]}
            <button id="btn" onclick='cut(this)' type="button">
                <a href="#">x</a>
            </button>
        </li>`
    }
    ulEl.innerHTML = arr_items
}


function cut(element){ 
    const liEl = element.parentNode
    liEl.remove()
}

deleteEl.addEventListener("click", function(){
    arr = []
    localStorage.clear();
    render(arr)
    // ulEl.innerHTML = ""
})

function filter(){
    let input = filterEl.value.toLowerCase()
    let items = ulEl.getElementsByTagName('li')
    for (let i = 0; i < items.length; i++){
        let textvalue = items[i].textContent
        if( textvalue.toLowerCase().indexOf(input) > -1){
            items[i].style.display = ""
        }else{
            items[i].style.display = "none"
        }
    }
    
}



    
