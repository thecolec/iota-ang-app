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

  private mode: number = 0;
  private id: string;
  public document: Minutes;

  constructor(private iotaAPI: UserService, private iotaAuth: AuthService, private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.mode = Number(this.route.snapshot.paramMap.get('mode'));
    this.id  = this.route.snapshot.paramMap.get('id') || "";
    this.loadMinuteSpec();
  }

  loadMinuteSpec(): void {
    this.iotaAPI.getMinutesSpec(this.id).subscribe(doc => this.document = doc);
  }

  getMode(): number {
    return this.mode;
  }

  genTemplate() : Minutes {
    const usrDoc: User = this.iotaAuth.readUserDoc();
    const doc = new MinutesObj("","","","",usrDoc,"");
    return doc;
  }

}
