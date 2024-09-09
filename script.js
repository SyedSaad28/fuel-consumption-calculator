document.getElementById('fuelForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const distance = document.getElementById('distance').value;
    const fuel = document.getElementById('fuel').value;

    if (distance && fuel && fuel > 0) {
        const consumption = (distance / fuel).toFixed(2);
        document.getElementById('result').innerHTML = `Your car's fuel consumption is <strong>${consumption} km/L</strong>`;
    } else {
        document.getElementById('result').innerHTML = 'Please enter valid numbers!';
    }
});
