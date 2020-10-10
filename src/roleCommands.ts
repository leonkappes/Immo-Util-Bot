import {GuildMember, Message} from 'discord.js'
const medicRoles: { [index: number]: string} = {
  100: "729344592251453482", // Rettungsdienst
  1: "729344592251453484", // Rettungshelfer
  2: "729344592251453486", // RS
  3: "729344592251453488", // NS
  4: "729344592251453489", // Assi
  5: "729344592255778858", // Fach
};
const fireRoles: { [index: number]: string} = {
  100: "729344592251453483", // Feuerwehr
  1: "729344592251453485", // Brandmeisteranwärter
  2: "729344592251453487", // Brandmeister
  3: "729344592255778857", // Inspektor
};
const policeRoles = {};

export async function toggleKripo(args: String[], member: GuildMember, user: GuildMember) {}
export async function promote(args: String[], member: GuildMember, user: GuildMember, msg: Message) {
  if (
    user.roles.hoist?.id == "729344592255778860" ||
    user.roles.hoist?.id == "729344592255778859"
  ) {
    switch (args[0]) {
      case "fw":
        giveNextRole("fw", member, user, msg);
        break;
      case "rd":
        giveNextRole("rd", member, user, msg);
        break;
      default:
        giveNextRole("rd", member, user, msg);
        break;
    }
  }
}
export async function demote(args: String[], member: GuildMember, user: GuildMember, msg: Message) {
  if (
    user.roles.hoist?.id == "729344592255778860" ||
    user.roles.hoist?.id == "729344592255778859"
  ) {
    switch (args[0]) {
      case "fw":
        givePreviousRole("fw", member, user, msg);
        break;
      case "rd":
        givePreviousRole("rd", member, user, msg);
        break;
      default:
        givePreviousRole("rd", member, user, msg);
        break;
    }
  }
}
export async function employ(args: String[], member: GuildMember, user: GuildMember, msg: Message) {
  if (
    user.roles.hoist?.id == "729344592255778860" ||
    user.roles.hoist?.id == "729344592255778859"
  ) {
    switch (args[0]) {
      case "fw":
        giveAccess("fw", member, user, msg);
        break;
      case "rd":
        giveAccess("rd", member, user, msg);
        break;
      default:
        giveAccess("rd", member, user, msg);
        break;
    }
  }
}
export async function unemploy(args: String[], member: GuildMember, user: GuildMember, msg: Message) {
  if (
    user.roles.hoist?.id == "729344592255778860" ||
    user.roles.hoist?.id == "729344592255778859"
  ) {
    switch (args[0]) {
      case "fw":
        revokeAccess("fw", member, user, msg);
        break;
      case "rd":
        revokeAccess("rd", member, user, msg);
        break;
      default:
        revokeAccess("rd", member, user, msg);
        break;
    }
  }
}
export async function toggleInstructor(args: String[], member: GuildMember, user: GuildMember, msg: Message) {
  if (
    user.roles.hoist?.id == "729344592255778860" ||
    user.roles.hoist?.id == "729344592255778859"
  ) {
    switch (args[0]) {
      default:
        tInstructor("fw", member, user, msg);
        break;
    }
  }
}

function giveNextRole(type: String, member: GuildMember, user: GuildMember, msg: Message) {
  switch (type) {
    case "rd":
      for (let index in medicRoles) {
        for (let role of member.roles.cache.keys()) {
          if (index != "100" && medicRoles[index] == role) {
            if (medicRoles[parseInt(index) + 1] == undefined) {
              msg
                .reply("Der hat schon die höchste Rolle!")
                .then((sentMessage) => sentMessage.delete({ timeout: 100000 }));
              return;
            }
            member.roles.add(medicRoles[parseInt(index) + 1]);
            member.roles.remove(medicRoles[parseInt(index)]);
            msg
              .reply(`${member} wurde erfolgreich befördert`)
              .then((sentMessage) => sentMessage.delete({ timeout: 100000 }));
            return;
          }
        }
      }
      break;
    case "fw":
      for (let index in fireRoles) {
        for (let role of member.roles.cache.keys()) {
          if (index != "100" && fireRoles[index] == role) {
            if (fireRoles[parseInt(index) + 1] == undefined) {
              msg
                .reply("Der hat schon die höchste Rolle!")
                .then((sentMessage) => sentMessage.delete({ timeout: 100000 }));
              return;
            }
            member.roles.add(fireRoles[parseInt(index) + 1]);
            member.roles.remove(fireRoles[parseInt(index)]);
            msg
              .reply(`${member} wurde erfolgreich befördert`)
              .then((sentMessage) => sentMessage.delete({ timeout: 100000 }));
            return;
          }
        }
      }
      break;
  }
}

function givePreviousRole(type: String, member: GuildMember, user: GuildMember, msg: Message) {
  switch (type) {
    case "rd":
      for (let index in medicRoles) {
        for (let role of member.roles.cache.keys()) {
          if (index != "100" && medicRoles[index] == role) {
            if (medicRoles[parseInt(index) - 1] == undefined) {
              msg
                .reply("Der hat schon die höchste Rolle!")
                .then((sentMessage) => sentMessage.delete({ timeout: 100000 }));
              return;
            }
            member.roles.add(medicRoles[parseInt(index) - 1]);
            member.roles.remove(medicRoles[parseInt(index)]);
            msg
              .reply(`${member} wurde erfolgreich degradiert`)
              .then((sentMessage) => sentMessage.delete({ timeout: 100000 }));
            return;
          }
        }
      }
      break;
    case "fw":
      for (let index in fireRoles) {
        for (let role of member.roles.cache.keys()) {
          if (index != "100" && fireRoles[index] == role) {
            if (fireRoles[parseInt(index) - 1] == undefined) {
              msg
                .reply("Der hat schon die höchste Rolle!")
                .then((sentMessage) => sentMessage.delete({ timeout: 100000 }));
              return;
            }
            member.roles.add(fireRoles[parseInt(index) - 1]);
            member.roles.remove(fireRoles[parseInt(index)]);
            msg.channel
              .send(`${member} wurde erfolgreich degradiert`)
              .then((sentMessage) => sentMessage.delete({ timeout: 100000 }));
            return;
          }
        }
      }
      break;
  }
}
function giveAccess(type: String, member: GuildMember, user: GuildMember, msg: Message) {
  switch (type) {
    case "rd":
      member.roles.add(medicRoles[100]);
      member.roles.add(medicRoles[1]);
      msg.channel
        .send(`${member} wurde erfolgreich eingestellt`)
        .then((sentMessage) => sentMessage.delete({ timeout: 100000 }));
      break;
    case "fw":
      member.roles.add(fireRoles[100]);
      member.roles.add(fireRoles[1]);
      msg.channel
        .send(`${member} wurde erfolgreich eingestellt`)
        .then((sentMessage) => sentMessage.delete({ timeout: 100000 }));
      break;
  }
}

function revokeAccess(type: String, member: GuildMember, user: GuildMember, msg: Message) {
  switch (type) {
    case "rd":
      for (let index in medicRoles) {
        for (let role of member.roles.cache.keys()) {
          if (medicRoles[index] == role) {
            member.roles.remove(medicRoles[index]);
          }
        }
      }
      msg.channel
        .send(`${member} wurde erfolgreich entlassen`)
        .then((sentMessage) => sentMessage.delete({ timeout: 100000 }));
      break;
    case "fw":
      for (let index in fireRoles) {
        for (let role of member.roles.cache.keys()) {
          if (fireRoles[index] == role) {
            member.roles.remove(fireRoles[index]);
          }
        }
      }
      msg.channel
        .send(`${member} wurde erfolgreich entlassen`)
        .then((sentMessage) => sentMessage.delete({ timeout: 100000 }));
      break;
  }
}

function tInstructor(type: String, member: GuildMember, user: GuildMember, msg: Message) {
  switch (type) {
    case "fw":
      for (let role of member.roles.cache.keys()) {
        if (role == "743447859663208500") {
          member.roles.remove("743447859663208500");
          return msg.channel
            .send(`${member} ist nun kein Ausbilder mehr`)
            .then((sentMessage) => sentMessage.delete({ timeout: 100000 }));
        }
      }
      member.roles.add("743447859663208500");
      return msg.channel
        .send(`${member} ist nun Ausbilder`)
        .then((sentMessage) => sentMessage.delete({ timeout: 100000 }));
  }
}
