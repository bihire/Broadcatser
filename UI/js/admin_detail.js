const updateStatus = document.getElementById("flag-sure");
updateStatus.onclick = () => {
  const type = document.getElementsByName("status");
  for (i = 0; i < type.length; i++) {
    if (type[i].checked) {
      document.getElementById(
        "status-span"
      ).innerHTML = `&#9866 ${type[i].value}`;
      modal.style.display = "none";
    }
  }
};
