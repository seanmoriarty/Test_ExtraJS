document.addEventListener("DOMContentLoaded", function() {
  var table = document.getElementById("call-history-table");

  Array.from(table.rows).forEach(function(row) {
    var firstLinkElement = row.querySelector(".action-buttons a");
    var firstLink = firstLinkElement ? firstLinkElement.href : 'No Link';
    console.log("Link: "+ firstLink);
    
    var button = document.createElement("a");
    button.textContent = "Copy Link: " + firstLink;
    button.setAttribute('class', 'save');
    button.setAttribute('title', 'Copy Link: ' + firstLink);
    button.onclick = function() {
      copyToClipboard(this);
    };

    var actionCell = row.querySelector(".action-buttons");
    if (actionCell) {
      actionCell.appendChild(button);
    }
  });
});

function copyToClipboard(btnElement) {
  var link = btnElement.closest("tr").querySelector(".download-audio.helpsy").href;
  if (link === null || link === ""){
    console.log("Link Empty");
    alert("Link not available.\nRefresh and try again.");
  }
  else {
    navigator.clipboard.writeText(link).then(function() {
      console.log('Link copied to clipboard!');
      alert("Copied Link: " + link);
     
    }).catch(function(error) {
      console.error('Error copying link: ', error);
      alert("Error Copying");
    });
  }
}
