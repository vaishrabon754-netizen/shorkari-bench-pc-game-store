const users = {
  "oasama": "2000405",
  "nahian": "2894365",
  "muide": "3008976",
  "fahad": "2100789",
  "minhaz": "456789",
  "rafi 1": "3000172",
  "rafi 2": "4000876",
  "sabit": "2000000"
};

function normalize(str) {
  return str.toLowerCase().replace(/\s+/g, '');
}

function login() {
  const rawName = document.getElementById("osama").value.trim();
  const passkey = document.getElementById("passkey").value.trim();
  const name = normalize(rawName);

  const normalizedUsers = {};
  Object.keys(users).forEach(key => {
    normalizedUsers[normalize(key)] = users[key];
  });

  if (normalizedUsers[name] && normalizedUsers[name] === passkey) {
    document.getElementById("error").style.display = "none";
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("gameSection").style.display = "grid";

    const role = name === "sabit" ? "Owner" : "Member";
    document.getElementById("userName").textContent = rawName.toUpperCase();
    document.getElementById("userRole").textContent = role;

    document.querySelectorAll(".game-block a button").forEach(btn => {
      btn.classList.add("visible-btn");
    });

    if (role === "Owner") {
      document.getElementById("adminPanel").style.display = "block";
    }

  } else {
    document.getElementById("error").style.display = "block";
  }
}