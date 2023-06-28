emailjs.init("lUGZheMV-D6bxi62h");

addEventListener("submit", onsubmit);

onsubmit = (event) => {
  const el = event.target;
  const firstName = el.querySelector("#First-name").value;
  const lastName = el.querySelector("#Last-name").value;
  const email = el.querySelector("#Email").value;
  const phone = el.querySelector("#Phone").value;
  const company = el.querySelector("#Company").value;
  const subject = el.querySelector("#Subject").value;
  const message = el.querySelector("#Message").value;
  const success = document.getElementById("form-submission-success");

  emailjs
    .send("service_yoq3xqi", "template_6awjkyp", {
      firstName,
      lastName,
      email,
      phone,
      company,
      subject,
      message,
    })
    .then(
      () => {
        if (success) {
          success.style.display = "block";
        }
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
};
