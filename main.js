//locall storage
let allSpans = document.querySelectorAll('.buttons span');
let results = document.querySelector('.results > span');
let theInputKey = document.getElementById('the-inputKey');
let theInputValue = document.getElementById('the-inputValue');



allSpans.forEach((span) => {
    span.addEventListener('click', (e) => {

        if (e.target.classList.contains('check-item')) {
            checkItem();
        }
        if (e.target.classList.contains('add-item')) {
            addItem();
        }
        if (e.target.classList.contains('delete-item')) {
            deleteItem();
        }
        if (e.target.classList.contains('show-items')) {
            showItems();
        }

        if (e.target.classList.contains('check-itemCookies')) {
            checkItemCookies();
        }
        if (e.target.classList.contains('add-itemCookies')) {
            addItemCookies();
        }
        if (e.target.classList.contains('delete-itemCookies')) {
            deleteItemCookies();
        }
        if (e.target.classList.contains('show-itemsCookies')) {
            showItemsCookies();
        }
    });
});
function showMessage() {
    if (theInputKey.value == '' || theInputValue == '') {
        results.innerHTML = 'input can\'t be empty';
    }
}

function checkItem() {
    if (theInputKey.value !== '' && theInputValue !== '') {

        if (localStorage.getItem(theInputKey.value.toLowerCase())) {
            results.innerHTML = `found local item called <span>${theInputKey.value.toLowerCase()}</span>: ${theInputValue.value.toLowerCase()}</span>`
        } else {
            results.innerHTML = `no local storage <span>${theInputKey.value.toLowerCase()}</span> or <span>${theInputValue.value.toLowerCase()}</span>`;
        }
    } else {
        showMessage();
    }

}
function addItem() {
    if (theInputKey.value !== '' && theInputValue !== '') {
        localStorage.setItem(theInputKey.value.toLowerCase(), theInputValue.value.toLowerCase());
        results.innerHTML = `local storage item <span>${theInputKey.value.toLowerCase()}</span>:<span>${theInputValue.value.toLowerCase()}</span> added`;
        theInputKey.value = '';
        theInputValue.value = '';
    } else {
        showMessage();
    }

}
function deleteItem() {
    if (theInputKey.value !== '' && theInputValue !== '') {
        if (localStorage.getItem(theInputKey.value.toLowerCase())) {
            localStorage.removeItem(theInputKey.value.toLowerCase())
            results.innerHTML = ` local item called <span>${theInputKey.value.toLowerCase()}</span>:<span>${theInputValue.value.toLowerCase()}</span> deleted`;
            theInputKey.value = '';
            theInputValue.value = '';
        } else {
            results.innerHTML = `no local storage <span>${theInputKey.value.toLowerCase()}</span> or <span>${theInputValue.value.toLowerCase()}</span>`;
        }

    } else {
        showMessage();
    }

}
function showItems() {

    if (localStorage.length) {
        results.innerHTML = '';
        for (let [key, value] of Object.entries(localStorage)) {
            results.innerHTML += `<span class='keys'>${key}: ${value}, </span>`;
        }

    } else {
        results.innerHTML = 'local storege is empty';
    }
}

//cookies

let resultsCookies = document.querySelector('.resultsCookies > span');
let theInputKeyCookies = document.getElementById('the-inputKeyCookies');
let theInputValueCookies = document.getElementById('the-inputValueCookies');



function showMessageCookies() {
    if (theInputKeyCookies.value == '' || theInputValueCookies == '') {
        results.innerHTML = 'input can\'t be empty';
    }
}

function checkItemCookies() {
    let status = false;
    if (theInputKeyCookies.value !== '' && theInputValueCookies.value !== '') {
        let minicookie = document.cookie;

        minicookie.split('; ');
        minicookie.split('; ').forEach((cooki) => {
            let cookieWithoutPlus = cooki.split('=');
            console.log('equal issssss');
            if (cookieWithoutPlus[0] == theInputKeyCookies.value && cookieWithoutPlus[1] == theInputValueCookies.value) {
                resultsCookies.innerHTML = `we found ${theInputKeyCookies.value}:${theInputValueCookies.value}`;
                status = true;
            } else {

            }

        });

        if (status == true) {
            console.log('yes is there');//free
        } else {
            resultsCookies.innerHTML = `we didn\'t found <span> ${theInputKeyCookies.value}</span>:<span>${theInputValueCookies.value}</span>`;
        }
        theInputKeyCookies.value = '';
        theInputValueCookies.value = '';

    } else {
        showMessageCookies();
    }
}
function addItemCookies() {
    if (theInputKeyCookies.value !== '' && theInputValueCookies.value !== '') {
        document.cookie = `${theInputKeyCookies.value}=${theInputValueCookies.value} `;
        resultsCookies.innerHTML = `we found <span>${theInputKeyCookies.value}</span>:<span>${theInputValueCookies.value}</span> is Added`;
        theInputKeyCookies.value = '';
        theInputValueCookies.value = '';
    } else {
        showMessageCookies();
    }

}
function deleteItemCookies() {
    console.log('deeeeeeeeeeeee');
    let status = false;
    let minicookie = document.cookie;
    minicookie.split('; ').forEach((cooki) => {
        let cookieWithoutPlus = cooki.split('=');
        console.log('00', cookieWithoutPlus[0] == theInputKeyCookies.value);
        console.log('0', cookieWithoutPlus[0]);
        console.log('0', theInputKeyCookies.value);
        console.log('11', cookieWithoutPlus[1] == theInputValueCookies.value);
        console.log('1', cookieWithoutPlus[1]);
        console.log('1', theInputValueCookies.value);
        console.log(cookieWithoutPlus[0] == theInputKeyCookies.value && cookieWithoutPlus[1] == theInputValueCookies.value);
        if (cookieWithoutPlus[0] == theInputKeyCookies.value && cookieWithoutPlus[1] == theInputValueCookies.value) {
            console.log('in delete if', theInputKeyCookies.value);
            document.cookie = `${theInputKeyCookies.value} = `;
            resultsCookies.innerHTML = `we found <span>${theInputKeyCookies.value}</span>:<span>${theInputValueCookies.value}</span> is deleted`;
            status = true;
        }
    });
    if (status == true) {
        console.log('yes is dleted');//free
    } else {
        console.log('else');
        resultsCookies.innerHTML = `we didn\'t found <span> ${theInputKeyCookies.value}</span>:<span>${theInputValueCookies.value}</span>`;
    }

}
function showItemsCookies() {
    resultsCookies.innerHTML = '';
    if (document.cookie.length) {
        let minicookie = document.cookie;
        minicookie.split('; ').forEach((cooki) => {
            let cookieWithoutPlus = cooki.split('=');
            resultsCookies.innerHTML += ` <span class='showResult'> ${cookieWithoutPlus[0]}:${cookieWithoutPlus[1]}</span>`;

        });
    } else {
        resultsCookies.innerHTML = 'there no cookies';
    }
}
