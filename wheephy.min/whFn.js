
/**
 * 
 * @param {type} url
 * @param {type} Name
 * @param {type} usernme
 * @param {type} mail
 * @param {type} pssword
 * @returns {undefined}
 */
function RegisterMe(url, Name, usernme, mail, pssword) {
    var sign = new URL();
    var uri = url + ".php?usernmes=" + usernme + "&Name=" + Name + "&mail=" + mail + "&psswords=" + pssword;
    sign.send(uri);
    Note("");
    sign.getHTML("humbergerWheep");

    var Log = "../login/logon.php?usernme=" + usernme + "&pssword=" + pssword;
    sign.send(Log);
    sign.GotoNext(0);
}

/**
 * 
 * @param {type} q
 * @param {type} url
 * @returns {undefined}
 */
function player(q, url) {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            document.getElementById(q).innerHTML = xhttp.responseText;
            $("#" + q).removeAttr("id");
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

/**
 * 
 * @param {type} uri
 * @param {type} headline
 * @param {type} img
 * @param {type} cmmnt
 * @param {type} type
 * @param {type} NumCol
 * @param {type} priority
 * @param {type} id
 * @returns {undefined}
 */
function Publish_INFO(uri, headline, img, cmmnt, type, NumCol, priority, id, country) {
    if (headline.length > 2) {

        if (cmmnt.length > 2) {
            var wh = new URL();
            var url = uri + ".php?headline=" + headline + "&filename=" + img + "&cmmnt=" + cmmnt + "&type=" + type + "&NumCol=" + NumCol + "&priority=" + priority + "&MM_insert=submitFile" + "&id=" + id + "&country=" + country;
            wh.send(url);
            wh.copyFile(img, 'humbergerWheep', "../Appends/appends.php?appender=actualite", 'acceptAppend');
        } else {
            Note("Le commentaire ne peut pas contenir moins de deux caractères");
        }
    } else {
        Note("Le titre ne peut pas contenir moins de deux caractères");
    }
}


/**
 * 
 * @param {type} url
 * @param {type} id
 * @returns {undefined}
 */
function Deleter(url, id) {
    var del = new URL();
    Note("");
    del.send(url);
    del.getHTML('humbergerWheep');
    Remover(id);
}

function Login() {
    var log = new URL();
    var url = "../login/logon.php?usernme=" + ElementVal("usernme") + "&pssword=" + ElementVal("pssword");
    log.send(url);
    log.GotoNext(1);
}

function SendID(q) {
    var mail = new URL();
    var url = "../login/Recup.php?mail=" + q;
    mail.send(url);
    Note("");
    mail.getHTML("humbergerWheep");
}

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

/**
 * 
 * @param {type} q
 * @param {type} id
 * @returns {undefined}
 */
function StopPlay(q, id) {
    Element(id).innerHTML = "";
    $('#' + q).hide().fadeOut(1500);

}

/**
 * 
 * @param {type} q
 * @param {type} url
 * @returns {undefined}
 */
function playerVideo(q, url) {

    Element('videoPlayer').style.display = 'block';
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            document.getElementById(q).innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function changeColor(q) {
    var change = new URL();
    change.send(q.toString());
    change.Goto(window.location.href);
}

function SetActive(q) {
    var xhttp = new XMLHttpRequest(), url = "../R0vT5.8mV4/boot_.php?q=" + q + "&sample=1";
    xhttp.open("GET", url, true);
    xhttp.send();
}

$(document).ready(function () {
    $("#searcher").on("keyup", function () {
        var val = this.value;
        var search = new URL();
        search.send("./search/searchIndex.php?q=" + val);
        search.getHTML("appendSearch");
    });
});


function Searcher(q) {
    
    /*$("nav").css("background-color", "#2f2f2f");*/
    var val = q;
    var search = new URL();
    search.send("../search/search.php?q=" + val + "&g=2");
    search.getHTML("appendSearch");
}





