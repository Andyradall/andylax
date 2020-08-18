// Globale innstillinger


// Preload via imagesloaded.js ( Venter til body elementet er cachet med å vise siden )

imagesLoaded( document.querySelector('#container'), function( instance ) {
    console.log('all images are loaded');

    
    document.getElementById("container").style.display = 'block';
    document.getElementById("loader").style.display = 'none';
    
    window.scrollTo(0, 0);
})

// Innstilling for animasjonslengde
const animasjonSettings = {
    duration: 50000,
    fill: "both"
}

// Lese av scrollposisjon 
const scrollPosisjon = document.getElementById("scrollPosisjon")
function visScroll() {
    const y = scrollY;
   //  scrollPosisjon.innerText = "Scroll = " + y + "px";
   //  console.log( "Scroll = " + y + "px");
}


// Animasjonsinstillinger: 

// cta (rull ned)
const cta = document.querySelector("#cta");

const ctaKeyframes = [
    {bottom: "0.8rem", opacity: 1.0},
    {bottom: "-1rem", opacity: 1.0, offset: 0.1},
    {bottom: "-10rem", opacity: 1.01, offset: 0.2},
    {bottom: "-30rem", opacity: .01}
];

const ctaAnimasjon = cta.animate(ctaKeyframes, animasjonSettings);

// Tekstboks 1
const tekstboks1 = document.querySelector("#tekstboks1");

const tekstboks1Keyframes = [
    {top: "2rem", opacity: 1.0},
    {top: "-1rem", opacity: 1.0, offset: 0.1},
    {top: "-10rem", opacity: .01, offset: 0.2},
    {top: "-30rem", opacity: .01, offset: 0.5},
    {top: "-30rem", opacity: .01}
];

const tekstboks1Animasjon = tekstboks1.animate(tekstboks1Keyframes, animasjonSettings);

// Tekstboks 2
const tekstboks2 = document.querySelector("#tekstboks2");

const tekstboks2Keyframes = [
    {bottom: "-10rem", opacity: 1.0},
    {bottom: "15.5rem", opacity: 1.0, offset: 0.35},
    {bottom: "15.5rem", opacity: 1.0, offset: 0.4},
    {bottom: "15.5rem", opacity: .01, offset: 0.41},
    {bottom: "15.5rem", opacity: .01,}
];

const tekstboks2Animasjon = tekstboks2.animate(tekstboks2Keyframes, animasjonSettings);

// Tekstboks 3
const tekstboks3 = document.querySelector("#tekstboks3");

const tekstboks3Keyframes = [
    {top: "2.5rem", left: "-22rem", opacity: 1.0},
    {top: "2.5rem", left: "-22rem", opacity: 1.0, offset: 0.41},
    {top: "2.5rem", left: "3rem", opacity: 1.0, offset: 0.46},
    {top: "2.5rem", left: "3rem", opacity: .01, offset: 0.7},
    {top: "2.5rem", left: "3rem", opacity: .01,}
];

const tekstboks3Animasjon = tekstboks3.animate(tekstboks3Keyframes, animasjonSettings);

// Tekstboks 4
const tekstboks4 = document.querySelector("#tekstboks4");

const tekstboks4Keyframes = [
    {left: "3rem", top: "-10rem", opacity: 1.0},
    {left: "3rem", top: "-10rem", opacity: 1.0, offset: 0.6},
    {left: "3rem", top: "2.5rem", opacity: 1.0, offset: 0.70},
    {left: "3rem", top: "2.5rem", opacity: 1.0, offset: 0.76},
    {left: "3rem", top: "2.5rem", opacity: .001, offset: 0.78},
    {left: "3rem", top: "2.5rem", opacity: .001,}
];

const tekstboks4Animasjon = tekstboks4.animate(tekstboks4Keyframes, animasjonSettings);

// Tekstboks 5
const tekstboks5 = document.querySelector("#tekstboks5");

const tekstboks5Keyframes = [
    {left: "3rem", top: "2.5rem", opacity: 0.001},
    {left: "3rem", top: "2.5rem", opacity: 0.001, offset: 0.78},
    {left: "3rem", top: "2.5rem", opacity: 1.0, offset: 0.80},
    {left: "3rem", top: "2.5rem", opacity: 1.0, offset: 0.89},
    {left: "3rem", top: "2.5rem", opacity: .001, offset: 0.90},
    {left: "3rem", top: "2.5rem", opacity: .001,}
];

const tekstboks5Animasjon = tekstboks5.animate(tekstboks5Keyframes, animasjonSettings);

// Tekstboks 6
const tekstboks6 = document.querySelector("#tekstboks6");

const tekstboks6Keyframes = [
    {right: "-40rem", top: "2.5rem", opacity: 1.0},
    {right: "-40rem", top: "2.5rem", opacity: 1.0, offset: 0.93},
    {right: "3rem", top: "2.5rem", opacity: 1.0, offset: 0.974},
    {right: "3rem", top: "2.5rem", opacity: 1.0, offset: 0.977},
    {right: "3rem", top: "2.5rem", opacity: 1.0, offset: 0.99},
    {right: "3rem", top: "2.5rem", opacity: 1.0,}
];
   
const tekstboks6Animasjon = tekstboks6.animate(tekstboks6Keyframes, animasjonSettings);

//Himmel
const bgHimmel = document.querySelector("#bgHimmel");

const bgHimmelKeyframes = [
    {left: "0rem", top: "-100px", transform: "scale(1.0, 1.0)"},
    {left: "0rem", top: "-50px", transform: "scale(1.2, 1.1)", offset: 0.12},
    {left: "0rem", top: "10px", transform: "scale(1.25, 1.1", offset: 0.15},
    {left: "0rem", top: "-80px", transform: "scale(1.25, 1.1", offset: 0.2},
    {left: "0rem", top: "-80px", transform: "scale(1.25, 1.1", offset: 0.4},
    {left: "-1rem", top: "-100px", transform: "scale(1.28, 1.1", offset: 0.5},
    {left: "-1rem", top: "-100px", transform: "scale(1.28, 1.1", offset: 0.5},
    {left: "1rem", top: "-110px", transform: "scale(1.28, 1.1", offset: 0.6},
    {left: "1rem", top: "-90px", transform: "scale(1.28, 1.1", offset: 0.75},
    {left: "2rem", top: "-90px", transform: "scale(1.28, 1.1", offset: 0.77},
    {left: "2rem", top: "-90px", transform: "scale(1.28, 1.1", offset: 0.77},
    {left: "2rem", top: "-90px", transform: "scale(1.28, 1.1"}
];

const bgHimmelAnimasjon = bgHimmel.animate(bgHimmelKeyframes, animasjonSettings);

// Baat 
const baat = document.querySelector("#baat");

const baatKeyframes = [
    {left: "780px", bottom: "20px", transform: "rotate(0deg)"},
    {left: "780px", bottom: "20px", transform: "rotate(0deg)", offset: 0.1},
    {left: "780px", bottom: "20px", transform: "rotate(4deg)"},
    {left: "1600px", bottom: "20px", transform: "rotate(-1deg)", offset: 0.2},
    {left: "1600px", bottom: "20px", transform: "rotate(-1deg)"}
];

const baatAnimasjon = baat.animate(baatKeyframes, animasjonSettings);

// Baat2 
const baat2 = document.querySelector("#baat2");

const baat2Keyframes = [
    {left: "-20rem", bottom: "20px", transform: "rotate(0deg)"},
    {left: "-20rem", bottom: "20px", transform: "rotate(0deg)", offset: 0.7},
    {left: "4rem", bottom: "20px", transform: "rotate(2deg)"},
    {left: "4rem", bottom: "20px", transform: "rotate(2deg)", offset: 0.8},
    {left: "4rem", bottom: "20px", transform: "rotate(2deg)"}
];

const baat2Animasjon = baat2.animate(baat2Keyframes, animasjonSettings);

// Hav bakerste lag
const lystHav = document.querySelector("#lystHav");

const lystHavKeyframes = [
    {left: "-19rem", bottom: "-5rem"},
    {left: "-18rem", bottom: "-5.5rem", offset: 0.2},
    {left: "-17rem", bottom: "-6rem"}
];

const lystHavAnimasjon = lystHav.animate(lystHavKeyframes, animasjonSettings);

// Hav mellomste lag
const middelsHav = document.querySelector("#middelsHav");

const middelsHavKeyframes = [
    {left: "-19rem", bottom: "-5rem"},
    {left: "-18rem", bottom: "-4.5rem", offset: 0.3},
    {left: "-18rem", bottom: "-3.2rem"}
];

const middelsHavAnimasjon = middelsHav.animate(middelsHavKeyframes, animasjonSettings);

// Hav fremste lag
const morktHav = document.querySelector("#morktHav");

const morktHavKeyframes = [
    {left: "-19rem", bottom: "-1.5rem"},
    {left: "-18rem", bottom: "-2rem", offset: 0.1},
    {left: "-18rem", bottom: "-2.5rem", offset: 0.3},
    {left: "-17rem", bottom: "-2.5rem", offset: 0.4},
    {left: "-18rem", bottom: "-1.6rem", offset: 0.5},
    {left: "-19rem", bottom: "-2.6rem", offset: 0.6},
    {left: "-16rem", bottom: "-1.6rem"}
];

const morktHavAnimasjon = morktHav.animate(morktHavKeyframes, animasjonSettings);

// Oya
const oya = document.querySelector("#oya");

const oyaKeyframes = [
    {left: "-22rem", bottom: "-30rem", transform: "scale(1.0, 1.0)"},
    {left: "-22rem", bottom: "-30rem", transform: "scale(1.0, 1.0)", offset: 0.4},
    {left: "-22rem", bottom: "-4rem", transform: "scale(1.0, 1.0)", offset: 0.46},
    {left: "-22rem", bottom: "-4rem", transform: "scale(1.0, 1.0)", offset: 0.46},
    {left: "-22rem", bottom: "-4rem", transform: "scale(1.0, 1.0)", offset: 0.66},
    {left: "-22rem", bottom: "-4rem", transform: "scale(1.0, 1.0)", offset: 0.7},
    {left: "-20rem", bottom: "-6rem", transform: "scale(1.0, 1.0)", offset: 0.75},
    {left: "-20rem", bottom: "-6rem", transform: "scale(1.0, 1.0)"}
];

const oyaAnimasjon = oya.animate(oyaKeyframes, animasjonSettings);

// Kyklops
const kyklops = document.querySelector("#kyklops");

const kyklopsKeyframes = [
    {left: "19.7rem", bottom: "4rem", opacity: 0.01, transform: "scale(1.0, 1.0)"},
    {left: "20.3rem", bottom: "13.36rem", opacity: 0.01, transform: "scale(1.0, 1.0)", offset: 0.66},
    {left: "20.3rem", bottom: "13.36rem", opacity: 1, transform: "scale(1.0, 1.0)", offset: 0.67},
    {left: "20.3rem", bottom: "13.36rem", opacity: 1, transform: "scale(1.0, 1.0)", offset: 0.71},
    {left: "22.3rem", bottom: "11.36rem", opacity: 1, transform: "scale(1.0, 1.0)", offset: 0.75},
    {left: "22.3rem", bottom: "11.36rem", opacity: 1, transform: "scale(1.0, 1.0)", offset: 0.75},
    {left: "22.3rem", bottom: "11.36rem", opacity: 1, transform: "scale(1.0, 1.0)rotate(0deg)", offset: 0.80},
    {left: "22.7rem", bottom: "10.8rem", opacity: 1, transform: "scale(1.0, 1.0) rotate(110deg)", offset: 0.82},
    {left: "22.7rem", bottom: "10.8rem", opacity: 1, transform: "scale(1.0, 1.0) rotate(110deg)", offset: 0.90},
    {left: "22.7rem", bottom: "10.8rem", opacity: 1, transform: "scale(1.0, 1.0) rotate(110deg)", offset: 0.95},
    {left: "22.7rem", bottom: "10.8rem", opacity: 1, transform: "scale(1.0, 1.0) rotate(110deg)"}
];

const kyklopsAnimasjon = kyklops.animate(kyklopsKeyframes, animasjonSettings);

// spyd
const spyd = document.querySelector("#spyd");

const spydKeyframes = [
    {left: "-22rem", bottom: "-4rem", opacity: 0.01, transform: "scale(1.0, 1.0) rotate(0deg)"},
    {left: "10rem", bottom: "6rem", opacity: 0.01, transform: "scale(1.0, 1.0) rotate(0deg)", offset: 0.66},
    {left: "10rem", bottom: "6rem", opacity: 0.01, transform: "scale(1.0, 1.0) rotate(20deg)", offset: 0.72},
    {left: "10rem", bottom: "7rem", opacity: 0.01, transform: "scale(1.0, 1.0) rotate(20deg)", offset: 0.75},
    {left: "10rem", bottom: "7rem", opacity: 0.01, transform: "scale(1.0, 1.0) rotate(20deg)", offset: 0.78},
    {left: "16rem", bottom: "8rem", opacity: 1, transform: "scale(1.1, 1.1) rotate(25deg)", offset: 0.80},
    {left: "21.34rem", bottom: "11.41rem", opacity: 1, transform: "scale(1.3, 1.3) rotate(125deg)", offset: 0.87},
    {left: "21.34rem", bottom: "11.41rem", opacity: 1, transform: "scale(1.3, 1.3) rotate(125deg)"}
];

const spydAnimasjon = spyd.animate(spydKeyframes, animasjonSettings);

//Himmel2
const bgHimmel2 = document.querySelector("#bgHimmel2");

const bgHimmel2Keyframes = [
    {left: "0rem", bottom: "-60rem", transform: "scale(1.0, 1.0)"},
    {left: "0rem", bottom: "-50rem", transform: "scale(1.0, 1.0)", offset: 0.85},
    {left: "0rem", bottom: "1.3rem", transform: "scale(1.0, 1.0)", offset: 0.95},
    {left: "0rem", bottom: "1.4rem", transform: "scale(1.0, 1.0", offset: 0.96},
    {left: "0rem", bottom: "1.5rem", transform: "scale(1.0, 1.0", offset: 0.97},
    {left: "0rem", bottom: "1.7rem", transform: "scale(1.0, 1.0", offset: 0.98},
    {left: "0rem", bottom: "3rem", transform: "scale(1.0, 1.0", offset: 1},
    {left: "0rem", bottom: "3rem", transform: "scale(1.0, 1.0"}
];

const bgHimmel2Animasjon = bgHimmel2.animate(bgHimmel2Keyframes, animasjonSettings);

//Poseidon
const poseidon = document.querySelector("#poseidon");

const poseidonKeyframes = [
    {left: "0rem", bottom: "-60rem", transform: "scale(1.0, 1.0)"},
    {left: "0rem", bottom: "-50rem", transform: "scale(1.0, 1.0)", offset: 0.92},
    {left: "0rem", bottom: "-1rem", transform: "scale(1.0, 1.0", offset: 0.950},
    {left: "-0.2rem", bottom: "-1rem", transform: "scale(1.0, 1.0", offset: 0.986},
    {left: "-0.3rem", bottom: "-1rem", transform: "scale(1.0, 1.0", offset: 1},
    {left: "-0.3rem", bottom: "-1rem", transform: "scale(1.0, 1.0"}
];

const poseidonAnimasjon = poseidon.animate(poseidonKeyframes, animasjonSettings);


// samle alle animasjoner i et array
const animasjoner = [ctaAnimasjon, 
    tekstboks1Animasjon, 
    tekstboks2Animasjon, 
    tekstboks3Animasjon, 
    tekstboks4Animasjon, 
    tekstboks5Animasjon, 
    tekstboks6Animasjon,
    baatAnimasjon,
    baat2Animasjon,
    bgHimmelAnimasjon,
    lystHavAnimasjon,
    middelsHavAnimasjon,
    morktHavAnimasjon,
    oyaAnimasjon,
    kyklopsAnimasjon,
    spydAnimasjon,
    bgHimmel2Animasjon,
    poseidonAnimasjon]

// Sett alle animasjoner på pause
for(const animasjon of animasjoner) {
    animasjon.pause();
}

// Start alle animasjonene på scroll 
function animerAlle() {    
    const y = scrollY;
    for(const animasjon of animasjoner) {        
        animasjon.currentTime = y * 3;
    }
}

document.addEventListener("scroll", animerAlle);

// Tillegg for registrering av hvor langt ned man har scrollet. 
document.addEventListener("scroll", visScroll);

