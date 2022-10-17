///Invocación arreglo de los nombres de aliens que se escogieron durante el juego
var chosenAliens = localStorage.getItem('chosenAliens');
chosenAliens = JSON.parse(chosenAliens);
console.log(chosenAliens)

///Arreglo asociativo de la información de los aliens
var infoAliens = [];
infoAliens['hutt'] = 'Nativos del planeta Nal Hutta, tienen forma de babosa y son bien conocidos por ser gángsters galácticos que pueden llegar a vivir varios siglos. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Jabba_Desilijic_Tiure">Jabba Desilijic</a></div>';

infoAliens['jablogiano'] = 'Humanoides con piel roja y los ojos verdes, con grandes cabezas y extremidades cortas , también tienen una gran barbilla con papada. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Azmorigan" target="_blank">Azmorigan</a></div>';

infoAliens['gamorreano'] = 'Humanoides porcinos de piel verde provenientes del planeta Gamorr, suelen hacer carrera principalmente como guardias de señores del crimen. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Ortugg" target="_blank">Guardia Ortugg</a></div>';

infoAliens['palowick'] = 'Anfibios de cuerpos redondos y extremidades largas con manchas en la piel y ojos y boca que sobresalían de su cabeza, son buenos cantando. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Sy_Snootles" target="_blank">Sy Snootles</a></div>';

infoAliens['troig'] = 'Tienen dos cabezas, cada con su propia personalidad y temperamento, son curiosos e inteligentes, varios fueron grandes científicos. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Fodesinbeed_Annodue" target="_blank">Fode y Beed</a></div>';

infoAliens['whiphid'] = 'Altos, musculosos y peludos, notables por sus grandes colmillos, buenos para cazar, por lo que trabajan como mercenarios o cazarrecompensas. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/K%27Kruhk" target="_blank">K´Kruhk</a></div>';

infoAliens['talz'] = 'Tienen ojos para ver de día y otros para ver de noche, su pelo los camufla y soporta sitios helados, son primitivos, así como infatigables y pacíficos. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Thi-Sen" target="_blank">Thi-Sen</a></div>';

infoAliens['abyssin'] = 'Su característica principal es su único ojo con forma de hendidura, pueden regenerar sus extremidades y llegar a vivir hasta los 300 años! <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Jackar_Bowmani" target="_blank">Jackar Bowmani</a></div>';

infoAliens['ithoriano'] = 'Llamados cabeza de martillo, tienen bocas a cada lado de su cuello, pacíficos y adoran la naturaleza, muchos son sensibles a la Fuerza. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Roron_Corobb/Leyendas" target="_blank">Roron Corobb</a></div>';

infoAliens['gran'] = 'Nativos de Malastare, tienen tres ojos y hocicos parecidos a cabras, en la historia, varios de los gran que gozaban de poder se hicieron corruptos. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Aks_Moe/Leyendas" target="_blank">Ask Moe</a></div>';

infoAliens['dug'] = 'Tienen largos hocicos y caminan con los brazos, son conocidos por su comportamiento malhumorado, y muchos fueron matones intimidantes. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Sebulba" target="_blank">Sebulba</a></div>';

infoAliens['geonosiano'] = 'Especie insectoide alada, viven en enormes colmenas, son excelentes obreros y buenos guerreros, sus hobbies son ver violencia en los estadios. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Poggle_el_Menor" target="_blank">Poggle the Lesser</a></div>';

infoAliens['crolute'] = 'Especie acuática, exclusivamente de machos, fuera del agua su cuerpo se arruga, no suelen viajar fuera de su planeta natal o lunas colonizadas. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Unkar_Plutt" target="_blank">Unkar Plutt</a></div>';

infoAliens['ardenniano'] = 'Distinguibles por su aparencia de simio y sus cuatro brazos, son aptos como profesionales militares y pilotos por su gran rapidez y agilidad en combate. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Rio_Durant" target="_blank">Rio Durant</a></div>';

infoAliens['siniteen'] = 'Sus cabezas son enormes por su gran cerebro avanzado que los dota de híper inteligencia, útil para cálculos complejos (siniteen = anagrama de Einstein). <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Bric" target="_blank">Bric</a></div>';

infoAliens['ishitib'] = 'Anfibios humanoides con boca de pico y protuberantes ojos, tienen un excelente sentido del olfato, pueden realizar una gran variedad de trabajos. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Pendewqell" target="_blank">Pendewqell</a></div>';

infoAliens['besalisk'] = 'Muy corpulentos con cuatro brazos y una papada inflable, son rudos, trabajadores, creyentes del comercio y los negocios. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Dexter_Jettster" target="_blank">Dexter Jettster</a></div>';

infoAliens['phindiano'] = 'De aspecto triste, con los brazos largos más allá de las rodillas, gustan de la exageración y son precavidos, con gran afecto por su familia y amigos. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Guerra_Derida" target="_blank">Guerra Derida</a></div>';

infoAliens['arcona'] = 'Se pueden encontrar en toda la galaxia, con cabeza triangulares, una escasa vista y una fácil adicción por la sal, comen amoníaco para sobrevivir.<div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Si_Treemba" target="_blank">Si Treemba</a></div>';

infoAliens['gungan'] = 'Anfibios nativos de Naboo, orgullosos guerreros y desarrolladores de una tecnología avanzada y única, generosos, pacíficos aunque aislacionistas. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Jar_Jar_Binks" target="_blank">Jar Jar Binks</a></div>';

infoAliens['kaleesh'] = 'Reptiles con piel escamosa, usualmente usan máscaras, son profundamente espirituales, además de guerreros conocidos por su falta de misericordia. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Grievous" target="_blank">Grievous</a></div>';

infoAliens['quermiano'] = 'Pacíficos, en su mayor parte se dedican a ideas filosóficas complejas, dando como resultado a muchos diplomáticos y pensadores en la galaxia. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Yarael_Poof" target="_blank">Yarael Poof</a></div>';

infoAliens['thisspiasiano'] = 'Como una serpiente gigante con espesa barba, son guerreros orgullosos que mantenían sus emociones bien ocultas y sus rabias controladas. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Oppo_Rancisis" target="_blank">Oppo Rancisis</a></div>';

infoAliens['toydariano'] = 'Vuelan y resisten la manipulación mental con la Fuerza, conocidos por ser astutos en el comercio y con fama de malhumorados y codos. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Watto" target="_blank">Watto</a></div>';

infoAliens['kaminoano'] = 'Altos, esbeltos y elegantes, son científicos conocidos por ser clonadores expertos muy inteligentes y buenos negociantes pero reservados. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Nala_Se" target="_blank">Nala Se</a></div>';

infoAliens['rodiano'] = 'Muy conocidos en la galaxia y violentos así que varios son cazarrecompensas o criminales, sin embargo hubo otros como artistas o políticos. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Greedo" target="_blank">Greedo</a></div>';

infoAliens['sullustano'] = 'Reconocibles por sus mandíbulas, tienen talento natural para tareas mecánicas, tecnológicas y en economía, son amigables y pragmáticos. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Nien_Nunb" target="_blank">Nien Nunb</a></div>';

infoAliens['cereano'] = 'Su cráneo es alargado por su cerebro binario, les da grandes habilidades intelectuales, son tranquilos, racionales y analíticos amantes de la naturaleza. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Ki-Adi-Mundi" target="_blank">Ki-Adi-Mundi</a></div>';

infoAliens['chagrian'] = 'Anfibios altos y cornudos, generalmente pacíficos y muy respetuosos de la ley hasta el punto de volverse estoicos y obstinados. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Mas_Amedda" target="_blank">Mas Amedda</a></div>';

infoAliens['yoda'] = 'De una especie antigua y misteriosa de origen desconocido, son todos sensibles a la Fuerza, viven varios siglos envejeciendo muy lentamente. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Yoda" target="_blank">Yoda</a></div>';

infoAliens['keldor'] = 'No respiran oxígeno, por eso usan máscaras, célebres por su hospitalidad y su enfoque simple de la justicia, ven los temas morales en absolutos. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Plo_Koon" target="_blank">Plo Koon</a></div>';

infoAliens['iktotchi'] = 'Son una raza feroz y tecnológicamente avanzada que respeta a los guerreros, son telépatas y tienen un don natural para ser pilotos. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Saesee_Tiin" target="_blank">Saesee Tiin</a></div>';

infoAliens['lasat'] = 'Conocidos por su gran fuerza y agilidad, son de naturaleza guerrera, buenos escaladores con una visión y audición excepcionales. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Garazeb_Orrelios" target="_blank">Garazeb Orrelios</a></div>';

infoAliens['trandoshan'] = 'Grandes reptilianos reconocidos en toda la galaxia por sus habilidades de caza, reflejos rápidos y agilidad natural, muchos son cazarrecompensas. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Bossk%27wassak%27Cradossk" target="_blank">Bossk</a></div>';

infoAliens['devaroniano'] = 'Los machos son calvos con cuernos y agresivos, las hembras tienen cabello y dos círculos oscuros sobre la frente, son serias pero dominantes. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Cikatro_Vizago" target="_blank">Cikatro Vizago</a></div>';

infoAliens['zygerriano'] = 'Son astutos y guerreros por naturaleza, estiman la fuerza física y mental, creen firmemente en que los fuertes dominan a los débiles, son esclavistas. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Miraj_Scintel" target="_blank">Miraj Scintel</a></div>';

infoAliens['moncalamari'] = 'Especie acuática, tienen una inclinación por el arte y la ciencia, son serenos con habilidades de liderazgo, llegan a ser buenos soldados y estrategas. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Gial_Ackbar" target="_blank">Gial Ackbar</a></div>';

infoAliens['quarren'] = 'Apodados calamares, son una especie conservadora y práctica, les atraen los puestos de autoridad, son muy orgullosos e irascibles. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Kragan_Gorr" target="_blank">Kragan Gorr</a></div>';

infoAliens['nautolano'] = 'Sus grandes ojos les permiten ver con poca luz y sus tentáculos de la cabeza les ayudan a analizar la emociones de otros, son excelentes nadadores. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Kit_Fisto" target="_blank">Kit Fisto</a></div>';

infoAliens['aqualish'] = 'Tienen grandes colmillos que sobresalen de sus mandíbulas, son rudos y violentos, a menudo hacen carrera como mercenarios o piratas. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Ponda_Baba" target="_blank">Ponda Baba</a></div>';

infoAliens['duros'] = 'Gustan de narrar de historias, muchos son pilotos y exploradores, con un gran espíritu aventurero, aunque a veces precipitados. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Cad_Bane" target="_blank">Cad Bane</a></div>';

infoAliens['wookiee'] = 'Altos guerreros, peludos y muy fuertes, cuando se les provoca le arrancan los brazos a sus enemigos, viven varios siglos, son honorables y leales. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Chewbacca" target="_blank">Chewbacca</a></div>';

infoAliens['falleen'] = 'Sus feromonas los hacen irresistibles para ambos sexos, se consideran muy estéticos por su elegante simetría, respetan la disciplina y el autocontrol. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Xizor/Leyendas" target="_blank">Xizor</a></div>';

infoAliens['tusken'] = 'Nómadas primitivos considerados bárbaros, son muy territoriales y hostiles, excelentes tiradores, no pueden quitarse sus máscaras o alguna prenda. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/K%27Sheek" target="_blank">K´Sheek</a></div>';

infoAliens['bith'] = 'Especie pacífica, no pueden derramar lágrimas pero tienen un oído muy sensible, a menudo trabajan como músicos, científicos e ingenieros. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Darth_Tenebrous" target="_blank">Darth Tenebrous</a></div>';

infoAliens['neimodiano'] = 'Tienen habilidades excepcionales para los negocios, son embusteros, cobardes y ávaros, movidos por las riquezas y posesiones materiales. <div>Ejemplo: <a href="https://https://starwars.fandom.com/es/wiki/Nute_Gunray" target="_blank">Nute Gunray</a></div>';

infoAliens['nikto'] = 'Están aclimatados al desierto, son astutos combatientes, determinados, serviciales y tenaces, capaces de adaptarse rápidamente a su entorno. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Neeku_Vozo" target="_blank">Neeku Vozo</a></div>';

infoAliens['muun'] = 'Su vida gira en torno a la economía y las finanzas, no les gusta viajar, son reservados, codiciosos y cautelosos, rara vez sienten remordimientos. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Darth_Plagueis/Leyendas" target="_blank">Darth Plagueis</a></div>';

infoAliens['weequay'] = 'Su dura y curtida piel resiste el fuego láser, haciéndolos los guardaespaldas ideales y unos buenos cazarrecompensas. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Hondo_Ohnaka" target="_blank">Hondo Ohnaka</a></div>';

infoAliens['pauano'] = 'Aunque pueden parecer aterradores, son amables y hospitalarios, por siglos se han dedicado a puestos de liderazgo, administración o de asesores. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Gran_Inquisidor" target="_blank">Gran Inquisidor</a></div>';

infoAliens['pyke'] = 'Criminales, proveedores reconocidos de Especia por toda la galaxia (narcóticos, drogas), sus cabezas son desproporcionalmente grandes. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Marg_Krim" target="_blank">Marg Krim</a></div>';

infoAliens['karkarodon'] = 'Son feroces nadadores que desgarran a sus enemigos con sus dientes, poseen cierta resistencia a los disparos con bláster sin sufrir lesiones. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Riff_Tamson" target="_blank">Riff Tamson</a></div>';

infoAliens['twilek'] = 'Famosos en toda la galaxia, los lekkus son apéndices en sus cabezas. Son considerados una belleza exótica por lo que a menudo son esclavizados. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Hera_Syndulla" target="_blank">Hera Syndulla</a></div>';

infoAliens['zabrak'] = 'Casi humanos, con cuernos distintivos en sus cabezas, considerados orgullosos, decididos e incluso arrogantes pero muy independientes. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Maul" target="_blank">Maul</a></div>';

infoAliens['togruta'] = 'Poseen un fuerte sentido de unión y colaboración con sus congéneres, son muy espirituales, tranquilos, generosos y unos expertos sigilosos cazadores. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Ahsoka_Tano" target="_blank">Ahsoka Tano</a></div>';

infoAliens['pantorano'] = 'Casi-humanos de piel azul con gran resistencia a bajas temperaturas, son muy independientes y orgullosos, sus marcas amarillas simbolizan su linaje. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Riyo_Chuchi" target="_blank">Riyo Chichi</a></div>';

infoAliens['mirialan'] = 'Sus tatuajes negros en la cara simbolizan logros personales. Son religiosos, creyentes de la Fuerza y la naturaleza, muy flexibles y ágiles. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Barriss_Offee" target="_blank">Barris Offee</a></div>';

infoAliens['tholothian'] = 'Casi-humanos que aparentemente no tienen edad, son de piel oscura azulada con zarcillos blancos que brotan de sus casquetes. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Adi_Gallia" target="_blank">Adi Gallia</a></div>';

infoAliens['umbarano'] = 'Su piel es muy pálida, sus ojos incoloros les permiten ver en ultravioleta, pueden influenciar en la voluntad de otros, gustan del secreto y anhelan poder. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Sly_Moore" target="_blank">Sly Moore</a></div>';

infoAliens['mikkiano'] = 'Son reservados, colocan la integridad y su código de honor por encima de todo, los zarcillos de su cabeza tienen habilidades sensoriales. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Tiplar" target="_blank">Tiplar</a></div>';

infoAliens['chiss'] = 'Son grandes guerreros, muy leales los unos con los otros, listos, ingeniosos y orgullosos, bien educados, artísticos y cautelosos al tratar con extraños. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Mitth%27raw%27nuruodo" target="_blank">Mitth´raw´nuruodo</a></div>';

infoAliens['humano'] = 'LOL!, no eres muy distinto en esta galaxia <div><a href="https://starwars.fandom.com/es/wiki/Obi-Wan_Kenobi" target="_blank">Obi-Wan Kenobi</a><a href="https://starwars.fandom.com/es/wiki/Anakin_Skywalker" target="_blank">Anakin Skywalker</a><a href="https://starwars.fandom.com/es/wiki/Chelli_Lona_Aphra" target="_blank">Dra. Aphra</a><a href="https://starwars.fandom.com/es/wiki/Ezra_Bridger" target="_blank">Ezra Bridger</a><a href="https://starwars.fandom.com/es/wiki/Darth_Sidious" target="_blank">Darth Sidious</a></div>';

infoAliens['miraluka'] = 'Son casi-humanos, todos sensibles a la Fuerza, se distinguen en que suelen no tener ojos, o si los tienen son completamente blancos. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/D%C3%A9cimo_Hermano" target="_blank">Décimo Hermano</a></div>';

infoAliens['nightsister'] = 'Llamadas brujas de Dathomir son un clan de mujeres usuarias del lado oscuro, además de ser sensibles a la Fuerza, usan magia arcana. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Asajj_Ventress" target="_blank">Asajj Ventress</a></div>';

infoAliens['lannik'] = 'Guerreros valientes y muy osados, con gran audición debido a sus orejas grandes y mucho más fuertes y rápidos de lo que su tamaño sugiere. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Even_Piell" target="_blank">Even Piell</a></div>';

infoAliens['ewok'] = 'Seres diminutos y peludos, expertos en la supervivencia de los bosques y en la construcción de tecnología primitiva, además de ser muy fuertes. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Wicket_W._Warrick" target="_blank">Wicket</a></div>';

infoAliens['ugnaught'] = 'Pequeños de apariencia porcina, tienen reputación de trabajadores leales y laboriosos, bastante resistentes que pueden llegar a vivir 200 años. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Kuiil" target="_blank">Kuiil</a></div>';

infoAliens['chadrafan'] = 'Son pequeños con un gran olfato, muy sociables, tanto, que sin compañía pueden morir de soledad, extrovertidos que caen bien a cualquiera. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Kabe" target="_blank">Kabe</a></div>';

infoAliens['jawa'] = 'Se visten y esconden debajo de pesadas túnicas, esto crea gran especulación por saber qué hay debajo, se sabe que son peludos. Son chatarreros apasionados, comercian lo que encuentran<br/>y son muy pasivos.<br/><br/>';

infoAliens['lanai'] = 'Especie aviar, las mujeres preservan las estructuras sagradas de la isla en Ahch-To, los hombres son cazadores en el mar, ambos son muy pacíficos. <div>Ejemplo: <a href="https://starwars.fandom.com/wiki/Grebe-Korora" target="_blank">Grebe-Korora</a></div>';

infoAliens['toong'] = 'Tienen un aspecto inusual: cabezas gigantes, sin torsos y con antenas, son en extremo tímidos y evitan la confrontación con el resto de la galaxia. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Ben_Quadinaros" target="_blank">Ben Quadinaros</a></div>';

infoAliens['ortolano'] = 'Rechonchos y azules, comen mucho para generar una gran capa de grasa pues su planeta es muy frío, sus grandes pasiones son la comida y la música. <div>Ejemplo: <a href="https://starwars.fandom.com/es/wiki/Max_Rebo" target="_blank">Max Rebo</a></div>';


///Variables del DOM para hacer la selección random del resultado
const nameOptionsBx = document.getElementById('nameOptions');
const doItBtn = document.getElementById('doIt');
doItBtn.addEventListener('click', randomPicker);

var copyText;

//Crear spans con los nombres de los estudiantes
function createNameAlien() {
    chosenAliens.forEach(alien => {
        const spanName = document.createElement('span');
        spanName.classList.add('nameAlien');
        spanName.innerText = alien;

        nameOptionsBx.appendChild(spanName);
    });
}
window.onload = createNameAlien;

//Efecto y realizar el random picker
function randomPicker() {
    var drum = new Audio('multimedia/drum.mp3');
    drum.play();
    drum.volume = 0.6;

    setTimeout(function(){
        var r2d2 = new Audio('multimedia/r2d2.mp3');
        r2d2.play();
    }, 4180)

    const times = 50;

    const interval = setInterval(() => {
        const randomSpan = pickRandomSpan();
        highlight(randomSpan);

        setTimeout(() => {
            unhighlight(randomSpan);
        }, 100)
    }, 100);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomSpan = pickRandomSpan();
            //Muestra al elegido
            highlight(randomSpan);

            var modal = document.getElementById('modal')
            modal.classList.add('active')

            //El string elegido lo volvemos a minúsculas y sin espacios
            var youAre = randomSpan.innerText
            var youAreNoSpaces = youAre.toLowerCase().replace(/\s+/g, '')
            console.log(youAreNoSpaces)

            //Card del Alien y su información
            var imgAlien = document.getElementById('imgAlien');
            var nameAlien = document.getElementById('nameAlien');
            var infoAlienResult = document.getElementById('info');
            imgAlien.src = 'Aliens/' + youAreNoSpaces + '.png'
            nameAlien.innerHTML = youAre;
            infoAlienResult.innerHTML = infoAliens[youAreNoSpaces];

            var shareMessage = 'Hey, soy un(a) ' + youAre + '! del Quiz: ¿Qué alien de Star Wars eres?, inténtalo también en: https://quizzessw.000webhostapp.com/';

            copyText = document.getElementById('copyText');
            copyText.innerHTML = shareMessage;

            //Botón SHARE
            var btnShare = document.getElementById('share');
            btnShare.addEventListener('click', shareDone)
            function shareDone() {
                var floating = document.getElementById('floating');
                

                //Copiar link para compartir
                copyText.select();
                document.execCommand('copy');
                
                //Aparecer y ocultar mensaje flotante de link copiado
                floating.classList.add('active');

                setTimeout(function(){
                    floating.classList.remove('active');
                }, 2000);
            }
        }, 100);
    }, times * 80);
}

var closeBtn = document.getElementById('closeBtn');
closeBtn.addEventListener('click', closeModal)
function closeModal() {
    modal.classList.remove('active');
}

function pickRandomSpan() {
    var nameAlien = document.querySelectorAll('.nameAlien');
    return nameAlien[Math.floor(Math.random() * nameAlien.length)];
}

function highlight(nameAlien) {
    nameAlien.classList.add('highlight');
}

function unhighlight(nameAlien) {
    nameAlien.classList.remove('highlight');
}