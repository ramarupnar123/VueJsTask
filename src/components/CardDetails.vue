<!-- <template>
    <div class="card-details-container">
        <div class="card-section  p-3 shadow-sm"
            style="background-color: #f8f8f8; display: flex; justify-content: space-between;">
            <h4 class="section-header d-flex align-items-center">
                <i class="bi bi-grid-fill icon"></i>
                Card Details
            </h4>
            <div class="">
                <i class="bi bi-chevron-down"></i>
            </div>
        </div>


        <div class="transactions-section  mt-3 shadow-sm" style="background-color: #f8f8f8;">
            <h4 class="section-header border-0 p-3 d-flex justify-content-between align-items-center">
                <span>
                    <i class="bi bi-funnel-fill icon"></i> Today's Transactions
                </span>

                <i class="bi" :class="showTransactions ? 'bi-chevron-up' : 'bi-chevron-down'"
                    @click="toggleTransactions"></i>
            </h4>

            <ul v-if="showTransactions" class="transaction-list p-3 m-0 list-unstyled bg-white">
                <li v-for="transaction in transactions" :key="transaction.id"
                    class="transaction-item d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center" style="display: flex; gap: 7%; width: 80%;">
                        <i class="bi bi-arrow-down-circle-fill transaction-icon"></i>
                        <div>
                            <span class="transaction-title">{{ transaction.title }}</span>
                            <p class="transaction-date mb-1 text-muted">{{ transaction.date }}</p>
                            <p class="transaction-type" style="color:#49b7e2;">{{ transaction.type }}</p>
                        </div>
                    </div>
                    <div>
                        <span :class="transaction.amount > 0 ? 'text-success' : 'text-danger'">
                            {{ transaction.amount > 0 ? '+ ' : '- ' }}${{ Math.abs(transaction.amount).toFixed(2) }}
                        </span>
                    </div>
                </li>
            </ul>
        </div>

    </div>

</template>

<script>
export default {
    data() {
        return {
            transactions: [
                {
                    id: 1,
                    title: "Ordered Food",
                    amount: -150.5,
                    date: "20th May 2022",
                    type: "Charges applied on credit card",
                },
                {
                    id: 2,
                    title: "Ticket Refund",
                    amount: 50.5,
                    date: "20th May 2022",
                    type: "Amount credited on debit card",
                },
                {
                    id: 3,
                    title: "Interest credited",
                    amount: 5.5,
                    date: "20th May 2022",
                    type: "Charges applied on credit card",
                },
                {
                    id: 4,
                    title: "Electricity bill paid",
                    amount: -1050.5,
                    date: "20th May 2022",
                    type: "Charges applied on credit card",
                },
                {
                    id: 4,
                    title: "Electricity bill paid",
                    amount: -1050.5,
                    date: "20th May 2022",
                    type: "Charges applied on credit card",
                },
                {
                    id: 4,
                    title: "Electricity bill paid",
                    amount: -1050.5,
                    date: "20th May 2022",
                    type: "Charges applied on credit card",
                },
            ],
        };
    },
};
</script>

<style scoped>
.card-details-container {
    width: 100%;
    padding: 20px;
}

.section-header {
    font-size: 1.2rem;
    color: #49b7e2
}

.icon {
    margin-right: 10px;
    font-size: 1.5rem;
}

.transaction-list {
    list-style: none;
    padding: 0;
    border-left: 1px solid lightgray;
    border-right: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
}

.transaction-item {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #49b7e2;
}

.transaction-icon {
    font-size: 2rem;
    color: #49b7e2;
}

.transaction-title {
    font-size: 1.1rem;
    font-weight: 600;
}

.transaction-date {
    font-size: 0.85rem;
}

.transaction-type {
    font-size: 0.9rem;
}

.text-success {
    color: #28a745 !important;
}

.text-danger {
    color: #dc3545 !important;
}
</style> -->


<template>
    <div class="card-details-container">

        <div class="card-section p-3 shadow-sm"
            style="background-color: #f8f8f8; display: flex; justify-content: space-between;">
            <h4 class="section-header d-flex align-items-center">
                <i class="bi bi-grid-fill icon"></i>
                Card Details
            </h4>
            <div>
               
                <i class="bi bi-chevron-down"></i>
            </div>
        </div>


        <div class="transactions-section mt-3 shadow-sm" style="background-color: #f8f8f8;">
            <h4 class="section-header border-0 p-3 d-flex justify-content-between align-items-center">
                <span>
                    <i class="bi bi-funnel-fill icon"></i> Today's Transactions
                </span>
               
                <i class="bi" :class="showTransactions ? 'bi-chevron-up' : 'bi-chevron-down'"
                    @click="toggleTransactions"></i>
            </h4>

          
            <ul v-if="showTransactions" class="transaction-list p-3 m-0 list-unstyled bg-white">
                <li v-for="transaction in transactions" :key="transaction.id"
                    class="transaction-item d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center" style="display: flex; gap: 7%; width: 80%;">
                        <i class="bi bi-arrow-down-circle-fill transaction-icon"></i>
                        <div>
                            <span class="transaction-title">{{ transaction.title }}</span>
                            <p class="transaction-date mb-1 text-muted">{{ transaction.date }}</p>
                            <p class="transaction-type" style="color:#49b7e2;">{{ transaction.type }}</p>
                        </div>
                    </div>
                    <div>
                        <span :class="transaction.amount > 0 ? 'text-success' : 'text-danger'">
                            {{ transaction.amount > 0 ? '+ ' : '- ' }}${{ Math.abs(transaction.amount).toFixed(2) }}
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showTransactions: true,
            transactions: [
                { id: 1, title: "Ordered Food", amount: -150.5, date: "20th May 2022", type: "Charges applied on credit card" },
                { id: 2, title: "Ticket Refund", amount: 50.5, date: "20th May 2022", type: "Amount credited on debit card" },
                { id: 3, title: "Interest credited", amount: 5.5, date: "20th May 2022", type: "Charges applied on credit card" },
                { id: 4, title: "Electricity bill paid", amount: -1050.5, date: "20th May 2022", type: "Charges applied on credit card" },
            ],
        };
    },
    methods: {
        toggleTransactions() {
            this.showTransactions = !this.showTransactions; // Toggle visibility of the transaction list
        },
    },
};
</script>

<style scoped>
.card-details-container {
    width: 100%;
    padding: 20px;
}

.section-header {
    font-size: 1.2rem;
    color: #49b7e2;
}

.icon {
    margin-right: 10px;
    font-size: 1.5rem;
}

.transaction-list {
    list-style: none;
    padding: 0;
    border-left: 1px solid lightgray;
    border-right: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
}

.transaction-item {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #49b7e2;
}

.transaction-icon {
    font-size: 2rem;
    color: #49b7e2;
}

.transaction-title {
    font-size: 1.1rem;
    font-weight: 600;
}

.transaction-date {
    font-size: 0.85rem;
}

.transaction-type {
    font-size: 0.9rem;
}

.text-success {
    color: #28a745 !important;
}

.text-danger {
    color: #dc3545 !important;
}
</style>
