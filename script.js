$( document ).ready(function() {
    
    var single = $('#single');
    var taken = $('#taken');
    var qna_con = $('#qna-container');

    var envelope_con = $('#envelope-container');
    var envelope = $('#envelope');
    var message = $('.line2');
    
    var singleStatus = false;

    var liar = $('#liar');
    var liar_status = $('.liar-status');

    envelope_con.hide();

    single.click(function() {
        singleStatus = true;
        showEnvelope();
    });

    taken.click(function() {
        showEnvelope();
    });

    function showEnvelope() {
        qna_con.css('display', 'none');
        envelope_con.show();
        if (singleStatus) {
            setSingleColorScheme();
            message.text('Cheers to loving ourselves this year! Please buy yourself a nice meal and spoil yourself today okay??!!');
            liar_status.text('Taken');
        } else if (!singleStatus) {
            setTakenColorScheme();
            message.text("Hope you're happy with your partner on this day! At least one of us should be happy today...");
            liar_status.text('Single');
        }
        open();
    }

    liar.click(function(){
        var isEnvelopeOpen = envelope.hasClass("open");

        singleStatus = !singleStatus;

        if (isEnvelopeOpen) {
            close();
            setTimeout(function () {
                showEnvelope();
            }, 1500); 
        } else {
            showEnvelope();
        }
    })

    function setSingleColorScheme() {
        document.body.setAttribute("theme", "single");
    }
    
    function setTakenColorScheme() {
        document.body.setAttribute("theme", "taken");
    }

    envelope.click(function() {
        if (envelope.hasClass("open")) {
            close();
        } else {
            open();
        }
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
    }

    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }
});