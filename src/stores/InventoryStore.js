import { defineStore } from 'pinia'
import { constants } from '../utils/constants'
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from '../stores/firebase'
import { customerDummyData } from './dummy'

const customerCollection = collection(db, 'customer-details')

export const customerStore = defineStore(
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
                getDocs(customerCollection)
                    .then((doc) => {
                        doc.forEach((data) => {
                            this.inventoryDetails.push({ ...data.data(), id: data.id })
                        })
                    })
            }
        }
    }
)