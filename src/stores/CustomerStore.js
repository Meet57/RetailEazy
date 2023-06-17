import { defineStore } from 'pinia'
import { constants } from '../utils/constants'
import { collection, doc, getDocs, setDoc, deleteDoc } from "firebase/firestore"
import { db } from '../stores/firebase'
import { v4 as uuidv4 } from "uuid";

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
            fetchCustomerData() {
                getDocs(customerCollection)
                    .then((doc) => {
                        this.customerDetails = []
                        doc.forEach((data) => {
                            this.customerDetails.push({ ...data.data(), id: data.id })
                        })
                    })
            },
            addNewCustomer(data) {
                var id = data.id == undefined ? uuidv4() : data.id
                setDoc(doc(db, "customer-details", id), { ...data, id })
                    .then((data) => {
                        this.fetchCustomerData()
                    })
            },
            deleteCustomer(id) {
                deleteDoc(doc(db, "customer-details", id))
                    .then((data) => {
                        this.fetchCustomerData()
                    })
            }
        }
    }
)