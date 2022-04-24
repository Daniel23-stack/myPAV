import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div class="container">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <button type="button" class="btn btn-lg btn-info p-2 m-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
              EDIT PAGE
            </button>
    <div class="container">
      <div class="row hero">
        <div class="col-3"></div>
        <div class="col-3">
          <img src="assets/img/PAv place.png" alt="" height="250" width="250">
        </div>
        <div class="col-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title display-6 p-1" style="color:#5252d9;">Welcome</h5>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" style="color:#5252d9">Username</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="">
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label" style="color:#5252d9">Password</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="">
                <div class="form-check m-2">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">
                    <span style="color:#5252d9">REMEMBER ME</span>
                  </label>
                <button routerLink="/Questions" class="btn btn-info m-5 col-md-6 text-center" >REGISTER</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3"></div>
      </div>

        <!--modal-->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit Page Contents</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-12">
                      <label for="formFile" class="form-label">LOGO</label>
                      <input class="form-control" type="file" (change)="logoFile($event)"  id="formFile">
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-md-12">
                      <label for="formFile" class="form-label">SIDE PICTURE</label>
                      <input class="form-control" type="file" (change)="onselectFile($event)"  id="formFile">
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-md-12">
                      <label for="formFile" class="form-label">BACKGROUND PICTURE</label>
                      <input class="form-control" (change)="background($event)" type="file" id="formFile2">
                    </div>
                  </div>

                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
    

  `,
  styles: [`
  .hero {
   background-image: url('/assets/img/slide1.png')!important;
   background-size:cover;
   background-repeat: no-repeat;
   background-position: center;
    
  }
  `
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  background($event: Event) {

  }

  onselectFile($event: Event) {

  }

  logoFile($event: Event) {
    
  }
}
