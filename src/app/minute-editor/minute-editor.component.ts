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

  ngOnInit(): void {
    this.mode = Number(this.route.snapshot.paramMap.get('mode'));
    this.id  = this.route.snapshot.paramMap.get('id') || "";
    this.loadMinuteSpec();
  }

  loadMinuteSpec(): void {
    if(this.mode === 1) {
      this.iotaAPI.getMinutesSpec(this.id).subscribe(doc => this.document = doc);
    }
    if(this.mode === 0) {
      this.document = this.genTemplate();
    }
  }

  getMode(): number {
    return this.mode;
  }

  genTemplate() : Minutes {
    const usrDoc: User = this.iotaAuth.readUserDoc();
    const doc = new MinutesObj("","","",this.id,usrDoc,"" ,"");
    return doc;
  }

  getDate(): string {
    const datePipe = new DatePipe('en-US');
    const date = datePipe.transform(this.document.createDate, 'MM/dd/yy h:mm a');
    return date || "";
  }

  onSubmit() {}

  submitMinutes() {
    this.iotaAPI.putMinutes(this.document);
    console.log(this.document);
  }

}
