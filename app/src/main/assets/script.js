function rakshakShowMessage(title, message) {
  alert(title + "\n\n" + message);
}

function rakshakOpenSection(id) {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

function rakshakDial(number) {
  if (confirm("Phone dialler mein " + number + " kholen?")) {
    window.location.href = "tel:" + number;
  }
}
