import { getFirestore, collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { app } from '@/firebase/fire_config';

export default async function handler(req, res) {
    const db = getFirestore(app);

    try {
        const usersQuerySnapshot = await getDocs(collection(db, "users"));
        usersQuerySnapshot.forEach(async (userDoc) => {
            const user = userDoc.data();
            const currentBalance = user.dashboard.balance;
            const investmentPlan = user.dashboard.investmentPlan;
            const plan = investmentPlan == 1 ? 5000 : investmentPlan == 2 ? 8000 : investmentPlan == 3 ? 12000 : investmentPlan == 4 ? 20000 : 0;
            const newBalance = currentBalance * 1.0625;
            const profit = newBalance - plan;
            await updateDoc(doc(db, "users", userDoc.id), {
                "dashboard.balance": newBalance,
                "dashboard.profit": profit,
            });
        });
        res.status(200).json({ message: "Balance updated successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to update balance." });
    }
}
