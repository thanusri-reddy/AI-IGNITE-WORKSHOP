
const appointmentForm = document.getElementById("appointmentForm");
const message = document.getElementById("message");

if (appointmentForm) {
    appointmentForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const appointmentId = "APT" + Date.now();

        message.innerHTML = `
            <h3>Appointment Request Submitted!</h3>
            <p>Your Appointment ID: ${appointmentId}</p>
            <p>Thank you for choosing City Care Hospital.</p>
        `;

        message.style.color = "green";
        appointmentForm.reset();
    });
}
