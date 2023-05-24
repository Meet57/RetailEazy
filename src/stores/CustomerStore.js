import { defineStore } from 'pinia'
import { constants } from '../utils/constants'
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from '../stores/firebase'
import { customerDummyData } from './dummy'

const customerCollection = collection(db, 'customer-details')

export const customerStore = defineStore(
    constants.CUSTOMER_STORE,
    {
        state: () => {
            return {
                customerDetails: []
            }
        },
        getters: {
            getCustomerDetails() {
                return this.customerDetails
            }
        },
        actions: {
            getCustomerData() {
                getDocs(customerCollection)
                    .then((doc) => {
                        doc.forEach((data) => {
                            this.customerDetails.push({ ...data.data(), id: data.id })
                        })
                    })
            }
        }
    }
)