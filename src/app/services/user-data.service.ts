import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export  class UserDataService {
  constructor(private fireStore:Firestore) { }
  async saveUser(userData:any):Promise<void>{
    try{
      const collectionInstance = collection(this.fireStore,'user');
      await addDoc(collectionInstance,userData).then(()=>{
        console.log('Data saved successfully')
      });
    }catch(error){
      console.log('Sign up failed',error); 
      throw error;
    }
  }
}
