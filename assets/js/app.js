const html = document.querySelector('#html');
const css = document.querySelector('#css');
const js = document.querySelector('#js');
const preview = document.querySelector('#preview');


function renderPreview(){
    let iframeComponent = preview.contentWindow.document; //gets the iframe component
    iframeComponent.open();

    // this function allows to write and pass a string to the iframe. I used template strings to do this.
    iframeComponent.writeln(`
        ${html.innerText}
        <style>${css.innerText}</style>
        <script>${js.innerText}</script>
    `);

    iframeComponent.close();
    
}

function getAlteration(){
    document.addEventListener('keyup', () => {
        renderPreview();
    })
}

renderPreview();
getAlteration();