function calculateGPA() {
    let grade9 = parseFloat(document.getElementById('grade9').value);
    let grade10 = parseFloat(document.getElementById('grade10').value);
    let grade11 = parseFloat(document.getElementById('grade11').value);
    let grade12 = parseFloat(document.getElementById('grade12').value);

    let cumulativeGPA = (grade9 + grade10 + grade11 + grade12) / 4;
    let finalPercentage = (cumulativeGPA + 1) * 20;

    document.getElementById('result').innerHTML = `
        <h3>Results</h3>
        <p>Cumulative GPA: ${cumulativeGPA.toFixed(2)}</p>
        <p>Final Percentage: ${finalPercentage.toFixed(2)}%</p>
    `;
}
