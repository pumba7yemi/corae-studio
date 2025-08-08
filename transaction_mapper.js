
// Maps transaction data from different sources
function mapTransaction(rawData) {
    return {
        id: rawData.txn_id,
        amount: parseFloat(rawData.total),
        timestamp: new Date(rawData.date),
        source: rawData.platform
    };
}
module.exports = { mapTransaction };
