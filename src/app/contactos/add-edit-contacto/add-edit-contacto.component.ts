import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactoApiService } from 'src/app/contacto-api.service';

@Component({
  selector: 'app-add-edit-contacto',
  templateUrl: './add-edit-contacto.component.html',
  styleUrls: ['./add-edit-contacto.component.css']
})
export class AddEditContactoComponent implements OnInit {

  contactList$!:Observable<any[]>;

  constructor(private service:ContactoApiService){}

  @Input() contact:any;
  id: number = 0;
  name: string = "";
  date: string = "";
  version: string = "";
  comment: string = "";

  ngOnInit(): void{
    this.id = this.contact.id;
    this.name = this.contact.name;
    this.date = this.contact.date;
    this.version = this.contact.version;
    this.comment = this.contact.comment;
  }

  addContact(){
    var contact = {
      name: this.name,
      date: this.date,
      version: this.version,
      comment: this.comment
    }

    this.service.addContact(contact).subscribe(res => {
      var closeModalBtn = document.getElementById("add-edit-modal-close");
      if(closeModalBtn){
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert');
      if(showAddSuccess){
        showAddSuccess.style.display = "block";
      }
      setTimeout(() => {
        if(showAddSuccess){
          showAddSuccess.style.display = "none";
        }
      }, 4000);
    })
  }

  updateContact(){
    var contact = {
      id: this.id,
      name: this.name,
      date: this.date,
      version: this.version,
      comment: this.comment
    }
    var id:number = this.id;
    this.service.updateContact(id, contact).subscribe(res => {
      var closeModalBtn = document.getElementById("add-edit-modal-close");
      if(closeModalBtn){
        closeModalBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-success-alert');
      if(showUpdateSuccess){
        showUpdateSuccess.style.display = "block";
      }
      setTimeout(() => {
        if(showUpdateSuccess){
          showUpdateSuccess.style.display = "none";
        }
      }, 4000);
    })
  }

}
