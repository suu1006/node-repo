"use strict";

const hello = (req, res) => {
    res.render("home/index");
}

const login = (req, res)=> {
    res.render("home/login")
}

module.exports = { // 외부에서 사용할 수 있도록 내보내기 해줌.
    hello, // hello : hello 키와 값이 같을때 키만 작성해주면 됨.
    login,
};

