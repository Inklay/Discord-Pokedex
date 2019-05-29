const request = require('request');
const $ = require('cheerio');

function french_special_cases(channel, content)
{
    var color;
    var typed = content.substring(8);
    var description;
    var url;
    var title;
    var sprite;
    var gif_url = "http://play.pokemonshowdown.com/sprites/xyani/";
    var sprite;
    var number;
    var type1;
    var type2 = "NULL";
    var family
    var height;
    var weight;
    var ability1;
    var ability2 = "NULL";
    var ability3 = "NULL";
    var egg1;
    var egg2 = "NULL";
    var rate;
    var hp = 0;
    var atk = 0;
    var def = 0;
    var spa = 0;
    var spd = 0;
    var spe = 0;
    var other_forms;

    if (typed.search(" shiny") != -1)
        gif_url = "http://play.pokemonshowdown.com/sprites/xyani-shiny/";
    switch (typed) {
        case "morpheo":
        case "morphéo":
            other_forms = "Autres formes: morphéo soleil, morphéo pluie, morphéo neige"
            title = "Morphéo";
            url = "https://pokepedia.fr/Morphéo";
            color = 0xADA594;
            sprite = gif_url.concat("castform.gif");
            name = "Castform";
            number = 351;
            type1 = "Normal";
            family = "Pokémon Climat";
            ability1 = "Météo";
            egg1 = "Féerique";
            egg2 = "Amorphe";
            rate = 45;
            height = "0,3 m, soit 1 pied";
            weight = "0,8 kg, soit 1,8 livres";
            hp = 70;
            atk = 70;
            def = 70;
            spa = 70;
            spd = 70;
            spe = 70;
            break;
        case "morpheo soleil":
        case "morphéo soleil":
            other_forms = "Autres formes: morphéo, morphéo pluie, morphéo neige"
            title = "Morphéo Forme Soleil";
            url = "https://pokepedia.fr/Morphéo";
            color = 0xF75231;
            sprite = gif_url.concat("castform-sunny.gif");
            name = "Castform";
            number = 351;
            type1 = "Feu";
            family = "Pokémon Climat";
            ability1 = "Météo";
            egg1 = "Féerique";
            egg2 = "Amorphe";
            rate = 45;
            height = "0,3 m, soit 1 pied";
            weight = "0,8 kg, soit 1,8 livres";
            hp = 70;
            atk = 70;
            def = 70;
            spa = 70;
            spd = 70;
            spe = 70;
            break;
        case "morpheo pluie":
        case "morphéo pluie":
            other_forms = "Autres formes: morphéo, morphéo soleil, morphéo neige"
            title = "Morphéo Forme Pluie";
            url = "https://pokepedia.fr/Morphéo";
            color = 0x399CFF;
            sprite = gif_url.concat("castform-rainy.gif");
            name = "Castform";
            number = 351;
            type1 = "Eau";
            family = "Pokémon Climat";
            ability1 = "Météo";
            egg1 = "Féerique";
            egg2 = "Amorphe";
            rate = 45;
            height = "0,3 m, soit 1 pied";
            weight = "0,8 kg, soit 1,8 livres";
            hp = 70;
            atk = 70;
            def = 70;
            spa = 70;
            spd = 70;
            spe = 70;
            break;
        case "morpheo neige":
        case "morphéo neige":
            other_forms = "Autres formes: morphéo, morphéo soleil, morphéo pluie"
            title = "Morphéo Forme Neige";
            url = "https://pokepedia.fr/Morphéo";
            color = 0x5ACEE7;
            sprite = gif_url.concat("castform-snowy.gif");
            name = "Castform";
            number = 351;
            type1 = "Glace";
            family = "Pokémon Climat";
            ability1 = "Météo";
            egg1 = "Féerique";
            egg2 = "Amorphe";
            rate = 45;
            height = "0,3 m, soit 1 pied";
            weight = "0,8 kg, soit 1,8 livres";
            hp = 70;
            atk = 70;
            def = 70;
            spa = 70;
            spd = 70;
            spe = 70;
            break;
        case "deoxys":
        case "déoxys":
            other_forms = "Autres formes: deoxys attaque, deoxys défense, deoxys vitesse"
            title = "Deoxys";
            url = "https://pokepedia.fr/Deoxys";
            color = 0xFF73A5;
            sprite = gif_url.concat("deoxys.gif");
            name = "Deoxys";
            number = 351;
            type1 = "Psy";
            family = "Pokémon ADN";
            ability1 = "Pression";
            egg1 = "Inconnu";
            rate = 3;
            height = "1,7 m, soit 5,6 pieds";
            weight = "60,8 kg, soit 134 livres";
            hp = 50;
            atk = 150;
            def = 50;
            spa = 150;
            spd = 50;
            spe = 150;
            break;
        case "deoxys attaque":
        case "déoxys attaque":
            other_forms = "Autres formes: deoxys, deoxys défense, deoxys vitesse"
            title = "Deoxys Forme Attaque";
            url = "https://pokepedia.fr/Deoxys";
            color = 0xFF73A5;
            sprite = gif_url.concat("deoxys-attack.gif");
            name = "Deoxys";
            number = 351;
            type1 = "Psy";
            family = "Pokémon ADN";
            ability1 = "Pression";
            egg1 = "Inconnu";
            rate = 3;
            height = "1,7 m, soit 5,6 pieds";
            weight = "60,8 kg, soit 134 livres";
            hp = 50;
            atk = 180;
            def = 20;
            spa = 180;
            spd = 20;
            spe = 150;
            break;
        case "deoxys défense":
        case "déoxys défense":
            other_forms = "Autres formes: deoxys, deoxys attaque, deoxys vitesse"
            title = "Deoxys Forme Défense";
            url = "https://pokepedia.fr/Deoxys";
            color = 0xFF73A5;
            sprite = gif_url.concat("deoxys-defense.gif");
            name = "Deoxys";
            number = 351;
            type1 = "Psy";
            family = "Pokémon ADN";
            ability1 = "Pression";
            egg1 = "Inconnu";
            rate = 3;
            height = "1,7 m, soit 5,6 pieds";
            weight = "60,8 kg, soit 134 livres";
            hp = 50;
            atk = 70;
            def = 160;
            spa = 70;
            spd = 160;
            spe = 90;
            break;
        case "deoxys vitesse":
        case "déoxys vitesse":
            other_forms = "Autres formes: deoxys, deoxys attaque, deoxys défense"
            title = "Deoxys Forme Vitesse";
            url = "https://pokepedia.fr/Deoxys";
            color = 0xFF73A5;
            sprite = gif_url.concat("deoxys-speed.gif");
            name = "Deoxys";
            number = 351;
            type1 = "Psy";
            family = "Pokémon ADN";
            ability1 = "Pression";
            egg1 = "Inconnu";
            rate = 3;
            height = "1,7 m, soit 5,6 pieds";
            weight = "60,8 kg, soit 134 livres";
            hp = 50;
            atk = 95;
            def = 90;
            spa = 95;
            spd = 90;
            spe = 180;
            break;
        default:
            return 0;
    }
    description = "Nom anglais: " + name + "\nNuméro du pokédex: " + number + "\n";
    if (type2 == "NULL")
        description += "Type: " + type1 + "\n";
    else
        description += "Types: " + type1 + ", " + type2 + "\n";
    description += "Famille: " + family + "\nTaille: " + height + "\nPoids: " + weight;
    if (ability2 == "NULL")
        description += "\nTalent: " + ability1 + "\n";
    else {
        if (ability3 == "NULL")
            description += "\nTalents: " + ability1 + "/" + ability2 + "\n";
        else
            description += "\nTalents: " + ability1 + "/" + ability2 + "/" + ability3 + "\n";
    }
    if (egg2 == "NULL")
        description += "Groupe œuf: " + egg1 + "\n";
    else
        description += "Groupe œuf: " + egg1 + ", " + egg2 + "\n";
    description += "Taux de capture: " + rate;
    description += "\nPv: " + hp + "\nAttaque: " + atk + "\nDéfense: " + def + "\nAttaque Spéciale: " + spa + "\nDéfense Spéciale: " + spd + "\nVitesse: " + spe;
    channel.sendMessage(other_forms, false, {
        color: color,
        title: title,
        description: description,
        image: {
            url: sprite
        },
        url: url, 
        footer : {
            text: "Informations de Poképedia"
        }
    });
    return 1;
}

module.exports = {
    french: function (content, channel)
    {
        var found = 0;
        var description;
        var typed = content.substring(8);
        var url = "https://pokepedia.fr/";
        var gif_url = "http://play.pokemonshowdown.com/sprites/xyani/";
        var sprite;
        var name;
        var color = 0xffffff;
        var title;
        var number;
        var type1;
        var type2 = "NULL";
        var family
        var height;
        var weight;
        var ability1;
        var ability2 = "NULL";
        var ability3 = "NULL";
        var egg1;
        var egg2 = "NULL";
        var rate;
        var hp = 0;
        var atk = 0;
        var def = 0;
        var spa = 0;
        var spd = 0;
        var spe = 0;
        var alola = 0;
        var is_mega = 0;
        var mega = "Méga-";
        var mega_type = "";

        if (typed.search(" shiny") != -1)
            gif_url = "http://play.pokemonshowdown.com/sprites/xyani-shiny/";
        if (typed.search(" méga") != -1 || typed.search(" mega") != -1 || typed.startsWith("mega ") || typed.startsWith("méga ")) {
            is_mega = 1;
            if (typed.startsWith("mega ") || typed.startsWith("méga "))
                typed = typed.substring(5);
            typed = typed.charAt(0).toUpperCase() + typed.slice(1);
            search = url.concat(mega);
            search = search.concat(typed);
            if (typed.search(" x") != -1) {
                search = search.substring(0, search.search(" "));
                search = search.concat("_X");
                mega_type = " X ";
            } else if (typed.search(" y") != -1) {
                search = search.substring(0, search.search(" "));
                search = search.concat("_Y");
                mega_type = " Y ";
            }
        }
        if (typed.search(" ") != -1 && !is_mega)
            search = url.concat(typed.substring(0, typed.search(" ")));
        else if (!is_mega)
            search = url.concat(typed);
        if (typed.search(" alola") != -1 || typed.search(" d'alola") != -1) {
            alola = 1;
            search = search.concat("_d%27Alola");
        }
        
        if (french_special_cases(channel, content))
            return;
        request(search, { json: true }, (err, res, body) => {
            if (err) {
                channel.sendMessage("Impossible de communiquer avec le serveur, merci de réessayer dans 5 minutes.\nInformations sur l'erreur: " + err);
                return;
            }
            $('.toctext', body).each(function(i) {
                if ($(this).text() == "À propos du Pokémon" && !i && !is_mega)
                    found = 1;
                else if ($(this).text() == "À propos du Méga-Pokémon" && !i && is_mega)
                found = 1;
            });
            if (!found) {
                if (alola)
                    channel.sendMessage("Impossible de trouver \"" + typed.substring(0, typed.search(" ")) + " d\'Alola\" merci de vérifier l'orthographe.");
                else
                    channel.sendMessage("Impossible de trouver \"" + content.substring(8).charAt(0).toUpperCase() + content.substring(8).slice(1) + "\" merci de vérifier l'orthographe.");
                return;
            }
            title = $('.firstHeading', body).text();
            $('th', body).each(function() {
                if ($(this).text().startsWith("Nom anglais"))
                    name = $(this).next().text();
            });
            number = $('.entêtesection > big > span', body).text().substring(2);
            color = parseInt("0x" + ($('tr > .entêtesection', body)[0].attribs.style.substring(13, 19)));
            $('tr > th > a', body).each(function() {
                if ($(this)[0].attribs.href == "/Type" && $(this).parent().next()[0].attribs.colspan == "3") {
                    type1 = $(this).parent().next()[0].children[0].children[0].attribs.alt;
                    if ($(this).parent().next()[0].children.length == 4)
                        type2 = $(this).parent().next()[0].children[2].children[0].attribs.alt;
                }
                if ($(this)[0].attribs.href == "/Famille" && $(this).parent().next()[0].attribs.colspan == "3")
                    family = "Pokémon " + $(this).parent().next()[0].children[1].data;
                if ($(this)[0].attribs.href == "/Liste_des_Pok%C3%A9mon_par_taille" && $(this).parent().next()[0].attribs.colspan == "3")
                    height = $(this).parent().next()[0].children[0].data;
                if ($(this)[0].attribs.href == "/Liste_des_Pok%C3%A9mon_par_poids" && $(this).parent().next()[0].attribs.colspan == "3")
                    weight = $(this).parent().next()[0].children[0].data;
                if ($(this)[0].attribs.href == "/Talent" && $(this).parent().next()[0].attribs.colspan == "3") {
                    if ($(this).parent().next()[0].children.length == 2)
                        ability1 = $(this).parent().next()[0].children[0].children[0].data;
                    else {
                        ability1 = $(this).parent().next()[0].children[1].children[0].data;
                        ability2 = $(this).parent().next()[0].children[4].children[0].data;
                        if ($(this).parent().next()[0].children.length == 10)
                            ability3 = $(this).parent().next()[0].children[7].children[0].data;
                    }
                }
                if ($(this)[0].attribs.href == "/%C5%92uf" && $(this).parent().next()[0].attribs.colspan == "3" && !is_mega) {
                    egg1 = $(this).parent().next()[0].children[0].children[0].data;
                    if ($(this).parent().next()[0].children.length == 4)
                        egg2 = $(this).parent().next()[0].children[2].children[0].data;
                }
                if ($(this)[0].attribs.href == "/Capture_des_Pok%C3%A9mon" && $(this).parent().next()[0].attribs.colspan == "3" && !is_mega)
                    rate = $(this).parent().next()[0].children[0].data;
            });
            $('td > a', body).each(function() {
                if ($(this)[0].attribs.href == "/Statistique#Points_de_Vie" && !hp)
                    hp = $(this).parent().next()[0].children[0].data;
                if ($(this)[0].attribs.href == "/Statistique#Attaque" && !atk)
                    atk = $(this).parent().next()[0].children[0].data;
                if ($(this)[0].attribs.href == "/Statistique#D.C3.A9fense" && !def)
                    def = $(this).parent().next()[0].children[0].data;
                if ($(this)[0].attribs.href == "/Statistique#Attaque_Sp.C3.A9ciale" && !spa)
                    spa = $(this).parent().next()[0].children[0].data;
                if ($(this)[0].attribs.href == "/Statistique#D.C3.A9fense_sp.C3.A9ciale" && !spd)
                    spd = $(this).parent().next()[0].children[0].data;
                if ($(this)[0].attribs.href == "/Statistique#Vitesse" && !spe)
                    spe = $(this).parent().next()[0].children[0].data;
            });
            description = "Nom anglais: " + name + "Numéro du pokédex: " + number + "\n";
            if (type2 == "NULL")
                description += "Type: " + type1 + "\n";
            else
                description += "Types: " + type1 + ", " + type2 + "\n";
            description += "Famille: " + family + "Taille: " + height + "Poids: " + weight;
            if (ability2 == "NULL")
                description += "Talent: " + ability1 + "\n";
            else {
                if (ability3 == "NULL")
                    description += "Talents: " + ability1 + "/" + ability2 + "\n";
                else
                    description += "Talents: " + ability1 + "/" + ability2 + "/" + ability3 + "\n";
            }
            if (!is_mega) {
                if (egg2 == "NULL")
                    description += "Groupe œuf: " + egg1 + "\n";
                else
                    description += "Groupe œuf: " + egg1 + ", " + egg2 + "\n";
                description += "Taux de capture: " + rate;
            }
            description += "Pv: " + hp + "Attaque: " + atk + "Défense: " + def + "Attaque Spéciale: " + spa + "Défense Spéciale: " + spd + "Vitesse: " + spe;
            if (alola) {
                sprite = gif_url.concat(name.slice(7, name.length - 1));
                sprite = sprite.concat("-alola.gif");
            } else if (!is_mega) {
                sprite = gif_url.concat(name.slice(0, name.length - 1));
                sprite = sprite.concat(".gif");
            } else if (is_mega) {
                if (mega_type == "") {
                    sprite = gif_url.concat(name.slice(5, name.length - 1));
                    sprite = sprite.concat("-mega.gif");
                } else if (mega_type == " X ") {
                    sprite = gif_url.concat(name.slice(5, name.length - 3));
                    sprite = sprite.concat("-megax.gif");
                } else if (mega_type == " Y ") {
                    sprite = gif_url.concat(name.slice(5, name.length - 3));
                    sprite = sprite.concat("-megay.gif");
                }
            }
            sprite = sprite.toLocaleLowerCase();
            channel.sendMessage("", false, {
                color: color,
                title: title,
                description: description,
                image: {
                    url: sprite
                },
                url: search, 
                footer : {
                    text: "Informations de Poképedia"
                }
            });
        });
    }
};