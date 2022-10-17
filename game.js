var options = Array.from(document.querySelectorAll('.choice'));
var imgAliens = Array.from(document.querySelectorAll('.imgAlien'));
var nameAliens = Array.from(document.querySelectorAll('.choiceName'));
var many = document.getElementById('many');

let availableGroups = []
let chosenGroup = []
let selectChildren = []
let choicesSelected = []

let acceptingAnswers = true

var click = new Audio('multimedia/click.mp3');
click.volume = 0.6;

let groups = [
    ///hutt, azmorrigan, gamorrean, palowick
    [
        {
            image0: "hutt.png",
            name0: "Hutt"
        },

        {
            image1: "jablogiano.png",
            name1: "Jablogiano"
        },

        {
            image2: "gamorreano.png",
            name2: "Gamorreano"
        },

        {
            image3: "palowick.png",
            name3: "Palowick"
        }
    ],
    ///gemelos, whiphid, talz, abyssin
    [
        {
            image0: "troig.png",
            name0: "Troig"
        },
    
        {
            image1: "whiphid.png",
            name1: "Whiphid"
        },
    
        {
            image2: "talz.png",
            name2: "Talz"
        },
        
        {
            image3: "abyssin.png",
            name3: "Abyssin"
        }
    ],
    ///ithorian, gran, dug, geonosiano
    [
        {
            image0: "ithoriano.png",
            name0: "Ithoriano"
        },
    
        {
            image1: "gran.png",
            name1: "Gran"
        },
    
        {
            image2: "dug.png",
            name2: "Dug"
        },
        
        {
            image3: "geonosiano.png",
            name3: "Geonosiano"
        }
    ],
    ///crolute, monoSolo, siniteen, ishitib
    [
        {
            image0: "crolute.png",
            name0: "Crolute"
        },
    
        {
            image1: "ardenniano.png",
            name1: "Ardenniano"
        },
    
        {
            image2: "siniteen.png",
            name2: "Siniteen"
        },
        
        {
            image3: "ishitib.png",
            name3: "Ishi Tib"
        }
    ],
    ///dex, phindian, arcona, gungan
    [
        {
            image0: "besalisk.png",
            name0: "Besalisk"
        },
    
        {
            image1: "phindiano.png",
            name1: "Phindiano"
        },
    
        {
            image2: "arcona.png",
            name2: "Arcona"
        },
        
        {
            image3: "gungan.png",
            name3: "Gungan"
        }
    ],
    ///grievous, quermian, thisspiasiano, watto
    [
        {
            image0: "kaleesh.png",
            name0: "Kaleesh"
        },
    
        {
            image1: "quermiano.png",
            name1: "Quermiano"
        },
    
        {
            image2: "thisspiasiano.png",
            name2: "Thisspiasiano"
        },
        
        {
            image3: "toydariano.png",
            name3: "Toydariano"
        }
    ],
    ///kaminoano, rodiano, sullustan, cereano
    [
        {
            image0: "kaminoano.png",
            name0: "Kaminoano"
        },
    
        {
            image1: "rodiano.png",
            name1: "Rodiano"
        },
    
        {
            image2: "sullustano.png",
            name2: "Sullustano"
        },
        
        {
            image3: "cereano.png",
            name3: "Cereano"
        }
    ],
    ///portavoz, yoda, keldor, iktotchi
    [
        {
            image0: "chagrian.png",
            name0: "Chagrian"
        },
    
        {
            image1: "yoda.png",
            name1: "Yoda"
        },
    
        {
            image2: "keldor.png",
            name2: "Keldor"
        },
        
        {
            image3: "iktotchi.png",
            name3: "Iktotchi"
        }
    ],
    ///lasat, trandoshan, devaroniano, zygerriano
    [
        {
            image0: "lasat.png",
            name0: "Lasat"
        },
    
        {
            image1: "trandoshan.png",
            name1: "Trandoshan"
        },
    
        {
            image2: "devaroniano.png",
            name2: "Devaroniano"
        },
        
        {
            image3: "zygerriano.png",
            name3: "zygerriano"
        }
    ],
    ///moncala, quarren, fisto, aqualish
    [
        {
            image0: "moncalamari.png",
            name0: "Mon Calamari"
        },
    
        {
            image1: "quarren.png",
            name1: "Quarren"
        },
    
        {
            image2: "nautolano.png",
            name2: "Nautolano"
        },
        
        {
            image3: "aqualish.png",
            name3: "Aqualish"
        }
    ],
    ///bane, cheew, falleen, tusken
    [
        {
            image0: "duros.png",
            name0: "Duros"
        },
    
        {
            image1: "wookiee.png",
            name1: "Wookiee"
        },
    
        {
            image2: "falleen.png",
            name2: "Falleen"
        },
        
        {
            image3: "tusken.png",
            name3: "Tusken"
        }
    ],
    ///bith, neimi, nikto, muun
    [
        {
            image0: "bith.png",
            name0: "Bith"
        },
    
        {
            image1: "neimodiano.png",
            name1: "Neimodiano"
        },
    
        {
            image2: "nikto.png",
            name2: "Nikto"
        },
        
        {
            image3: "muun.png",
            name3: "Muun"
        }
    ],
    ///hondo, pauano, pyke, tibur
    [
        {
            image0: "weequay.png",
            name0: "Weequay"
        },
    
        {
            image1: "pauano.png",
            name1: "Pauano"
        },
    
        {
            image2: "pyke.png",
            name2: "Pyke"
        },
        
        {
            image3: "karkarodon.png",
            name3: "Karkarodon"
        }
    ],
    ///twilek, maul, togruta, pantorano
    [
        {
            image0: "twilek.png",
            name0: "Twilek"
        },
    
        {
            image1: "zabrak.png",
            name1: "Zabrak"
        },
    
        {
            image2: "togruta.png",
            name2: "Togruta"
        },
        
        {
            image3: "pantorano.png",
            name3: "Pantorano"
        }
    ],
    ///barris, adi, umbarano, tiplar
    [
        {
            image0: "mirialan.png",
            name0: "Mirialan"
        },
    
        {
            image1: "tholothian.png",
            name1: "Tholothian"
        },
    
        {
            image2: "umbarano.png",
            name2: "Umbarano"
        },
        
        {
            image3: "mikkiano.png",
            name3: "Mikkiano"
        }
    ],
    ///chiss, aniBB, miraluka, nightsister
    [
        {
            image0: "chiss.png",
            name0: "Chiss"
        },
    
        {
            image1: "humano.png",
            name1: "Humano"
        },
    
        {
            image2: "miraluka.png",
            name2: "Miraluka"
        },
        
        {
            image3: "nightsister.png",
            name3: "Nightsister"
        }
    ],
    ///piell, ewok, quill, chadraFan
    [
        {
            image0: "lannik.png",
            name0: "Lannik"
        },
    
        {
            image1: "ewok.png",
            name1: "Ewok"
        },
    
        {
            image2: "ugnaught.png",
            name2: "Ugnaught"
        },
        
        {
            image3: "chadrafan.png",
            name3: "Chadra Fan"
        }
    ],
    ///jawa, lanai, quadrinaros, ortolano
    [
        {
            image0: "jawa.png",
            name0: "Jawa"
        },
    
        {
            image1: "lanai.png",
            name1: "Lanai"
        },
    
        {
            image2: "toong.png",
            name2: "Toong"
        },
        
        {
            image3: "ortolano.png",
            name3: "Ortolano"
        }
    ]
]

const MAX_QUESTIONS = 18

startGame = () => {
    groupsCounter = 0
    availableGroups = [...groups]
    getNewAliens()
}

getNewAliens = () => {
    if(availableGroups.length === 0 || groupsCounter > MAX_QUESTIONS) {
        localStorage.setItem('chosenAliens', JSON.stringify(choicesSelected))

        return window.location.assign('end.html')
    }

    groupsCounter++
    many.innerText = `${groupsCounter} de ${MAX_QUESTIONS}`


    const numberRandomGroup = Math.floor(Math.random() * availableGroups.length);
    chosenGroup = availableGroups[numberRandomGroup];

    for(i = 0; i <= 3; i++){
        var chosenAlien = chosenGroup[i];
        var img = imgAliens[i];
        var name = nameAliens[i];

        img.src = 'Aliens/' + chosenAlien['image' + i];
        name.innerText = chosenAlien['name' + i] 
    }

    availableGroups.splice(numberRandomGroup, 1)

    acceptingAnswers = true
}

options.forEach(option => {
    option.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = option.classList.toggle('active');

        if(selectedChoice == true) {
            click.play()
            selectChildren = option.children
            var selected = selectChildren[1]
    
            selected.dataset.name = selected.innerText
            alienSelected = selected.dataset.name
            choicesSelected.push(alienSelected)
        }

        setTimeout(() => {
            option.classList.remove('active')
            getNewAliens()

        }, 500)
    })
})

var music = new Audio('multimedia/cantinaBand.mp3');
var btnMusic = document.getElementById('btnMusic');
btnMusic.addEventListener('click', song);
function song(){
    music.play();
    music.volume = 0.2;
    music.loop = true;
    if (btnMusic.classList.contains("fa-volume-up")) {
        btnMusic.classList.remove("fa-volume-up");
        btnMusic.classList.add("fa-volume-mute");

        btnMusic.addEventListener('click', notSound);
        function notSound() {
            music.pause();
        }
    } else {
        //btnMusic.classList.contains("fa-volume-mute");
        btnMusic.classList.remove("fa-volume-mute");
        btnMusic.classList.add("fa-volume-up");

        btnMusic.addEventListener('click', sound);
        function sound() {
            music.play();
        }
    }
}

console.log(choicesSelected)

startGame()