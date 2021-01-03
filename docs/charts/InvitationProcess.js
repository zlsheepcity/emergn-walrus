let InvitationProcess = {

    Controllers: {
        UserDB:         { display:{type:'db'} },
        CreateInvite:   {},
        ReadRequests:   {},
        CreateSession:  {},
        //ThirdApiView:   { title:'Choose date', display:{type:'view'} },
        SendInvite:     {},
        SendAccess:     {},
        InitialLogin:   {},
        SessionsView:   { display:{type:'view'} },
    },

    DB_API: {
        createUser:     { title:'createUser', display:{arr:'we'} },
        updateUserA:    { title:'updateUser', display:{arr:'we'} },
        updateUserB:    { title:'updateUser', display:{arr:'we'} },
    },

    FlowArrows: {
        a0: { display:{arr:'s'} },
        a1: { display:{arr:'e'} },
        a2: { display:{arr:'e'} },
        //a3: { display:{arr:'w'} },
        a4: { title:'Picker API', display:{arr:'we'} },
        a5: { display:{arr:'e'} },
        a6: { display:{arr:'e'} },
        a7: { display:{arr:'s'} },
    },

}

InvitationProcess.chartmap = `
'  .       .           Dashboard     .   Email       .   Client  '
'  .       .           a0            .   .           .   .  '
'  UserDB  createUser  CreateInvite  a1  SendInvite  a2  ClientLinkA  '
'  UserDB  .           ReadRequests  a4   .           .  ClientLinkA  '
'  UserDB  updateUserA CreateSession a5  SendAccess  a6  ClientLinkB  '
'  UserDB  .           .             .   .           .   a7  '
'  UserDB  updateUserB .             .   .           .   InitialLogin  '
'  .       .           .             .   .           .   SessionsView  '
'  .       .           .             .   .           .   .  '
`;
