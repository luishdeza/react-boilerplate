const root = document.getElementById('root');

let showMessage = false;

const toggleDetails = () => {
    showMessage = !showMessage;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleDetails}>
                {(showMessage) ? 'Hide' : 'Show'} details
            </button>
            {showMessage && <p>I am a message</p>}
        </div>
    )

    ReactDOM.render(template, root);
}
render();