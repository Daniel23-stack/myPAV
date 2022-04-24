import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <button type="button" class="btn btn-lg btn-info p-2 m-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
              EDIT PAGE
            </button>

            <div class="section-main">
        <img src="assets/img/main.png" alt="">
        <div class="col-md-12 text-center">
          <button routerLink="/Login" type="button" class="btn btn-lg btn-info p-2 m-2">Start the Journey</button>
        </div>
      </div>
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
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onselectFile($event: Event) {
    
  }
}
