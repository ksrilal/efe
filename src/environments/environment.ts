/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  firebase: {
    apiKey: "AIzaSyBwKnQyDLw1QWZeHU74NQLWNXGC903dlIw",
    authDomain: "e-for-e.firebaseapp.com",
    databaseURL: "https://e-for-e.firebaseio.com",
    projectId: "e-for-e",
    storageBucket: "e-for-e.appspot.com",
    messagingSenderId: "491507662056",
    appId: "1:491507662056:web:2fc8cae7f76d0466039d5d",
    measurementId: "G-BJ41H91X0T"
  }
};
