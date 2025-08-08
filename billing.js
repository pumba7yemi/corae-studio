
function saveInvoice() {
    const client = document.getElementById('client').value;
    const amount = document.getElementById('amount').value;
    const status = document.getElementById('status').value;

    const log = document.getElementById('invoice-log');
    const entry = document.createElement('div');
    entry.textContent = `Saved invoice for ${client} - $${amount} - Status: ${status}`;
    log.appendChild(entry);
}
