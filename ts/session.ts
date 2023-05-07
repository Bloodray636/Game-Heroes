function addSessionData(id: string, nickname: string) {
    let session = {
        "id": id,
        "nickname": nickname
    };
    if (localStorage["session"] != undefined) {
        console.log("Сессия существует, невозможно создать ее повторно, выйдите из аккаунта");
        return;
    }
    localStorage["session"] = JSON.stringify(session);
}

function getSessionData() {
    if (localStorage["session"] == undefined) {
        console.log("Сессия не существует");
        return undefined;
    }
    return JSON.parse(localStorage["session"]);
}

function removeSessionData() {
    localStorage["session"] = undefined;
}

function sessionDataValidation() {
    let session = getSessionData();
}