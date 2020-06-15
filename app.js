// BUDGET CONTROLLER
var budgetController = (function () {

    // Some code

})();

// UI CONTROLLER
var UIController = (function () {

    return {
        getinput: function () {

        }
    }

})();


// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    var ctrlAddItem = function () {
        // 1. Get the filled input data

        // 2.  Add item to budget controller

        // 3. Add item to ui

        // 4, Calculate Budget

        // 5. Display budget on ui

        console.log('It works');

    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {

        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }

    });


})(budgetController, UIController);