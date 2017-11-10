const dataBase = require ("./nutShellDB")
const userFactory = require("./userFactory")
const addUser = require("./addUserToDatabase")
const setVisibility = require("./setVisibility")
const setActiveUser = require("./activeUser")
const register = document.querySelector(".button--newAccount")
const login = document.querySelector(".button--login")


register.addEventListener("click", (event) => {
    console.log("clicked on new account");
    debugger
    const username = document.querySelector("input[name='username']").value
    const email = document.querySelector("input[name='email']").value
    const newUser = userFactory(username, email)

    //add user to database
    addUser(newUser)
    //hide authorization form
    const formEl = document.querySelector(".login")
    setVisibility(formEl , "hide")
    //unhide nutshell app
    const appEl = document.querySelector(".grid")
    setVisibility(appEl, "show")
    //set current user as active user
    setActiveUser(newUser)
    console.log(dataBase)
})