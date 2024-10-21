import { createStore } from 'vuex';

interface Card {
  id: number;
  name: string;
  bankName: string;
  cardType: 'Credit' | 'Debit';
  cardNumber: string;
  validTill: string;
  cvv: string;
  isDefault: boolean;
  addedToGPay: boolean;
}

interface State {
  cards: Card[];
}

export default createStore<State>({
  state: {
    cards: []
  },
  mutations: {
    addCard(state: { cards: Card[]; }, card: Card) {
      if (card.isDefault) {
       
        const existingDefault = state.cards.find((c) => c.cardType === card.cardType && c.isDefault);

        if (existingDefault) {
          
          throw new Error(`The selected card type (${card.cardType}) already has a default card.`);
        }
      }

      state.cards.push(card);
    },
    removeCard(state: { cards: any[]; }, cardId: number) {
      state.cards = state.cards.filter((card) => card.id !== cardId);
    },
    setDefaultCard(state: { cards: any[]; }, cardId: number) {
      const card = state.cards.find((c) => c.id === cardId);
      if (card) {
        
        state.cards.forEach((c) => {
          if (c.cardType === card.cardType) {
            c.isDefault = false;
          }
        });
       
        card.isDefault = true;
      }
    }
  },
  actions: {
    addCardWithValidation({ commit }, card: Card) {
      try {
        commit('addCard', card);
        return { success: true };
      } catch (error:any) {
        return { success: false, message: error.message };
      }
    }
  }
});
