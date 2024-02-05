document.addEventListener("DOMContentLoaded", function() {
  var table = document.getElementById("call-history-table");

  Array.from(table.rows).forEach(function(row) {
    var button = document.createElement("a");
    button.textContent = "Copy Link";
    button.setAttribute('class', 'save.helpsy');
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

  navigator.clipboard.writeText(link).then(function() {
    console.log('Link copied to clipboard!');
    alert("Link Copied");
  }).catch(function(error) {
    console.error('Error copying link: ', error);
    alert("Error Copying");
  });
}
