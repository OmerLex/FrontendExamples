const onChange = (param) => {
    document
    // 1. Read from input
    .getElementById('p1')
    // 2. Write into the paragraph
    .innerHTML = param.target.value

}

// setup the event handler

document.getElementById('inp1').addEventListener('keydown', onChange);
//document.getElementById('inp1').addEventListener('keypress', onChange);