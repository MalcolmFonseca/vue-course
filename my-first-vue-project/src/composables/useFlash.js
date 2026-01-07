export function useFlash() {
    function flash(message) {
        alert(message);
    }

    return { flash };
}