<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Sidebar Section -->
      <div class="col-md-2 p-0" style="position: sticky; top: 0; height: 100vh;">
        <Sidebar />
      </div>

      <div class="col-md-10 p-0" style="background-color:#eceff1;">
        <!-- Header Section -->
        <div
          class="d-flex container justify-content-between align-items-center shadow-lg-bottom bg-white p-2 px-3 border-bottom"
          style="position: sticky; top: 0; z-index: 999;">
          <div class="d-flex align-items-center">
            <i class="bi bi-list icon"></i>
            <h5 class="mb-0 ml-2 text-muted">Cards</h5>
          </div>

          <div class="d-flex align-items-center">
            <i class="bi bi-person-circle icon"></i>
            <i class="bi bi-chevron-down ml-1"></i>
          </div>
        </div>

        <div class="container mt-3">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb p-0 m-0">
              <li class="breadcrumb-item">
                <a href="#" class="text-muted">Home</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Cards</li>
            </ol>
          </nav>
        </div>


        <div class="border-2 shodow-sm px-5 mt-4">
          <div class="container px-5 p-2 d-flex justify-content-between align-items-center mt-3 bg-white"
            style="border: 2px solid #d0d3d5;">
            <div class="d-flex">
              <div class="tab me-4">
                <a href="#" class="text-primary" @click.prevent="setActiveTab('savedCards')">Saved Cards</a>
              </div>
              <div class="tab">
                <a href="#" class="text-muted" @click.prevent="setActiveTab('gdCards')">GD Cards</a>
              </div>
            </div>
            <button class="border-0" @click="showAddCardForm = true" style="background-color:#49b7e2; color: white;">
              + Add Card
            </button>
          </div>

          <div v-if="showAddCardForm" class="modal">
            <div class="modal-content">
              <span class="close-button" @click="showAddCardForm = false">&times;</span>
              <AddCardForm @close="closeForm" />
            </div>
          </div>

          <div class="container bg-white" style="border: 1px solid #d0d3d5;">
            <div class="row border">
              <div class="col-lg-5">
                <CardDetails />
              </div>
              <div class="col-lg-7 mt-5">
                <CardList />
              </div>
            </div>
          </div>
        </div>

        <div class="mt-5">
        <Footer />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Sidebar from '@/components/Sidebar.vue';
import AddCardForm from '@/components/AddCardForm.vue';
import CardList from '@/components/CardList.vue';
import CardDetails from '@/components/CardDetails.vue';
import Footer from '@/components/Footer.vue'; // Import Footer component

export default defineComponent({
  components: {
    Sidebar,
    AddCardForm,
    CardList,
    CardDetails,
    Footer, 
  },
  setup() {
    const showAddCardForm = ref(false);

    const closeForm = () => {
      showAddCardForm.value = false;
    };

    return {
      showAddCardForm,
      closeForm,
    };
  },
});
</script>

<style scoped>
.icon {
  font-size: 1.5rem;
  color: #6c757d;
}

.ml-2 {
  margin-left: 0.5rem;
}

.ml-1 {
  margin-left: 0.25rem;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  position: relative;
}

@media (min-width: 768px) {
  .modal-content {
    width: 700px;
  }
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
}
</style>
