import Vue from 'vue'



function makeReactive(data) {
  var tmpVm = new Vue({ data(){
    return data;
  } });
  return tmpVm;
}

let store;
function getSharedStore(initilValues) {
  if (store) {
    return store;
  } else {
    store = makeReactive(initilValues);
  }
  return store;
}

let initialized = false;
let subscriptionsUnsubscribe = () => {};
let paymentUnsubscribe = () => {};
const initialValues = {
  subscriptions: [],
  activeSubscriptions: [],
  oneTimePayments: [],
  successfulOneTimePayments: [],
};

function subscribeToUser(fireStore, uid, onNewSuscriptions, onNewPayments) {
  unsubscribeUser();
  subscriptionsUnsubscribe = fireStore.collection('users').doc(uid)
  .collection('subscriptions').onSnapshot(onNewSuscriptions);
  paymentUnsubscribe = fireStore.collection('users').doc(uid)
  .collection('oneTimePayments').onSnapshot(onNewPayments);
}

function unsubscribeUser() {
  subscriptionsUnsubscribe();
  paymentUnsubscribe();
}


const plugin = {
    install(Vue, options) {
      const store = getSharedStore(initialValues);
        Vue.prototype.$stripe = function() {
          const these = this;
          
          if (!initialized) {
            these.$fireAuth.onAuthStateChanged(user => {
                if (user) {
                  const uid = these.$fireAuth.currentUser.uid;
                  subscribeToUser(these.$fireStore, uid,
                    (querySnapshot) => {
                    const newSubs = querySnapshot.docs.map((doc) => doc.data());
                    store.$data.subscriptions = newSubs;
                    store.$data.activeSubscriptions = newSubs.filter(sub => {
                      return sub.status === 'active' || sub.status === 'trialing' || sub.status == 'past_due';
                    });
                  },
                  (querySnapshot) => {
                    const newPayments = querySnapshot.docs.map((doc) => doc.data());
                    store.$data.oneTimePayments = newPayments;
                    store.$data.successfulOneTimePayments = newPayments.filter(pay => {
                      return pay.status === 'paid';
                    });
                  });
                } else {
                  unsubscribeUser();
                }
            });
            initialized = true;
          }
          return store;
    }
  }
};

Vue.use(plugin);