export default function toCurrency(amount) {
    const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
    return currency;
}