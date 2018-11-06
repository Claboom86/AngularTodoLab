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
    vm.addTask = (taskToAdd) => {
        vm.list.push({task: taskToAdd.task, completed: false});
    };
    vm.removeTask = (index) => {
        vm.list.splice(index, 1);
    };
    vm.completeTask = (item) => {
        console.log("yay");
        item.completed = true;
        console.log(vm.list);
    };
}



angular
    .module("todoApp")
    .controller("TodoController", TodoController)