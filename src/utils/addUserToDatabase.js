import { ref, push, child, update } from "firebase/database"
import { database } from "./firebase";


export const addUserToDatabase = async (firstName, lastName, gender, phone, email) => {
    
    let userData = {
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        telephone: phone,
        email: email
    }

    const newPostKey = push(child(ref(database), 'posts')).key
    const updates = {}
    updates ['/users' + newPostKey] = userData
    return update(ref(database), updates)
}
