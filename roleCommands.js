const medicRoles = {
    0: "729344592251453482", // Rettungsdienst
    1: "729344592251453484", // Rettungshelfer
    2: "729344592251453486", // RS
    3: "729344592251453488", // NS
    4: "729344592251453489", // Assi
    5: "729344592255778858" // Fach
}
const fireRoles = {
    0: "729344592251453483", // Feuerwehr
    1: "729344592251453485", // Brandmeisteranwärter
    2: "729344592251453487", // Brandmeister
    3: "729344592255778857" // Inspektor
}
const policeRoles = {}

module.exports = {
    toggleKripo: async function(args, member, user) {
    },
    promote: async function(args, member, user, msg) {
        if(user.roles.hoist.id == 729344592255778860n || user.roles.hoist.id == 729344592255778859n) {
            switch(args[0]) {
                case 'fw':
                    giveNextRole('fw', member, user, msg);
                    break;
                case 'rd':
                    giveNextRole('rd', member, user, msg);
                    break;
                default:
                    giveNextRole('rd', member, user, msg);
                    break;
            }
        }
    },
    demote: async function(args, member, user) {

    },
    employ: async function(args, member, user) {

    },
    toggleInstructor: async function(args, member, user) {

    }
}

function giveNextRole(type,member, user, msg) {
    switch(type) {
        case 'rd':
            for(let index in medicRoles) {
                if(medicRoles[index] == member.roles.hoist.id) {
                    if(medicRoles[parseInt(index)+1] == undefined) {
                        msg.reply("Der hat schon die höchste Rolle!")
                        return;
                    }
                    member.roles.add(medicRoles[parseInt(index)+1]);
                    member.roles.remove(medicRoles[parseInt(index)]);
                    msg.reply("Erfolgreich befördert")
                    return;
                }
            }
            break;
        case 'fw':
            for(let index in fireRoles) {
                if(fireRoles[index] == member.roles.hoist.id) {
                    if(fireRoles[parseInt(index)+1] == undefined) {
                        msg.reply("Der hat schon die höchste Rolle!")
                        return;
                    }
                    member.roles.add(fireRoles[parseInt(index)+1]);
                    member.roles.remove(fireRoles[parseInt(index)]);
                    msg.reply("Erfolgreich befördert")
                    return;
                }
            }
            break;
    }
}