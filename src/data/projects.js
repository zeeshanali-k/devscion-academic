
export const projects = [
    {
        id: 1,
        title: 'Feres - Taxi Booking App',
        description: 'Ethiopia\'s Leading Taxi App built entirely in KMP (Kotlin Multiplatform).',
        technologies: ["Kotlin", "Swift (Basic)", "Android Studio", "KMP", "Compose Multiplatform", "Gradle", "REST Api", "Push Notifications (FCM)", "Google Maps"],
        image: './images/project1.jpg',
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
        image: './images/project1.jpg',
        detailedDescription: 'Image Generation and Image Captioning Mobile App based on the HuggingFace\'s free Inference REST API of custom trained models. It is built for Android, iOS, Desktop and Web using KMP for shared business logic and Compose Multiplatform for shared UI. Models training is done using Python.',
        features: [
            'Image Generation',
            'Image Captionining'
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
        technologies: ["Dart", "Flutter", "Android Studio", "REST Api", "Google Maps", "Push Notifications (FCM)"],
        image: './images/project1.jpg',
        detailedDescription: 'A users benefits application (in Poland) for ZYSKY system users built using Flutter/Dart. It has different modules including user app and admin panel, both built in Flutter and Flutter Web respectively.',
        features: [
            'Search and View Nearby Partners/Shops'
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
        title: 'CoinPay',
        description: 'A Crypto Wallet similar to MetaMask.',
        technologies: ["Kotlin", "Android Studio", "Jetpack Compose", "Gradle", "Blockchain"],
        image: './images/project1.jpg',
        detailedDescription: 'CoinPay is a Fully Fledged Crypto Wallet like MetaMask built for Android. It has all the features of a crypto wallet including Wallet Creation, Restoration, Recieving Crypto and Sending Crypto. It is built entirley in Jetpack Compose and Kotlin.',
        features: [
            'Crypto Wallet Creation',
            'Restore wallet using secret phrase',
            'Send Crypto',
            'Recive Crypto',
            'View History of all the transactions'
        ],
        duration: 'March 2023 - May 2023',
        role: 'Mobile App Developer',
        team: '1 members',
        link: 'https://drive.google.com/file/d/1eEUgP5R-nX0meBGTpQA9qhruBVOcSh26/view?usp=sharing'
    },
    {
        id: 5,
        title: 'VC Panel',
        description: 'VC Panel is Vehicle Tracking Anti Theft system built in Kotlin and PHP (Laravel) as backend',
        technologies: ["Kotlin", "Android Studio", "Jetpack Compose", "Gradle", "Blockchain"],
        image: './images/project1.jpg',
        detailedDescription: 'VC Panel is Vehicle Tracking Anti Theft system built in Native Android using Kotlin and Google Maps for showing vehicle tracking data. It uses PHP (Laravel) as backend for REST APIs and Live vehicle tracking using Laravel Sockets (Web Sockets). The purpose of this project is to make people feel safe about their vehicles and easily recover their vehicle in case of theft.',
        features: [
            'Set fences and get notified whenever the vehicle enters or leaves fence',
            'There a vast number of features including ignition alert, anti theft alert, etc',
            'You can lock your vehicle from mobile app in case of theft',
            'Live location and analytics',
            'Push Notifications Alert'
        ],
        duration: 'March 2023 - May 2023',
        role: 'Mobile App Developer',
        team: '1 members',
        playLink: 'https://play.google.com/store/apps/details?id=com.mtn.vcpanel'
    }
];
