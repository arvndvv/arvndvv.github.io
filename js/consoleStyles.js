//functions
const cBanner1 = (msg) => {
    let bannerBigGreen =
        "color:#0c3;font-weight:bold;background:transparent;padding:10px 10% 10px 10%; font-size:4em;font-family:'monospace',sans-serif,roboto;border:2px solid #0a3;";
    console.log("%c" + msg, bannerBigGreen);
};
const cBanner2 = (msg) => {
    let bannerBigBlue =
        "color:#05f;font-weight:bold;font-size:4em;text-shadow:-3px -3px 0px #fad,3px 3px 0px #9fa;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;";
    console.log("%c" + msg, bannerBigBlue);
};
const cBanner3 = (msg) => {
    let bannerBigRed =
        "color:red;font-family:system-ui;font-size:4em;-webkit-text-stroke: 1px black;font-weight:bold";
    console.log("%c" + msg, bannerBigRed);
};
const cBanner4 = (msg) => {
    let bannerRainbow =
        "font-weight: bold; font-size: 4em;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)";
    console.log("%c" + msg, bannerRainbow);
};
const cBlackGreen = (msg) => {
    let textHacker =
        "font-size:1.3em;color:#0d3;background:black; padding:2px 10px 2px 10px;";
    console.log("%c" + msg, textHacker);
};
const cClassicGray = (msg) => {
    let textClassicGray =
        "font-size:1.3em;color:#aaa;background:#333; padding:2px 10px 2px 10px;";
    console.log("%c" + msg, textClassicGray);
};
const cClassicBlack = (msg) => {
    let textClassicBlack =
        "font-size:1.3em;color:#000;background:#aaa; padding:2px 10px 2px 10px;";
    console.log("%c" + msg, textClassicBlack);
};

const cError = (msg) => {
    let error =
        "font-size:1.3em;color:#e33;border:2px solid #e33;padding:2px 5px 2px 5px;border-radius:5px";
    console.log("%cError: " + msg, error);
};
const cWarn = (msg) => {
    let warn =
        "font-size:1.3em;color:#FF9E33;border:2px solid #FF9E33;padding:2px 5px 2px 5px;border-radius:5px";
    console.log("%cWarning: " + msg, warn);
};
const cSuccess = (msg) => {
    let success =
        "font-size:1.3em;color:#090;border:2px solid #0a0;padding:2px 5px 2px 5px;border-radius:5px";
    console.log("%cSuccess! " + msg, success);
};
const cRemarks = (msg) => {
    let remarks =
        "font-size:1.3em;color:#33f;border:2px solid #33f;padding:2px 5px 2px 5px;border-radius:5px";
    console.log("%cRemarks: " + msg, remarks);
};
//banners
/*
cBanner1("cBanner1");
cBanner2("cBanner2");
cBanner3("cBanner3");
cBanner4("cBanner4");
//special messages
cError("this is an error!");
cWarn("this is a warning");
cSuccess("this is Success Message");
cRemarks("this is Remarks");
//text styles
cBlackGreen("This is cBlackGreen() text style.");
cClassicGray("This is cClassicGray() text style.");
cClassicBlack("This is cClassicBlack() text style.");
*/