// Comprehensive Global Car Dataset spanning Maruti Suzuki to Rolls-Royce
// Each car model includes full variant hierarchies, detailed technical specs,
// luxury appointments, safety ratings, color options, and audio profiles.

export const CARS_DATA = [
  {
    id: "maruti-swift",
    make: "Maruti Suzuki",
    model: "Swift",
    year: 2024,
    category: "budget",
    bodyType: "Hatchback",
    heroImage: "/images/swift.jpg",
    gallery: [
      "/images/swift.jpg",
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80"
    ],
    tagline: "India's Most Loved Peppy City Hatchback",
    description: "The 4th Generation Maruti Suzuki Swift introduces the new Z-Series 1.2L 3-cylinder engine delivering astonishing fuel efficiency up to 25.75 km/l, standard 6 airbags, dynamic LED styling, and connected infotainment.",
    brandOrigin: "Japan / India",
    engineSoundType: "3cyl-economy",
    colors: [
      { name: "Sizzling Red", hex: "#d81b24" },
      { name: "Luster Blue", hex: "#1e3a8a" },
      { name: "Pearl Arctic White", hex: "#f3f4f6" },
      { name: "Magma Grey", hex: "#4b5563" },
      { name: "Splendid Silver", hex: "#9ca3af" }
    ],
    startingPriceUSD: 7900,
    startingPriceINR: 649000,
    variants: [
      {
        id: "swift-lxi",
        name: "Swift LXi (Base)",
        priceUSD: 7900,
        priceINR: 649000,
        engine: "1.2L Z12E 3-Cylinder Petrol",
        displacementCc: 1197,
        powerHp: 81,
        torqueNm: 112,
        acceleration0to100: 12.8,
        topSpeedKmh: 165,
        transmission: "5-Speed Manual",
        gearboxType: "Manual",
        drivetrain: "FWD",
        fuelType: "Petrol",
        mileageKmpl: 24.8,
        rangeKm: 917,
        fuelTankLiters: 37,
        dimensions: {
          lengthMm: 3860,
          widthMm: 1735,
          heightMm: 1520,
          wheelbaseMm: 2450,
          groundClearanceMm: 163,
          bootSpaceLiters: 265,
          kerbWeightKg: 920,
          seatingCapacity: 5
        },
        chassis: {
          frontSuspension: "MacPherson Strut",
          rearSuspension: "Torsion Beam",
          frontBrakes: "Ventilated Disc",
          rearBrakes: "Drum",
          wheelSize: "14-inch Steel with Hub Caps"
        },
        comfort: {
          upholstery: "Standard Fabric",
          climateControl: "Manual AC with Heater",
          sunroof: "None",
          seating: "Standard 6-way Manual Driver Seat",
          ambientLighting: "None",
          keylessEntry: "Remote Central Locking"
        },
        infotainment: {
          screen: "None (Provision Only)",
          speakers: "2 Speakers Pre-wired",
          driverCluster: "Analogue dials with Multi-info LCD",
          connectivity: "None",
          wirelessCharging: false,
          hud: false
        },
        safety: {
          ncapRating: "3 Stars Global NCAP (Est.)",
          airbags: 6,
          adasLevel: "None",
          camera: "Rear Parking Sensors",
          cruiseControl: "None",
          absEbd: true,
          esp: true,
          hillHold: true
        }
      },
      {
        id: "swift-vxi",
        name: "Swift VXi (Mid)",
        priceUSD: 8850,
        priceINR: 729000,
        engine: "1.2L Z12E 3-Cylinder Petrol",
        displacementCc: 1197,
        powerHp: 81,
        torqueNm: 112,
        acceleration0to100: 12.6,
        topSpeedKmh: 165,
        transmission: "5-Speed Manual / Optional AMT",
        gearboxType: "Manual / AMT",
        drivetrain: "FWD",
        fuelType: "Petrol",
        mileageKmpl: 24.8,
        rangeKm: 917,
        fuelTankLiters: 37,
        dimensions: {
          lengthMm: 3860,
          widthMm: 1735,
          heightMm: 1520,
          wheelbaseMm: 2450,
          groundClearanceMm: 163,
          bootSpaceLiters: 265,
          kerbWeightKg: 935,
          seatingCapacity: 5
        },
        chassis: {
          frontSuspension: "MacPherson Strut",
          rearSuspension: "Torsion Beam",
          frontBrakes: "Ventilated Disc",
          rearBrakes: "Drum",
          wheelSize: "15-inch Full Wheel Covers"
        },
        comfort: {
          upholstery: "Premium Textured Fabric",
          climateControl: "Manual AC",
          sunroof: "None",
          seating: "Height Adjustable Driver Seat",
          ambientLighting: "Footwell Glow",
          keylessEntry: "Remote Keyless"
        },
        infotainment: {
          screen: "7.0-inch SmartPlay Touchscreen",
          speakers: "4 Speakers",
          driverCluster: "Digital-Analogue Cluster",
          connectivity: "Wireless Android Auto & Apple CarPlay",
          wirelessCharging: false,
          hud: false
        },
        safety: {
          ncapRating: "3 Stars Global NCAP",
          airbags: 6,
          adasLevel: "None",
          camera: "Reverse Camera optional",
          cruiseControl: "None",
          absEbd: true,
          esp: true,
          hillHold: true
        }
      },
      {
        id: "swift-zxi-plus",
        name: "Swift ZXi+ Dual Tone (Top)",
        priceUSD: 11600,
        priceINR: 959000,
        engine: "1.2L Z12E 3-Cylinder Petrol",
        displacementCc: 1197,
        powerHp: 81,
        torqueNm: 112,
        acceleration0to100: 12.3,
        topSpeedKmh: 170,
        transmission: "5-Speed AMT with Paddle Shifters",
        gearboxType: "AMT",
        drivetrain: "FWD",
        fuelType: "Petrol",
        mileageKmpl: 25.75,
        rangeKm: 952,
        fuelTankLiters: 37,
        dimensions: {
          lengthMm: 3860,
          widthMm: 1735,
          heightMm: 1520,
          wheelbaseMm: 2450,
          groundClearanceMm: 163,
          bootSpaceLiters: 265,
          kerbWeightKg: 950,
          seatingCapacity: 5
        },
        chassis: {
          frontSuspension: "MacPherson Strut",
          rearSuspension: "Torsion Beam",
          frontBrakes: "Ventilated Disc",
          rearBrakes: "Drum",
          wheelSize: "15-inch Precision Cut Alloys"
        },
        comfort: {
          upholstery: "Dual Tone Sport Fabric",
          climateControl: "Automatic Climate Control",
          sunroof: "None",
          seating: "Driver Height Adj + Rear 60:40 Split",
          ambientLighting: "Cockpit Ambient Lighting",
          keylessEntry: "Smart Key with Push Start/Stop"
        },
        infotainment: {
          screen: "9.0-inch SmartPlay Pro+ HD",
          speakers: "6 Speakers (Arkamys Surround)",
          driverCluster: "4.2-inch Color TFT Driver Display",
          connectivity: "Wireless CarPlay / Android Auto + Suzuki Connect",
          wirelessCharging: true,
          hud: false
        },
        safety: {
          ncapRating: "4 Stars Global NCAP (Tested with 6 Airbags)",
          airbags: 6,
          adasLevel: "None",
          camera: "Reverse Camera with Dynamic Guidelines",
          cruiseControl: "Standard Cruise Control",
          absEbd: true,
          esp: true,
          hillHold: true
        }
      }
    ]
  },
  {
    id: "tata-nexon",
    make: "Tata Motors",
    model: "Nexon",
    year: 2024,
    category: "budget",
    bodyType: "SUV",
    heroImage: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80"
    ],
    tagline: "5-Star Safety Champion Compact SUV",
    description: "The Tata Nexon redefines the sub-compact SUV segment with sculpted bi-function LED headlamps, 1.2L Revotron Turbo engine, paddle shifters, ventilated front seats, and best-in-class 5-Star BNCAP crash safety.",
    brandOrigin: "India",
    engineSoundType: "inline4-turbo",
    colors: [
      { name: "Fearless Purple", hex: "#4a154b" },
      { name: "Creative Ocean", hex: "#0284c7" },
      { name: "Daytona Grey", hex: "#374151" },
      { name: "Pristine White", hex: "#f9fafb" },
      { name: "Flame Red", hex: "#b91c1c" }
    ],
    startingPriceUSD: 9700,
    startingPriceINR: 799000,
    variants: [
      {
        id: "nexon-smart",
        name: "Nexon Smart 1.2 Petrol MT",
        priceUSD: 9700,
        priceINR: 799000,
        engine: "1.2L Revotron 3-Cyl Turbo Petrol",
        displacementCc: 1199,
        powerHp: 118,
        torqueNm: 170,
        acceleration0to100: 11.2,
        topSpeedKmh: 175,
        transmission: "5-Speed Manual",
        gearboxType: "Manual",
        drivetrain: "FWD",
        fuelType: "Petrol Turbo",
        mileageKmpl: 17.44,
        rangeKm: 767,
        fuelTankLiters: 44,
        dimensions: {
          lengthMm: 3995,
          widthMm: 1804,
          heightMm: 1620,
          wheelbaseMm: 2498,
          groundClearanceMm: 208,
          bootSpaceLiters: 382,
          kerbWeightKg: 1210,
          seatingCapacity: 5
        },
        chassis: {
          frontSuspension: "Independent MacPherson with Coil Spring",
          rearSuspension: "Twist Beam with Dual Path Strut",
          frontBrakes: "Disc",
          rearBrakes: "Drum",
          wheelSize: "16-inch Steel Wheels"
        },
        comfort: {
          upholstery: "Fabric Upholstery",
          climateControl: "Manual AC",
          sunroof: "None",
          seating: "6-way Manual Driver Seat",
          ambientLighting: "None",
          keylessEntry: "Central Locking"
        },
        infotainment: {
          screen: "None",
          speakers: "None",
          driverCluster: "Digital Instrument Cluster",
          connectivity: "None",
          wirelessCharging: false,
          hud: false
        },
        safety: {
          ncapRating: "5 Stars Bharat NCAP",
          airbags: 6,
          adasLevel: "None",
          camera: "Rear Parking Sensors",
          cruiseControl: "None",
          absEbd: true,
          esp: true,
          hillHold: true
        }
      },
      {
        id: "nexon-fearless-plus",
        name: "Nexon Fearless+ S 7-DCA (Top)",
        priceUSD: 17900,
        priceINR: 1479000,
        engine: "1.2L Revotron 3-Cyl Turbo Petrol",
        displacementCc: 1199,
        powerHp: 118,
        torqueNm: 170,
        acceleration0to100: 10.4,
        topSpeedKmh: 185,
        transmission: "7-Speed Dual Clutch Automatic (DCA)",
        gearboxType: "DCT",
        drivetrain: "FWD",
        fuelType: "Petrol Turbo",
        mileageKmpl: 17.01,
        rangeKm: 748,
        fuelTankLiters: 44,
        dimensions: {
          lengthMm: 3995,
          widthMm: 1804,
          heightMm: 1620,
          wheelbaseMm: 2498,
          groundClearanceMm: 208,
          bootSpaceLiters: 382,
          kerbWeightKg: 1260,
          seatingCapacity: 5
        },
        chassis: {
          frontSuspension: "Independent MacPherson with Coil Spring",
          rearSuspension: "Twist Beam with Dual Path Strut",
          frontBrakes: "Disc",
          rearBrakes: "Disc",
          wheelSize: "16-inch Diamond Cut Alloys"
        },
        comfort: {
          upholstery: "Benecke-Kaliko Leatherette with Ventilation",
          climateControl: "Fully Automatic Temperature Control with Air Purifier",
          sunroof: "Voice-Assisted Electric Sunroof",
          seating: "Ventilated Front Seats + Height Adjustable",
          ambientLighting: "Multi-Color Ambient Mood Lighting",
          keylessEntry: "Smart Key with Push Button Start"
        },
        infotainment: {
          screen: "10.25-inch Floating Touchscreen Infotainment by Harman",
          speakers: "8 JBL High-Performance Audio with Subwoofer",
          driverCluster: "10.25-inch Full High-Definition Digital Cockpit with Navigation Mirroring",
          connectivity: "Wireless Apple CarPlay / Android Auto + iRA Connected Car",
          wirelessCharging: true,
          hud: false
        },
        safety: {
          ncapRating: "5 Stars Bharat NCAP (Highest Adult & Child Protection)",
          airbags: 6,
          adasLevel: "Blind View Monitor & 360-degree Surround",
          camera: "360-degree HD Camera with 3D View",
          cruiseControl: "Cruise Control with Speed Limiter",
          absEbd: true,
          esp: true,
          hillHold: true
        }
      }
    ]
  },
  {
    id: "hyundai-creta",
    make: "Hyundai",
    model: "Creta",
    year: 2024,
    category: "mid-market",
    bodyType: "SUV",
    heroImage: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
    ],
    tagline: "The Benchmark of Mid-Size SUVs",
    description: "Featuring a parametric black chrome grille, seamless horizon LED positioning lamps, dual 10.25-inch panoramic curved displays, Level 2 ADAS with 19 autonomous safety features, and powerful 1.5L Turbo GDi engine.",
    brandOrigin: "South Korea",
    engineSoundType: "inline4-turbo",
    colors: [
      { name: "Robust Emerald Pearl", hex: "#064e3b" },
      { name: "Ranger Khaki", hex: "#57534e" },
      { name: "Abyss Black Pearl", hex: "#0f172a" },
      { name: "Atlas White", hex: "#f8fafc" },
      { name: "Fiery Red", hex: "#991b1b" }
    ],
    startingPriceUSD: 13300,
    startingPriceINR: 1099000,
    variants: [
      {
        id: "creta-ex",
        name: "Creta EX 1.5 Petrol MT",
        priceUSD: 14700,
        priceINR: 1218000,
        engine: "1.5L MPi 4-Cylinder Naturally Aspirated Petrol",
        displacementCc: 1497,
        powerHp: 113,
        torqueNm: 144,
        acceleration0to100: 12.0,
        topSpeedKmh: 178,
        transmission: "6-Speed Manual",
        gearboxType: "Manual",
        drivetrain: "FWD",
        fuelType: "Petrol",
        mileageKmpl: 17.4,
        rangeKm: 870,
        fuelTankLiters: 50,
        dimensions: {
          lengthMm: 4330,
          widthMm: 1790,
          heightMm: 1635,
          wheelbaseMm: 2610,
          groundClearanceMm: 190,
          bootSpaceLiters: 433,
          kerbWeightKg: 1235,
          seatingCapacity: 5
        },
        chassis: {
          frontSuspension: "MacPherson Strut with Coil Spring",
          rearSuspension: "Coupled Torsion Beam Axle",
          frontBrakes: "Disc",
          rearBrakes: "Disc",
          wheelSize: "16-inch Styled Steel Wheels"
        },
        comfort: {
          upholstery: "Dual Tone Fabric",
          climateControl: "Manual AC with Rear AC Vents",
          sunroof: "None",
          seating: "Driver Seat Height Adjustment",
          ambientLighting: "None",
          keylessEntry: "Foldable Key with Remote"
        },
        infotainment: {
          screen: "8.0-inch Touchscreen Display",
          speakers: "4 Speakers + 2 Tweeters",
          driverCluster: "Digital Instrument Cluster with 4.2-inch Color TFT",
          connectivity: "Wireless Android Auto & Apple CarPlay",
          wirelessCharging: false,
          hud: false
        },
        safety: {
          ncapRating: "4 Stars Global NCAP (Est.)",
          airbags: 6,
          adasLevel: "None",
          camera: "Rear Camera with Parking Sensors",
          cruiseControl: "None",
          absEbd: true,
          esp: true,
          hillHold: true
        }
      },
      {
        id: "creta-sx-o-turbo",
        name: "Creta SX(O) 1.5 Turbo Petrol 7-DCT (Top)",
        priceUSD: 24200,
        priceINR: 2000000,
        engine: "1.5L Turbo GDi 4-Cylinder Petrol",
        displacementCc: 1482,
        powerHp: 158,
        torqueNm: 253,
        acceleration0to100: 8.9,
        topSpeedKmh: 195,
        transmission: "7-Speed Dual Clutch Automatic (DCT) with Paddle Shifters",
        gearboxType: "DCT",
        drivetrain: "FWD",
        fuelType: "Petrol Turbo",
        mileageKmpl: 18.4,
        rangeKm: 920,
        fuelTankLiters: 50,
        dimensions: {
          lengthMm: 4330,
          widthMm: 1790,
          heightMm: 1635,
          wheelbaseMm: 2610,
          groundClearanceMm: 190,
          bootSpaceLiters: 433,
          kerbWeightKg: 1320,
          seatingCapacity: 5
        },
        chassis: {
          frontSuspension: "MacPherson Strut with Stabilizer Bar",
          rearSuspension: "Coupled Torsion Beam Axle",
          frontBrakes: "All 4 Disc Brakes",
          rearBrakes: "Disc",
          wheelSize: "17-inch Diamond Cut Alloy Wheels"
        },
        comfort: {
          upholstery: "Two-tone Premium Leatherette Seats",
          climateControl: "Dual-Zone Automatic Climate Control",
          sunroof: "Voice-Enabled Panoramic Sunroof",
          seating: "8-Way Power Driver Seat + Ventilated Front Seats",
          ambientLighting: "64-Color Ambient Mood Lighting",
          keylessEntry: "Smart Key with Push Button & Remote Start"
        },
        infotainment: {
          screen: "10.25-inch HD Touchscreen with Bluelink Connected Tech",
          speakers: "Bose Premium 8-Speaker Sound System with Subwoofer",
          driverCluster: "10.25-inch Full Digital Driver Cockpit with Multiple Themes",
          connectivity: "Wireless Apple CarPlay / Android Auto & OTA Updates",
          wirelessCharging: true,
          hud: false
        },
        safety: {
          ncapRating: "5 Stars Bharat NCAP (Expected)",
          airbags: 6,
          adasLevel: "Hyundai SmartSense Level 2 (19 Features)",
          camera: "Surround View Monitor (360 Cam) & Blind Spot Monitor",
          cruiseControl: "Smart Cruise Control with Stop & Go",
          absEbd: true,
          esp: true,
          hillHold: true
        }
      }
    ]
  },
  {
    id: "toyota-fortuner",
    make: "Toyota",
    model: "Fortuner",
    year: 2024,
    category: "premium-luxury",
    bodyType: "SUV",
    heroImage: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80"
    ],
    tagline: "The Uncontested Ruler of the Rough",
    description: "Legendary body-on-frame durability with relentless 500 Nm torque, authentic 4x4 low-range transfer case, automatic locking differential, and unmatched resale pedigree across the globe.",
    brandOrigin: "Japan",
    engineSoundType: "inline4-turbo",
    colors: [
      { name: "Attitude Black", hex: "#0a0a0a" },
      { name: "Super White", hex: "#fafafa" },
      { name: "Phantom Brown", hex: "#451a03" },
      { name: "Silver Metallic", hex: "#cbd5e1" },
      { name: "Sparkling Black Crystal", hex: "#1e1b4b" }
    ],
    startingPriceUSD: 41000,
    startingPriceINR: 3343000,
    variants: [
      {
        id: "fortuner-4x2-diesel",
        name: "Fortuner 4x2 2.8L Diesel AT",
        priceUSD: 46500,
        priceINR: 3821000,
        engine: "2.8L 4-Cylinder DOHC Turbo Diesel",
        displacementCc: 2755,
        powerHp: 201,
        torqueNm: 500,
        acceleration0to100: 10.5,
        topSpeedKmh: 190,
        transmission: "6-Speed Automatic with Sequential Shift",
        gearboxType: "Automatic",
        drivetrain: "RWD",
        fuelType: "Diesel",
        mileageKmpl: 14.4,
        rangeKm: 1152,
        fuelTankLiters: 80,
        dimensions: {
          lengthMm: 4795,
          widthMm: 1855,
          heightMm: 1835,
          wheelbaseMm: 2745,
          groundClearanceMm: 225,
          bootSpaceLiters: 296,
          kerbWeightKg: 2180,
          seatingCapacity: 7
        },
        chassis: {
          frontSuspension: "Double Wishbone with Stabilizer",
          rearSuspension: "4-Link with Coil Spring and Lateral Rod",
          frontBrakes: "Ventilated Disc",
          rearBrakes: "Ventilated Disc",
          wheelSize: "18-inch Machine Finish Alloy"
        },
        comfort: {
          upholstery: "Dark Tan Chamois Leather",
          climateControl: "Dual-Zone Automatic Front & Rear Auto AC",
          sunroof: "None",
          seating: "8-Way Power Front Seats with Ventilation",
          ambientLighting: "Subtle Door Contour Illumination",
          keylessEntry: "Smart Keyless Entry with Engine Push Button"
        },
        infotainment: {
          screen: "8.0-inch Touchscreen Audio",
          speakers: "6 High-Efficiency Speakers",
          driverCluster: "Optitron Meter with 4.2-inch Color TFT",
          connectivity: "Apple CarPlay & Android Auto",
          wirelessCharging: true,
          hud: false
        },
        safety: {
          ncapRating: "5 Stars ASEAN NCAP",
          airbags: 7,
          adasLevel: "None",
          camera: "Reverse Camera with Guidelines",
          cruiseControl: "Cruise Control",
          absEbd: true,
          esp: true,
          hillHold: true
        }
      },
      {
        id: "fortuner-gr-sport-4x4",
        name: "Fortuner GR-Sport 4x4 Diesel AT (Flagship)",
        priceUSD: 62500,
        priceINR: 5144000,
        engine: "2.8L 4-Cylinder DOHC Turbo Diesel High-Tune",
        displacementCc: 2755,
        powerHp: 201,
        torqueNm: 500,
        acceleration0to100: 9.8,
        topSpeedKmh: 195,
        transmission: "6-Speed Automatic with GR-Tuned Paddle Shifters",
        gearboxType: "Automatic",
        drivetrain: "4x4 with High/Low Range & Auto Differential Lock",
        fuelType: "Diesel",
        mileageKmpl: 13.8,
        rangeKm: 1104,
        fuelTankLiters: 80,
        dimensions: {
          lengthMm: 4795,
          widthMm: 1855,
          heightMm: 1835,
          wheelbaseMm: 2745,
          groundClearanceMm: 225,
          bootSpaceLiters: 296,
          kerbWeightKg: 2280,
          seatingCapacity: 7
        },
        chassis: {
          frontSuspension: "GR Sport Tuned Double Wishbone Monotube Shock Absorber",
          rearSuspension: "GR Tuned 4-Link Monotube Suspension",
          frontBrakes: "Ventilated Disc with Red Painted GR Calipers",
          rearBrakes: "Ventilated Disc with Red Calipers",
          wheelSize: "18-inch GR Sport Black Alloy Wheels"
        },
        comfort: {
          upholstery: "GR Perforated Black Leather with Red Stitching & GR Headrest Badging",
          climateControl: "Dual-Zone Automatic Climate Control with Nanoe-X Air Deodorizer",
          sunroof: "None",
          seating: "Ventilated 8-way Power Driver & Passenger Sport Seats",
          ambientLighting: "Illuminated Scuff Plates & Footwell Lighting",
          keylessEntry: "Smart Key with GR Emblazoned Start/Stop Button"
        },
        infotainment: {
          screen: "8.0-inch Capacitive Touchscreen with GR Theme",
          speakers: "11-Speaker JBL Concert Sound System with Subwoofer",
          driverCluster: "GR Sport Optitron Meter with Red Accents",
          connectivity: "Apple CarPlay, Android Auto, Toyota i-Connect Suite",
          wirelessCharging: true,
          hud: false
        },
        safety: {
          ncapRating: "5 Stars ASEAN NCAP",
          airbags: 7,
          adasLevel: "Toyota Safety Sense (TSS)",
          camera: "360-degree Panoramic View Monitor",
          cruiseControl: "Dynamic Radar Cruise Control",
          absEbd: true,
          esp: true,
          hillHold: true
        }
      }
    ]
  },
  {
    id: "bmw-3-series",
    make: "BMW",
    model: "3 Series / M340i",
    year: 2024,
    category: "premium-luxury",
    bodyType: "Sedan",
    heroImage: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80"
    ],
    tagline: "The Ultimate Driving Machine",
    description: "The gold standard of sports sedans. From the executive comfort of the 330Li Gran Limousine to the brutal 387 bhp 3.0L B58 inline-six in the M340i xDrive, it commands the tarmac with 50:50 weight balance.",
    brandOrigin: "Germany",
    engineSoundType: "v6-twin-turbo",
    colors: [
      { name: "Portimao Blue", hex: "#1d4ed8" },
      { name: "Tanzanite Blue II Metallic", hex: "#0f172a" },
      { name: "Dravit Grey Metallic", hex: "#334155" },
      { name: "Mineral White Metallic", hex: "#f1f5f9" },
      { name: "Black Sapphire", hex: "#09090b" }
    ],
    startingPriceUSD: 56000,
    startingPriceINR: 6060000,
    variants: [
      {
        id: "bmw-330li-m-sport",
        name: "BMW 330Li Gran Limousine M Sport",
        priceUSD: 56000,
        priceINR: 6060000,
        engine: "2.0L TwinPower Turbo 4-Cylinder Petrol",
        displacementCc: 1998,
        powerHp: 258,
        torqueNm: 400,
        acceleration0to100: 6.2,
        topSpeedKmh: 250,
        transmission: "8-Speed Steptronic Sport Automatic with Shift Paddles",
        gearboxType: "Automatic",
        drivetrain: "RWD",
        fuelType: "Petrol Turbo",
        mileageKmpl: 15.39,
        rangeKm: 908,
        fuelTankLiters: 59,
        dimensions: {
          lengthMm: 4819,
          widthMm: 1827,
          heightMm: 1441,
          wheelbaseMm: 2961,
          groundClearanceMm: 135,
          bootSpaceLiters: 480,
          kerbWeightKg: 1625,
          seatingCapacity: 5
        },
        chassis: {
          frontSuspension: "Double-joint Spring-Strut Axle with Aluminum Components",
          rearSuspension: "Five-link Axle in Lightweight Steel Construction",
          frontBrakes: "Ventilated Disc with M Sport Calipers",
          rearBrakes: "Ventilated Disc",
          wheelSize: "18-inch M Double-spoke Light Alloy Wheels"
        },
        comfort: {
          upholstery: "Vernasca Cognac Leather with Decorative Stitching",
          climateControl: "3-Zone Automatic Climate Control with Rear Controls",
          sunroof: "Panoramic Glass Sunroof",
          seating: "Comfort Seats with Electric Adjust, Memory & Luxury Headrests",
          ambientLighting: "Ambient Lighting with 6 Dimming Colors",
          keylessEntry: "BMW Comfort Access with Digital Key Plus"
        },
        infotainment: {
          screen: "14.9-inch Curved Central Touchscreen (BMW Operating System 8.5)",
          speakers: "Harman Kardon Surround Sound System (16 Speakers, 464W)",
          driverCluster: "12.3-inch Fully Configurable Digital Cockpit",
          connectivity: "Wireless Apple CarPlay, Android Auto & BMW Intelligent Assistant",
          wirelessCharging: true,
          hud: true
        },
        safety: {
          ncapRating: "5 Stars Euro NCAP",
          airbags: 8,
          adasLevel: "BMW Driving Assistant Level 2",
          camera: "Park Assistant with Reverse Assistant & 360 Surround View",
          cruiseControl: "Adaptive Cruise Control with Stop&Go",
          absEbd: true,
          esp: true,
          hillHold: true
        }
      },
      {
        id: "bmw-m340i-xdrive",
        name: "BMW M340i xDrive (M Performance)",
        priceUSD: 72000,
        priceINR: 7490000,
        engine: "3.0L BMW M TwinPower Turbo Inline-6 B58 Petrol",
        displacementCc: 2998,
        powerHp: 387,
        torqueNm: 500,
        acceleration0to100: 4.4,
        topSpeedKmh: 250,
        transmission: "8-Speed Steptronic Sport with Launch Control",
        gearboxType: "Automatic",
        drivetrain: "xDrive Intelligent All-Wheel Drive with M Sport Differential",
        fuelType: "Petrol Twin-Turbo",
        mileageKmpl: 13.02,
        rangeKm: 768,
        fuelTankLiters: 59,
        dimensions: {
          lengthMm: 4713,
          widthMm: 1827,
          heightMm: 1440,
          wheelbaseMm: 2851,
          groundClearanceMm: 130,
          bootSpaceLiters: 480,
          kerbWeightKg: 1745,
          seatingCapacity: 5
        },
        chassis: {
          frontSuspension: "Adaptive M Suspension with Electronically Controlled Dampers",
          rearSuspension: "M Tuned 5-Link Lightweight Suspension",
          frontBrakes: "M Sport Red Calipers with 4-Piston Fixed Caliper 348mm Discs",
          rearBrakes: "Single-Piston Floating Caliper 345mm Discs",
          wheelSize: "19-inch M Jet Black Bicolor Alloy Wheels with Mixed Runflat Tires"
        },
        comfort: {
          upholstery: "Alcantara / Sensatec Black with Blue Contrast Stitching",
          climateControl: "3-Zone Automatic Climate Control",
          sunroof: "Electric Glass Sunroof",
          seating: "M Sport Bucket Seats with Adjustable Side Bolsters",
          ambientLighting: "Dynamic Contour Lighting with Welcome Light Carpet",
          keylessEntry: "BMW Comfort Access with Smartphone NFC Unlock"
        },
        infotainment: {
          screen: "14.9-inch BMW Widescreen Curved Display",
          speakers: "Harman Kardon 16-Speaker Surround Sound (464 Watts)",
          driverCluster: "12.3-inch Digital Information Display with M Specific Displays",
          connectivity: "Wireless Apple CarPlay / Android Auto, 5G eSIM ConnectedDrive",
          wirelessCharging: true,
          hud: true
        },
        safety: {
          ncapRating: "5 Stars Euro NCAP",
          airbags: 8,
          adasLevel: "Driving Assistant Professional Level 2",
          camera: "Parking Assistant Plus with Surround 3D View & Drive Recorder",
          cruiseControl: "Adaptive M Cruise Control with Collision Mitigation",
          absEbd: true,
          esp: true,
          hillHold: true
        }
      }
    ]
  },
  {
    id: "mercedes-amg-g63",
    make: "Mercedes-Benz",
    model: "G-Class AMG G 63",
    year: 2024,
    category: "premium-luxury",
    bodyType: "SUV",
    heroImage: "/images/gwagon.jpg",
    gallery: [
      "/images/gwagon.jpg",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80"
    ],
    tagline: "The Indestructible Icon of Power",
    description: "Handcrafted 4.0-liter V8 biturbo pumping out 577 horsepower, side-exit dual sports exhausts with active flap acoustic drama, 3 lockable 100% mechanical differential locks, and unmistakable military silhouette.",
    brandOrigin: "Germany",
    engineSoundType: "v8-growl",
    colors: [
      { name: "Magno Night Black (Matte)", hex: "#111827" },
      { name: "Obsidian Black Metallic", hex: "#030712" },
      { name: "G Manufaktur South Sea Blue", hex: "#0369a1" },
      { name: "Emerald Green Metallic", hex: "#064e3b" },
      { name: "Opalite White Bright", hex: "#f8fafc" }
    ],
    startingPriceUSD: 183000,
    startingPriceINR: 25500000,
    variants: [
      {
        id: "g63-amg-standard",
        name: "Mercedes-AMG G 63 V8 Biturbo",
        priceUSD: 183000,
        priceINR: 25500000,
        engine: "Handcrafted 4.0L V8 Biturbo with Mild Hybrid Boost",
        displacementCc: 3982,
        powerHp: 577,
        torqueNm: 850,
        acceleration0to100: 4.5,
        topSpeedKmh: 240,
        transmission: "AMG SPEEDSHIFT TCT 9-Speed Automatic",
        gearboxType: "Automatic",
        drivetrain: "AMG Performance 4MATIC with 3 100% Locking Differentials (Center, Rear, Front)",
        fuelType: "Petrol Twin-Turbo V8",
        mileageKmpl: 6.8,
        rangeKm: 680,
        fuelTankLiters: 100,
        dimensions: {
          lengthMm: 4873,
          widthMm: 1984,
          heightMm: 1969,
          wheelbaseMm: 2890,
          groundClearanceMm: 241,
          bootSpaceLiters: 667,
          kerbWeightKg: 2560,
          seatingCapacity: 5
        },
        chassis: {
          frontSuspension: "AMG RIDE CONTROL with Adaptive Damping & Double Wishbone",
          rearSuspension: "Rigid Axle with 5 Longitudinal & Transverse Links",
          frontBrakes: "AMG High-Performance Braking System (6-Piston Fixed Calipers 400mm)",
          rearBrakes: "Single-Piston Floating Calipers (370mm Discs)",
          wheelSize: "22-inch AMG Forged Cross-Spoke Wheels in Matte Black"
        },
        comfort: {
          upholstery: "Exclusive Nappa Leather with Diamond Quilting & AMG Badging",
          climateControl: "THERMOTRONIC 3-Zone Automatic Climate Control",
          sunroof: "Electric Sliding Glass Sunroof",
          seating: "Active Multicontour Seats with Dynamic Bolsters & Hot Stone Massage",
          ambientLighting: "64-Color Ambient Lighting with Illuminated AMG Air Vents",
          keylessEntry: "KEYLESS-GO with Iconic Mechanical Door Latch Sound"
        },
        infotainment: {
          screen: "Twin 12.3-inch High-Resolution Cockpit Displays with MBUX",
          speakers: "Burmester Surround Sound System (15 High-End Speakers, 590W)",
          driverCluster: "12.3-inch Digital Instrument Cluster with AMG Super-sport Mode",
          connectivity: "Wireless Apple CarPlay, Android Auto, Mercedes me Connect",
          wirelessCharging: true,
          hud: false
        },
        safety: {
          ncapRating: "5 Stars Euro NCAP",
          airbags: 10,
          adasLevel: "Mercedes Driving Assistance Package Level 2",
          camera: "360-degree Camera with Transparent Bonnet Off-road View",
          cruiseControl: "Active Distance Assist DISTRONIC",
          absEbd: true,
          esp: true,
          hillHold: true
        }
      },
      {
        id: "g63-grand-edition",
        name: "Mercedes-AMG G 63 'Grand Edition' Bespoke",
        priceUSD: 248000,
        priceINR: 40000000,
        engine: "Handcrafted 4.0L V8 Biturbo AMG Performance High-Output",
        displacementCc: 3982,
        powerHp: 585,
        torqueNm: 850,
        acceleration0to100: 4.2,
        topSpeedKmh: 250,
        transmission: "AMG SPEEDSHIFT TCT 9G with Race Start",
        gearboxType: "Automatic",
        drivetrain: "AMG Performance 4MATIC 40:60 Torque Split with Triple Locking Diffs",
        fuelType: "Petrol Twin-Turbo V8",
        mileageKmpl: 6.5,
        rangeKm: 650,
        fuelTankLiters: 100,
        dimensions: {
          lengthMm: 4873,
          widthMm: 1984,
          heightMm: 1969,
          wheelbaseMm: 2890,
          groundClearanceMm: 241,
          bootSpaceLiters: 667,
          kerbWeightKg: 2580,
          seatingCapacity: 5
        },
        chassis: {
          frontSuspension: "AMG ACTIVE RIDE CONTROL Suspension with Active Roll Stabilization",
          rearSuspension: "Rigid Axle with Electro-Hydraulic Roll Stabilization",
          frontBrakes: "AMG Ceramic High-Performance Composite Braking System with Gold Calipers",
          rearBrakes: "Ceramic Composite Rear Discs",
          wheelSize: "22-inch Tech Gold Forged Monoblock Wheels with Center Locking Cap"
        },
        comfort: {
          upholstery: "MANUFAKTUR G Black Nappa Leather with Gold Stitching & Kalahari Gold Carbon Trim",
          climateControl: "THERMOTRONIC 3-Zone with Air-Balance Fragrance Package",
          sunroof: "Electric Sunroof with Alcantara Dinamica Roof Liner",
          seating: "ENERGIZING Comfort Package with Seat Heating Plus & Cooling Massage",
          ambientLighting: "64-Color AMG Lighting with Gold Accent Highlights",
          keylessEntry: "KEYLESS-GO Handsfree Access"
        },
        infotainment: {
          screen: "Twin 12.3-inch Displays with AMG Track Pace Telemetry & Augmented Reality Nav",
          speakers: "Burmester High-End 3D Surround Sound System (16 Speakers, 640W)",
          driverCluster: "Digital Instrument Cluster with Exclusive Grand Edition Start-up Animation",
          connectivity: "Full Wireless Smartphone Integration & In-Car Wi-Fi Hotspot",
          wirelessCharging: true,
          hud: true
        },
        safety: {
          ncapRating: "5 Stars Euro NCAP",
          airbags: 10,
          adasLevel: "Driving Assistance Package Plus Level 2+",
          camera: "360-degree Surround View with Off-road Trail Positioner",
          cruiseControl: "Active DISTRONIC with Steering Assist & Route-based Speed Adaptation",
          absEbd: true,
          esp: true,
          hillHold: true
        }
      }
    ]
  },
  {
    id: "porsche-911",
    make: "Porsche",
    model: "911 (992.2)",
    year: 2024,
    category: "supercar",
    bodyType: "Coupe",
    heroImage: "/images/porsche_911.jpg",
    gallery: [
      "/images/porsche_911.jpg",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
    ],
    tagline: "The Timeless Benchmark of Sports Car Engineering",
    description: "Rear-engine precision perfected over six decades. From the daily drivable Carrera to the track-destroying aerodynamic marvel of the GT3 RS with swan-neck active DRS wing and screaming 9,000 RPM naturally aspirated flat-six.",
    brandOrigin: "Germany",
    engineSoundType: "v6-twin-turbo",
    colors: [
      { name: "Shark Blue", hex: "#0284c7" },
      { name: "Guards Red", hex: "#dc2626" },
      { name: "Racing Yellow", hex: "#eab308" },
      { name: "Gentian Blue Metallic", hex: "#1e3a8a" },
      { name: "GT Silver Metallic", hex: "#94a3b8" }
    ],
    startingPriceUSD: 120100,
    startingPriceINR: 19900000,
    variants: [
      {
        id: "porsche-911-carrera-s",
        name: "Porsche 911 Carrera S (992)",
        priceUSD: 131300,
        priceINR: 21500000,
        engine: "3.0L Twin-Turbocharged Boxer 6-Cylinder",
        displacementCc: 2981,
        powerHp: 443,
        torqueNm: 530,
        acceleration0to100: 3.5,
        topSpeedKmh: 308,
        transmission: "8-Speed Porsche Doppelkupplung (PDK)",
        gearboxType: "DCT",
        drivetrain: "RWD with Porsche Torque Vectoring Plus (PTV+)",
        fuelType: "Petrol Twin-Turbo",
        mileageKmpl: 9.8,
        rangeKm: 627,
        fuelTankLiters: 64,
        dimensions: {
          lengthMm: 4519,
          widthMm: 1852,
          heightMm: 1300,
          wheelbaseMm: 2450,
          groundClearanceMm: 105,
          bootSpaceLiters: 132,
          kerbWeightKg: 1515,
          seatingCapacity: 4
        },
        chassis: {
          frontSuspension: "MacPherson Strut with Anti-roll Bar & PASM",
          rearSuspension: "Multi-link Suspension with PASM Electronic Damping",
          frontBrakes: "6-Piston Monobloc Calipers with 408mm Cast Iron Discs",
          rearBrakes: "4-Piston Monobloc Calipers with 380mm Discs",
          wheelSize: "Front 20-inch / Rear 21-inch Carrera S Wheels"
        },
        comfort: {
          upholstery: "Full Leather Interior in Black/Bordeaux Red",
          climateControl: "2-Zone Automatic Climate Control",
          sunroof: "Electric Slide/Tilt Sunroof in Glass",
          seating: "Sports Seats Plus (14-Way, Electric) with Memory Package",
          ambientLighting: "Ambient Interior Lighting with Door Panel Accents",
          keylessEntry: "Porsche Entry & Drive"
        },
        infotainment: {
          screen: "10.9-inch Porsche Communication Management (PCM) Full HD",
          speakers: "BOSE Surround Sound System (12 Speakers, 570W)",
          driverCluster: "Curved 12.6-inch Fully Digital Instrument Display",
          connectivity: "Wireless Apple CarPlay, Android Auto, Porsche Connect",
          wirelessCharging: true,
          hud: false
        },
        safety: {
          ncapRating: "5 Stars Euro NCAP equivalent standard",
          airbags: 6,
          adasLevel: "Porsche InnoDrive Level 2",
          camera: "ParkAssist Front & Rear including Reversing Camera",
          cruiseControl: "Adaptive Cruise Control",
          absEbd: true,
          esp: true,
          hillHold: true
        }
      },
      {
        id: "porsche-911-gt3-rs",
        name: "Porsche 911 GT3 RS (Track Pinnacle)",
        priceUSD: 241300,
        priceINR: 35000000,
        engine: "4.0L Naturally Aspirated High-Revving Boxer-6 (9,000 RPM Redline)",
        displacementCc: 3996,
        powerHp: 518,
        torqueNm: 465,
        acceleration0to100: 3.2,
        topSpeedKmh: 296,
        transmission: "7-Speed Short-Ratio Porsche Doppelkupplung (PDK)",
        gearboxType: "DCT",
        drivetrain: "RWD with Rear-Axle Steering & Active Aerodynamics (DRS)",
        fuelType: "Petrol NA Racing Fuel Ready",
        mileageKmpl: 7.5,
        rangeKm: 480,
        fuelTankLiters: 64,
        dimensions: {
          lengthMm: 4572,
          widthMm: 1900,
          heightMm: 1322,
          wheelbaseMm: 2457,
          groundClearanceMm: 100,
          bootSpaceLiters: 0,
          kerbWeightKg: 1450,
          seatingCapacity: 2
        },
        chassis: {
          frontSuspension: "Double-Wishbone Front Axle with Aero Teardrop Profiles & Ball Joints",
          rearSuspension: "Multi-link Rear Suspension with Integrated Rear-Axle Steering",
          frontBrakes: "Porsche Ceramic Composite Brake (PCCB) 410mm Discs with Yellow Calipers",
          rearBrakes: "PCCB 390mm Discs",
          wheelSize: "Forged Lightweight Magnesium Wheels (20-inch front, 21-inch rear) Center Lock"
        },
        comfort: {
          upholstery: "Lightweight Black Race-Tex with Guards Red Stitching & Carbon Fiber Weave",
          climateControl: "2-Zone Automatic Climate Control (Lightweight Delete Available)",
          sunroof: "None (Double-Bubble Lightweight Carbon Fiber Reinforced Plastic CFRP Roof)",
          seating: "Full Carbon Fiber Reinforced Plastic (CFRP) Bucket Seats",
          ambientLighting: "Lightweight Minimalist LEDs",
          keylessEntry: "Standard Porsche Key"
        },
        infotainment: {
          screen: "10.9-inch PCM with Track Screen Mode & Porsche Track Precision App",
          speakers: "Sound Package Plus (8 Speakers, 150W)",
          driverCluster: "Digital Cockpit with 4 Rotary Knobs on Steering Wheel for Rebound/Compression/Diff/DRS",
          connectivity: "Apple CarPlay & Porsche Telemetry Data Logging",
          wirelessCharging: false,
          hud: false
        },
        safety: {
          ncapRating: "Motorsport Certified Roll Cage & FIA 6-Point Harness Ready",
          airbags: 6,
          adasLevel: "Active Aero DRS (Drag Reduction System) + Launch Control",
          camera: "Rear Reversing Camera",
          cruiseControl: "None (Pure Track Weapon)",
          absEbd: true,
          esp: true,
          hillHold: true
        }
      }
    ]
  },
  {
    id: "tesla-model-s",
    make: "Tesla",
    model: "Model S Plaid",
    year: 2024,
    category: "electric",
    bodyType: "Sedan",
    heroImage: "/images/tesla_plaid.jpg",
    gallery: [
      "/images/tesla_plaid.jpg",
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80"
    ],
    tagline: "Beyond Ludicrous: Tri-Motor 1,020 HP Hyper-Electric",
    description: "The quickest accelerating production sedan on earth. 0-100 km/h in an unbelievable 1.99 seconds, carbon-sleeved rotors, 17-inch cinematic gaming display with 10 teraflops of power, and Autopilot Full Self-Driving capability.",
    brandOrigin: "USA",
    engineSoundType: "ev-hyper",
    colors: [
      { name: "Stealth Grey", hex: "#374151" },
      { name: "Pearl White Multi-Coat", hex: "#f8fafc" },
      { name: "Deep Blue Metallic", hex: "#1e3a8a" },
      { name: "Solid Black", hex: "#09090b" },
      { name: "Ultra Red", hex: "#991b1b" }
    ],
    startingPriceUSD: 74990,
    startingPriceINR: 12000000,
    variants: [
      {
        id: "model-s-long-range",
        name: "Model S Dual Motor All-Wheel Drive",
        priceUSD: 74990,
        priceINR: 12000000,
        engine: "Dual Permanent Magnet Electric Motors (Front & Rear)",
        displacementCc: 0,
        powerHp: 670,
        torqueNm: 755,
        acceleration0to100: 3.1,
        topSpeedKmh: 250,
        transmission: "Single-Speed Fixed Gear",
        gearboxType: "Direct Drive",
        drivetrain: "Dual-Motor All-Wheel Drive",
        fuelType: "100% Electric (100 kWh Lithium-Ion Battery)",
        mileageKmpl: 5.5,
        rangeKm: 652,
        fuelTankLiters: 100,
        dimensions: {
          lengthMm: 4970,
          widthMm: 1964,
          heightMm: 1445,
          wheelbaseMm: 2960,
          groundClearanceMm: 144,
          bootSpaceLiters: 709,
          kerbWeightKg: 2069,
          seatingCapacity: 5
        },
        chassis: {
          frontSuspension: "Adaptive Air Suspension with Automatic Leveling & Geo-tag Memory",
          rearSuspension: "Multi-link Adaptive Air Suspension",
          frontBrakes: "Ventilated High-Performance Disc Brakes with Regenerative Braking",
          rearBrakes: "Ventilated Disc Brakes",
          wheelSize: "19-inch Tempest Aero Wheels"
        },
        comfort: {
          upholstery: "All Black Vegan Leather Interior with Ebony Wood Decor",
          climateControl: "Tri-Zone Hidden Air Vents with HEPA Filtration & Bioweapon Defense Mode",
          sunroof: "Tinted All-Glass Panoramic Roof with Infrared & UV Protection",
          seating: "Heated & Ventilated Front Seats + Heated Rear Seats & Steering Wheel",
          ambientLighting: "Subtle Ambient Interior Glow",
          keylessEntry: "Phone-As-Key Walk-Up Unlock"
        },
        infotainment: {
          screen: "17-inch Tiltable Cinematic Touchscreen (2200x1300 Res) + 8-inch Rear Display",
          speakers: "22-Speaker 960W Audio System with Active Road Noise Reduction",
          driverCluster: "12.3-inch Driver Instrument Screen",
          connectivity: "Tesla Arcade, Netflix, Spotify, Steam Gaming Support with Wireless Controller Pairing",
          wirelessCharging: true,
          hud: false
        },
        safety: {
          ncapRating: "5 Stars Euro NCAP (98% Safety Assist Score)",
          airbags: 8,
          adasLevel: "Tesla Full Self-Driving (Supervised) / Autopilot Level 2+",
          camera: "8 Exterior Cameras with 360-degree Vision & Sentry Mode Recording",
          cruiseControl: "Traffic-Aware Adaptive Cruise Control with Autosteer",
          absEbd: true,
          esp: true,
          hillHold: true
        }
      },
      {
        id: "model-s-plaid",
        name: "Model S Plaid Tri-Motor (1,020 HP)",
        priceUSD: 89990,
        priceINR: 15000000,
        engine: "Tri-Motor All-Wheel Drive with Carbon-Sleeved Rotors",
        displacementCc: 0,
        powerHp: 1020,
        torqueNm: 1420,
        acceleration0to100: 1.99,
        topSpeedKmh: 322,
        transmission: "Single-Speed Fixed Ratio (1-Speed)",
        gearboxType: "Direct Drive",
        drivetrain: "Tri-Motor AWD with Torque Vectoring Across Rear Wheels",
        fuelType: "100% Electric (100 kWh High-C-Rate Battery)",
        mileageKmpl: 5.2,
        rangeKm: 578,
        fuelTankLiters: 100,
        dimensions: {
          lengthMm: 4970,
          widthMm: 1964,
          heightMm: 1445,
          wheelbaseMm: 2960,
          groundClearanceMm: 144,
          bootSpaceLiters: 709,
          kerbWeightKg: 2162,
          seatingCapacity: 5
        },
        chassis: {
          frontSuspension: "Track-Tuned Adaptive Air Suspension with Variable Damping",
          rearSuspension: "Multi-link Active Air Suspension with Track Mode Stiffening",
          frontBrakes: "Optional Carbon Ceramic Brake Kit with 410mm Carbon Rotors & 6-Piston Calipers",
          rearBrakes: "Carbon Ceramic 410mm Rear Rotors",
          wheelSize: "21-inch Arachnid Forged Wheels with Michelin Pilot Sport 4S"
        },
        comfort: {
          upholstery: "Black & White Vegan Leather with Carbon Fiber Decor Trim",
          climateControl: "Tri-Zone Climate Control with HEPA Bioweapon Defense Mode",
          sunroof: "Full UV-Reflective Glass Roof",
          seating: "Plaid Sport Bucket Seats with Lateral Support & Microfiber Trim",
          ambientLighting: "Multi-Zone Dynamic Ambient LEDs",
          keylessEntry: "Phone Key with Auto-Presenting Flush Door Handles"
        },
        infotainment: {
          screen: "17-inch 120Hz Touchscreen with 10 Teraflops Gaming Computer",
          speakers: "22-Speaker Premium Sound with Dual Subwoofers & Road Noise Cancellation",
          driverCluster: "Digital Driver Gauge Cluster + 8-inch Second Row Rear Screen",
          connectivity: "5G LTE, Steam Gaming, Apple Music, Tidal, Multi-device Bluetooth",
          wirelessCharging: true,
          hud: false
        },
        safety: {
          ncapRating: "5 Stars Euro NCAP (Safest Car in its Class)",
          airbags: 8,
          adasLevel: "Tesla Full Self-Driving (FSD) Hardware 4 (HW4)",
          camera: "8 HD Cameras with 360-degree Bird's Eye View & Dashcam Recording",
          cruiseControl: "Full Self-Driving Autosteer on City Streets & Smart Summon",
          absEbd: true,
          esp: true,
          hillHold: true
        }
      }
    ]
  },
  {
    id: "rolls-royce-phantom",
    make: "Rolls-Royce",
    model: "Phantom VIII Series II",
    year: 2024,
    category: "ultra-luxury",
    bodyType: "Limousine",
    heroImage: "/images/rolls_royce_phantom.jpg",
    gallery: [
      "/images/rolls_royce_phantom.jpg",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80"
    ],
    tagline: "The Pinnacle of Human Luxury and Bespoke Motoring",
    description: "The undeniable sovereign of automobiles. Whispering 6.75-liter Twin-Turbo V12 engine, Planar suspension system with satellite-aided gearbox that predicts the road ahead, hand-stitched Starlight Headliner with shooting star animations, and gallery glass dashboard.",
    brandOrigin: "United Kingdom",
    engineSoundType: "v12-symphony",
    colors: [
      { name: "Obsidian Black & Silver Two-Tone", hex: "#09090b" },
      { name: "Belladonna Purple", hex: "#3b0764" },
      { name: "Salamanca Blue", hex: "#1e3a8a" },
      { name: "English White", hex: "#f8fafc" },
      { name: "Bohemian Red", hex: "#881337" }
    ],
    startingPriceUSD: 495000,
    startingPriceINR: 95000000,
    variants: [
      {
        id: "phantom-swb",
        name: "Phantom Standard Wheelbase (SWB)",
        priceUSD: 495000,
        priceINR: 95000000,
        engine: "6.75L Twin-Turbocharged V12 48-Valve",
        displacementCc: 6749,
        powerHp: 563,
        torqueNm: 900,
        acceleration0to100: 5.3,
        topSpeedKmh: 250,
        transmission: "ZF 8-Speed Satellite-Aided Transmission (SAT)",
        gearboxType: "Automatic",
        drivetrain: "RWD with 4-Wheel Steering",
        fuelType: "Petrol Twin-Turbo V12",
        mileageKmpl: 6.7,
        rangeKm: 670,
        fuelTankLiters: 100,
        dimensions: {
          lengthMm: 5762,
          widthMm: 2018,
          heightMm: 1646,
          wheelbaseMm: 3552,
          groundClearanceMm: 150,
          bootSpaceLiters: 548,
          kerbWeightKg: 2560,
          seatingCapacity: 5
        },
        chassis: {
          frontSuspension: "Double-Wishbone Air Suspension with Magic Carpet Ride Flagbearer Stereo Camera",
          rearSuspension: "5-link Air Suspension with Active Roll Stabilization",
          frontBrakes: "Ventilated Disc with Electronic Park Brake & Brake Energy Regeneration",
          rearBrakes: "Ventilated Disc",
          wheelSize: "22-inch Forged Aluminum Part-Polished Wheels with Self-Righting RR Center Caps"
        },
        comfort: {
          upholstery: "Hand-selected Grade-A Phantom Bovine Leather with Lambswool Floor Mats",
          climateControl: "Quad-Zone Micro-Particle Filtered Automatic Climate Control",
          sunroof: "Starlight Headliner with 1,344 Fiber-Optic Lights & Shooting Star Functions",
          seating: "Lounge Seat Configuration with Heated, Ventilated & Shiatsu Massage",
          ambientLighting: "Soft Bespoke Illumination with Theatre Lighting & Illuminated Grille",
          keylessEntry: "Power-Closing Coach Doors (Suicide Doors) with Soft-Close & Keyless Go"
        },
        infotainment: {
          screen: "Bespoke Central Display with The Gallery Hermetically Sealed Artwork Fascia",
          speakers: "Rolls-Royce Bespoke Audio System (18 Speakers, 1300W with Cavity Resonance Subs)",
          driverCluster: "Virtual Dials in Chrome Jewels with Power Reserve Indicator (No Tachometer)",
          connectivity: "Rolls-Royce Whispers Connected App, Wireless CarPlay, In-Car Television",
          wirelessCharging: true,
          hud: true
        },
        safety: {
          ncapRating: "Exceeds Highest Global Standards (Rolls-Royce Bespoke Spaceframe)",
          airbags: 10,
          adasLevel: "Night Vision with Pedestrian Recognition & Driver Assist Level 2+",
          camera: "Panoramic 360-degree Vision with Helicopter Top View",
          cruiseControl: "Active Cruise Control with Radar Guidance",
          absEbd: true,
          esp: true,
          hillHold: true
        }
      },
      {
        id: "phantom-ewb",
        name: "Phantom Extended Wheelbase (EWB) Private Suite",
        priceUSD: 590000,
        priceINR: 115000000,
        engine: "6.75L Twin-Turbocharged V12 48-Valve High-Torque",
        displacementCc: 6749,
        powerHp: 563,
        torqueNm: 900,
        acceleration0to100: 5.4,
        topSpeedKmh: 250,
        transmission: "ZF 8-Speed Satellite-Aided Automatic",
        gearboxType: "Automatic",
        drivetrain: "RWD with 4-Wheel Steering & Planar Active Suspension",
        fuelType: "Petrol Twin-Turbo V12",
        mileageKmpl: 6.4,
        rangeKm: 640,
        fuelTankLiters: 100,
        dimensions: {
          lengthMm: 5982,
          widthMm: 2018,
          heightMm: 1656,
          wheelbaseMm: 3772,
          groundClearanceMm: 150,
          bootSpaceLiters: 548,
          kerbWeightKg: 2610,
          seatingCapacity: 4
        },
        chassis: {
          frontSuspension: "Planar Suspension with Upper Wishbone Damper & Predictive Proactive Road Scanning",
          rearSuspension: "Active Self-Leveling 5-Link Air Suspension with Active Anti-Roll Bars",
          frontBrakes: "Ventilated 410mm High-Thermal Composite Discs",
          rearBrakes: "Ventilated 398mm Composite Discs",
          wheelSize: "22-inch Polished Disc Wheels Inspired by 1920s Rolls-Royce Classics"
        },
        comfort: {
          upholstery: "Semi-Aniline Bespoke Leather with Electrochromic Privacy Suite Partition",
          climateControl: "Rear Passenger Individual Climate Zone with Fragrance Atomizer & Humidor",
          sunroof: "Extended Bespoke Starlight Headliner with Custom Constellation Alignment",
          seating: "Individual Rear Sleeping Seats with Calf Rest, Champagne Cooler & Crystal Flutes",
          ambientLighting: "Bespoke Illuminated Treadplates & Rear Theatre Mood Illumination",
          keylessEntry: "Whisper-Quiet Power Closing Rear Coach Doors via C-Pillar Buttons"
        },
        infotainment: {
          screen: "Twin 12.0-inch Rear Theatre High-Definition Entertainment Screens with HDMI/USB",
          speakers: "Rolls-Royce Studio Bespoke 18-Speaker Audio (1400 Watts Studio Acoustic Tuning)",
          driverCluster: "Jewel-Encrusted Digital Driver Glass Instruments with Power Reserve",
          connectivity: "Private Intercom to Chauffeur, Satellite TV & In-Car High-Speed Wi-Fi",
          wirelessCharging: true,
          hud: true
        },
        safety: {
          ncapRating: "Exceeds Global Ultra-Luxury Safety Mandates with Armored Glass Option",
          airbags: 10,
          adasLevel: "Night Vision Thermal Camera with Wildlife Detection & Level 2+ Cruise",
          camera: "Surround 3D Bird-Eye View & Chauffeur Blind Spot Monitoring",
          cruiseControl: "Active Cruise Control with Smooth Deceleration Tuning",
          absEbd: true,
          esp: true,
          hillHold: true
        }
      }
    ]
  },
  {
    id: "ferrari-296-gtb",
    make: "Ferrari",
    model: "296 GTB",
    year: 2024,
    category: "supercar",
    bodyType: "Supercar",
    heroImage: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1200&q=80"
    ],
    tagline: "Defining Fun to Drive: 830 HP V6 Hybrid Masterpiece",
    description: "The 'Piccolo V12'. A 120-degree wide-angle twin-turbo V6 paired with an MGU-K electric motor churning out 830 horsepower, spinning to 8,500 RPM with spine-tingling acoustic resonance and active LaFerrari-derived rear wing.",
    brandOrigin: "Italy",
    engineSoundType: "v12-symphony",
    colors: [
      { name: "Rosso Corsa", hex: "#dc2626" },
      { name: "Giallo Modena (Yellow)", hex: "#facc15" },
      { name: "Blu Corsa", hex: "#2563eb" },
      { name: "Nero Daytona", hex: "#0f172a" },
      { name: "Grigio Silverstone", hex: "#475569" }
    ],
    startingPriceUSD: 342200,
    startingPriceINR: 54000000,
    variants: [
      {
        id: "ferrari-296-gtb-standard",
        name: "Ferrari 296 GTB Berlinetta",
        priceUSD: 342200,
        priceINR: 54000000,
        engine: "3.0L 120° Twin-Turbo V6 + Rear MGU-K Electric Motor (830 cv)",
        displacementCc: 2992,
        powerHp: 819,
        torqueNm: 740,
        acceleration0to100: 2.9,
        topSpeedKmh: 330,
        transmission: "8-Speed F1 Dual-Clutch Transmission (DCT)",
        gearboxType: "DCT",
        drivetrain: "RWD with Electronic Differential (E-Diff) & ABS Evo",
        fuelType: "Plug-in Hybrid Petrol V6 (7.45 kWh Battery)",
        mileageKmpl: 13.5,
        rangeKm: 520,
        fuelTankLiters: 65,
        dimensions: {
          lengthMm: 4565,
          widthMm: 1958,
          heightMm: 1187,
          wheelbaseMm: 2600,
          groundClearanceMm: 100,
          bootSpaceLiters: 112,
          kerbWeightKg: 1470,
          seatingCapacity: 2
        },
        chassis: {
          frontSuspension: "Double Wishbone with Magnetorheological SCM-Frs Dampers",
          rearSuspension: "Multi-link with Active Electronic Damping",
          frontBrakes: "Brembo Carbon Ceramic Material (CCM) Discs (398mm x 38mm)",
          rearBrakes: "CCM Discs (360mm x 32mm)",
          wheelSize: "20-inch Forged Diamond Polished Wheels"
        },
        comfort: {
          upholstery: "Italian Poltrona Frau Leather with Alcantara Inserts",
          climateControl: "Dual-Zone Automatic Climate Control",
          sunroof: "None (Aerodynamic Aero Bridge Roof)",
          seating: "Carbon-Framed Racing Seats with Manual Adjust",
          ambientLighting: "Minimalist Red Ambient Lighting",
          keylessEntry: "Ferrari Keyless Start with Carbon Emblazoned Fob"
        },
        infotainment: {
          screen: "Full Digital Passenger Display Screen & Main Cockpit PCM",
          speakers: "JBL Premium Sound System (6 Speakers)",
          driverCluster: "16-inch Curved HD Digital Driver Instrument Display",
          connectivity: "Apple CarPlay, Bluetooth, Ferrari Telemetry System",
          wirelessCharging: true,
          hud: true
        },
        safety: {
          ncapRating: "High-Strength Carbon Composite Passenger Cell",
          airbags: 4,
          adasLevel: "Side Slip Control (eSSC 7.0) + Ferrari Dynamic Enhancer 2.0",
          camera: "Front & Rear Parking Cameras with Cross-Traffic Alert",
          cruiseControl: "Standard Cruise Control",
          absEbd: true,
          esp: true,
          hillHold: true
        }
      },
      {
        id: "ferrari-296-assetto-fiorano",
        name: "Ferrari 296 GTB 'Assetto Fiorano' Track Pack",
        priceUSD: 395000,
        priceINR: 62000000,
        engine: "3.0L Twin-Turbo V6 Hybrid with Lightweight Carbon Tuning",
        displacementCc: 2992,
        powerHp: 819,
        torqueNm: 740,
        acceleration0to100: 2.8,
        topSpeedKmh: 330,
        transmission: "8-Speed F1 Dual-Clutch with Quick Shift Logic",
        gearboxType: "DCT",
        drivetrain: "RWD with Track-Tuned e-Differential & Brembo Brake-by-Wire",
        fuelType: "Plug-in Hybrid (Electric-Only Range 25 km)",
        mileageKmpl: 13.5,
        rangeKm: 520,
        fuelTankLiters: 65,
        dimensions: {
          lengthMm: 4565,
          widthMm: 1958,
          heightMm: 1187,
          wheelbaseMm: 2600,
          groundClearanceMm: 95,
          bootSpaceLiters: 112,
          kerbWeightKg: 1455,
          seatingCapacity: 2
        },
        chassis: {
          frontSuspension: "Multimatic GT Racing Derived Fixed-Rate Shock Absorbers",
          rearSuspension: "Multimatic Race-Spec Multi-link Suspension",
          frontBrakes: "Brembo CCM-R Carbon Ceramic Racing Discs",
          rearBrakes: "CCM-R Racing Discs",
          wheelSize: "Full Carbon Fiber Wheels (11 kg weight saving) with Michelin Cup 2R Tires"
        },
        comfort: {
          upholstery: "Full Black Alcantara Racing Interior with Carbon Fiber Monocoque Panels",
          climateControl: "Automatic Climate Control",
          sunroof: "None (Lexan Lightweight Rear Screen)",
          seating: "Carbon-Fiber Monocoque Racing Daytona Seats with 4-Point Racing Harness",
          ambientLighting: "Minimalist Cockpit Illumination",
          keylessEntry: "Ferrari Keyless Start"
        },
        infotainment: {
          screen: "Integrated Driver Cockpit + Passenger High-Performance Display",
          speakers: "Weight Reduced Audio System",
          driverCluster: "Digital Cockpit with F1 Manettino Telemetry Screen & Lap Timer",
          connectivity: "Ferrari Integrated Track Precision Telemetry",
          wirelessCharging: false,
          hud: true
        },
        safety: {
          ncapRating: "FIA GT Motorsport Safety Architecture",
          airbags: 4,
          adasLevel: "eSSC 7.0 with Grip Estimation Algorithms & ABS Evo",
          camera: "Rear Parking Camera",
          cruiseControl: "None",
          absEbd: true,
          esp: true,
          hillHold: true
        }
      }
    ]
  },
  {
    id: "bentley-continental-gt",
    make: "Bentley",
    model: "Continental GT Speed",
    year: 2024,
    category: "ultra-luxury",
    bodyType: "Coupe",
    heroImage: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
    ],
    tagline: "The World's Preeminent Grand Tourer: 771 HP Ultra Performance Hybrid",
    description: "Handcrafted in Crewe, England. Featuring the groundbreaking 4.0L Ultra Performance V8 Hybrid delivering 771 horsepower, the iconic 3-way Bentley Rotating Display, diamond-in-diamond quilted leather, and all-wheel steering.",
    brandOrigin: "United Kingdom",
    engineSoundType: "v8-growl",
    colors: [
      { name: "Verdant Green", hex: "#14532d" },
      { name: "Sequin Blue", hex: "#1e40af" },
      { name: "Onyx Black", hex: "#0a0a0a" },
      { name: "Glacier White", hex: "#f1f5f9" },
      { name: "Dragon Red II", hex: "#991b1b" }
    ],
    startingPriceUSD: 295000,
    startingPriceINR: 52000000,
    variants: [
      {
        id: "continental-gt-azure",
        name: "Bentley Continental GT Azure (Wellbeing)",
        priceUSD: 295000,
        priceINR: 52000000,
        engine: "4.0L Twin-Turbocharged V8 + Electric Motor (Hybrid)",
        displacementCc: 3996,
        powerHp: 671,
        torqueNm: 900,
        acceleration0to100: 3.6,
        topSpeedKmh: 318,
        transmission: "8-Speed Dual Clutch Automatic Transmission",
        gearboxType: "DCT",
        drivetrain: "Active All-Wheel Drive with Electronic Limited Slip Diff (eLSD)",
        fuelType: "Plug-in Hybrid Petrol V8 (25.9 kWh Battery)",
        mileageKmpl: 11.2,
        rangeKm: 850,
        fuelTankLiters: 85,
        dimensions: {
          lengthMm: 4895,
          widthMm: 1966,
          heightMm: 1405,
          wheelbaseMm: 2851,
          groundClearanceMm: 130,
          bootSpaceLiters: 358,
          kerbWeightKg: 2360,
          seatingCapacity: 4
        },
        chassis: {
          frontSuspension: "Three-Chamber Air Suspension with Continuous Damping Control (CDC)",
          rearSuspension: "Multi-link Active Air Suspension with 48V Active Anti-Roll Bars",
          frontBrakes: "Iron Discs with 10-Piston Calipers (420mm)",
          rearBrakes: "Ventilated Discs with 4-Piston Calipers (380mm)",
          wheelSize: "22-inch Ten-Spoke Painted and Bright Machined Wheels"
        },
        comfort: {
          upholstery: "Diamond Quilted Grade-A Hide with Contrast Piping & Open Pore Wood Veneers",
          climateControl: "Multi-Zone Automatic Climate Control with Ionizer",
          sunroof: "Fixed Glass Panoramic Sunroof with Alcantara Blind",
          seating: "Wellness Seats with Postural Adjustment, Micro-adjusting Air Cushions & Seat Heating/Cooling",
          ambientLighting: "Mood Lighting Specification with 14 Color Combinations",
          keylessEntry: "Keyless Entry with Soft-Close Doors & Hands-Free Boot Opening"
        },
        infotainment: {
          screen: "12.3-inch Bentley Rotating Display (Three-sided: Touchscreen, 3 Analogue Dials, Clean Veneer)",
          speakers: "Bang & Olufsen for Bentley (16 Speakers, 1500W with BeoSonic Interface)",
          driverCluster: "Digital Instrument Cluster with Classic Bentley Dial Graphics",
          connectivity: "Apple CarPlay, Android Auto, Wi-Fi hotspot & My Bentley Connected Car",
          wirelessCharging: true,
          hud: true
        },
        safety: {
          ncapRating: "5 Stars Euro NCAP equivalent luxury benchmark",
          airbags: 8,
          adasLevel: "Bentley Touring Specification Level 2",
          camera: "Top View Camera (360) with Night Vision Infrared Thermal Camera",
          cruiseControl: "Adaptive Cruise Control with Traffic Jam Assist",
          absEbd: true,
          esp: true,
          hillHold: true
        }
      },
      {
        id: "continental-gt-speed",
        name: "Bentley Continental GT Speed (771 HP Ultra Hybrid)",
        priceUSD: 360000,
        priceINR: 65000000,
        engine: "4.0L High-Output Twin-Turbo V8 + Electric Motor (782 PS / 771 HP)",
        displacementCc: 3996,
        powerHp: 771,
        torqueNm: 1000,
        acceleration0to100: 3.2,
        topSpeedKmh: 335,
        transmission: "8-Speed Dual Clutch with Sport Mode Calibration",
        gearboxType: "DCT",
        drivetrain: "Bentley Performance Active Chassis: AWD with Torque Vectoring by eLSD & All-Wheel Steer",
        fuelType: "Plug-in Hybrid (81 km Electric Only Range WLTP)",
        mileageKmpl: 11.5,
        rangeKm: 859,
        fuelTankLiters: 85,
        dimensions: {
          lengthMm: 4895,
          widthMm: 1966,
          heightMm: 1405,
          wheelbaseMm: 2851,
          groundClearanceMm: 125,
          bootSpaceLiters: 358,
          kerbWeightKg: 2459,
          seatingCapacity: 4
        },
        chassis: {
          frontSuspension: "Dual-Valve Continuous Damping Control Air Suspension with Dynamic Ride 48V",
          rearSuspension: "Electronic All-Wheel Steering with Variable Steering Ratio",
          frontBrakes: "Carbon Silicon Carbide (CSiC) 440mm Discs (Largest in the world on a car!)",
          rearBrakes: "CSiC 410mm Discs with Black or Red Brake Calipers",
          wheelSize: "22-inch Speed Wheels in Dark Tint with Silver Accents"
        },
        comfort: {
          upholstery: "Precision 3D Diamond Leather with Speed Embroidered Headrests & Engine-Turned Aluminum",
          climateControl: "Quad-Zone Intelligent Climate Control",
          sunroof: "Fixed Panoramic Glass Sunroof",
          seating: "Sports Seats with 20-way Power Adjust, Massage, Seat Belts in Speed Theme",
          ambientLighting: "Bespoke Illuminated Treadplates & Ambient Light Spectrum",
          keylessEntry: "Full Smart Access with Jewel Fuel and Oil Filler Caps"
        },
        infotainment: {
          screen: "Bentley Rotating Display (Touchscreen, 3 Analogue Jewel Dials, Plain Wood Veneer)",
          speakers: "Naim for Bentley (20 Speakers, 2200W with 32-bit DSP & Active Bass Transducers)",
          driverCluster: "Digital Cockpit with Speed Specific Dark Tint Graphics",
          connectivity: "Wireless Apple CarPlay, Android Auto, In-Car Streaming & Remote Climate Pre-heat",
          wirelessCharging: true,
          hud: true
        },
        safety: {
          ncapRating: "Bentley High-Integrity Steel & Superformed Aluminum Structure",
          airbags: 8,
          adasLevel: "Bentley Touring & City Specification Level 2+",
          camera: "360-degree Top View Camera & Maneuvering Assistant",
          cruiseControl: "Adaptive Cruise Control with Lane Guidance",
          absEbd: true,
          esp: true,
          hillHold: true
        }
      }
    ]
  }
];

export const CATEGORIES = [
  { id: "all", label: "All Vehicles", icon: "Car" },
  { id: "budget", label: "Budget & City", subtext: "Maruti, Tata & Daily Drivers", icon: "Wallet" },
  { id: "mid-market", label: "Mid-Market SUVs", subtext: "Hyundai, Mahindra & Family Haulers", icon: "Shield" },
  { id: "premium-luxury", label: "Executive & German", subtext: "BMW, Mercedes-AMG, Toyota", icon: "Crown" },
  { id: "supercar", label: "Supercars & Track", subtext: "Porsche, Ferrari, Track Weapons", icon: "Flame" },
  { id: "electric", label: "Electric Titans", subtext: "Tesla, EV Pioneers", icon: "Zap" },
  { id: "ultra-luxury", label: "The Pinnacle", subtext: "Rolls-Royce, Bentley, Bespoke Suites", icon: "Gem" }
];

export const CURRENCY_RATES = {
  USD: { symbol: "$", code: "USD", rateFromUSD: 1 },
  INR: { symbol: "₹", code: "INR", rateFromUSD: 83.5 }
};

export const COMPARISON_CATEGORIES = [
  {
    id: "pricing",
    title: "1. Overview & Pricing",
    fields: [
      { key: "price", label: "Ex-Showroom Price", type: "price", highlightWinner: "lowest" },
      { key: "engine", label: "Engine Setup", type: "string" },
      { key: "gearboxType", label: "Transmission Type", type: "string" },
      { key: "drivetrain", label: "Drivetrain Layout", type: "string" }
    ]
  },
  {
    id: "performance",
    title: "2. Engine & Performance",
    fields: [
      { key: "powerHp", label: "Max Horsepower (bhp / hp)", type: "number", unit: " hp", highlightWinner: "highest" },
      { key: "torqueNm", label: "Peak Torque (Nm)", type: "number", unit: " Nm", highlightWinner: "highest" },
      { key: "acceleration0to100", label: "0 to 100 km/h Acceleration", type: "number", unit: " sec", highlightWinner: "lowest" },
      { key: "topSpeedKmh", label: "Top Speed", type: "number", unit: " km/h", highlightWinner: "highest" },
      { key: "displacementCc", label: "Engine Displacement", type: "number", unit: " cc" }
    ]
  },
  {
    id: "economy",
    title: "3. Efficiency & Range",
    fields: [
      { key: "fuelType", label: "Fuel Type", type: "string" },
      { key: "mileageKmpl", label: "Fuel Economy / Efficiency", type: "number", unit: " km/l", highlightWinner: "highest" },
      { key: "rangeKm", label: "Total Driving Range", type: "number", unit: " km", highlightWinner: "highest" },
      { key: "fuelTankLiters", label: "Fuel Tank / Battery Size", type: "number", unit: " L / kWh" }
    ]
  },
  {
    id: "dimensions",
    title: "4. Dimensions & Space",
    fields: [
      { key: "dimensions.lengthMm", label: "Overall Length", type: "nested", unit: " mm" },
      { key: "dimensions.widthMm", label: "Overall Width", type: "nested", unit: " mm" },
      { key: "dimensions.wheelbaseMm", label: "Wheelbase", type: "nested", unit: " mm", highlightWinner: "highest" },
      { key: "dimensions.groundClearanceMm", label: "Ground Clearance", type: "nested", unit: " mm", highlightWinner: "highest" },
      { key: "dimensions.bootSpaceLiters", label: "Boot Space", type: "nested", unit: " Litres", highlightWinner: "highest" },
      { key: "dimensions.kerbWeightKg", label: "Kerb Weight", type: "nested", unit: " kg" },
      { key: "dimensions.seatingCapacity", label: "Seating Capacity", type: "nested", unit: " Seats" }
    ]
  },
  {
    id: "chassis",
    title: "5. Suspension, Chassis & Wheels",
    fields: [
      { key: "chassis.frontSuspension", label: "Front Suspension", type: "nested" },
      { key: "chassis.rearSuspension", label: "Rear Suspension", type: "nested" },
      { key: "chassis.frontBrakes", label: "Front Brakes", type: "nested" },
      { key: "chassis.rearBrakes", label: "Rear Brakes", type: "nested" },
      { key: "chassis.wheelSize", label: "Wheel & Tire Size", type: "nested" }
    ]
  },
  {
    id: "luxury",
    title: "6. Luxury, Comfort & Interior",
    fields: [
      { key: "comfort.upholstery", label: "Seating Upholstery", type: "nested" },
      { key: "comfort.climateControl", label: "Climate Control", type: "nested" },
      { key: "comfort.sunroof", label: "Sunroof / Headliner", type: "nested" },
      { key: "comfort.seating", label: "Seat Adjustments & Ventilation", type: "nested" },
      { key: "comfort.ambientLighting", label: "Ambient Lighting", type: "nested" },
      { key: "comfort.keylessEntry", label: "Keyless / Doors", type: "nested" }
    ]
  },
  {
    id: "infotainment",
    title: "7. Infotainment & Tech",
    fields: [
      { key: "infotainment.screen", label: "Touchscreen Display", type: "nested" },
      { key: "infotainment.speakers", label: "Sound System", type: "nested" },
      { key: "infotainment.driverCluster", label: "Driver Instrument Cluster", type: "nested" },
      { key: "infotainment.connectivity", label: "Smartphone & Connected Suite", type: "nested" },
      { key: "infotainment.wirelessCharging", label: "Wireless Phone Charger", type: "boolean" },
      { key: "infotainment.hud", label: "Heads-Up Display (HUD)", type: "boolean" }
    ]
  },
  {
    id: "safety",
    title: "8. Safety & Autonomous ADAS",
    fields: [
      { key: "safety.ncapRating", label: "Crash Test NCAP Rating", type: "nested" },
      { key: "safety.airbags", label: "Number of Airbags", type: "nested", unit: " Airbags", highlightWinner: "highest" },
      { key: "safety.adasLevel", label: "Autonomous ADAS Tech", type: "nested" },
      { key: "safety.camera", label: "Parking Cameras", type: "nested" },
      { key: "safety.cruiseControl", label: "Cruise Control Type", type: "nested" }
    ]
  }
];

export const PRESET_COMPARISONS = [
  {
    id: "clash-of-worlds",
    title: "From Maruti to Rolls-Royce: The Ultimate Contrast",
    subtitle: "Maruti Swift ZXi+ vs Rolls-Royce Phantom VIII Private Suite",
    car1Id: "maruti-swift",
    variant1Id: "swift-zxi-plus",
    car2Id: "rolls-royce-phantom",
    variant2Id: "phantom-ewb",
    badge: "The Ultimate Spectrum"
  },
  {
    id: "supercar-clash",
    title: "Track Dominators Showdown",
    subtitle: "Porsche 911 GT3 RS vs Ferrari 296 GTB Assetto Fiorano",
    car1Id: "porsche-911",
    variant1Id: "porsche-911-gt3-rs",
    car2Id: "ferrari-296-gtb",
    variant2Id: "ferrari-296-assetto-fiorano",
    badge: "Track Weapons"
  },
  {
    id: "luxury-icons",
    title: "The Kings of High Society",
    subtitle: "Mercedes-AMG G 63 vs Bentley Continental GT Speed",
    car1Id: "mercedes-amg-g63",
    variant1Id: "g63-grand-edition",
    car2Id: "bentley-continental-gt",
    variant2Id: "continental-gt-speed",
    badge: "Luxury & Power"
  },
  {
    id: "electric-vs-gas",
    title: "Electric Hyper-Sedan vs German Precision",
    subtitle: "Tesla Model S Plaid (1,020 HP) vs BMW M340i xDrive",
    car1Id: "tesla-model-s",
    variant1Id: "model-s-plaid",
    car2Id: "bmw-3-series",
    variant2Id: "bmw-m340i-xdrive",
    badge: "EV vs ICE Battle"
  },
  {
    id: "subcompact-kings",
    title: "India's Best Sellers: Hatchback vs Safe SUV",
    subtitle: "Maruti Swift ZXi+ vs Tata Nexon Fearless+ S",
    car1Id: "maruti-swift",
    variant1Id: "swift-zxi-plus",
    car2Id: "tata-nexon",
    variant2Id: "nexon-fearless-plus",
    badge: "Bestseller Duel"
  }
];
