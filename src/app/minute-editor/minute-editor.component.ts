import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { Minutes, MinutesObj } from '../minutes';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-minute-editor',
  templateUrl: './minute-editor.component.html',
  styleUrls: ['./minute-editor.component.sass']
})
export class MinuteEditorComponent implements OnInit {

  constructor(private iotaAPI: UserService, private iotaAuth: AuthService, private route: ActivatedRoute) { 
  }

  private mode: number = 0;
  public id: string;
  public document: Minutes;

  // On init 
  ngOnInit(): void {
    // Set Mode and ID to match the URL parameters
    this.mode = Number(this.route.snapshot.paramMap.get('mode'));
    this.id  = this.route.snapshot.paramMap.get('id') || "";
    // Load minutes
    this.loadMinuteSpec();
  }

  loadMinuteSpec(): void {
    // If in viewer mode use UserService to retrieve specific minutes
    if(this.mode === 1) {
      this.iotaAPI.getMinutesSpec(this.id).subscribe(doc => this.document = doc);
    }
    // If editor mode generate blank template to bind to form.
    if(this.mode === 0) {
      this.document = this.genTemplate();
    }
  }

  // Utility function to return private MODE
  getMode(): number {
    return this.mode;
  }

  // Generates an empty Minutes type Object containing the Organization ID and the User Document
  genTemplate() : Minutes {
    const usrDoc: User = this.iotaAuth.readUserDoc();
    const doc = new MinutesObj("","","",this.id,usrDoc,"" ,"");
    return doc;
  }

  // Return easier-to-read date string from document date.
  getDate(): string {
    const datePipe = new DatePipe('en-US');
    const date = datePipe.transform(this.document.createDate, 'MM/dd/yy h:mm a');
    return date || "";
  }

  onSubmit() {}

  // Use UserService to submit minutes document.
  submitMinutes() {
    this.iotaAPI.putMinutes(this.document);
    console.log(this.document);
  }

}
