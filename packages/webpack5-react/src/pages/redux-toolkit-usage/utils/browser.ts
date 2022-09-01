export function unlockPageScroll(oriTop?: number) {
  let top = oriTop;
  if (typeof oriTop === 'undefined') {
    top = parseFloat(document.body.style.top);
  }
  document.body.style.position = '';
  document.body.scrollTop = document.documentElement.scrollTop = top;
  document.body.style.top = '';
}

export function lockPageScroll() {
  const top = (document.body || document.documentElement).scrollTop;
  document.body.style.cssText += `position:fixed;width:100%;top:-${top}px;`;
  return () => {
    unlockPageScroll(top);
  }
}

