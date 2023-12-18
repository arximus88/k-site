export function dragScroll(node) {
    let isMouseDown = false;
    let startX;
    const onMouseDown = (event) => {
        isMouseDown = true;
        startX = event.clientX;
    };
    const onMouseMove = (event) => {
        if (!isMouseDown)
            return;
        const dx = startX - event.clientX;
        node.scrollLeft += dx;
        startX = event.clientX;
    };
    const onMouseUp = () => {
        isMouseDown = false;
    };
    node.addEventListener('mousedown', onMouseDown);
    node.addEventListener('mousemove', onMouseMove);
    node.addEventListener('mouseup', onMouseUp);
    return {
        destroy() {
            node.removeEventListener('mousedown', onMouseDown);
            node.removeEventListener('mousemove', onMouseMove);
            node.removeEventListener('mouseup', onMouseUp);
        }
    };
}
//# sourceMappingURL=dragScroll.js.map