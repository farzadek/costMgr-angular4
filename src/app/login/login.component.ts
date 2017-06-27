import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginView:number = 1;

  nameOfUser : string ='';
  idOfCurrentUser : number;
  loginForm : FormGroup;
  registerForm : FormGroup;
  transactionForm : FormGroup;
  post: any;
  username: string = '';
  password: string = '';
  name: string = '';
  userFound : boolean = true;
  _today : Date = new Date;
  subCats = this._UserdataService.getSubCategories(false);
  Cats = this._UserdataService.getOneCategory(0);
  constructor(
    logForm:FormBuilder, 
    regForm:FormBuilder, 
    transactForm:FormBuilder, 
    private _UserdataService : UserdataService 
  ) 

    {

      this.loginForm = new FormGroup({
          loginUsername: new FormControl('', Validators.required),
          loginPassword: new FormControl('')
      });
      this.registerForm = new FormGroup({
          registerUsername: new FormControl('', Validators.required ),
          registerPassword: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)]) ),
          registerName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)]) )
      });
      this.transactionForm = new FormGroup({
          transUserId: new FormControl(this.idOfCurrentUser),
          transDate: new FormControl(this._today, Validators.required ),
          transPrice: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)]) ),
          transCategory: new FormControl(0, Validators.compose([Validators.min(1)]) ),
          transSubCategory: new FormControl(0, Validators.compose([Validators.min(1)])),
          transIncome: new FormControl('false')
      });
      
    }

  loginUser(post){
      if(this._UserdataService.getUserDataName(post.loginUsername, post.loginPassword)){
        this.nameOfUser = this._UserdataService.getUserDataName(post.loginUsername, post.loginPassword).name;
        this.idOfCurrentUser = this._UserdataService.getUserDataName(post.loginUsername, post.loginPassword).id;
        post.loginUsername = '';
        post.loginPassword = '';
        this.loginView = 3;
        this.userFound = true;
      }
      else{
       this.userFound = false;
      }
  }  
  addUser(post){
      this.username = post.registerUsername;
      this.password = post.registerPassword;
      this.name = post.registerName;
  }  
  addTransaction(post){

    console.log(post);
  }

  loginButtonPressed(){
    if(this.loginView == 1) {
      this.loginView = 2;
    } 
    else {this.loginView = 1;}
  }
  logoutButtonPressed(){
    this.loginView = 1;
  }
  costChecked(x){
      this.subCats = this._UserdataService.getSubCategories(x);
      this.Cats = this._UserdataService.getOneCategory(0);
  }
  subCatChanged(x){
      this.Cats = this._UserdataService.getOneCategory(this.subCats[x].id);
  }
}
