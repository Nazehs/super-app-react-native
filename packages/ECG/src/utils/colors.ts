export const colors = {
    primary: '#004F71',
    disable: '#AFAFAF',
    secondary: '#FFCB05',
    line: "#ECECEC",
    greyLabel: "#5F5F5F",
    black: "#000",
    white: "#fff",
    grey: '#F6F6F6',
    red: "#E31937",
    redBG: "#fef3f5",
    lightred: "#f7b9c3",
    placeholdertext: '#8A8A8A',
    textColor: '#1B1B1B',
    dot: "#E0E0E0",
    greyIcon: "#B8B8B8",
    yellow: "#FDD015",
    lightBlue: "#bed0ee",
    blue: "#00376E",
    redtrans: "#eb5e73",
    border: "#EBEBEB",
    purple: "#964D9E",
    profileBG: "#f4f4f4",
    bottomborder: '#EBEBEB',
    textmint: '#3EC5AC',
    lightPurple: "#C36ACD20",
    tertiaryGreen: '#0FAF4B',
    momoBlue: '#525252',

    /**
     * Generates a transparent black color.
     * @param {number} opacity - A number from 0 (fully transparent) to 100 (fully opaque).
     * @returns {string} - RGBA color string.
     */
    transperant: (opacity = 60) => {
        const alpha = Math.round(opacity * 255 / 100).toString(16).padStart(2, '0');
        return `#000000${alpha}`;
    },

    /**
     * Generates a transparent white color.
     * @param {number} opacity - A number from 0 (fully transparent) to 100 (fully opaque).
     * @returns {string} - RGBA color string.
     */
    transperantw: (opacity = 60) => {
        const alpha = Math.round(opacity * 255 / 100).toString(16).padStart(2, '0');
        return `#ffffff${alpha}`;
    },
};
