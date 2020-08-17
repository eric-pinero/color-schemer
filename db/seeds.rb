# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Color.destroy_all
User.destroy_all

colors = Color.create([
    {
      id: 1,
      name: 'Matt Black',
      red: 0,
      green: 0,
      blue: 0,
      complement_id: 2
    },
    {
      id: 2,
      name: 'Matt White',
      red: 255,
      green: 255,
      blue: 255,
      complement_id: 1
    },
    {
      id: 3,
      name: 'Pure Red',
      red: 176,
      green: 37,
      blue: 43,
      complement_id: 80
    },
    {
      id: 4,
      name: 'Dragon Red',
      red: 132,
      green: 33,
      blue: 36,
      complement_id: 65
    },
    {
      id: 5,
      name: 'Lava Orange',
      red: 199,
      green: 86,
      blue: 45,
      complement_id: 80
    },
    {
      id: 6,
      name: 'Daemonic Yellow',
      red: 242,
      green: 216,
      blue: 50,
      complement_id: 90
    },
    {
      id: 7,
      name: 'Necrotic Flesh',
      red: 190,
      green: 192,
      blue: 147,
      complement_id: 27
    },
    {
      id: 8,
      name: 'Goblin Green',
      red: 91,
      green: 136,
      blue: 71,
      complement_id: 73
    },
    {
      id: 9,
      name: 'Army Green',
      red: 112,
      green: 117,
      blue: 73,
      complement_id: 73
    },
    {
      id: 10,
      name: 'Greenskin',
      red: 58,
      green: 98,
      blue: 56,
      complement_id: 83
    },
    {
      id: 11,
      name: 'Angel Green',
      red: 37,
      green: 59,
      blue: 36,
      complement_id: 56
    },
    {
      id: 12,
      name: 'Electric Blue',
      red: 102,
      green: 138,
      blue: 186,
      complement_id: 59
    },
    {
      id: 13,
      name: 'Crystal Blue',
      red: 43,
      green: 130,
      blue: 189,
      complement_id: 54
    },
    {
      id: 14,
      name: 'Ultramarine Blue',
      red: 49,
      green: 79,
      blue: 129,
      complement_id: 62
    },
    {
      id: 15,
      name: 'Deep Blue',
      red: 34,
      green: 54,
      blue: 81,
      complement_id: 40
    },
    {
      id: 16,
      name: 'Ash Grey',
      red: 162,
      green: 163,
      blue: 163,
      complement_id: 53
    },
    {
      id: 17,
      name: 'Uniform Grey',
      red: 98,
      green: 105,
      blue: 113,
      complement_id: 69
    },
    {
      id: 18,
      name: 'Wolf Grey',
      red: 102,
      green: 125,
      blue: 143,
      complement_id: 69
    },
    {
      id: 19,
      name: 'Monster Brown',
      red: 122,
      green: 92,
      blue: 49,
      complement_id: 60
    },
    {
      id: 20,
      name: 'Desert Yellow',
      red: 183,
      green: 146,
      blue: 57,
      complement_id: 86
    },
    {
      id: 21,
      name: 'Fur Brown',
      red: 141,
      green: 69,
      blue: 41,
      complement_id: 65
    },
    {
      id: 22,
      name: 'Leather Brown',
      red: 107,
      green: 73,
      blue: 41,
      complement_id: 65
    },
    {
      id: 23,
      name: 'Oak Brown',
      red: 62,
      green: 38,
      blue: 25,
      complement_id: 56
    },
    {
      id: 24,
      name: 'Skeleton Bone',
      red: 207,
      green: 198,
      blue: 157,
      complement_id: 44
    },
    {
      id: 25,
      name: 'Barbarian Flesh',
      red: 212,
      green: 155,
      blue: 110,
      complement_id: 90
    },
    {
      id: 26,
      name: 'Tanned Flesh',
      red: 169,
      green: 115,
      blue: 94,
      complement_id: 77
    },
    {
      id: 27,
      name: 'Alien Purple',
      red: 74,
      green: 52,
      blue: 119,
      complement_id: 7
    },
    {
      id: 28,
      name: 'Hydra Turquoise',
      red: 20,
      green: 146,
      blue: 150,
      complement_id: 25
    },
    {
      id: 29,
      name: 'Chaotic Red',
      red: 94,
      green: 36,
      blue: 25,
      complement_id: 56
    },
    {
      id: 30,
      name: 'Abomination Gore',
      red: 142,
      green: 60,
      blue: 55,
      complement_id: 65
    },
    {
      id: 31,
      name: 'Arid Earth',
      red: 245,
      green: 232,
      blue: 194,
      complement_id: 15
    },
    {
      id: 32,
      name: 'Babe Blonde',
      red: 242,
      green: 218,
      blue: 53,
      complement_id: 90
    },
    {
      id: 33,
      name: 'Banshee Brown',
      red: 189,
      green: 174,
      blue: 151,
      complement_id: 44
    },
    {
      id: 34,
      name: 'Basilisk Brown',
      red: 186,
      green: 129,
      blue: 40,
      complement_id: 86
    },
    {
      id: 35,
      name: 'Brainmatter Beige',
      red: 239,
      green: 237,
      blue: 222,
      complement_id: 11
    },
    {
      id: 36,
      name: 'Castle Grey',
      red: 130,
      green: 126,
      blue: 120,
      complement_id: 36
    },
    {
      id: 37,
      name: 'Centaur Skin',
      red: 208,
      green: 168,
      blue: 159,
      complement_id: 44
    },
    {
      id: 38,
      name: 'Combat Fatigue',
      red: 135,
      green: 140,
      blue: 95,
      complement_id: 55
    },
    {
      id: 39,
      name: 'Commando Green',
      red: 127,
      green: 122,
      blue: 64,
      complement_id: 12
    },
    {
      id: 40,
      name: 'Corpse Pale',
      red: 226,
      green: 201,
      blue: 171,
      complement_id: 15
    },
    {
      id: 41,
      name: 'Crusted Sore',
      red: 84,
      green: 30,
      blue: 40,
      complement_id: 56
    },
    {
      id: 42,
      name: 'Crypt Wraith',
      red: 97,
      green: 96,
      blue: 79,
      complement_id: 73
    },
    {
      id: 43,
      name: 'Cultist Robe',
      red: 115,
      green: 109,
      blue: 97,
      complement_id: 55
    },
    {
      id: 44,
      name: 'Dark Sky',
      red: 57,
      green: 76,
      blue: 95,
      complement_id: 37
    },
    {
      id: 45,
      name: 'Dirt Spatter',
      red: 86,
      green: 59,
      blue: 44,
      complement_id: 82
    },
    {
      id: 46,
      name: 'Drake Tooth',
      red: 204,
      green: 200,
      blue: 179,
      complement_id: 15
    },
    {
      id: 47,
      name: 'Dungeon Grey',
      red: 105,
      green: 107,
      blue: 112,
      complement_id: 69
    },
    {
      id: 48,
      name: 'Elemental Bolt',
      red: 35,
      green: 152,
      blue: 130,
      complement_id: 75
    },
    {
      id: 49,
      name: 'Elf Green',
      red: 77,
      green: 81,
      blue: 42,
      complement_id: 83
    },
    {
      id: 50,
      name: 'Elven Flesh',
      red: 235,
      green: 187,
      blue: 148,
      complement_id: 15
    },
    {
      id: 51,
      name: 'Orc Blood',
      red: 133,
      green: 96,
      blue: 109,
      complement_id: 55
    },
    {
      id: 52,
      name: 'Filthy Cape',
      red: 122,
      green: 119,
      blue: 100,
      complement_id: 55
    },
    {
      id: 53,
      name: 'Dark Stone',
      red: 94,
      green: 88,
      blue: 84,
      complement_id: 16
    },
    {
      id: 54,
      name: 'Fire Lizard',
      red: 189,
      green: 112,
      blue: 49,
      complement_id: 86
    },
    {
      id: 55,
      name: 'Fog Grey',
      red: 119,
      green: 142,
      blue: 169,
      complement_id: 59
    },
    {
      id: 56,
      name: 'Gorgon Hide',
      red: 199,
      green: 206,
      blue: 224,
      complement_id: 23
    },
    {
      id: 57,
      name: 'Griffon Blue',
      red: 58,
      green: 83,
      blue: 128,
      complement_id: 62
    },
    {
      id: 58,
      name: 'Hardened Carapace',
      red: 64,
      green: 55,
      blue: 48,
      complement_id: 82
    },
    {
      id: 59,
      name: 'Hemp Rope',
      red: 138,
      green: 117,
      blue: 65,
      complement_id: 12
    },
    {
      id: 60,
      name: 'Ice Storm',
      red: 119,
      green: 156,
      blue: 197,
      complement_id: 59
    },
    {
      id: 61,
      name: 'Jungle Green',
      red: 146,
      green: 170,
      blue: 61,
      complement_id: 12
    },
    {
      id: 62,
      name: 'Kobold Skin',
      red: 190,
      green: 162,
      blue: 132,
      complement_id: 57
    },
    {
      id: 63,
      name: 'Kraken Skin',
      red: 143,
      green: 195,
      blue: 146,
      complement_id: 91
    },
    {
      id: 64,
      name: 'Mars Red',
      red: 158,
      green: 62,
      blue: 57,
      complement_id: 65
    },
    {
      id: 65,
      name: 'Toxic Mist',
      red: 119,
      green: 191,
      blue: 196,
      complement_id: 30
    },
    {
      id: 66,
      name: 'Moon Dust',
      red: 226,
      green: 210,
      blue: 111,
      complement_id: 14
    },
    {
      id: 67,
      name: 'Mouldy Clothes',
      red: 89,
      green: 122,
      blue: 65,
      complement_id: 73
    },
    {
      id: 68,
      name: 'Mummy Robes',
      red: 229,
      green: 220,
      blue: 212,
      complement_id: 11
    },
    {
      id: 69,
      name: 'Mutant Hue',
      red: 154,
      green: 127,
      blue: 131,
      complement_id: 18
    },
    {
      id: 70,
      name: 'Mythical Orange',
      red: 198,
      green: 64,
      blue: 43,
      complement_id: 80
    },
    {
      id: 71,
      name: 'Necromancer Cloak',
      red: 63,
      green: 64,
      blue: 59,
      complement_id: 83
    },
    {
      id: 72,
      name: 'Grimoire Purple',
      red: 117,
      green: 83,
      blue: 89,
      complement_id: 16
    },
    {
      id: 73,
      name: 'Oozing Purple',
      red: 162,
      green: 146,
      blue: 177,
      complement_id: 42
    },
    {
      id: 74,
      name: 'Phoenix Flames',
      red: 230,
      green: 164,
      blue: 48,
      complement_id: 90
    },
    {
      id: 75,
      name: 'Pixie Pink',
      red: 191,
      green: 122,
      blue: 129,
      complement_id: 48
    },
    {
      id: 76,
      name: 'Poisonous Cloud',
      red: 210,
      green: 221,
      blue: 88,
      complement_id: 14
    },
    {
      id: 77,
      name: 'Royal Cloak',
      red: 85,
      green: 152,
      blue: 155,
      complement_id: 79
    },
    {
      id: 78,
      name: 'Scaly Hide',
      red: 137,
      green: 150,
      blue: 86,
      complement_id: 55
    },
    {
      id: 79,
      name: 'Warlock Purple',
      red: 165,
      green: 92,
      blue: 99,
      complement_id: 77
    },
    {
      id: 80,
      name: 'Voidshield Blue',
      red: 98,
      green: 159,
      blue: 212,
      complement_id: 19
    },
    {
      id: 81,
      name: 'Snake Scales',
      red: 149,
      green: 175,
      blue: 69,
      complement_id: 12
    },
    {
      id: 82,
      name: 'Spaceship Exterior',
      red: 204,
      green: 205,
      blue: 207,
      complement_id: 58
    },
    {
      id: 83,
      name: 'Stone Golem',
      red: 183,
      green: 185,
      blue: 180,
      complement_id: 71
    },
    {
      id: 84,
      name: 'Sulphide Ochre',
      red: 181,
      green: 131,
      blue: 38,
      complement_id: 86
    },
    {
      id: 85,
      name: 'Toxic Boils',
      red: 151,
      green: 112,
      blue: 129,
      complement_id: 18
    },
    {
      id: 86,
      name: 'Troglodyte Blue',
      red: 74,
      green: 135,
      blue: 183,
      complement_id: 87
    },
    {
      id: 87,
      name: 'Troll Claws',
      red: 187,
      green: 138,
      blue: 82,
      complement_id: 86
    },
    {
      id: 88,
      name: 'Vampire Red',
      red: 130,
      green: 35,
      blue: 54,
      complement_id: 65
    },
    {
      id: 89,
      name: 'Venom Wyrm',
      red: 104,
      green: 100,
      blue: 66,
      complement_id: 73
    },
    {
      id: 90,
      name: 'Viking Blue',
      red: 14,
      green: 96,
      blue: 151,
      complement_id: 25
    },
    {
      id: 91,
      name: 'Wasteland Soil',
      red: 108,
      green: 76,
      blue: 88,
      complement_id: 16
    },
    {
      id: 92,
      name: 'Werewolf Fur',
      red: 113,
      green: 94,
      blue: 80,
      complement_id: 16
    },
    {
      id: 93,
      name: 'Witch Brew',
      red: 145,
      green: 147,
      blue: 68,
      complement_id: 12
    },
    {
      id: 94,
      name: 'Wizards Orb',
      red: 8,
      green: 114,
      blue: 105,
      complement_id: 50
    },
    {
      id: 95,
      name: 'Scar Tissue',
      red: 185,
      green: 133,
      blue: 114,
      complement_id: 18
    },
    {
      id: 96,
      name: 'Field Grey',
      red: 119,
      green: 122,
      blue: 119,
      complement_id: 36
    }
  ]
)