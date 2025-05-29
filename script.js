document.getElementById('resumeForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const summary = document.getElementById('summary').value;
  const skills = document.getElementById('skills').value;
  const education = document.getElementById('education').value;
  const experience = document.getElementById('experience').value;

  // Build resume HTML
  const previewHTML = `
    <h3>${name}</h3>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Summary:</strong><br>${summary}</p>
    <p><strong>Skills:</strong> ${skills}</p>
    <p><strong>Education:</strong><br>${education}</p>
    <p><strong>Experience:</strong><br>${experience}</p>
  `;

  // Show the resume preview
  const previewDiv = document.getElementById('resumePreview');
  document.getElementById('previewContent').innerHTML = previewHTML;
  previewDiv.style.display = 'block';

  // Show success message
  let successMsg = document.getElementById('successMessage');
  if (!successMsg) {
    successMsg = document.createElement('p');
    successMsg.id = 'successMessage';
    successMsg.style.color = 'green';
    successMsg.style.fontWeight = 'bold';
    successMsg.style.marginTop = '15px';
    document.getElementById('resumePreview').appendChild(successMsg);
  }
  successMsg.textContent = '✅ Resume created successfully!';
});