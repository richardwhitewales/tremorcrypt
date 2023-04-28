import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, updateDoc } from 'firebase/firestore';
import { toast } from "react-toastify";
import { db, storage } from '@/firebase/fire_config';

async function uploadPayment(email, proof) {
  if (proof) {
    try {
      const proofRef = ref(storage, `reciepts/${proof.name}`);

      await uploadBytes(proofRef, proof);

      const proofUrl = await getDownloadURL(proofRef);

      const docRef = doc(db, 'users', email);

      await updateDoc(docRef, { "dashboard.reciept": proofUrl });

    } catch (error) {
      toast.error(`Error uploading Proof: ${error}`);
    }
  } else {
    toast.error("Error");
  }
}

export default uploadPayment;
