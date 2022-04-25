import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-minute-editor',
  templateUrl: './minute-editor.component.html',
  styleUrls: ['./minute-editor.component.sass']
})
export class MinuteEditorComponent implements OnInit {

  private mode: number = 0;
  private id: string;

  constructor(private iotaAPI: UserService, private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.mode = Number(this.route.snapshot.paramMap.get('mode'));
    this.id  = this.route.snapshot.paramMap.get('id') || "";
  }

}
