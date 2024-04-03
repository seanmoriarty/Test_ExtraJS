document.addEventListener("DOMContentLoaded", function() {
  var table = document.getElementById("call-history-table");

  Array.from(table.rows).forEach(function(row) {
    var button = document.createElement("a");
    button.textContent = "Copy Link";
    button.setAttribute('class', 'save');
    button.setAttribute('title', 'Copy Link');
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
    console.log("link empty");
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
