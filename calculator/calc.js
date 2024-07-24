$(document).ready(function() {
    $(document).keydown(function(event) {
        const key = event.key;
        if (!isNaN(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
            appendToDisplay(key);
        } else if (key === 'Enter' || key === '=') {
            calculateResult();
        } else if (key === 'Backspace') {
            backspace();
        } else if (key === 'Escape') {
            clearDisplay();
        }
    });
});

function appendToDisplay(value) {
    const display = $('.calculatorscreen');
    if (display.val() === '0' && !isNaN(value)) {
        display.val(value);
    } else if (value === '±') {
        display.val(display.val().charAt(0) === '-' ? display.val().slice(1) : '-' + display.val());
    } else if (value === '%') {
        display.val((parseFloat(display.val()) / 100).toString());
    } else {
        display.val(display.val() + value);
    }
}

function clearDisplay() {
    $('.calculatorscreen').val('0');
}

function backspace() {
    const display = $('.calculatorscreen');
    display.val(display.val().slice(0, -1) || '0');
}

function calculateResult() {
    const display = $('.calculatorscreen');
    try {
        display.val(eval(display.val().replace('x', '*').replace('÷', '/')).toString());
    } catch (error) {
        display.val('Error');
    }
}