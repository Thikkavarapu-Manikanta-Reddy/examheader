import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
declare var jQuery: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    window.onload = ()=> {
  (<any>window).jQuery
     $(document).ready(()=> {
        $(".sidebarNavigation .navbar-collapse")
          .hide()
          .clone()
          .appendTo("body")
          .removeAttr("class")
          .addClass("sideMenu")
          .show(),
          $("body").append("<div class='overlay'></div>"),
          $(".sideMenu").addClass(
            $(".sidebarNavigation").attr("data-sidebarClass")
          ),
          $(".navbar-toggle, .navbar-toggler").on("click", ()=> {
            $(".sideMenu, .overlay").toggleClass("open"),
              $(".overlay").on("click", ()=> {
                $(this).removeClass("open"), $(".sideMenu").removeClass("open");
              });
          }),
          $("body").on("click", ".sideMenu.open .nav-item", ()=> {
            $(this).hasClass("dropdown") ||
              $(".sideMenu, .overlay").toggleClass("open");
          }),
          $(window).resize(()=> {
            $(".navbar-toggler").is(":hidden")
              ? $(".sideMenu, .overlay").hide()
              : $(".sideMenu, .overlay").show();
          });
      })
     console.log("sidebarNavigation Requires jQuery");
};
  }

}
