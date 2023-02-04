haberlerGizle();
sozlukGizle();
forumGizle();
hesapGizle();

/*kodları jquery kodlarıyla değiştirdim.*/
function anaSayfaGoster() {
    $("#baslik1").slideDown("slow");
    $("#baslik2").slideDown("slow");
    $("#baslik3").slideDown("slow");
    $("#paragraf1").slideDown("slow");
    $("#paragraf2").slideDown("slow");
    $("#paragraf3").slideDown("slow");

    haberlerGizle();
    sozlukGizle();
    forumGizle();
    hesapGizle();
}
function anaSayfaGizle() {
    $("#baslik1").hide();
    $("#baslik2").hide();
    $("#baslik3").hide();
    $("#paragraf1").hide();
    $("#paragraf2").hide();
    $("#paragraf3").hide();
}

function haberlerGoster() {
    $("#baslik4").slideDown("slow");
    $("#paragraf4").slideDown("slow");
    anaSayfaGizle();
    sozlukGizle();
    forumGizle();
    hesapGizle();

}
function haberlerGizle() {
    $("#baslik4").hide();
    $("#paragraf4").hide();
}

function sozlukGoster() {
    $("#icerikEklenecek").slideDown("slow");
    anaSayfaGizle();
    haberlerGizle();
    hesapGizle();

}

function sozlukGizle() {
    $("#icerikEklenecek").hide();
}

function forumGoster() {
    $("#icerikEklenecek").slideDown("slow");
    anaSayfaGizle();
    haberlerGizle();
    hesapGizle();

}

function forumGizle() {
    $("#icerikEklenecek").hide();
}

function hesapGoster() {
    $("#karZararHesap").slideDown("slow");
    anaSayfaGizle();
    haberlerGizle();
    forumGizle();
    sozlukGizle();
    
}

function hesapGizle() {
    $("#karZararHesap").hide();
}


