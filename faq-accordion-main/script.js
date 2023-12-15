function long(n) {
    
    const image = document.getElementById(`inner${n}`);
    image.style.display = (image.style.display === 'flex') ? 'none' : 'flex';
    let img = document.getElementById(`plus${n}`);
    if (img.src.match("plus"))
        img.src = "icon-minus.svg"
    else
        img.src = "icon-plus.svg"
}
