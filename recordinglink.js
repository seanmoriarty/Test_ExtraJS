document.addEventListener("DOMContentLoaded", function() {
  // Select the table by its ID
  var table = document.getElementById("call-history-table");

  // Iterate over each row in the table
  Array.from(table.rows).forEach(function(row) {
    // Create a new button element
    var button = document.createElement("button");
    button.textContent = "Copy";
    button.onclick = function() {
      copyToClipboard(this);
    };

    // Insert the button into the last cell of the row
    var cell = row.insertCell(-2);
    cell.appendChild(button);
  });
});

function copyToClipboard(btnElement) {
  // Get the link in the same row as the button
  var link = btnElement.closest("tr").querySelector("a").href;

  // Copy the link to the clipboard
  navigator.clipboard.writeText(link).then(function() {
    console.log('Link copied to clipboard!');
  }).catch(function(error) {
    console.error('Error copying link: ', error);
  });
}
