
import { Injectable } from "@nestjs/common";

@Injectable({})

export class AuthService {

    login() {

        return 'I am signing up';
 
    }
    
    signup() {
        return 'I am logging in';
    }
    
}