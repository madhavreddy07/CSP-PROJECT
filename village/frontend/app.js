document.getElementById("issueForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const village = document.getElementById("village").value;
  const issueType = document.getElementById("issueType").value;
  const description = document.getElementById("description").value;

  const reportList = document.getElementById("reportList");

  const newReport = document.createElement("div");
  newReport.classList.add("report");
  newReport.innerHTML = `
    <h3>${issueType.toUpperCase()} Issue</h3>
    <p><strong>Reported by:</strong> ${name}</p>
    <p><strong>Village:</strong> ${village}</p>
    <p>${description}</p>
    <hr>
  `;

  reportList.appendChild(newReport);

  document.getElementById("issueForm").reset();
});
