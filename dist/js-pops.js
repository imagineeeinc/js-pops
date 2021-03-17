checkBody()
const hide = "hide"
const show = "show"

const popmodal = document.getElementById("popmodal");
const close = popmodal.getElementsByClassName("close")[0];
const header = document.getElementById("theheader")
const mbody = document.getElementById("modal-body")
const footer = document.getElementById("modal-footer")

close.onclick = function() {
    popmodal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == popmodal) {
        popmodal.style.display = "none";
    }
}

function checkBody() {
    if (!document.body) {
        alert("You have no document body so the JS Pops libary won't work.")
    } else {
        let doc = document.createElement('div')
        doc.id = 'popmodal'
        doc.className = 'popmodal'
        doc.innerHTML = `<div class="modal-content">
            <span class="close">&times;</span>
            <div class="modal-header">
                <h2 id="theheader"></h2>
            </div>
            <div id="modal-body"></div>
            <div id="modal-footer"></div>
        </div>`
        document.body.prepend(doc)
    }
}

const Pop = (function(text) {
    modal.open(null, text)
})

const pops = {
    closeBtn: (function(display) {
        if (display == hide) {
            close.style.display = "none"
        } else if (display == show) {
            close.style.display = "block"
        }
    })
}

const modal = {
    open: (function(head,input,btn,closeBtn) {
        if(head) {
            header.innerHTML = head;
        } else {
            header.innerHTML = 'This page says'
        }

        if(closeBtn) {
            close.style.display = "block"
        } else {
            close.style.display = "none"
        }
        mbody.innerHTML = input
        popmodal.style.display = "block";
    })
}