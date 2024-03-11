function calculate() {
    let grade9 = parseFloat(document.getElementById('grade9').value);
    let grade10 = parseFloat(document.getElementById('grade10').value);
    let grade11 = parseFloat(document.getElementById('grade11').value);
    let grade12 = parseFloat(document.getElementById('grade12').value);
    let mathQu = parseFloat(document.getElementById('mathQu').value);
    let engQu = parseFloat(document.getElementById('engQu').value);
    let degree = document.getElementById('degree').value;

    let cumulativeGPA = (grade9 + grade10 + grade11 + grade12) / 4;
    let gpaPercentage = (cumulativeGPA + 1) * 20;
    let finalPercentage;

    if (degree === 'engineering') {
        finalPercentage = (gpaPercentage * 0.65) + (mathQu * 0.2) + (engQu * 0.15);
    } else if (degree === 'medicine') {
        finalPercentage = (gpaPercentage * 0.75) + (mathQu * 0.1) + (engQu * 0.15);
    }

    document.getElementById('result').innerHTML = `Final Percentage: ${finalPercentage.toFixed(2)}%`;
    document.getElementById('result').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closeResult() {
    document.getElementById('result').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}
