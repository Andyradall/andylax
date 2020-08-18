
// Prosjekt del 2. Lage et lite bibliotek for brukerere til enkelt å bruke parallax effekter og animasjoner. 
// Alle scrolltypene kan startes ved å legge til en klasse på en div.  


const elementer = document.querySelectorAll(".anderlax");

for(const element of elementer) {
    //console.log(element);
    //console.log(element.id);

    console.log(element.dataset);
    console.log(element.dataset.tittel);
    console.log(element.dataset.farge);

    element.animate([
            { left: element.dataset.startleft + "px", top:  element.dataset.startleft + "px"}, 
            { left: element.dataset.stoppleft + "px", top: element.dataset.stoppleft + "px" }
        ],        
        {
            duration: Number(element.dataset.varighet),
            fill: "both"
        }
    )
}

