export const selectCurrentDialog = (state) => {
    return state.dialogs.currentDialog;
}

export const selectDialogs = (state) => {
    return state.dialogs.dialogs;
}