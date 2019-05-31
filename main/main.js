module.exports = function main(input) {
    // console.log("Debug Info");
    // return 'Hello World!';
    const led_top    = ["._.", "...", "._.", "._.", "...", "._.", "._.", "._.", "._.", "._."];
    const led_mid    = ["|.|", "..|", "._|", "._|", "|_|", "|_.", "|_.", "..|", "|_|", "|_|"];
    const led_bottom = ["|_|", "..|", "|_.", "._|", "..|", "._|", "|_|", "..|", "|_|", "..|"];
    const space = " ";

    const split_str = input.split("");
    let result_top = "";
    let result_mid = "";
    let result_bottom = "";
    const trim = (str) => {return str.replace(/(^\s*)|(\s*$)/g,"");};

    for (let i = 0; i < split_str.length; i ++) {
        let num = parseInt(split_str[i]);
        result_top = result_top + led_top[num] + space;
        result_mid = result_mid + led_mid[num] + space;
        result_bottom = result_bottom + led_bottom[num] + space;
    }

    const result = trim(result_top) + "\n"+ trim(result_mid) + "\n" + trim(result_bottom) + "\n";

    return result;
};