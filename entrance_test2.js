function cycleGo() {
    let str = "";
    for (let i = 0; i <= 20; i += 4) {
        str = i.toString() + str;
    }
    return str + " Поехали!"
}