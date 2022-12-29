import { Component, OnInit } from '@angular/core';
import { faTwitter,  faFacebookF, faInstagramSquare,faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faFacebook = faFacebookF;
  faInstagram = faInstagramSquare;
  faTwitter = faTwitter;
  faGithub=faGithub;
  constructor() { }

  ngOnInit(): void {
  }

}
