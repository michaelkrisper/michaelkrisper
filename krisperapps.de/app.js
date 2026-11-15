// Filter the cards while typing; sections without a match disappear.
const input = document.getElementById('q');
const none = document.getElementById('none');
const sections = [...document.querySelectorAll('main section')];

input.addEventListener('input', () => {
  const words = input.value.toLowerCase().split(/\s+/).filter(Boolean);
  let shown = 0;
  for (const section of sections) {
    let any = false;
    for (const card of section.querySelectorAll('.card')) {
      const text = card.textContent.toLowerCase();
      const match = words.every((word) => text.includes(word));
      card.hidden = !match;
      any ||= match;
      if (match) shown++;
    }
    section.hidden = !any;
  }
  none.hidden = shown > 0;
});
