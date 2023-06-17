import { defineStore } from 'pinia'
import { constants } from '../utils/constants'
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from '../stores/firebase'

const inventoryCollection = collection(db, 'inventory-details')

export const inventoryStore = defineStore(
    constants.INVENTORY_STORE,
    {
        state: () => {
            return {
                inventoryDetails: []
            }
        },
        getters: {
            getInventoryDetails() {
                return this.inventoryDetails
            }
        },
        actions: {
            fetchInventoryDetails() {
                getDocs(inventoryCollection)
                    .then((doc) => {
                        doc.forEach((data) => {
                            this.inventoryDetails.push({ ...data.data(), id: data.id })
                        })
                        console.log(this.inventoryDetails)
                    })
            }
        }
    }
)