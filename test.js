const HANDLE_MOUSEMOVE_CLASS = 'handle-mousemove';
const elements = [...document.getElementsByClassName(HANDLE_MOUSEMOVE_CLASS)];

const handleMousemove = (event) => {
  const { innerHeight, innerWidth } = window;
  const midHeight = innerHeight / 2;
  const midWidth = innerWidth / 2;
  
  const { x, y } = event;
  const percentX = ((x - midWidth) * 100) / midWidth;
  const percentY = ((y - midHeight) * 100) / midHeight;
  
  elements.forEach((el, index) => {
    const { variantX = 10, variantY = 10} = el.dataset;
    const tx = percentX * (variantX / 100);
    const ty = percentY * (variantY / 100);
    el.style.transform = `translate(${tx}%, ${ty}%)`;
  });
};

window.onmousemove = (event) => {
  clearTimeout(handleMousemove.timeout);
  handleMousemove.timeout = setTimeout(() => handleMousemove(event), 10);
};