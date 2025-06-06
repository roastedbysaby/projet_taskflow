import Account from './account';
import bcrypt from 'bcrypt';
import validator from 'validator';


class AccountService{
    createAccount(email, passwordRaw, firstName, lastName, dob, telephone){
        if (!email || ){
            
        }

        if (passwordRaw){
            
        }
    }
}



//helper methods
function isNullOrWhiteSpace(string){
    if (string.trim() === '' || string.trim().length === 0)
        return true;
}

module.exports = AccountService;
