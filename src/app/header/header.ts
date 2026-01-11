import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
/**
 * read about routerlink and routerlinkactive on official site
 * also read about routing
 */
export class Header {

}
