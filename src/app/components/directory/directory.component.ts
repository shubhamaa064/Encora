import { Component, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from '../../services/contact.service';
import { FormControl, Validators } from '@angular/forms';
import { Contact } from '../../models/contact';


@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})



export class DirectoryComponent implements OnInit{
  contactData:any;
  // @Output() contactInput;
  fName: string ='';
  lName: string ='';
  telNum: any = null;
 
  constructor(public contactService: ContactService,private toasterService: ToastrService) { }
  ngOnInit(){
    this.contactService.getData().subscribe((res)=>{
      this.contactData=res;
    })
  }
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required]);

  

  getInputErrorMessage() {
    if (this.firstName.hasError('required') || this.lastName.hasError('required') || this.phone.hasError('required')) {
      return 'You must enter a value';
    }
    return null;
  }

  onSubmit() {
    // console.log('clicked');
    let id = this.contactData.length + 2;
    const newContact: Contact = {
      id: id,
      firstName: this.fName,
      lastName: this.lName,
      phone: this.telNum,
    
    }
    this.contactData.push(newContact);
    // console.log(newContact);
    this.toasterService.success(`Contact Added Successfully.`)
  

   



  }

  addContactBtnEnable(){
    return (this.fName==='' || this.lName==='' || this.telNum === null)? true : false
  }
  confirmDelete(contact:any){
    let index = this.contactData.indexOf(contact);
    // console.log(contact);
    this.contactData.splice(index, 1);    this.toasterService.error(`Contact Deleted Successfully.`)
  }

  

}
