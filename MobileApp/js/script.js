let results = [];

//Appends the specified value to the result input field when a digit or operator button is clicked
function appendValue(value) {
    document.getElementById('result').value += value;
}

//Evaluates the expression in the result input field using JavaScript's eval() function, displays the result, and updates the calculation history
function calculate() {
    const expression = document.getElementById('result').value;
    try {
        const result = eval(expression);
        document.getElementById('result').value = result;
        results.push(`${expression} = ${result}`);
        displayResults();
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

//Displays calculation history by appending each calculation to the previous-results container
function displayResults() {
    const resultsContainer = document.getElementById('previous-results');
    resultsContainer.innerHTML = '';
    results.forEach((result, index) => {
        const p = document.createElement('p');
        p.textContent = `${index + 1}. ${result}`;
        resultsContainer.appendChild(p);
    });
}

//Clears the calculation history
function clearResults() {
    results = [];
    displayResults();
}

//Clears the current result in the input field
function clearResult() {
    document.getElementById('result').value = '';
}