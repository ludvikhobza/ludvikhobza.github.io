const czkField = document.getElementById('input-czk');
const gbpField = document.getElementById('input-gbp');

const exchange_rate = 28.212;

czkField.addEventListener("keyup", () => {
  gbpField.value = Math.round((czkField.value / exchange_rate) * 100) / 100;
})

gbpField.addEventListener("keyup", () => {
  czkField.value = Math.round((gbpField.value * exchange_rate) * 100) / 100;
})
