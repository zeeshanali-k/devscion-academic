
export const projects = [
    {
        id: 1,
        title: 'Feres - Taxi Booking App',
        description: 'Ethiopia\'s Leading Taxi App built entirely in KMP (Kotlin Multiplatform).',
        technologies: ["Kotlin", "Swift (Basic)", "Android", "iOS", "KMP", "Compose Multiplatform", "Gradle", "REST APIs", "Push Notifications (FCM)", "Google Maps"],
        image: './images/feres_logo.jpeg',
        detailedDescription: 'Feres is a taxi booking app functional only in Ethiopia and a few surrounding countries. It is built using latest technology in every aspect. I worked on the Feres User App (used to book rides). It is built using KMP for shared business logic and Compose Multiplatform for shared UI supporting Android and iOS, both platforms.',
        features: [
            'Uses GoogleMaps to show nearby driver\'s location',
            'Implements GRPC for driver live location updates during trip',
            'REST Apis for communicating with server for purposes like fetching nearby drivers, booking trip etc.'
        ],
        duration: 'July 2024 - Ongoing (Maintainance)',
        role: 'Lead Mobile App Developer',
        team: '4 members',
        website: 'https://feres.co',
        playLink: "https://play.google.com/store/apps/details?id=com.feres.user&hl=en",
        appStoreLink: "https://apps.apple.com/us/app/feres/id1477739364"
    },
    {
        id: 2,
        title: 'Classy',
        description: 'Image Generation and Image Captioning Multiplatform App.',
        technologies: ["Kotlin", "Android Studio", "Compose Multiplatform", "Gradle", "AI", "Stable Diffusion", "PyTorch", "REST Api"],
        image: './images/classy.jpg',
        detailedDescription: 'Image Generation and Image Captioning Mobile App based on the HuggingFace\'s free Inference REST API of custom trained models. It is built for Android, iOS, Desktop and Web using KMP for shared business logic and Compose Multiplatform for shared UI. Models training is done using Python.',
        features: [
            'Image generation',
            'Image captionining'
        ],
        duration: 'March 2023 - May 2023',
        role: 'Mobile App Developer',
        team: '1 members',
        github: "https://github.com/zeeshanali-k/classy",
        website: 'https://zeeshanali-k.github.io/Classy/'
    },
    {
        id: 3,
        title: 'ZYSKY',
        description: 'A Cross Platform Benefits application (in Poland) for ZYSKY system users built using Flutter.',
        technologies: ["Dart", "Flutter", "Android", "iOS", "REST APIs", "Google Maps", "Push Notifications (FCM)"],
        image: './images/zysky.png',
        detailedDescription: 'A users benefits application (in Poland) for ZYSKY system users built using Flutter/Dart. It has different modules including user app and admin panel, both built in Flutter and Flutter Web respectively.',
        features: [
            'Search and view nearby partners/shops',
            'Avail offers and redeem points using QR scanning'
        ],
        duration: 'March 2023 - May 2023',
        role: 'Mobile App Developer',
        team: '1 members',
        playLink: "https://play.google.com/store/apps/details?id=com.zysky.zysky",
        appStoreLink: "https://apps.apple.com/pk/app/zysky/id6477992573",
        website: "https://www.zysky.pl/en/",
    },
    {
        id: 4,
        title: 'TypeWell',
        description: 'An AI assitant for writing and optimizing text built in Flutter.',
        technologies: ["Dart", "Flutter", "Android", "iOS", "OpenAI GPT API"],
        image: './images/project1.jpg',
        detailedDescription: 'TypeWell is built in Flutter utilising OpenAI GPT api for processing text via LLMs. It provides options to generate new text and optimize existing text supporting various tones. I also provides option to extract text from images and allows user to generate pdf based on provided templates.',
        features: [
            'Generate new text',
            'Optimize existing text',
            'OCR - Extract text from images',
            'Generate PDF from provided templates'
        ],
        duration: 'January 2023 - April 2023',
        role: 'Mobile App Developer',
        team: '1 members'
    },
    {
        id: 5,
        title: 'CoinPay',
        description: 'A Crypto Wallet similar to MetaMask.',
        technologies: ["Android", "Kotlin", "Jetpack Compose", "Blockchain"],
        image: './images/coinpay.png',
        detailedDescription: 'CoinPay is a Fully Fledged Crypto Wallet like MetaMask built for Android. It has all the features of a crypto wallet including Wallet Creation, Restoration, Receiving Crypto and Sending Crypto. It is built entirley in Jetpack Compose and Kotlin. Web3j is used for communicating with blockchain via a RPC provider named Infura. It allows to receive/send crypto coins using respective contracts for each coin including USDT, USDC etc.',
        features: [
            'Crypto wallet creation',
            'Restore wallet using secret phrase',
            'Send crypto',
            'Recieve crypto',
            'View history of all the transactions'
        ],
        duration: 'April 2023 - May 2023',
        role: 'Mobile App Developer',
        team: '1 members',
        link: 'https://drive.google.com/file/d/1eEUgP5R-nX0meBGTpQA9qhruBVOcSh26/view?usp=sharing'
    },
    {
        id: 6,
        title: 'VC Panel',
        description: 'VC Panel is Vehicle Tracking Anti Theft system built in Kotlin and PHP (Laravel) as backend',
        technologies: ["Kotlin", "Jetpack Compose", "Websockets", "PHP", "Laravel", "MySQL", "REST APIs"],
        image: './images/vc_panel.png',
        detailedDescription: 'VC Panel is Vehicle Tracking Anti Theft system built in Native Android using Kotlin and Google Maps for showing vehicle tracking data. It uses PHP (Laravel) as backend for REST APIs and live vehicle tracking using Laravel Sockets library for web sockets. The purpose of this project is to make people feel safe about their vehicles and easily recover their vehicle in case of theft.',
        features: [
            'Set fences and get notified whenever the vehicle enters or leaves fence',
            'There a vast number of features including ignition alert, theft alert, etc',
            'You can lock your vehicle remotely using mobile app in case of theft',
            'Live location and vehicle traveling analytics',
            'Push Notifications Alert'
        ],
        duration: 'December 2022 - March 2022',
        role: 'Mobile App Developer',
        team: '1 members',
        playLink: 'https://play.google.com/store/apps/details?id=com.mtn.vcpanel'
    }, {
        id: 7,
        title: 'IQ Sync',
        description: 'A trading educational platform',
        technologies: ["Dart", "Flutter"],
        image: './images/iq_sync.png',
        detailedDescription: 'IQ Sync is a mobile app designed to help traders grow and succeed in the financial markets. The app offers comprehensive trading education, making it easy to learn the basics and advanced strategies at your own pace. Users can access live streams for real-time market analysis and expert insights. Trade alerts keep you updated on potential opportunities, so you never miss a key move. With the Swipe To Trade feature, executing trades becomes quick and simple, giving you more control and confidence. IQ Sync brings everything you need to improve your trading, all in one place.',
        features: [
            'Push alerts for new trades',
            'Watch trading video tutorials'
        ],
        duration: 'August 2025 - October 2025',
        role: 'Mobile App Developer',
        team: '1 members',
        playLink: 'https://play.google.com/store/apps/details?id=com.enigmalabs.iqsync&hl=en',
        appStoreLink: 'https://apps.apple.com/pk/app/iq-sync/id6753764389'
    }
];
