export const backgrounds = () => {
    const data = [
        "linear-gradient(135deg,#00d4aa33,#00d4aa66)",
        "linear-gradient(135deg,#7c6fff33,#7c6fff66)",
        "linear-gradient(135deg,#ff6eb033,#ff6eb066)",
        "linear-gradient(135deg,#ffb86c33,#ffb86c66)",
        "linear-gradient(135deg,#ff5c5c33,#ff5c5c66)",
        "linear-gradient(135deg,#50fa7b33,#50fa7b66)",
        "linear-gradient(135deg,#f1fa8c33,#f1fa8c66)",
        "linear-gradient(135deg,#8be9fd33,#8be9fd66)",
        "linear-gradient(135deg,#bd93f933,#bd93f966)",
        "linear-gradient(135deg,#ff79c633,#ff79c666)",
        "linear-gradient(135deg,#aaffec33,#aaffec66)",
        "linear-gradient(135deg,#00b8d433,#00b8d466)",
        "linear-gradient(135deg,#6c5ce733,#6c5ce766)",
        "linear-gradient(135deg,#fab1a033,#fab1a066)",
        "linear-gradient(135deg,#55efc433,#55efc466)",
        "linear-gradient(135deg,#74b9ff33,#74b9ff66)",
        "linear-gradient(135deg,#ffeaa733,#ffeaa766)",
        "linear-gradient(135deg,#fd79a833,#fd79a866)",
        "linear-gradient(135deg,#e1705533,#e1705566)",
        "linear-gradient(135deg,#c4456933,#c4456966)",
    ];
    return data[Math.floor(Math.random() * data.length)];
};