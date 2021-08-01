module.exports = {
    name : 'removemod',
    description : 'removes the mod role from the person sending the command',
    execute(message, args) {
        message.member.roles.remove('871461989166235719');
    }
}