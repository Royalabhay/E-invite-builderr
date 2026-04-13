function generateInvite() {
  document.getElementById('cTitle').innerText = document.getElementById('title').value;
  document.getElementById('cName').innerText = "Hosted by: " + document.getElementById('name').value;
  document.getElementById('cDate').innerText = "Date: " + document.getElementById('date').value;
  document.getElementById('cVenue').innerText = "Venue: " + document.getElementById('venue').value;
}

function downloadImage() {
  const card = document.getElementById('card');
  html2canvas(card).then(canvas => {
    const link = document.createElement('a');
    link.download = 'invite.png';
    link.href = canvas.toDataURL();
    link.click();
  });
}
