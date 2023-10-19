// payment.js
function simulatePayment(pdfLink) {
    localStorage.setItem('selectedPdf', pdfLink);
    window.location.href = 'payment.html';
}

function simulateSuccessfulPayment() {
    const selectedPdf = localStorage.getItem('selectedPdf');
    if (selectedPdf) {
        alert(`Payment successful. Initiating download...`);
        initiateDownload(selectedPdf);
    } else {
        alert('No PDF selected for payment.');
    }
}

function initiateDownload(pdfLink) {
    window.open(pdfLink, '_blank');
}
