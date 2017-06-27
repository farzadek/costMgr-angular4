import { Injectable } from '@angular/core';

@Injectable()
export class UserdataService {

  constructor() { }
  getUserDataName(un, ps){
    return userData.slice(0).find( _user => _user.un == un && _user.ps == ps);
  }
  getOneUserTransactionData(id){
    return transactionData.slice(0).find( _user => _user.uid == id);
  }
  getSubCategories(type){
    var mySub = [];
    for(var i=0;i<subcategory.length;i++){
      if(subcategory[i].income==type){
        mySub.push(subcategory[i]);
      }
    }
    return mySub;
  }
  getOneCategory(id){
    return category.slice(0).find( _user => _user.catid == id);
  }
}

const userData = [
  {"id":1,"un":"aa","ps":"aa","name":"user no1"},
  {"id":2,"un":"bb","ps":"bb","name":"user no2"},
  {"id":3,"un":"cc","ps":"cc","name":"user no3"},
  {"id":4,"un":"dd","ps":"dd","name":"Farzad Kamali"},
  {"id":5,"un":"ee","ps":"ee","name":"user no5"}
];

const transactionData = [
  {"uid":1,"income":false,"price":77.25, "category":5, "subcategory":2, date:"27/05/2016"},
  {"uid":1,"income":false,"price":16.12, "category":1, "subcategory":3, date:"26/05/2016"},
  {"uid":1,"income":false,"price":12, "category":4, "subcategory":2, date:"22/05/2016"},
  {"uid":2,"income":true,"price":925.38, "category":1, "subcategory":1, date:"7/05/2016"},
  {"uid":1,"income":false,"price":18.99, "category":1, "subcategory":1, date:"17/05/2016"},
  {"uid":1,"income":false,"price":17.5, "category":1, "subcategory":3, date:"1/05/2016"},
  {"uid":1,"income":true,"price":180, "category":1, "subcategory":1, date:"16/05/2016"},
];

const subcategory = [
  {"id":1,"income":false,"name":"dairy"},
  {"id":2,"income":false,"name":"bread"},
  {"id":3,"income":false,"name":"meat"},
  {"id":4,"income":false,"name":"oil"},
  {"id":5,"income":true,"name":"salary"},
  {"id":6,"income":false,"name":"fruit"},
  {"id":7,"income":false,"name":"cloth"},
  {"id":8,"income":true,"name":"tax-return"},
];

const category = [
  {"id":1,"catid":1,"name":"milk"},
  {"id":2,"catid":1,"name":"ice cream"},
  {"id":3,"catid":1,"name":"cream"},
  {"id":4,"catid":1,"name":"yogo"},
  {"id":5,"catid":2,"name":"bread"},
  {"id":6,"catid":2,"name":"rice"},
  {"id":7,"catid":3,"name":"chicken"},
  {"id":8,"catid":3,"name":"lamb"},
  {"id":9,"catid":4,"name":"olive"},
  {"id":10,"catid":4,"name":"others"},
  {"id":11,"catid":5,"name":"fruit"},
  {"id":12,"catid":5,"name":"vegetable"},
  {"id":13,"catid":6,"name":"me"},
  {"id":14,"catid":6,"name":"baby"},
  {"id":15,"catid":7,"name":"salary"},
  {"id":16,"catid":7,"name":"contract"},
  {"id":17,"catid":8,"name":"quebec"},
  {"id":18,"catid":8,"name":"federal"},
  {"id":19,"catid":8,"name":"child benefit"},
];