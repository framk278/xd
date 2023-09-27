var Logoloader = $(".logo-loader");
var registrar = $(".register");
var register = $(".registro");

register.hide();

setTimeout(() => {
    Logoloader.addClass("d-none");
    registrar.show("slow");
    register.show("slow");
}, 4000);

