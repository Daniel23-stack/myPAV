import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rebrand',
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
          <img style="margin-top:10%" src="assets/img/pav.png" alt="">
          <p style="color:#0f2459; margin-top:30%; font-family: 'Arial Black'; font-size: 30px">
            Driving engagement … 
            learning … 
            efficiency
          </p>
        </div>
        <div class="col-3" style="margin-top:20%">
          <div class="card" style="width: 20rem;">
            <div class="card-body">
              <h5 class=" mb-4 card-title" style="color:#0f2459;font-family: 'Arial Black'; font-size: 30px; Text-align: center">WHY DID WE REBRAND?</h5>
              <p>
                PAV Telecoms is very proud of what it stands for.
                We believe that our Brand, our Values and our Promise are what have made us and the people who work with use successful.
                It is therefore important that we share these with you.
                <br>
                <br>
                It is equally important that we give you the tools that you need to achieve your own successes.
                <br>
                <br>
                PAV Connect will connect you to these tools and to

              </p>
          </div>
        </div>
        <div class="col-3"></div>
      </div>
      <div class="col-md-12 text-center">
        <button routerLink="/Last" type="button" class="btn btn-lg btn-info p-2 m-2">Next</button>
      </div>
    </div>
    <hr>
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
                    <input class="form-control" type="file" (change)="onselectFile($event)"  id="formFile">
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-md-12">
                    <label for="formFile" class="form-label">HOME PICTURE</label>
                    <input class="form-control" (change)="onselectFile($event)" type="file" id="formFile2">
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
  styles: [
    `
  .hero {
   background-image: url('/assets/img/slide1.png')!important;
   background-size:cover;
   background-repeat: no-repeat;
   background-position: center;
    
  }
  `
  ]
})
export class RebrandComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onselectFile($event: Event) {
    
  }
}
