


function myFunction() {
    // Get the text field
    var copyText = document.querySelector("textarea");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999);
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }