var nav = $("#navbar a, .btn");

if (nav.length) {
    nav.on("click", function (e) {
        if (this.hash !== "") {
            e.preventDefault();

            const hash = this.hash;

            $("html, body").animate(
                {
                    scrollTop: $(hash).offset(),
                },
                800
            );
        }
    });
}
