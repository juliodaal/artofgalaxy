class artOfGalaxy {
    constructor(){
        //Inicializando Variables.
        this.inicializarVar()
        //Inicializando Eventos Click.
        this.inicializarEventosClick()
        //Inicializardo y verificando el ancho de pantalla.
        this.anchoPantalla()
        this.eventoLogo()
    }
    inicializarVar() {
        this.logo = document.getElementById('logo'); // var para acceder al Logo.
        this.overlayPlanet = document.getElementById('overlay-planet');
        this.PositionPlanetEarth = document.getElementById('img-planet-earth') // var para acceder al planeta Earth.
        this.PositionPlanetMars = document.getElementById('img-planet-mars') // var para acceder al planeta Mars.
        this.PositionPlanetJupiter = document.getElementById('img-planet-jupiter') // var para acceder al planeta Jupiter.
        this.PositionPlanetSaturn = document.getElementById('img-planet-saturn') // var para acceder al planeta Saturn.
        this.PositionPlanetUranus = document.getElementById('img-planet-uranus') // var para acceder al planeta Uranus.
        this.PositionPlanetNeptune = document.getElementById('img-planet-neptune') // var para acceder al planeta Neptune.
        this.PositionPlanetMercury = document.getElementById('img-planet-mercury') // var para acceder al planeta Mercury.
        this.PositionPlanetVenus = document.getElementById('img-planet-venus') // var para acceder al planeta Venus.
        this.displayContentTextearth = document.getElementById('content-text-earth') // var para acceder al texto del planeta Earth.
        this.displayContentTextmars = document.getElementById('content-text-mars') // var para acceder al texto del planeta Mars.
        this.displayContentTextjupiter = document.getElementById('content-text-jupiter') // var para acceder al texto del planeta Jupiter.
        this.displayContentTextsaturn = document.getElementById('content-text-saturn') // var para acceder al texto del planeta Saturn.
        this.displayContentTexturanus = document.getElementById('content-text-uranus') // var para acceder al texto del planeta Uranus.
        this.displayContentTextneptune = document.getElementById('content-text-neptune') // var para acceder al texto del planeta Neptune.
        this.displayContentTextmercury = document.getElementById('content-text-mercury') // var para acceder al texto del planeta Mercury.
        this.displayContentTextvenus = document.getElementById('content-text-venus') // var para acceder al texto del planeta Venus.
        this.contentTextChange = document.getElementById('content-text-change') // var para acceder al texto de los planetas.
        this.burgerButton = document.getElementById('burger-button') // var para acceder al botón burger.
        this.overlay = document.getElementById('overlay') // var para acceder al overlay.
        this.containerFixedearth = document.getElementById('fixed-container-planet-earth');
        this.containerFixedmars = document.getElementById('fixed-container-planet-mars');
        this.containerFixedjupiter = document.getElementById('fixed-container-planet-jupiter');
        this.containerFixedsaturn = document.getElementById('fixed-container-planet-saturn');
        this.containerFixeduranus = document.getElementById('fixed-container-planet-uranus');
        this.containerFixedneptune = document.getElementById('fixed-container-planet-neptune');
        this.containerFixedmercury = document.getElementById('fixed-container-planet-mercury');
        this.containerFixedvenus = document.getElementById('fixed-container-planet-venus');
        this.bigContainerPlanetearth = document.getElementById('container-planet-earth');
        this.buttonearth = document.getElementById('buttonearth');
        this.buttonmars = document.getElementById('buttonmars');
        this.buttonjupiter = document.getElementById('buttonjupiter');
        this.buttonsaturn = document.getElementById('buttonsaturn');
        this.buttonuranus = document.getElementById('buttonuranus');
        this.buttonneptune = document.getElementById('buttonneptune');
        this.buttonmercury = document.getElementById('buttonmercury');
        this.buttonvenus = document.getElementById('buttonvenus');
    }
    inicializarEventosClick() {
        this.eventoButtonDesplegarColapsar()
        this.eventoClickOverlayColapsar()
    }
    anchoPantalla() {
        // this.responsiveLarge = window.matchMedia(' screen and (min-width: 769px)')
        // this.responsiveSmall = window.matchMedia(' screen and (max-width: 768px)')
        // if (this.responsiveLarge.matches === true) {
        //     // Efectos para screens mayores a 769px de ancho
            this.efectosLarge()
        // } else if (this.responsiveSmall.matches === true) {
        //     // Efectos para screens menores a 768px de ancho
        //     // this.efectosSmall()
        // } 
    }
    efectosLarge() {
        const determinarPlaneta = this.determinarPlaneta.bind(this);
        $(window).scroll(function(){
            const dataScroll = $(window).scrollTop();
            determinarPlaneta(dataScroll);
            // console.log(dataScroll);
        })
    }
    determinarPlaneta(dataScroll) {
        const containerHeightPlanet = this.bigContainerPlanetearth.offsetHeight;
        if (dataScroll > 0  && dataScroll <= (window.innerHeight + containerHeightPlanet)) {
          this.efectoScroll(this.datosPlanetas('earth') , window.innerHeight , (window.innerHeight + containerHeightPlanet), dataScroll);
        } else if (dataScroll > (window.innerHeight + containerHeightPlanet) && dataScroll <= (window.innerHeight + (containerHeightPlanet * 2))) {
          this.efectoScroll(this.datosPlanetas('mars') , (window.innerHeight + containerHeightPlanet) , (window.innerHeight + (containerHeightPlanet * 2)), dataScroll)
        } else if (dataScroll > (window.innerHeight + (containerHeightPlanet * 2)) && dataScroll <= (window.innerHeight + (containerHeightPlanet * 3))) {
          this.efectoScroll(this.datosPlanetas('jupiter') , (window.innerHeight + (containerHeightPlanet * 2)) , (window.innerHeight + (containerHeightPlanet * 3)), dataScroll)
        } else if (dataScroll > (window.innerHeight + (containerHeightPlanet * 3)) && dataScroll <= (window.innerHeight + (containerHeightPlanet * 4))) {
          this.efectoScroll(this.datosPlanetas('saturn') , (window.innerHeight + (containerHeightPlanet * 3)) , (window.innerHeight + (containerHeightPlanet * 4)), dataScroll)
        } else if (dataScroll > (window.innerHeight + (containerHeightPlanet * 4)) && dataScroll <= (window.innerHeight + (containerHeightPlanet * 5))) {
          this.efectoScroll(this.datosPlanetas('uranus') , (window.innerHeight + (containerHeightPlanet * 4)) , (window.innerHeight + (containerHeightPlanet * 5)), dataScroll)
        } else if (dataScroll > (window.innerHeight + (containerHeightPlanet * 5)) && dataScroll <= (window.innerHeight + (containerHeightPlanet * 6))) {
          this.efectoScroll(this.datosPlanetas('neptune') , (window.innerHeight + (containerHeightPlanet * 5)) , (window.innerHeight + (containerHeightPlanet * 6)), dataScroll)
        } else if (dataScroll > (window.innerHeight + (containerHeightPlanet * 6)) && dataScroll <= (window.innerHeight + (containerHeightPlanet * 7))) {
          this.efectoScroll(this.datosPlanetas('mercury') , (window.innerHeight + (containerHeightPlanet * 6)) , (window.innerHeight + (containerHeightPlanet * 7)), dataScroll)
        } else if (dataScroll > (window.innerHeight + (containerHeightPlanet * 7)) && dataScroll <= (window.innerHeight + (containerHeightPlanet * 8))) {
          this.efectoScroll(this.datosPlanetas('venus') , (window.innerHeight + (containerHeightPlanet * 7)) , (window.innerHeight + (containerHeightPlanet * 8)), dataScroll)
        }
    }
    datosPlanetas(planet) {
        switch(planet) {
            case 'earth':
            var earth = {
                name: 'earth',
                left: true,
                colorRec: '#0061ff',
                color: 'rgba(0, 97, 255, .2)',
                textOne: "<p class='col-md-12' id='content-text-change'>Earth, our home, is the third planet from the sun. It's the only planet known to have an atmosphere containing free oxygen, oceans of water on its surface and, of course, life.</p>",
                textTwo: "<p class='col-sm-12'>Earth is the fifth largest of the planets in the solar system. It's smaller than the four gas giants —Jupiter, Saturn, Uranus and Neptune — but larger than the three other rocky planets, Mercury, Mars and Venus.</p>",
                textThree: "<p class='col-sm-12'>Earth has a diameter of roughly 8,000 miles (13,000 kilometers) and is round because gravity pulls matter into a ball. But, it's not perfectly round. Earth is really an " + "'oblate spheroid,'" + " because its spin causes it to be squashed at its poles and swollen at the equator.</p>"
            }
                return earth;
            case 'mars':
            var mars = {
                name: 'mars',
                left: false,
                colorRec: '#f9642e',
                color: 'rgba(249, 100, 46, .2)',
                textOne: "<p class='col-sm-12'>Mars is the fourth planet from the sun. Befitting the Red Planet's bloody color, the Romans named it after their god of war. In truth, the Romans copied the ancient Greeks, who also named the planet after their god of war, Ares.</p>",
                textTwo: "<p class='col-sm-12'>The bright rust color Mars is known for is due to iron-rich minerals in its regolith — the loose dust and rock covering its surface. The soil of Earth is a kind of regolith, too, albeit one loaded with organic content. </p>",
                textThree: "<p class='col-sm-12'>The Red Planet is home to both the highest mountain and the deepest, longest valley in the solar system. Olympus Mons is roughly 17 miles (27 kilometers) high, about three times as tall as Mount Everest.</p>"
            }
                return mars;
            case 'jupiter':
            var jupiter = {
                name: 'jupiter',
                left: true,
                colorRec: '#ff9d00',
                color: 'rgba(255, 157, 0, .2)',
                textOne: "<p class='col-sm-12'>Jupiter is the largest planet in the solar system. Fittingly, it was named after the king of the gods in Roman mythology. In a similar manner, the ancient Greeks named the planet after Zeus, the king of the Greek pantheon.</p>",
                textTwo: "<p class='col-sm-12'>Jupiter helped revolutionize the way we saw the universe and ourselves in 1610, when Galileo discovered Jupiter's four large moons — Io, Europa, Ganymede and Callisto, now known as the Galilean moons.</p>",
                textThree: "<p class='col-sm-12'>Jupiter is the most massive planet in our solar system, more than twice as massive as all the other planets combined, and had it been about 80 times more massive, it would have actually become a star instead of a planet.</p>"
            }
                return jupiter;
            case 'saturn':
            var saturn = {
                name: 'saturn',
                left: false,
                colorRec: '#ffae00',
                color: 'rgba(255, 174, 0, .2)',
                textOne: "<p class='col-sm-12'>Saturn is the sixth planet from the sun and the second largest planet in the solar system. Saturn was the Roman name for Cronus, the lord of the Titans in Greek mythology. Saturn is the root of the English word 'Saturda'.</p>",
                textTwo: "<p class='col-sm-12'>Saturn is the farthest planet from Earth visible to the naked human eye, but it is through a telescope that the planet's most outstanding features can be seen: Saturn's rings.</p>",
                textThree: "<p class='col-sm-12'>Saturn is a gas giant made up mostly of hydrogen and helium. Saturn is big enough to hold more than 760 Earths, and is more massive than any other planet except Jupiter, roughly 95 times Earth's mass.</p>"
            }
                return saturn;
            case 'uranus':
            var uranus = {
                name: 'uranus',
                left: true,
                colorRec:'#00d9ff',
                color: 'rgba(0, 217, 255, .2)',
                textOne: "<p class='col-sm-12'>Uranus is the seventh planet from the sun and the first to be discovered by scientists. Although Uranus is visible to the naked eye, it was long mistaken as a star because of the planet's dimness and slow orbit.</p>",
                textTwo: "<p class='col-sm-12'>British astronomer William Herschel discovered Uranus accidentally on March 13, 1781, with his telescope while surveying all stars down to those about 10 times dimmer than can be seen by the naked eye.</p>",
                textThree: "<p class='col-sm-12'>Uranus was named after the Greek sky deity Ouranos, the earliest of the lords of the heavens. It is the only planet to be named after a Greek god rather than a Roman one. Before the name was settled on, many names had been proposed for the new planet, including Hypercronius ('above Saturn'), Minerva (the Roman goddess of wisdom), and Herschel, after its discoverer.</p>"
            }
                return uranus; 
            case 'neptune':
            var neptune = {
                name: 'neptune',
                left: false,
                colorRec: '#0021ff',
                color: 'rgba(0, 33, 255, .2)',
                textOne: "<p class='col-sm-12'>Neptune is the eighth planet from the sun. It was the first planet to get its existence predicted by mathematical calculations before it was actually seen through a telescope on Sept. 23, 1846.</p>",
                textTwo: "<p class='col-sm-12'>Only one mission has flown by Neptune – Voyager 2 in 1989 – meaning that astronomers have done most studies using ground-based telescopes. Today, there are still many mysteries about the cool, blue planet, such as why its winds are so speedy and why its magnetic field is offset.</p>",
                textThree: "<p class='col-sm-12'>While Neptune is of interest because it is in our own solar system, astronomers are also interested in learning more about the planet to assist with exoplanet studies. Specifically, some astronomers are interested in learning about the habitability of worlds that are somewhat bigger than Earth.</p>"
            }
                return neptune;
            case 'mercury':
            var mercury = {
                name: 'mercury',
                left: true,
                colorRec: '#ff9000',
                color: 'rgba(255, 144, 0, .2)',
                textOne: "<p class='col-sm-12'>Mercury is the closest planet to the sun. As such, it circles the sun faster than all the other planets, which is why Romans named it after their swift-footed messenger god.</p>",
                textTwo: "<p class='col-sm-12'>The Sumerians also knew of Mercury since at least 5,000 years ago. It was often associated with Nabu, the god of writing. Mercury was also given separate names for its appearance as both a morning star and as an evening star.</p>",
                textThree: "<p class='col-sm-12'>Mercury is the smallest planet — it is only slightly larger than Earth's moon. Since it has no significant atmosphere to stop impacts, the planet is pockmarked with craters.</p>"
            }
                return mercury; 
            case 'venus':
            var venus = {
                name: 'venus',
                left: false,
                colorRec: '#ff6600',
                color: 'rgba(255, 102, 0, .2)',
                textOne: "<p class='col-sm-12'>Venus, the second planet from the sun, is named for the Roman goddess of love and beauty. The planet — the only planet named after a female — may have been named for the most beautiful deity of her pantheon because it shone the brightest of the five planets known to ancient astronomers.</p>",
                textTwo: "<p class='col-sm-12'>Venus is the hottest world in the solar system. Although Venus is not the planet closest to the sun, its dense atmosphere traps heat in a runaway version of the greenhouse effect that warms Earth.</p>",
                textThree: "<p class='col-sm-12'>Venus has a hellish atmosphere as well, consisting mainly of carbon dioxide with clouds of sulfuric acid, and scientists have only detected trace amounts of water in the atmosphere. The atmosphere is heavier than that of any other planet, leading to a surface pressure 90 times that of Earth.</p>"
            }
                return venus; 
        }
    }
    efectoScroll(planet, valueOne, valueTwo, value) {
        this.colorDownBody(planet, value, valueTwo);
        this.containerFixed(planet, value, valueOne, valueTwo);
        this.eventButton(planet);
        // this.textFixed(planet, valueOne, valueTwo, value)
        // this.efectoPlaneta(planet, value);
        }
    containerFixed(planet,value, valueOne, valueTwo) {
            // const first = 'this.containerFixed' + planet.name;
            // const second = 'this.PositionPlanet' + planet.name;
            // const three = 'this.displayContentText' + planet.name;
            // if (planet.name && value > valueOne) {
            //     eval(first).style.position = 'fixed';
            //     eval(first).style.top = '0';
            //     eval(second).style.left = '0';
            //     eval(three).style.opacity = '1';
            // } else {
            //     eval(first).style.top = '-200%';
            //     eval(second).style.left = '100%';
            // }
            if (planet.name === 'earth' && value >= valueOne) {
                this.containerFixedearth.style.position = 'fixed';
                this.containerFixedearth.style.top = '0';
                this.PositionPlanetEarth.style.left = '0';
                this.displayContentTextearth.style.opacity = '1';
                this.buttonearth.classList.add('active');
            } else {
                this.containerFixedearth.style.top = '-200%';
                this.PositionPlanetEarth.style.left = '100%';
                this.buttonearth.classList.remove('active');
            }
            if (planet.name === 'mars') {
                this.containerFixedmars.style.position = 'fixed';
                this.containerFixedmars.style.top = '0';
                this.PositionPlanetMars.style.left = '0';
                this.displayContentTextmars.style.opacity = '1';
                this.buttonmars.classList.add('active');
            } else {
                this.containerFixedmars.style.top = '-200%';
                this.PositionPlanetMars.style.left = '-100%';
                this.buttonmars.classList.remove('active');
            } 
            if (planet.name === 'jupiter') {    
                this.containerFixedjupiter.style.position = 'fixed';
                this.containerFixedjupiter.style.top = '0';
                this.PositionPlanetJupiter.style.left = '0';
                this.displayContentTextjupiter.style.opacity = '1';
                this.buttonjupiter.classList.add('active');
            } else {
                this.containerFixedjupiter.style.top = '-200%';
                this.PositionPlanetJupiter.style.left = '100%';
                this.buttonjupiter.classList.remove('active');
            } 
            if (planet.name === 'saturn') {
                this.containerFixedsaturn.style.position = 'fixed';
                this.containerFixedsaturn.style.top = '0';
                this.PositionPlanetSaturn.style.left = '0';
                this.displayContentTextsaturn.style.opacity = '1';
                this.buttonsaturn.classList.add('active');
            } else {
                this.containerFixedsaturn.style.top = '-200%';
                this.PositionPlanetSaturn.style.left = '-100%';
                this.buttonsaturn.classList.remove('active');
            } 
            if (planet.name === 'uranus') {
                this.containerFixeduranus.style.position = 'fixed';
                this.containerFixeduranus.style.top = '0';
                this.PositionPlanetUranus.style.left = '0';
                this.displayContentTexturanus.style.opacity = '1';
                this.buttonuranus.classList.add('active');
            } else {
                this.containerFixeduranus.style.top = '-200%';
                this.PositionPlanetUranus.style.left = '100%';
                this.buttonuranus.classList.remove('active');
            }  
            if (planet.name === 'neptune') {
                this.containerFixedneptune.style.position = 'fixed';
                this.containerFixedneptune.style.top = '0';
                this.PositionPlanetNeptune.style.left = '0';
                this.displayContentTextneptune.style.opacity = '1';
                this.buttonneptune.classList.add('active');
            } else {
                this.containerFixedneptune.style.top = '-200%';
                this.PositionPlanetNeptune.style.left = '-100%';
                this.buttonneptune.classList.remove('active');
            } 
            if (planet.name === 'mercury') {
                this.containerFixedmercury.style.position = 'fixed';
                this.containerFixedmercury.style.top = '0';
                this.PositionPlanetMercury.style.left = '0';
                this.displayContentTextmercury.style.opacity = '1';
                this.buttonmercury.classList.add('active');
            } else {
                this.containerFixedmercury.style.top = '-200%';
                this.PositionPlanetMercury.style.left = '100%';
                this.buttonmercury.classList.remove('active');
            }  
            if (planet.name === 'venus' && value < valueTwo - 260) {
                this.containerFixedvenus.style.position = 'fixed';
                this.containerFixedvenus.style.top = '0';
                this.PositionPlanetVenus.style.left = '0';
                this.displayContentTextvenus.style.opacity = '1';
                this.buttonvenus.classList.add('active');
            } else {
                this.containerFixedvenus.style.top = '-200%';
                this.PositionPlanetVenus.style.left = '-100%';
                this.buttonvenus.classList.remove('active');
            }
        }
    colorDownBody(planet, value, valueTwo) {
        if (planet.name === 'venus' && value > valueTwo - 260) {
            this.overlayPlanet.style.background = `transparent`;
        } else {
            this.overlayPlanet.style.background = `linear-gradient(0deg, ${planet.color}, transparent 50%)`;
        }
    }
    eventButton(planet) {
        this.recOne = document.getElementById(`rec1${planet.name}`) // var para acceder al rectangulo Uno.
        this.recTwo = document.getElementById(`rec2${planet.name}`) // var para acceder al rectangulo Dos.
        this.recThree = document.getElementById(`rec3${planet.name}`) // var para acceder al rectangulo Tres.
        this.contentTextChange = document.getElementById(`content-text-change-${planet.name}`) // var para acceder al texto de los planetas.
        this.recOne.addEventListener('click', (event) => {
            this.recOne.classList.add('rectangle-active');
            this.recTwo.classList.remove('rectangle-active');
            this.recThree.classList.remove('rectangle-active');
            this.contentTextChange.innerHTML = planet.textOne;   
        });
        this.recTwo.addEventListener('click', (event) => {
            this.recOne.classList.remove('rectangle-active');
            this.recTwo.classList.add('rectangle-active');
            this.recThree.classList.remove('rectangle-active');
            this.contentTextChange.innerHTML = planet.textTwo;   
        });
        this.recThree.addEventListener('click', (event) => {
            this.recOne.classList.remove('rectangle-active');
            this.recTwo.classList.remove('rectangle-active');
            this.recThree.classList.add('rectangle-active');
            this.contentTextChange.innerHTML = planet.textThree;   
        });
    }
    //Evento para desplegar y colapsar el despliegue del menú.
    eventoButtonDesplegarColapsar(){
        this.burgerButton.addEventListener('click', () => {
            this.overlay.classList.toggle('overlay');
            navbarNavAltMarkup.classList.toggle('navbar-collapse')
        })
    }
    eventoLogo(planet) {
            this.logo.addEventListener('click', () => {
                this.overlayPlanet.style.background = `linear-gradient(0deg, rgba(0, 97, 255, .2), transparent 50%)`;
            });
        }
    //Evento para desplegar y colapsar el despliegue del menú.
    eventoClickOverlayColapsar() {
        this.overlay.addEventListener('click', () => {
            this.overlay.classList.toggle('overlay');
            navbarNavAltMarkup.classList.toggle('navbar-collapse')
            navbarNavAltMarkup.classList.remove('show')
        })
    }
}

window.init = new artOfGalaxy;




// // const hola = window.matchMedia(' screen and (min-width: 768px)')

// // hola.addListener(function hola() {
// //     alert('hola');
// //     PositionPlanet.style.backgroundSize = '100% auto';
//  })
