<template>
  <form @submit.prevent="submitForm" class="needs-validation row" novalidate>
    <div class="mb-3 col-md-6">
      <label class="form-label">Name</label>
      <input v-model="name" type="text" :class="{ 'is-invalid': !nameValid }" class="form-control" required />
      <div v-if="!nameValid" class="invalid-feedback">Name is required (max 35 characters)</div>
    </div>

    <div class="mb-3 col-md-6">
      <label class="form-label">Bank Name</label>
      <input v-model="bankName" type="text" :class="{ 'is-invalid': !bankNameValid }" class="form-control" required />
      <div v-if="!bankNameValid" class="invalid-feedback">Bank Name is required</div>
    </div>

    <div class="mb-3 col-md-6">
      <label class="form-label">Card Type</label>
      <select v-model="cardType" class="form-select">
        <option value="Credit">Credit</option>
        <option value="Debit">Debit</option>
      </select>
    </div>

    <div class="mb-3 col-md-6">
      <label class="form-label">Card Number</label>
      <input v-model="cardNumber" type="text" :class="{ 'is-invalid': !cardNumberValid }" class="form-control"
        required />
      <div v-if="!cardNumberValid" class="invalid-feedback">Card number is invalid</div>
    </div>

    <div class="mb-3 col-md-6">
      <label class="form-label">Valid Till</label>
      <input v-model="validTill" type="month" :class="{ 'is-invalid': !validTillValid }" class="form-control"
        required />
      <div v-if="!validTillValid" class="invalid-feedback">Valid Till must be a future date</div>
    </div>

    <div class="mb-3 col-md-6">
      <label class="form-label">CVV</label>
      <input v-model="cvv" type="password" :class="{ 'is-invalid': !cvvValid }" class="form-control" required />
      <div v-if="!cvvValid" class="invalid-feedback">CVV is required</div>
    </div>

    <div class="form-check col-md-6 mb-3">
      <input type="checkbox" class="form-check-input" v-model="isDefault" />
      <label class="form-check-label">Set as Default</label>
    </div>

    <div class="form-check col-md-6 mb-3">
      <input type="checkbox" class="form-check-input" v-model="addedToGPay" />
      <label class="form-check-label">Add to GPay</label>
    </div>

    <button type="submit" class="btn btn-primary">Add Card</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useToast } from 'vue-toastification'; 

export default defineComponent({
  setup() {
    const store = useStore();
    const toast = useToast(); 

    const name = ref('');
    const bankName = ref('');
    const cardType = ref('Credit');
    const cardNumber = ref('');
    const validTill = ref('');
    const cvv = ref('');
    const isDefault = ref(false);
    const addedToGPay = ref(false);

    const nameValid = computed(() => name.value.length > 0 && name.value.length <= 35);
    const bankNameValid = computed(() => bankName.value.length > 0);
    const cardNumberValid = computed(() => /^[0-9]{16}$/.test(cardNumber.value));
    const validTillValid = computed(() => new Date(validTill.value) > new Date());
    const cvvValid = computed(() => /^[0-9]{3}$/.test(cvv.value));

    const resetForm = () => {
      name.value = '';
      bankName.value = '';
      cardType.value = 'Credit';
      cardNumber.value = '';
      validTill.value = '';
      cvv.value = '';
      isDefault.value = false;
      addedToGPay.value = false;
    };

    const submitForm = async () => {
      if (!nameValid.value || !bankNameValid.value || !cardNumberValid.value || !validTillValid.value || !cvvValid.value) {
        toast.error('Please fix validation errors');
        return;
      }

      const card = {
        id: Date.now(),
        name: name.value,
        bankName: bankName.value,
        cardType: cardType.value,
        cardNumber: cardNumber.value,
        validTill: validTill.value,
        cvv: cvv.value,
        isDefault: isDefault.value,
        addedToGPay: addedToGPay.value
      };

      const result = await store.dispatch('addCardWithValidation', card);

      if (result.success) {
        toast.success('Card added successfully!');
        resetForm(); 
      } else {
        toast.error(result.message); 
      }
    };

    return {
      name, bankName, cardType, cardNumber, validTill, cvv, isDefault, addedToGPay,
      nameValid, bankNameValid, cardNumberValid, validTillValid, cvvValid,
      submitForm
    };
  }
});
</script>

<style scoped>
.invalid-feedback {
  display: block;
}
</style>
