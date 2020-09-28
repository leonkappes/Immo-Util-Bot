const medicRoles = {
    100: "729344592251453482", // Rettungsdienst
    1: "729344592251453484", // Rettungshelfer
    2: "729344592251453486", // RS
    3: "729344592251453488", // NS
    4: "729344592251453489", // Assi
    5: "729344592255778858" // Fach
}
const fireRoles = {
    100: "729344592251453483", // Feuerwehr
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
    demote: async function(args, member, user, msg) {
        if(user.roles.hoist.id == 729344592255778860n || user.roles.hoist.id == 729344592255778859n) {
            switch(args[0]) {
                case 'fw':
                    givePreviousRole('fw', member, user, msg);
                    break;
                case 'rd':
                    givePreviousRole('rd', member, user, msg);
                    break;
                default:
                    givePreviousRole('rd', member, user, msg);
                    break;
            }
        }
    },
    employ: async function(args, member, user, msg) {
        if(user.roles.hoist.id == 729344592255778860n || user.roles.hoist.id == 729344592255778859n) {
            switch(args[0]) {
                case 'fw':
                    giveAccess('fw', member, user, msg);
                    break;
                case 'rd':
                    giveAccess('rd', member, user, msg);
                    break;
                default:
                    giveAccess('rd', member, user, msg);
                    break;
            }
        }
    },
    unemploy: async function(args, member, user, msg) {
        if(user.roles.hoist.id == 729344592255778860n || user.roles.hoist.id == 729344592255778859n) {
            switch(args[0]) {
                case 'fw':
                    revokeAccess('fw', member, user, msg);
                    break;
                case 'rd':
                    revokeAccess('rd', member, user, msg);
                    break;
                default:
                    revokeAccess('rd', member, user, msg);
                    break;
            }
        }
    },
    toggleInstructor: async function(args, member, user, msg) {
        if(user.roles.hoist.id == 729344592255778860n || user.roles.hoist.id == 729344592255778859n) {
            switch(args[0]) {
                default:
                    tInstructor('fw', member, user, msg);
                    break;
            }
        }
    }
}

function giveNextRole(type,member, user, msg) {
    switch(type) {
        case 'rd':
            for(let index in medicRoles) {
                for(let role of member.roles.cache.keys()) {
                    if(index != 100 && medicRoles[index] == role) {
                        if(medicRoles[parseInt(index)+1] == undefined) {
                            msg.reply("Der hat schon die höchste Rolle!").then(sentMessage => sentMessage.delete({ timeout: 100000 }));
                            return;
                        }
                        member.roles.add(medicRoles[parseInt(index)+1]);
                        member.roles.remove(medicRoles[parseInt(index)]);
                        msg.reply(`${member} wurde erfolgreich befördert`).then(sentMessage => sentMessage.delete({ timeout: 100000 }));
                        return;
                    }
                }
                
            }
            break;
        case 'fw':
            for(let index in fireRoles) {
                for(let role of member.roles.cache.keys()) {
                    if(index != 100 && fireRoles[index] == role) {
                        if(fireRoles[parseInt(index)+1] == undefined) {
                            msg.reply("Der hat schon die höchste Rolle!").then(sentMessage => sentMessage.delete({ timeout: 100000 }));
                            return;
                        }
                        member.roles.add(fireRoles[parseInt(index)+1]);
                        member.roles.remove(fireRoles[parseInt(index)]);
                        msg.reply(`${member} wurde erfolgreich befördert`).then(sentMessage => sentMessage.delete({ timeout: 100000 }));
                        return;
                    }
                }
                
            }
            break;
    }
}

function givePreviousRole(type,member, user, msg) {
    switch(type) {
        case 'rd':
            for(let index in medicRoles) {
                for(let role of member.roles.cache.keys()) {
                    if(index != 100 && medicRoles[index] == role) {
                        if(medicRoles[parseInt(index)-1] == undefined) {
                            msg.reply("Der hat schon die höchste Rolle!").then(sentMessage => sentMessage.delete({ timeout: 100000 }));
                            return;
                        }
                        member.roles.add(medicRoles[parseInt(index)-1]);
                        member.roles.remove(medicRoles[parseInt(index)]);
                        msg.reply(`${member} wurde erfolgreich degradiert`).then(sentMessage => sentMessage.delete({ timeout: 100000 }));
                        return;
                    }
                }
                
            }
            break;
        case 'fw':
            for(let index in fireRoles) {
                for(let role of member.roles.cache.keys()) {
                    if(index != 100 && fireRoles[index] == role) {
                        if(fireRoles[parseInt(index)-1] == undefined) {
                            msg.reply("Der hat schon die höchste Rolle!").then(sentMessage => sentMessage.delete({ timeout: 100000 }));
                            return;
                        }
                        member.roles.add(fireRoles[parseInt(index)-1]);
                        member.roles.remove(fireRoles[parseInt(index)]);
                        msg.channel.send(`${member} wurde erfolgreich degradiert`).then(sentMessage => sentMessage.delete({ timeout: 100000 }));
                        return;
                    }
                }
                
            }
            break;
    }
}
function giveAccess(type,member, user, msg) {
    switch(type) {
        case 'rd':
            member.roles.add(medicRoles[100]);
            member.roles.add(medicRoles[1]);
            msg.channel.send(`${member} wurde erfolgreich eingestellt`).then(sentMessage => sentMessage.delete({ timeout: 100000 }));
            break;
        case 'fw':
            member.roles.add(fireRoles[100]);
            member.roles.add(fireRoles[1]);
            msg.channel.send(`${member} wurde erfolgreich eingestellt`).then(sentMessage => sentMessage.delete({ timeout: 100000 }));
            break;
    }
}

function revokeAccess(type,member, user, msg) {
    switch(type) {
        case 'rd':
            for(let index in medicRoles) {
                for(let role of member.roles.cache.keys()) {
                    if(medicRoles[index] == role) {
                        member.roles.remove(medicRoles[index]);
                    }
                }
            }
            msg.channel.send(`${member} wurde erfolgreich entlassen`).then(sentMessage => sentMessage.delete({ timeout: 100000 }));
            break;
        case 'fw':
            for(let index in fireRoles) {
                for(let role of member.roles.cache.keys()) {
                    if(fireRoles[index] == role) {
                        member.roles.remove(fireRoles[index]);
                    }
                }
            }
            msg.channel.send(`${member} wurde erfolgreich entlassen`).then(sentMessage => sentMessage.delete({ timeout: 100000 }));
            break;
    }
}

function tInstructor(type,member, user, msg) {
    switch(type) {
        case 'fw':
            for(let role of member.roles.cache.keys()) {
                if(role == 743447859663208500n) {
                    member.roles.remove("743447859663208500");
                    return msg.channel.send(`${member} ist nun kein Ausbilder mehr`).then(sentMessage => sentMessage.delete({ timeout: 100000 }));
                }
            }
            member.roles.add("743447859663208500");
            return msg.channel.send(`${member} ist nun Ausbilder`).then(sentMessage => sentMessage.delete({ timeout: 100000 }));
    }
}