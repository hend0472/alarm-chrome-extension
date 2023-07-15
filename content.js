function clickResumeButton() {
    const buttons = document.querySelectorAll('button');
    for (const button of buttons) {
        if (button.textContent.includes('Resume')) {
            button.click();
            return;
        } else {
            if (button.textContent.includes('Retry')) {
                button.click();
                return;
            }
        }
    }
}

setInterval(clickResumeButton, 2000);