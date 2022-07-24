export default {
    setApiPayments(state, payload) {
        state.apiPayments.data = payload.data;
        state.apiPayments.pagination = payload.paginationData;
    },
    submitRefundMutation(state, response) {
        state.refundResponse = response.data.data;
    },
    amountMutation(state, params) {
        state.refundAmount = params.amount;
    },
    transactionIdMutation(state, params) {
        state.transactionId = params.transactionId;
    },
};
