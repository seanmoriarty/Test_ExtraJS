// JavaScript to insert buttons and modify the copyToClipboard function
document.addEventListener("DOMContentLoaded", function() {
  // Select the table by its ID
  var table = document.getElementById("call-history-table");

  // Iterate over each row in the table
  Array.from(table.rows).forEach(function(row) {
    // Create a new button element
    var button = document.createElement("button");
    button.textContent = "Copy";
    button.setAttribute('class', 'save');
    button.onclick = function() {
      copyToClipboard(this);
    };

    // Find the cell with the class 'action-buttons' and append the button
    var actionCell = row.querySelector(".action-buttons");
    if (actionCell) {
      actionCell.appendChild(button);
    }
  });
});

function copyToClipboard(btnElement) {
  // Get the link with the specific class in the same row as the button
  var link = btnElement.closest("tr").querySelector(".download-audio.helpsy").href;

  // Copy the link to the clipboard
  navigator.clipboard.writeText(link).then(function() {
    console.log('Link copied to clipboard!');
  }).catch(function(error) {
    console.error('Error copying link: ', error);
  });
}
