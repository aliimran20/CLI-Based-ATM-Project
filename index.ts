#! /usr/bin/env node

import inquirer from 'inquirer'
import chalk from 'chalk'


const userid = 'admin'
const userpin = 1234
let balance = Math.floor(Math.random() * 10000) + 1  //randomly assigns a balance between 1 to 10000
let attempts = 3
const magenta = chalk.magenta
const yellow = chalk.yellow
const red = chalk.red

console.log (red(`\nTIP: THE USER ID & USER PIN ARE: ${userid} & ${userpin}`))


async function main() 

{

    while (attempts > 0) 
    
    {

        const ID = await inquirer.prompt
        
        ({

            name: 'userid',
            type: 'input',
            prefix: '',
            message: yellow('\nPlease Enter Your User ID')

        })

        const PIN = await inquirer.prompt
        
        ({

            name: 'userpin',
            type: 'number',
            prefix: '',
            message: yellow('\nPlease Enter Your User PIN')

        })


        if (ID.userid === userid && PIN.userpin === userpin) 
        
        {

            const operation = await inquirer.prompt
            
            ({

                name: 'operation',
                type: 'list',
                prefix: '',
                message: yellow('\nPLEASE SELECT AN OPERATION -->'),
                choices: 
                [
                    { name: magenta('\nVIEW BALANCE'), value: 'View Balance' },
                    { name: magenta('\nWITHDRAW AMOUNT'), value: 'Withdraw Amount' },
                    { name: magenta('\nDEPOSIT AMOUNT'), value: 'Deposit Amount' }
                ]

            })

            switch (operation.operation) 
            
            {

                case 'View Balance':
                    console.log(yellow(`\nYOUR CURRENT BALANCE IS: ${balance}`))
                    break;

                case 'Withdraw Amount':
                    const wamount = await inquirer.prompt
                    
                    ({

                        name: 'amount',
                        type: 'number',
                        prefix: '',
                        message: yellow('\nPLEASE ENTER AN AMOUNT TO WITHDRAW')

                    })
                    
                    console.log(magenta(`\nBEFORE WITHDRAWL, YOUR BALANCE WAS: ${balance}`))
                    balance -= wamount.amount
                    console.log(magenta(`\nAFTER WITHDRAWAL, YOUR CURRENT BALANCE IS: ${balance}`));
                    break;

                case 'Deposit Amount':
                    const damount = await inquirer.prompt
                    
                    ({
                        name: 'amount',
                        type: 'number',
                        prefix: '',
                        message: yellow('\nPLEASE ENTER AN AMOUNT TO DEPOSIT')

                    })

                    console.log(magenta(`\nBEFORE DEPOSIT, YOUR BALANCE WAS: ${balance}`))
                    balance += damount.amount;
                    console.log(magenta(`\nAFTER DEPOSITING, YOUR CURRENT BALANCE IS: ${balance}`));
                    break;

                default:
                    break;
            }

            break; 
            // Exit the loop if authentication is successful
        } 
        
        else 
        
        {

            console.log (red(`\nINCORRECT CREDENTIALS - YOU HAVE ${attempts - 1} ATTEMPT(S) REMAINING`))
            attempts--

        }

    }

}

main()