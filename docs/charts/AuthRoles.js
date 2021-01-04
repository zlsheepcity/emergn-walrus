let AuthRoles = {

    DB: {
        UserDB:     {},
        DocsDB:     {},
        ContentDB:  {},
        ClientsDB:  {},
        SurveysDB:  {},
    },

    Roles: {
        RoleAdmin:    { title:'Master admin' },
        RoleContent:  { title:'Content manager' },
        RoleMentor:   { title:'Instructor' },
        RoleClient:   { title:'Client' },
    },

    DB_API: {
        checkUser:    { display:{arr:'e'}  },    // users
        crudUsers:    { display:{arr:'we'} },
        crudRoles:    { display:{arr:'we'} },

        crudClient:   { display:{arr:'we'} },    // clients

        crudSurvey:   { display:{arr:'we'} },    // surveys
        readSurvey:   { display:{arr:'w'}  },
        exportSurvey: { display:{arr:'s'}, title:'Analytics, stats, etc.' },

        crudDocs:     { display:{arr:'ns'} },    // docs
        readDocs:     { display:{arr:'n'}  },

        crudContentA: { display:{arr:'ns'} },    // content
        crudContentC: { display:{arr:'ns'} },
        readContent:  { display:{arr:'w'}  },
    },

    Views: {
        WelcomeView:  { title:'Login View' },
        SessionsView: { title:'Sessions View' },
        SurveyView:   { title:'Survey View' },
        DocsView:     { title:'Documents View' },
        AllViews:     { title:'All Views' },
    },

    AuthController: {
        AuthController: {},
        AuthSAP:        { title:'SAP Authorization Service' },
    },

    Dashboard: {
        UserManager:   {},
        RoleManager:   {},
        ContentDashboard: {},
        ClientProfile: {},
        SurveyResults: {},
        UploadDocs:    {},
    },

}

AuthRoles.chartmap = `
' .         .               .               .               .               .               .               LoginAction1 '
' UserDB    checkUser       AuthController  AuthController  AuthController  AuthController  LoginAction2    WelcomeView '
' UserDB    .               AuthSAP         AuthSAP         AuthSAP         .               .               . '

' UserDB    .               RoleAdmin       RoleContent     RoleMentor      RoleClient      .               . '

' UserDB    crudUsers       UserManager     .               ClientProfile   ClientProfile   crudClient      ClientsDB '
' UserDB    crudRoles       RoleManager     .               .               SessionsView    .               . '
' .         .               .               .               .               SurveyView      crudSurvey      SurveysDB '
' .         .               .               .               SurveyResults   .               readSurvey      SurveysDB '

' .         .               ContentDashboard ContentDashboard UploadDocs      DocsView        .               SurveysDB '
' .         .               crudContentA    crudContentC    crudDocs        readDocs        .               exportSurvey '
' AllViews  readContent     ContentDB       ContentDB       DocsDB          DocsDB          .               exportSurvey '
' .         .               .               .               .               .               .               exportSurvey '
' .         .               .               .               .               .               .               .  '
`;
