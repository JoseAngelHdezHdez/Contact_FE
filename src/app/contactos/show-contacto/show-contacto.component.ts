import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactoApiService } from 'src/app/contacto-api.service';

@Component({
  selector: 'app-show-contacto',
  templateUrl: './show-contacto.component.html',
  styleUrls: ['./show-contacto.component.css']
})
export class ShowContactoComponent implements OnInit {
  contactList$!:Observable<any[]>;

  constructor(private service: ContactoApiService){}

  ngOnInit(): void{
      this.contactList$ = this.service.getContactList();
  }

  modalTitle:string = '';
  activateAddEditContactComponent:boolean = false;
  contact:any;

  modalAdd(){
    this.contact = {
      id: 0,
      name: "",
      date: "",
      version: "",
      comment: ""
    }
    this.modalTitle = "Add new contact";
    this.activateAddEditContactComponent = true;
  }

  modalClose(){
    this.activateAddEditContactComponent = false;
    this.contactList$ = this.service.getContactList();
  }

  modalEdit(item:any){
    this.contact = item;
    this.modalTitle = "Edit contact";
    this.activateAddEditContactComponent = true;
  }

  delete(item:any){
    if(confirm(`Are you sure you want delete contact ${item.name}?`)){
      this.service.deleteContact(item.id).subscribe(res => {
        var closeModalBtn = document.getElementById("add-edit-modal-close");
        if(closeModalBtn){
          closeModalBtn.click();
        }
        
        var showDeleteSuccess = document.getElementById('delete-success-alert');
        if(showDeleteSuccess){
          showDeleteSuccess.style.display = "block";
        }
        setTimeout(() => {
          if(showDeleteSuccess){
            showDeleteSuccess.style.display = "none";
          }
        }, 4000);
      })
    }
  }

}
