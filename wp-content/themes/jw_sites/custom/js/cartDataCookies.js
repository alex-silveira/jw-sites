function planItem(name, price, redirectUrl) {
    setCookie("jwPlanName", name, 1);
    setCookie("jwPlanPrice", price, 1);
    window.location.href = redirectUrl + "checkout"
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}