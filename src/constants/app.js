export const NEXT_EYE_ACCESS_TOKEN = "NEXT_EYE_ACCESS_TOKEN";
export const API_URLs = {
    MANAGE_CAMERA: '/api/v1/cameras/',
    MANAGE_EVENTS: '/api/v1/events/',
    GET_ALL_EVENT_TYPES: '/api/v1/event-type',
    GET_ALL_PRODUCTS: '/api/v1/dashboard/count-event',
    GET_FILTER_OPTIONS: '/api/v1/areas',
    GET_TOTAL_EVENTS: '/api/v1/dashboard/statistics',
    MANAGE_AREA: '/api/v1/areas',
    WORKING_SESSION: '/api/v1/working_session/',
    LOGIN: '/api/v1/auth/sign-in',
    LOGIN_MS: '/api/v1/auth/sign-in-ms',
    LOG_OUT: '/api/v1/auth/sign-out',
    GET_USER_INFO: '/api/v1/auth/info',
    FACE_ID_LOG: '/api/v1/logs',
    MANAGE_USERS: '/api/v1/user/',
    STAFF_MANAGE:'/api/v1/staff/',
    STREAM: '/api/v1/stream',
}
export const ROUTES = {
    LOGIN: '/login',
    RECOVER_PASSWORD: '/recover-password',
    DASHBOARD: '/dashboard',
    EVENTS: '/events',
    AREAS: '/areas',
    CAMERA: '/camera',
    CAMERA_DETAIL: '/camera/:mode/:id?',
    USER_MANAGEMENT: '/user-management',
    USER_DETAIL: '/user-management/:mode/:id?',
    PROFILE: '/profile',
    OVERVIEW: '/overview',
    STAFF_MANAGE: '/staff-manage',
    STAFF_MANAGE_DETAIL:'/staff-manage/:mode/:id?',
    WORKING_SESSION: '/working-session',
    WORKING_SESSION_DETAIL: '/working-session/:mode/:id?'
}
export const MENUS = [
    { route: ROUTES.OVERVIEW, title: 'Overview', icon: 'fas fa-bullseye', roles: [window.NEXTEYE_ROLES.ADMIN] },
    { route: ROUTES.DASHBOARD, title: 'Dashboard', icon: 'fas fa-tachometer-alt' },
    { route: '', title: 'REPORTS', icon: '', isGroup: true },
    { route: ROUTES.EVENTS, title: 'EventsRealtime', icon: 'far fa-clock' },
    { route: ROUTES.WORKING_SESSION, title: 'WorkingSession', icon: 'far fa-calendar' },
    { route: ROUTES.STAFF_MANAGE, title: 'StaffManagement', icon: 'far fa-address-book'},
    { route: '', title: 'ADMINISTRATION', icon: '', isGroup: true, roles: [window.NEXTEYE_ROLES.ADMIN] },
    { route: ROUTES.CAMERA, title: 'Camera', icon: 'fas fa-compact-disc', roles: [window.NEXTEYE_ROLES.ADMIN] },
    { route: ROUTES.AREAS, title: 'AreaManagement', icon: 'fas fa-map', roles: [window.NEXTEYE_ROLES.ADMIN] },
    { route: ROUTES.USER_MANAGEMENT, title: 'UserManagement', icon: 'fas fa-users', roles: [window.NEXTEYE_ROLES.ADMIN] },
]

export const pieChartColors = ['#00D8C7',
    '#2985FD',
    '#6A00EB',
    '#F8AE00',
    '#b2c787',
    '#d4d695',
    '#f5e5a6',
    '#f1cd8a',
    '#eeb372',
    '#ea9961',
    '#e57d55',
    '#de5f51',
    '#d43d51'
]
export const barChartColors = ['#00BCEA',
    '#00BCEA',
    '#00BCEA',
    '#00BCEA',
    '#00BCEA',
    '#00BCEA',
    '#00BCEA',
    '#00BCEA'
]
export const FORM_MODE = {
    ADD_NEW: 'add',
    VIEW: 'view',
    EDIT: 'edit'
}
// 1920x1080
export const MAX_ROIS = 0;
export const colors = [
    '#456FE2',
    '#399F37',
    '#5F450F',
    '#36B4A0',
    '#FF6284',
    '#684E89',
    '#800FC1',
    '#18A2FE',
    '#43D15A',
    '#E525D7',
    '#828D64',
    '#C34031',
    '#298975',
    '#460B82',
    '#6387a5',
    '#02B413',
    '#400D51',
    '#432BEA',
    '#7DFE5E',
    '#93B35C',
    '#83F8B3',
    '#3832C6',
    '#F69D23',
    '#EDAB5A',
    '#EE1EA6',
    '#D6E157',
    '#1F242B',
    '#EB9558',
    '#0042DF',
    '#179AD1',
    '#D8F53A',
    '#92E6C4',
    '#3D6F91',
    '#95D5AB',
    '#23812F',
    '#40D04D',
    '#A56B0A',
    '#9529F2',
    '#CD5119',
    '#6077BE',
    '#030270',
    '#DA191D',
    '#5B680B',
    '#10CCA6',
    '#E404E1',
    '#297BBC',
    '#4A58C6',
    '#D863EA',
    '#ED5BAA',
    '#9AC5E0',
    '#1FE85B',
    '#396FD2',
    '#2E7063',
    '#11E3F5',
    '#E0A015',
    '#8B56F1',
    '#AB77B0',
    '#051908',
    '#034C06',
    '#F463B9',
    '#7CF996',
    '#B30512',
    '#704EAC',
    '#8D5935',
    '#FED769',
    '#AE8E39',
    '#24AABD',
    '#80A171',
    '#18A963',
    '#9FCF75',
    '#832BD3',
    '#DB8284',
    '#739A61',
    '#BCE190',
    '#E7CD09',
    '#3139EF',
    '#783C23',
    '#E3A40D',
    '#322DA1',
    '#555994',
    '#EF3B11',
    '#4A832E',
    '#F39774',
    '#3A8F2F',
    '#2A8106',
    '#D5B004',
    '#29F8F5',
    '#5F3F94',
    '#472C6F',
    '#69BE65',
    '#F8B2C9',
    '#E69D20',
    '#5A577A',
    '#725119',
    '#1802D6',
    '#AFFBCD',
    '#9013C1',
    '#F84B13',
    '#CDC1F0',
    '#E7784C'
];

export const cameraScreenshotSize = { width: 1920, height: 1080 };
export const initialPoints = [
    { x: 150, y: 75 },
    { x: 190, y: 75 },
    { x: 215, y: 100 },
    { x: 215, y: 140 },
    { x: 190, y: 165 },
    { x: 150, y: 165 },
    { x: 125, y: 140 },
    { x: 125, y: 100 },
];
export const NextEyeRegex = {
    IPAddress: /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    MACAddress: /^[0-9A-Fa-f]{1,2}([\.:-])(?:[0-9A-Fa-f]{1,2}\1){4}[0-9A-Fa-f]{1,2}$/,
    RTSPUrl: /(rtsp):\/\/(?:([^\s@\/]+?)[@])?([^\s\/:]+)(?:[:]([0-9]+))?(?:(\/[^\s?#]+)([?][^\s#]+)?)?([#]\S*)?/
}
export const DATE_TIME_FORMAT = 'ddd, MMM DD, yyyy - h:mm:ss A';
export const ITEMS_PER_PAGE = 10;
