import { addDoc, collection, Timestamp } from "@firebase/firestore"
import { db } from "../firebase/config"

export const sendEmail  =async (emailData) => {
    await addDoc(collection(db,'emails'), {...emailData, timestamp: Timestamp.now()})
}