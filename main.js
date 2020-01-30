console.log('hi');


const printToDom = (divId, textToPrint) => {
    let selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const launchForm = () => {
    let domString = '';
    domString += '<div class="form-container col-md-5 border border-dark rounded p-3">';
    domString += '   <div class="form-header mb-2">';
    domString += '       <h2 class="form-instructions">Enter First Year\'s Name</h2>';
    domString += '   </div>';
    domString += '   <form class="form-inline d-flex justify-content-end">';
    domString += '       <div class="form-group d-flex mx-sm-3 mb-2">';
    domString += '           <p class="pr-5">Student:</p>';
    domString += '           <label for="inputName" class="sr-only">Name</label>';
    domString += '           <input type="text" class="form-control" id="inputName" placeholder="Neville Longbottom">';
    domString += '       </div>';
    domString += '       <button type="submit" class="btn btn-primary mb-2">Sort!</button>';
    domString += '   </form>';
    domString += '</div>';
    printToDom('sorting-form', domString);
};


const events = () => {
    document.getElementById('start-sorting').addEventListener('click', launchForm);
};

const init = () => {
    events();
};

init();
