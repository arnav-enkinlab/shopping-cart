let idd = 1000;
function addProduct(){
    console.log("function called to add product.");

    const x = document.getElementById("productName").value;
    const y = document.getElementById("productPrice").value;
    const z = document.getElementById("productQuantity").value;
    // debugger
    if(y < 1 || z < 1)
    {
        alert("The value can't be less than 1!!!");
    }
    else if(x.length == 0 || y.length == 0 || z.length == 0)
    {
        alert("INPUT VALUES");
    }
    else 
    {

        let currentID = ++idd;

        var table = document.getElementById("myTable");
        var row = table.insertRow(1);
        row.setAttribute("id", "row" + currentID);
        var cell = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        cell3.setAttribute("id", "price" + currentID);
        var cell4 = row.insertCell(4);
        cell4.setAttribute("id", "total" + currentID);
        cell4.classList.add("totalRows");
        var cell5 = row.insertCell(5);
        var del = document.createElement("button");
        var text = document.createTextNode("Delete");
        del.appendChild(text);
        del.classList.add("delbutton");
        del.setAttribute("id", "delButton"+currentID);
        del.setAttribute("onclick", "deleteRow(this.id)");
        

        var plus = document.createElement("button");
        var plusSign = document.createTextNode("+");
        plus.setAttribute("id", "plusbtn" + currentID);
        plus.setAttribute("onclick", "plusQuantity(this.id)"); 
        plus.appendChild(plusSign);

        var quan = document.createElement("div");
        var quanSign = document.createTextNode(y);
        quan.setAttribute("id", "quantity" + currentID);
        quan.appendChild(quanSign);

        var minus = document.createElement("button");
        var minusSign = document.createTextNode("-");
        minus.setAttribute("id", "minusbtn" + currentID);
        minus.setAttribute("onclick", "minusQuantity(this.id)"); 
        minus.appendChild(minusSign);

        var divContainer = document.createElement("div");
        divContainer.appendChild(plus);
        divContainer.appendChild(quan);
        divContainer.appendChild(minus);
        divContainer.classList.add("quantity-handler");

        cell.innerHTML = currentID;

        var textarea = document.createElement("input");
        textarea.setAttribute("type", "text");
        textarea.setAttribute("style", "border: none;");
        textarea.value = x;
        cell1.appendChild(textarea);
        // cell2.innerHTML = y;
        cell2.appendChild(divContainer);
        cell3.innerHTML = z;
        cell4.innerHTML = y * z;
        cell5.appendChild(del);
        // document.body.appendChild(del);
        document.getElementById("productName").value = "";
        document.getElementById("productPrice").value = null;
        document.getElementById("productQuantity").value = null;

        // debugger
        // del.addEventListener("click", deleteRow());
        calculateTotal();
        
    }

}



function deleteRow(btnID){
    //console.log("The delete button has been clicked with id " + btnID);
    let len = btnID.length;
    let delRow = "row" + btnID.slice(len - 4, len);
    //console.log(delRow);
    document.getElementById(delRow).remove();
    calculateTotal();

}


function plusQuantity(btnID){
    //console.log("Increase Quantity by 1 of " + btnID);
    let len = btnID.length;
    let id = btnID.slice(len - 4, len);
    
    let quan = (document.getElementById("quantity" + id).innerText);
    //console.log(quan);
    document.getElementById("quantity" + id).innerText = (+quan + 1);
    let pr = document.getElementById("price" + id).innerHTML;
    document.getElementById("total" + id).innerHTML = (+quan + 1) * (+pr);

    calculateTotal();
 }

function minusQuantity(btnID){
    //console.log("Decrease Quantity by 1 of " + btnID)
    let len = btnID.length;
    let id = btnID.slice(len - 4, len);
    
    let quan = (document.getElementById("quantity" + id).innerText);
    //console.log(quan);
    if(+quan == 0)
    {
        alert("Minimum Quantity !!!");
    }
    else
    {
        document.getElementById("quantity" + id).innerText = (+quan - 1);
        let pr = document.getElementById("price" + id).innerHTML;
        document.getElementById("total" + id).innerHTML = (+quan - 1) * (+pr);
    }
    calculateTotal()
    
    
    
}

function calculateTotal(){
    let table = document.getElementById("myTable");
    let totals = 0;
    for(var i = 1, row; row = table.rows[i]; i++)
    {
        let rowValue = row.cells[4].innerHTML;
        
        
        if(row.cells[4].id == "totalValue")
        { 
            //console.log("Last row");
            row.cells[4].innerHTML = totals;
            break;
        }
        else
        {
            //console.log(rowValue);
            totals += parseInt(rowValue);
        }
    }
    //console.log("Total of all values is " + totals);

}




function addProductDirect(product, price){
    console.log("function called to add product.");


        let currentID = ++idd;

        var table = document.getElementById("myTable");
        var row = table.insertRow(1);
        row.setAttribute("id", "row" + currentID);
        var cell = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        cell3.setAttribute("id", "price" + currentID);
        var cell4 = row.insertCell(4);
        cell4.setAttribute("id", "total" + currentID);
        cell4.classList.add("totalRows");
        var cell5 = row.insertCell(5);
        var del = document.createElement("button");
        var text = document.createTextNode("Delete");
        del.appendChild(text);
        del.classList.add("delbutton");
        del.setAttribute("id", "delButton"+currentID);
        del.setAttribute("onclick", "deleteRow(this.id)");
        

        var plus = document.createElement("button");
        var plusSign = document.createTextNode("+");
        plus.setAttribute("id", "plusbtn" + currentID);
        plus.setAttribute("onclick", "plusQuantity(this.id)"); 
        plus.appendChild(plusSign);

        var quan = document.createElement("div");
        var quanSign = document.createTextNode("1");
        quan.setAttribute("id", "quantity" + currentID);
        quan.appendChild(quanSign);

        var minus = document.createElement("button");
        var minusSign = document.createTextNode("-");
        minus.setAttribute("id", "minusbtn" + currentID);
        minus.setAttribute("onclick", "minusQuantity(this.id)"); 
        minus.appendChild(minusSign);

        var divContainer = document.createElement("div");
        divContainer.appendChild(plus);
        divContainer.appendChild(quan);
        divContainer.appendChild(minus);
        divContainer.classList.add("quantity-handler");

        cell.innerHTML = currentID;

        var textarea = document.createElement("input");
        textarea.setAttribute("type", "text");
        textarea.setAttribute("style", "border: none;");
        textarea.value = product;
        cell1.appendChild(textarea);
        // cell2.innerHTML = y;
        cell2.appendChild(divContainer);
        cell3.innerHTML = price;
        cell4.innerHTML = price;
        cell5.appendChild(del);
        // document.body.appendChild(del);
        document.getElementById("productName").value = "";
        document.getElementById("productPrice").value = null;
        document.getElementById("productQuantity").value = null;

        // debugger
        // del.addEventListener("click", deleteRow());
        calculateTotal();
        
    

}