export function toCurrency(amount, places = 2, main = null) {
    if (main) {

    }
    
    const numAsNumber = Number(parseInt(amount).toFixed(places));

    const numAsString = numAsNumber.toFixed(places);

    const [integerPart, fractionalPart] = numAsString.split('.');

    const integerPartWithCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    const formattedString = `${main ? main : "$"} ${integerPartWithCommas}.${fractionalPart}`;

    return formattedString;
}