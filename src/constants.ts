export enum ResourceMSG {
    CREATE = 'CREATE_RESOURCE',
    FIND_ALL = 'FIND_RESOURCES',
    FIND_ONE = 'FIND_RESOURCE',
    FIND_BY_PROJECT = 'FIND_RESOURCES_BY_PROJECT',
    UPDATE = 'UPDATE_RESOURCE',
    DELETE = 'DELETE_RESOURCE',
}

export enum ParticipantMSG {
    CREATE = 'CREATE_PARTICIPANT',
    FIND_ALL = 'FIND_PARTICIPANTS',
    FIND_ONE = 'FIND_PARTICIPANT',
    UPDATE = 'UPDATE_PARTICIPANT',
    DELETE = 'DELETE_PARTICIPANT',
}

export enum TaskMSG {
    CREATE = 'CREATE_TASK',
    FIND_ALL = 'FIND_TASKS',
    FIND_ONE = 'FIND_TASK',
    FIND_BY_PROJECT = 'FIND_TASK_BY_PROJECT',
    UPDATE = 'UPDATE_TASK',
    DELETE = 'DELETE_TASK',
}
export enum TeamMSG {
    CREATE = 'CREATE_TEAM',
    FIND_ALL = 'FIND_TEAMS',
    FIND_ONE = 'FIND_TEAM',
    UPDATE = 'UPDATE_TEAM',
    DELETE = 'DELETE_TEAM',
    FIND_TEAMS_BY_PROJECT = 'FIND_TEAMS_BY_PROJECT',
}

export enum ProjectMSG {
    CREATE = 'CREATE_PROJECT',
    FIND_ALL = 'FIND_PROJECTS',
    FIND_ONE = 'FIND_PROJECT',
    UPDATE = 'UPDATE_PROJECT',
    DELETE = 'DELETE_PROJECT',
    FIND_PROJECTS_BY_PARTICIPANT = 'FIND_PROJECTS_BY_PARTICIPANT',
}

export enum CommentMSG {
    CREATE = 'CREATE_COMMENT',
    FIND_ALL = 'FIND_COMMENTS',
    FIND_ONE = 'FIND_COMMENT',
    UPDATE = 'UPDATE_COMMENT',
    DELETE = 'DELETE_COMMENT',
}

export enum MeetingMSG {
    CREATE = 'CREATE_MEETING',
    FIND_ALL = 'FIND_MEETINGS',
    FIND_ONE = 'FIND_MEETING',
    UPDATE = 'UPDATE_MEETING',
    DELETE = 'DELETE_MEETING',
}

export enum TeamParticipantMSG {
    CREATE = 'CREATE_TEAM_PARTICIPANT',
    FIND_ALL = 'FIND_TEAM_PARTICIPANTS',
    FIND_ONE = 'FIND_TEAM_PARTICIPANT',
    UPDATE = 'UPDATE_TEAM_PARTICIPANT',
    DELETE = 'DELETE_TEAM_PARTICIPANT',
    FIND_TEAMS_BY_PARTICIPANT = "FIND_TEAMS_BY_PARTICIPANT",
}

export enum NotificationMSG {
    CREATE = 'CREATE_NOTIFICATION',
    FIND_ALL = 'FIND_NOTIFICATIONS',
    FIND_ONE = 'FIND_NOTIFICATION',
    UPDATE = 'UPDATE_NOTIFICATION',
    DELETE = 'DELETE_NOTIFICATION',
}

export enum StatusChangedMSG {
    CREATE = 'CREATE_STATUS_CHANGED',
    FIND_ALL = 'FIND_STATUSES_CHANGED',
    FIND_ONE = 'FIND_STATUS_CHANGED',
    UPDATE = 'UPDATE_STATUS_CHANGED',
    DELETE = 'DELETE_STATUS_CHANGED',
}