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
    duration: 12000,
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

ctaAnimasjon.pause();

function spillctaAnimasjon() {
    const y = scrollY;

    // Ganger med 3 for å få litt fart på animasjonen
    ctaAnimasjon.currentTime = y * 3;
}


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

tekstboks1Animasjon.pause();

function spilltekstboks1Animasjon() {
    const y = scrollY;

    // Ganger med 3 for å få litt fart på animasjonen
    tekstboks1Animasjon.currentTime = y * 3;

}


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

tekstboks2Animasjon.pause();

function spilltekstboks2Animasjon() {
    const y = scrollY;

    // Ganger med 3 for å få litt fart på animasjonen
    tekstboks2Animasjon.currentTime = y * 3;

}

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
tekstboks3Animasjon.pause();

function spilltekstboks3Animasjon() {
    const y = scrollY;

    // Ganger med 3 for å få litt fart på animasjonen
    tekstboks3Animasjon.currentTime = y * 3;
}

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
tekstboks4Animasjon.pause();

function spilltekstboks4Animasjon() {
    const y = scrollY;

    // Ganger med 3 for å få litt fart på animasjonen
    tekstboks4Animasjon.currentTime = y * 3;
}

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
tekstboks5Animasjon.pause();

function spilltekstboks5Animasjon() {
    const y = scrollY;

    // Ganger med 3 for å få litt fart på animasjonen
    tekstboks5Animasjon.currentTime = y * 3;
}


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
tekstboks6Animasjon.pause();

function spilltekstboks6Animasjon() {
    const y = scrollY;

    // Ganger med 3 for å få litt fart på animasjonen
    tekstboks6Animasjon.currentTime = y * 3;
}



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
bgHimmelAnimasjon.pause(); 

function spillbgHimmelAnimasjon() {
    const y = scrollY; 

    bgHimmelAnimasjon.currentTime = y * 3; 
}

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
baatAnimasjon.pause();

function spillbaatAnimasjon() {
    const y = scrollY;
    
    baatAnimasjon.currentTime = y * 3; 
}

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
baat2Animasjon.pause();

function spillbaat2Animasjon() {
    const y = scrollY;
    
    baat2Animasjon.currentTime = y * 3; 
}

// Hav bakerste lag
const lystHav = document.querySelector("#lystHav");

const lystHavKeyframes = [
    {left: "-19rem", bottom: "-5rem"},
    {left: "-18rem", bottom: "-5.5rem", offset: 0.2},
    {left: "-17rem", bottom: "-6rem"}
];

const lystHavAnimasjon = lystHav.animate(lystHavKeyframes, animasjonSettings);

lystHavAnimasjon.pause();  

function spilllystHavAnimasjon() {
    const y = scrollY;
    
    lystHavAnimasjon.currentTime = y * 3; 
}

// Hav mellomste lag
const middelsHav = document.querySelector("#middelsHav");

const middelsHavKeyframes = [
    {left: "-19rem", bottom: "-5rem"},
    {left: "-18rem", bottom: "-4.5rem", offset: 0.3},
    {left: "-18rem", bottom: "-3.2rem"}
];

const middelsHavAnimasjon = middelsHav.animate(middelsHavKeyframes, animasjonSettings);
middelsHavAnimasjon.pause(); 

function spillmiddelsHavAnimasjon() {
    const y = scrollY; 

    middelsHavAnimasjon.currentTime = y * 3; 
}

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
morktHavAnimasjon.pause(); 

function spillmorktHavAnimasjon() {
    const y = scrollY; 

    morktHavAnimasjon.currentTime = y * 3; 

    
}

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

oyaAnimasjon.pause();

function spilloyaAnimasjon() {
    const y = scrollY;

    // Ganger med 3 for å få litt fart på animasjonen
    oyaAnimasjon.currentTime = y * 3;

}
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

kyklopsAnimasjon.pause();

function spillkyklopsAnimasjon() {
    const y = scrollY;

    // Ganger med 3 for å få litt fart på animasjonen
    kyklopsAnimasjon.currentTime = y * 3;
}
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

spydAnimasjon.pause();

function spillspydAnimasjon() {
    const y = scrollY;

    // Ganger med 3 for å få litt fart på animasjonen
    spydAnimasjon.currentTime = y * 3;
}

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
bgHimmel2Animasjon.pause(); 

function spillbgHimmel2Animasjon() {
    const y = scrollY; 

    bgHimmel2Animasjon.currentTime = y * 3; 
}
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
poseidonAnimasjon.pause(); 

function spillposeidonAnimasjon() {
    const y = scrollY; 

    poseidonAnimasjon.currentTime = y * 3; 
}





// Start
document.addEventListener("scroll", spilltekstboks1Animasjon);
document.addEventListener("scroll", spillctaAnimasjon);
document.addEventListener("scroll", spilltekstboks2Animasjon);
document.addEventListener("scroll", spilltekstboks3Animasjon);
document.addEventListener("scroll", spilltekstboks4Animasjon);
document.addEventListener("scroll", spilltekstboks5Animasjon);
document.addEventListener("scroll", spilltekstboks6Animasjon);
document.addEventListener("scroll", spillbaatAnimasjon);
document.addEventListener("scroll", spillbaat2Animasjon);
document.addEventListener("scroll", spillbgHimmelAnimasjon);
document.addEventListener("scroll", spilllystHavAnimasjon);
document.addEventListener("scroll", spillmiddelsHavAnimasjon);
document.addEventListener("scroll", spillmorktHavAnimasjon);
document.addEventListener("scroll", spilloyaAnimasjon);
document.addEventListener("scroll", spillkyklopsAnimasjon);
document.addEventListener("scroll", spillspydAnimasjon);
document.addEventListener("scroll", spillbgHimmel2Animasjon);
document.addEventListener("scroll", spillposeidonAnimasjon);
document.addEventListener("scroll", visScroll);



