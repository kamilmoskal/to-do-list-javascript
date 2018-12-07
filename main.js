const addForm = document.forms["form1"]; // chwyt formularz z id form1
addForm.addEventListener("submit", function(e){
    ///zablokowanie odswiezanie poprzez klikniecie inputa
    e.preventDefault();
    const value = document.querySelector('input[name="txt"]').value
    ///stworzenie elementow ktore beda dodane po kliknieciu inputa
    const li = document.createElement("li");
    const txt = document.createElement("span");
    const addBtn = document.createElement("span");
    const deleteBtn = document.createElement("span");
    // dodanie tekstu ktory wpisaliscie w inpucie do nowego stworzonego elementu
    txt.textContent = value;
    // dodanie klasy/styli/id
    txt.classList.add("content");
    addBtn.classList.add("fas");
    addBtn.classList.add("fa-check");
    deleteBtn.classList.add("fas");
    deleteBtn.classList.add("fa-times");
    // dodanie podelementow do elementu li
    li.appendChild(txt);
    li.appendChild(addBtn);
    li.appendChild(deleteBtn);
    // dodanie stworzonego li z podelementami do rodzica
    const list = document.querySelector("#to-do-list ul");
    // list.appendChild(li); // dodanie na koncu listy nowego li

    //jezeli nie chcemy zeby dodalo nam puste pole gdy nic nie wpiszemy mozna dodac tutaj ifa ktory dziala jak value jest != 0 lub do inputa dopisac // required="" autocomplete="off"
    list.insertBefore(li, list.getElementsByTagName("li")[0]); // dodanie na poczatku listy nowego li
});
/////// BUBLING nadanie eventlistener dla calego UL jezeli klikne odpowiedni classname to usuwa elementy

const ul = document.querySelector("#to-do-list ul")
ul.addEventListener("click",function(e){
    if(e.target.classList == "fas fa-times") {  
        const revli = e.target.parentElement;   ////revli - klikniety element targetuje rodzica
        console.log(revli);

        // usuniecie 2 sposoby
        //ul.removeChild(revli); /// ul usuwa dziecko target; TEN JEST OP
        //revli.parentNode.removeChild(revli); // rodzic usuwa target

        ////usuniecie ale z efektem fade out,  w css dla znacznika ul jest dodane opacity =1;
        revli.style.opacity = '0';
        setTimeout(function(){revli.parentNode.removeChild(revli);}, 300);


    }
});

ul.addEventListener("click",function(e){
    if(e.target.classList == "fas fa-check") {  
        const lichecked = e.target.parentElement;  
        lichecked.classList.add("checked");   
    }
});

const clear = document.querySelector(".clear")
clear.addEventListener("click", function(e){
    const toclear = clear.previousElementSibling;
    toclear.innerHTML = "";
});

///// jeżeli najade myszka w ul na klase o nazwie "fas fa-times" to dodaj style dla roznych elementów
ul.addEventListener("mouseover", function(e){
    if (e.target.classList == "fas fa-times") {
        const hovborder = e.target.parentElement;
        hovborder.style.borderLeft = "6px solid darkred";
        hovborder.style.backgroundColor = "rgba(255, 0, 0, 0.164)";
        e.target.style.backgroundColor = "darkred";
        e.target.style.color = "white";
        hovborderkid = hovborder.children[0];
        hovborderkid.style.color = "white"
    }
});
///// jeżeli odjade myszka z tej klasy to usuwa te wszystkie style
ul.addEventListener("mouseout", function(e){
    if (e.target.classList == "fas fa-times") {
        const hovoutborder = e.target.parentElement;
        hovoutborder.removeAttribute("style");
        e.target.removeAttribute("style");
        hovoutborderkid = hovoutborder.children[0];
        hovoutborderkid.removeAttribute("style");
    }
});

///////// dla drugiego buttona hover i hover out:
ul.addEventListener("mouseover", function(e){
    if (e.target.classList == "fas fa-check") {
        const hovborder = e.target.parentElement;
        hovborder.style.borderLeft = "6px solid green";
        hovborder.style.backgroundColor = "rgba(5, 161, 0, 0.284)";
        e.target.style.backgroundColor = "green";
        e.target.style.color = "white";
        hovborderkid = hovborder.children[0];
        hovborderkid.style.color = "white"
    }
});
///// jeżeli odjade myszka z tej klasy to usuwa te wszystkie style
ul.addEventListener("mouseout", function(e){
    if (e.target.classList == "fas fa-check") {
        const hovoutborder = e.target.parentElement;
        hovoutborder.removeAttribute("style");
        e.target.removeAttribute("style");
        hovoutborderkid = hovoutborder.children[0];
        hovoutborderkid.removeAttribute("style");
    }
});
