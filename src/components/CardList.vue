<template>
  <div class="card-list container">
    <h3 class="section-header" style="color: #4bb9e4;">Credit Cards</h3>
    <div v-for="(card, index) in creditCards" :key="card.id" class="card-container d-flex flex-wrap mb-5">
      <div class="col-xl-7 mt-3">
        <div class="d-flex">
          <button class="border-0 mb-2" @click="showCardNumber(card)" style="background-color:#c2e2ee;">
            <i class="bi bi-eye"></i> Show Card Number
          </button>
        </div>
        <div :class="['credit-card shadow-lg p-3', { 'locked-card': card.isLocked, 'archived-card': card.isArchived }]">
          <div class="d-flex justify-content-end">
            <h4>{{ card.bankName }}</h4>
          </div>
          <p>{{ card.name }}</p>
          <p>**** **** **** {{ card.cardNumber.slice(-4) }}</p>
          <span class="">Valid Till: {{ card.validTill }}</span>
          <p>CVV: ***</p>
        </div>
      </div>


      <div class="col-xl-5 d-flex align-items-end">
        <div class="card-actions-panel d-flex flex-wrap justify-content-around border p-3">
  <!-- Lock/Unlock Card Button -->
  <div class="action-btn lock-btn" @click="toggleLockCard(card)">
   <div class="card-icon lock-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2a4 4 0 00-4 4v2H8a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V8a2 2 0 00-2-2h-4V6a4 4 0 00-4-4z"/>
    </svg>
    </div>
    <p class="card-text">{{ card.isLocked ? 'Unlock Card' : 'Lock Card' }}</p>
  </div>

  <div class="action-btn archive-btn flex-column" @click="toggleArchiveCard(card)">
    <div class="card-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 8V5a2 2 0 00-2-2H5a2 2 0 00-2 2v3M3 8h18M4 8l1 12a2 2 0 002 2h10a2 2 0 002-2l1-12H4z"/>
    </svg></div>
    <p class="card-text">{{ card.isArchived ? 'Unarchive' : 'Archive' }}</p>
  </div>


  <div class="action-btn default-btn" @click="setDefault(card.id)">
   <div class="card-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20h6a2 2 0 002-2v-2H7v2a2 2 0 002 2zm-5-4V8h14v8H4zM4 8V5a2 2 0 012-2h12a2 2 0 012 2v3"/>
    </svg>
    </div>
    <p class="card-text">Set As Default</p>
  </div>

  <div class="action-btn gpay-btn" @click="addToGPay(card)">
  <div class="card-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.5V9m0 0h4.5M12 9H8.5m4.5-4.5a4.5 4.5 0 00-4.5 4.5 4.5 4.5 0 004.5 4.5M12 8.5a1.5 1.5 0 00-1.5-1.5M10.5 6a1.5 1.5 0 00-1.5 1.5 1.5 1.5 0 001.5 1.5"/>
    </svg></div>
    <p class="card-text">{{ card.isAddedToGPay ? 'Added to GPay' : 'Add to GPay' }}</p>
  </div>
</div>

      </div>
    </div>

    <h3 class="section-header" style="color:#4bb9e4;">Debit Cards</h3>
    <div v-for="card in debitCards" :key="card.id" class="card-container d-flex flex-wrap mb-5">
      <div class="col-xl-7 mt-3">
        <div class="d-flex">
          <button class="border-0 mb-2" @click="showCardNumber(card)" style="background-color:#c2e2ee;">
            <i class="bi bi-eye"></i> Show Card Number
          </button>
        </div>
        <div :class="['credit-card shadow-lg p-3', { 'locked-card': card.isLocked, 'archived-card': card.isArchived }]">
          <div class="d-flex justify-content-end">
            <h4>{{ card.bankName }}</h4>
          </div>
          <p>{{ card.name }}</p>
          <p>**** **** **** {{ card.cardNumber.slice(-4) }}</p>
          <span class="">Valid Till: {{ card.validTill }}</span>
          <p>CVV: **{{ card.cvv.slice(-1) }}</p>
        </div>
      </div>


      <div class="col-xl-5 d-flex align-items-end">
        <div class="card-actions-panel d-flex flex-wrap justify-content-around border p-3">
  <!-- Lock/Unlock Button -->
 <div class="action-btn lock-btn" @click="toggleLockCard(card)">
   <div class="card-icon lock-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2a4 4 0 00-4 4v2H8a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V8a2 2 0 00-2-2h-4V6a4 4 0 00-4-4z"/>
    </svg>
    </div>
    <p class="card-text">{{ card.isLocked ? 'Unlock Card' : 'Lock Card' }}</p>
  </div>

  <div class="action-btn archive-btn flex-column" @click="toggleArchiveCard(card)">
    <div class="card-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 8V5a2 2 0 00-2-2H5a2 2 0 00-2 2v3M3 8h18M4 8l1 12a2 2 0 002 2h10a2 2 0 002-2l1-12H4z"/>
    </svg></div>
    <p class="card-text">{{ card.isArchived ? 'Unarchive' : 'Archive' }}</p>
  </div>


  <div class="action-btn default-btn" @click="setDefault(card.id)">
   <div class="card-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20h6a2 2 0 002-2v-2H7v2a2 2 0 002 2zm-5-4V8h14v8H4zM4 8V5a2 2 0 012-2h12a2 2 0 012 2v3"/>
    </svg>
    </div>
    <p class="card-text">Set As Default</p>
  </div>


  <div class="action-btn gpay-btn" @click="addToGPay(card)">
  <div class="card-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.5V9m0 0h4.5M12 9H8.5m4.5-4.5a4.5 4.5 0 00-4.5 4.5 4.5 4.5 0 004.5 4.5M12 8.5a1.5 1.5 0 00-1.5-1.5M10.5 6a1.5 1.5 0 00-1.5 1.5 1.5 1.5 0 001.5 1.5"/>
    </svg></div>
    <p class="card-text">{{ card.isAddedToGPay ? 'Added to GPay' : 'Add to GPay' }}</p>
  </div>
</div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { useToast } from "vue-toastification";

export default defineComponent({
  setup() {
    const store = useStore();
    const toast = useToast();
    const cards = computed(() => store.state.cards);


    const creditCards = computed(() => cards.value.filter((card: any) => card.cardType === 'Credit'));
    const debitCards = computed(() => cards.value.filter((card: any) => card.cardType === 'Debit'));

    const showCardNumber = (card: any) => {
      toast.info(`Full Card Number: ${card.cardNumber}`, {
        timeout: 3000,
      });
    };

    const setDefault = (cardId: any) => {
      store.commit('setDefaultCard', cardId);
      toast.success("Card set as default!");
    };

    const lockCard = (card: any) => {
      card.isLocked = true;
      toast.success("Card locked successfully!");
    };

    const unlockCard = (card: any) => {
      card.isLocked = false;
      toast.success("Card unlocked successfully!");
    };

    const toggleLockCard = (card: any) => {
      if (card.isLocked) {
        unlockCard(card);
      } else {
        lockCard(card);
      }
    };

    const toggleArchiveCard = (card: any) => {
      card.isArchived = !card.isArchived;
      const message = card.isArchived ? "Card archived successfully!" : "Card unarchived successfully!";
      toast.success(message);
    };


    const addToGPay = (card: any) => {
      if (!card.isAddedToGPay) {
        card.isAddedToGPay = true;
        toast.success('Card has been added to GPay!');
      } else {
        toast.info('This card is already added to GPay.');
      }
    };

    return {
      creditCards,
      debitCards,
      showCardNumber,
      setDefault,
      toggleLockCard,
      toggleArchiveCard,
      addToGPay,
    };
  },
});
</script>

<style scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.credit-card {
  background-color: #1e3d64;
  color: white;
  padding: 20px;
  border-radius: 12px;
  width: 350px;
  height: 24vh;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.credit-card h4 {
  margin: 0;
  font-size: 1.2rem;
}

.credit-card p {
  margin: 5px 0;
  font-size: 1rem;
}


.locked-card {
  background-color: #d3d3d3;
  color: #333;
}


.archived-card {
  background-color: #9e9e9e;
  color: #fff;
  opacity: 0.6;
}

.card-actions-panel {
  border-radius: 4px;
  background-color: #c2e2ee;
}

.action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 7px;
  width: 80px;
  height: 100%;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.card-icon {
  width: 30px;
    height: 30px;
    background: #0fa1db;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
}

.lock-icon {
  background: #0c3f62 !important;
}

.card-text {
  margin: 0 !important;
  font-size: 12px;
  text-align: center;
}

.action-btn:hover {
  background-color: #a2c6d9;
}
</style>
