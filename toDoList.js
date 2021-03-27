/*

// Get Swim Command
getCommand() {
    $.ajax({
      url: 'http://127.0.0.1:3000',
      method: 'GET',
      success: command => this.move(command),
      error: (e) => console.log(e)
    })
  }

// Random Item Generator
var directions = ['up', 'down', 'right', 'left'];
var randomDirection = function(directions) {
  var randomIndex = Math.floor(Math.random() * directions.length);
  return directions[randomIndex];
}

TO DO LIST:
  1) Find where get request function goes
2) mockserver.js line 12


BARE MINIMUMS:
  1) Write a test to verify the server responds with a random swim command to a GET request. Then write the functionality that implements this feature.
    //
    /

  2) Connect the client to the server. Using AJAX, periodically request a random swim command from the server. Confirm your swim team is moving around randomly.
    // Write function to preiodically request swim command from server (setInterval Chatterbox Client)
      // return a random direction command from server


  3) Refactor the server program so that instead of responding with random commands, the user's directional keypresses and typed commands from the server terminal are sent in response. Keep your tests passing so be sure to update previously written test(s) to match this change.
    // In HTTPhandler

  4) Add a background image to the pool! For basic requirements, this feature should only support JPEG images.
    >>> The file, ./background.jpg, is designated as the file for storing a background image in your server. For your convenience, this file is gitignored and configured for use in your source files. Sample images are provided in the spec folder.

    >>> If the background file isn't present, the server should return a 404. If the file is present, the file should be sent in response to a client request for it. A test for the 404 scenario is mostly complete; enable the test (change xit to it) and fill in the blanks. Then write the test for the success case.

    >>> Modify your GET handler to also respond to requests for a background image. Your background image tests should now be passing.

    >>> Be sure to update prior tests and the app code as needed to complete the feature and not break any prior features. Copy one of the images from the spec folder, then reload your client to confirm your background image is loaded correctly.

  5) Next, add the ability for your server to accept an upload for a custom background image.
    >>> Tests for the POST request are mostly complete; enable the tests (change xit to it) and fill in the blanks, then write the post request HTTP handler. Be sure to read and understand how node accepts file uploads via POST requests using the data and end events. The file that is received during the upload should replace (overwrite) whatever is currently at ./background.jpg.

  6) The last and final step will be to connect the AJAX file uploader from your client app to your server's API. Even though you have a working API as verified by your tests, you will need to modify the tests and API to work with multipart file formats -- see the included links on multipart data.
    >>> Modify the ajaxFileUpload function to use the correct URL.
    >>> Upload a file to your POST API, then examine the file contents to see that it's a multipart file. You may have observed that the background image is now broken. Why is this?
    >>> Modify the POST tests to use water-lg.multipart instead of a simple JPG file. Then modify your server to correctly extract the image data from the multipart data. Use the included multipart utilities to extract the image data the multipart data.









*/