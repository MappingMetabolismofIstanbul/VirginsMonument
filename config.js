var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    style: 'mapbox://styles/dogatmn/cm4v9fem6000p01sf12f769y5/draft',
    accessToken: 'pk.eyJ1IjoiZG9nYXRtbiIsImEiOiJjbHlyMTJmcXgwMjQ3MmtzbTRsdm1pejdsIn0.vcEjL7lt8OoOPMP5o1PM6g',
    showMarkers: false,
    markerColor: '#ff70ab',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: '#ff70ab'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Bakireler Anıtı / The Temple of the Virgins ',
    subtitle: '',
    byline: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: '0',
            alignment: 'right',
            hidden: false,
            title: '',
             image: '',
            description: '',
            location: {
                center: [29.12358460330592,40.92628271987823],
                zoom: 12,
                pitch: 10,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '1',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/JjC3DJFf/1.png',
            description: '',
            location: {
               center: [29.12358460330592,40.92628271987823],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
          {
            id: '2',
            alignment: 'left',
            hidden: false,
            title: '',
             image: 'https://i.ibb.co/KxvvwqYh/2.png',
            description: '',
            location: {
              center: [29.12358460330592,40.92628271987823],
                zoom: 15,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
          {
            id: '3',
            alignment: 'right',
            hidden: false,
            title: '',
             image: 'https://i.ibb.co/XZ1rCDKG/4.png',
            description: '',
            location: {
              center: [29.12358460330592,40.92628271987823],
                zoom: 15,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '4',
            alignment: 'left',
            hidden: false,
            title: '',
             image: 'https://i.ibb.co/CK2Cyq4M/3.png',
            description: '',
            location: {
                 center: [29.12358460330592,40.92628271987823],
                zoom: 17,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '5',
            alignment: 'full',
            hidden: false,
            title: 'Bakireler Anıtı’nın zaman içerisinde değişimi / The transformation of the Temple over time',
            image: 'https://i.ibb.co/0pH5Sc2K/s-reyya-giff.gif',
            description: '',
            location: {
                 center: [29.12358460330592,40.92628271987823],
                zoom: 17,
                pitch: 40,
                bearing: 0,
        
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '6',
            alignment: 'right',
            hidden: false,
            title: '',
           image: 'https://i.ibb.co/fGXCgxGs/6.png',
            description: '',
            location: {
                center: [29.12358460330592,40.92628271987823],
                zoom: 19,
                pitch: 10,
                bearing: 0,
              
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'right',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: '7',
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            description: '<iframe frameborder="0" class="juxtapose" width="100%" height="345" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=d5234cb6-6d45-11f0-bb24-0936e1cb08fb"></iframe>1982-2022 yılları arası Maltepe Dolgu Alanı değişimi ile yeri değişen Bakireler Anıtı/ İstanbul Urban Database 1982 Uydu ve Google Earth 2022 Uydu görüntülü kullanılarak elde edilmiştir.',
            location: {
                center: [29.12358460330592,40.92628271987823],
                zoom: 19,
                pitch: 10,
                bearing: 0,
              
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
