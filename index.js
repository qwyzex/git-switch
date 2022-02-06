#!/usr/bin/env node
import { execSync } from "child_process";
import inquirer from "inquirer";
import chalk from 'chalk';

let username;
let email;

async function greet() {
    const usernamePrompt = await inquirer.prompt({
        type: "input",
        name: "username",
        message: `What is your Git/Github ${chalk.magenta('username')}?`,
        default: "qwyzex",
    });
    const emailPrompt = await inquirer.prompt({
        type: "input",
        name: "email",
        message: `What is your Git/Github ${chalk.magenta('email')}?`,
        default: "qwyzex@gmail.com",
    });

    username = usernamePrompt.username;
    email = emailPrompt.email;
}

async function switchUser() {
    const statement = `git config --global user.name ${username} && git config --global user.email ${email}`;
    execSync(statement, { encoding: "utf-8" });
    console.log("User switched to", username, "!");
};

await greet().then(() => {
    switchUser();
});
