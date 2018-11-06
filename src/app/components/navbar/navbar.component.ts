import { Component, HostListener, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style
  // ...
} from "@angular/animations";

@Component({
  selector: "navbar-root",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
  animations: [
    trigger("navbarAnimation", [
      state(
        "fadeIn",
        style({
          background: "white"
        })
      ),
      state(
        "fadeOut",
        style({
          background: "transparent"
        })
      )
    ]),
    trigger("menuItemsAnimation", [
      state(
        "open",
        style({
          maxHeight: "500px"
        })
      ),
      state(
        "closed",
        style({
          maxHeight: "0px"
        })
      )
    ]),
    trigger("mobileRowAnimation", [
      state(
        "black",
        style({
          background: "#333"
        })
      )
    ])
  ]
})
export class NavbarComponent implements OnInit {
  navbarTransparent = true;
  isOpen = false;
  currentWindowWidth: number;

  @HostListener("window:scroll")
  scrollHandler() {
    pageYOffset > 100
      ? (this.navbarTransparent = false)
      : (this.navbarTransparent = true);
  }

  @HostListener("window:resize")
  onResize() {
    this.currentWindowWidth = window.innerWidth;
  }

  ngOnInit() {
    this.currentWindowWidth = window.innerWidth;
  }

  linkStyleHandler() {
    if (this.navbarTransparent) {
      return {
        color: "#fff"
      };
    } else {
      return {
        color: "#333"
      };
    }
  }

  hamburgerStyle() {
    if (this.navbarTransparent) {
      return {
        background: "#fff"
      };
    } else {
      return {
        background: "#333"
      };
    }
  }

  hamburgerHandler() {
    this.isOpen ? (this.isOpen = false) : (this.isOpen = true);
  }

  menuStyle() {
    if (this.navbarTransparent) {
      return {
        background: "#333"
      };
    } else {
      return {
        background: "#fff"
      };
    }
  }
}
