import { Component } from "@angular/core";

/**
 * @title Basic expansion panel
 */
@Component({
  selector: "expansion-overview-example",
  templateUrl: "expansion-overview-example.html",
  styleUrls: ["expansion-overview-example.css"],
})
export class ExpansionOverviewExample {
  panelOpenState = false;

  getArray() {
    return [{ asdf: 1 }, { asdf: 2 }];
  }

  trackByFunc(index: any, array: any) {
    return index;
  }
}

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
