"use strict";
function TodoController () {
    const vm = this;
    vm.list = [
        {
            task: "Clean room",
            completed: false
        },
        {
            task: "Grocery store",
            completed: true
        },
        {
            task: "Mow lawn",
            completed: false
        },
        {
            task: "Clean dishes",
            completed: true
        }
    ];
}



angular
    .module("todoApp")
    .controller("TodoController", TodoController)