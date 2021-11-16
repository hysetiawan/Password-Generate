function generatePassword() {
    let length = 10;
    let chars = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`;
    chars = chars.replace('\n', " ").replace(" ", '');
    let password = "";
    let n = chars.length;
    for (var i = 0; i < length; ++i) {
        password += chars.charAt(Math.floor(Math.random() * n));
    }
    alert(password)
  }